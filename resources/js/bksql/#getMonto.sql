#getMonto
BEGIN
	RETURN IFNULL((
    SELECT
    (SUM(dc.MontoDebe) - SUM(dc.MontoHaber)) AS monto
      FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co
      ON dc.IdComprobante=co.IdComprobante
    LEFT JOIN Gestion as ge
      ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    ), 0);
END
#getMontoApertura
BEGIN
	RETURN IFNULL((
    SELECT
    (SUM(dc.MontoDebe) - SUM(dc.MontoHaber)) AS monto
      FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co
      ON dc.IdComprobante=co.IdComprobante
      AND co.TipoComprobante=3
    LEFT JOIN Gestion as ge
      ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    ), 0);
END;
#getMontoAlternativo
BEGIN
	RETURN IFNULL((
    SELECT
    (SUM(dc.MontoDebeAlt) - SUM(dc.MontoHaberAlt)) AS monto
      FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co
      ON dc.IdComprobante=co.IdComprobante
    LEFT JOIN Gestion as ge
      ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    ), 0);
END$$
#getMontoAperturaAlternativo
BEGIN
	RETURN IFNULL((
    SELECT
    (SUM(dc.MontoDebeAlt) - SUM(dc.MontoHaberAlt)) AS monto
      FROM DetalleComprobante as dc
    INNER JOIN Comprobante as co
      ON dc.IdComprobante=co.IdComprobante
      AND co.TipoComprobante=3
    LEFT JOIN Gestion as ge
      ON (ge.FechaInicio<=co.Fecha AND ge.FechaFin>=co.Fecha)
    WHERE dc.IdCuenta = id_acc
    AND ge.IdGestion = id_gest
    ), 0);
END;
#mainreport
SELECT em.Nombre as NomEmpresa, us.Usuario,
ge.Nombre as NomGestion, ge.FechaInicio as fi, ge.FechaFin as fn,
mm.moneda, mm.monedaSigno
FROM `Gestion` AS ge
	INNER JOIN `Empresa` AS em ON
	 ge.IdEmpresa=em.IdEmpresa
	INNER JOIN `Usuario` AS us ON
	 ge.IdUsuario=us.id
	 INNER JOIN
    (SELECT emm.IdMonedaPrincipal as idMoneda,
      mo.Nombre as moneda, mo.Abreviatura as monedaSigno,
      emm.IdEmpresa FROM EmpresaMoneda as emm
	 	LEFT JOIN Moneda as mo
     ON mo.IdMoneda=emm.IdMonedaPrincipal
	 	WHERE emm.IdEmpresa=$P{companyID}
     ORDER BY IdEmpresaMoneda DESC LIMIT 1
	 ) as mm
	 ON mm.IdEmpresa=em.IdEmpresa
WHERE
	 ge.`IdEmpresa` = $P{companyID}
	 AND ge.`IdUsuario` = $P{userID}
	 AND ge.`IdGestion` = $P{gestionID}
#bipart1
WITH RECURSIVE
  child_data(id, nombre, codigo, idPadre, monto, nivel) AS (
SELECT
  id, nombre, codigo, idPadre, monto, nivel
  FROM (
    WITH RECURSIVE
      account_children_detail
      (id, nombre, codigo, idPadre, tipo, monto, nivel) AS (
        SELECT
          IdCuenta, Nombre, Codigo, IdCuentaPadre, TipoCuenta,
          CAST((COUNT(*) * 0) AS DECIMAL(12,2)), Nivel
        FROM
          (SELECT * FROM Cuenta
            WHERE IdEmpresa=$P{companyID}
            AND IdUsuario=$P{userID}
            AND Nivel=1 LIMIT 1 OFFSET 0) as cu
        UNION ALL
          SELECT
            cuu.IdCuenta, cuu.Nombre, cuu.Codigo,
            cuu.IdCuentaPadre, cuu.TipoCuenta,
            getMontoApertura(cuu.IdCuenta, $P{gestionID}),
            cuu.Nivel
          FROM Cuenta as cuu
        INNER JOIN account_children_detail as acd
          ON cuu.IdCuentaPadre=acd.id
        WHERE
          cuu.IdUsuario=$P{userID} AND
          cuu.IdEmpresa=$P{companyID}
      )
      SELECT * FROM account_children_detail WHERE tipo=2) as cd
      UNION ALL
      SELECT
        cu.IdCuenta, cu.Nombre, cu.Codigo, cu.IdCuentaPadre,
        (chd.monto+getMontoApertura(cu.IdCuenta, $P{gestionID})),
        cu.Nivel FROM Cuenta as cu
      INNER JOIN child_data as chd
        ON cu.IdCuenta=chd.idPadre
)
SELECT
  id, nombre, codigo,
  idPadre, SUM(monto) as monto, nivel
FROM child_data
WHERE monto>0
GROUP BY id ORDER BY INET_TRUCHON(codigo) ASC;
#bipart2
WITH RECURSIVE
  child_data(id, nombre, codigo, idPadre, monto, nivel) AS (
  SELECT
    id, nombre, codigo, idPadre, monto, nivel
    FROM (WITH RECURSIVE account_children_detail(
      id, nombre, codigo, idPadre, tipo, monto, nivel) AS (
        SELECT IdCuenta, Nombre, Codigo,
          IdCuentaPadre, TipoCuenta,
          CAST((COUNT(*) * 0) AS DECIMAL(12,2)), Nivel
        FROM (
          SELECT * FROM Cuenta
            WHERE IdEmpresa=1
            AND IdUsuario=1
            AND Nivel=1 LIMIT 2 OFFSET 1) as cu
        UNION ALL
        SELECT cuu.IdCuenta, cuu.Nombre, cuu.Codigo,
          cuu.IdCuentaPadre, cuu.TipoCuenta,
          getMontoApertura(cuu.IdCuenta, 2), cuu.Nivel
        FROM Cuenta as cuu
        INNER JOIN account_children_detail as acd
          ON cuu.IdCuentaPadre=acd.id
        WHERE
          cuu.IdUsuario=1 AND
          cuu.IdEmpresa=1
    )
  SELECT * FROM account_children_detail WHERE tipo=2) as cd
  UNION ALL
  SELECT cu.IdCuenta, cu.Nombre,
    cu.Codigo, cu.IdCuentaPadre,
    (chd.monto+getMontoApertura(cu.IdCuenta, 2)), cu.Nivel
  FROM Cuenta as cu
  INNER JOIN child_data as chd ON cu.IdCuenta=chd.idPadre
)
SELECT codigo as codigo,
  GROUP_CONCAT(codigo, " - " , nombre SEPARATOR " Y ") as nombre,
  SUM(monto) as monto, (SELECT @p:=1) as nivel
FROM
  (SELECT id, nombre,codigo,
    idPadre, SUM(monto) as monto, nivel
  FROM child_data WHERE nivel=1 GROUP BY id) as cd1
UNION ALL
SELECT codigo, CONCAT(codigo, " - ", nombre) as nombre,
  SUM(monto) as monto, nivel
FROM child_data
WHERE nivel>1 AND monto>0
GROUP BY id ORDER BY INET_TRUCHON(codigo) ASC;
#####
WITH RECURSIVE
  child_data(id, nombre, codigo, idPadre, monto, montoAlternativo, nivel) AS (
  SELECT
    id, nombre, codigo, idPadre, monto, montoAlternativo, nivel
      FROM (WITH RECURSIVE account_children_detail(
        id, nombre, codigo, idPadre, tipo, monto, montoAlternativo, nivel) AS (
          SELECT IdCuenta, Nombre, Codigo,
            IdCuentaPadre, TipoCuenta,
            CAST((0*0) AS DECIMAL(12,2)), CAST((0*0) AS DECIMAL(12,2)), Nivel
          FROM (
            SELECT * FROM Cuenta
              WHERE IdEmpresa=$P{companyID}
              AND IdUsuario=$P{userID}
              AND Nivel=1 LIMIT 2 OFFSET 1) as cu
          UNION ALL
          SELECT cuu.IdCuenta, cuu.Nombre, cuu.Codigo,
            cuu.IdCuentaPadre, cuu.TipoCuenta,
            getMontoApertura(cuu.IdCuenta, $P{gestionID}), getMontoAperturaAlternativo(cuu.IdCuenta, $P{gestionID}), cuu.Nivel
          FROM Cuenta as cuu
          INNER JOIN account_children_detail as acd
            ON cuu.IdCuentaPadre=acd.id
          WHERE
            cuu.IdUsuario=$P{userID} AND
            cuu.IdEmpresa=$P{companyID}
          )
  SELECT * FROM account_children_detail WHERE tipo=2) as cd
  UNION ALL
  SELECT cu.IdCuenta, cu.Nombre,
    cu.Codigo, cu.IdCuentaPadre,
    (chd.monto+getMontoApertura(cu.IdCuenta, $P{gestionID})),
    (chd.montoAlternativo+getMontoAperturaAlternativo(cu.IdCuenta, $P{gestionID})),
    cu.Nivel
  FROM Cuenta as cu
  INNER JOIN child_data as chd ON cu.IdCuenta=chd.idPadre
)
SELECT codigo as codigo,
  GROUP_CONCAT(codigo, " - " , nombre SEPARATOR " Y ") as nombre,
  SUM(monto) as monto,  SUM(montoAlternativo) as montoAlternativo, (SELECT @p:=1) as nivel
FROM
  (SELECT id, nombre,codigo,
    idPadre, SUM(monto) as monto, SUM(montoAlternativo) as montoAlternativo, nivel
  FROM child_data WHERE nivel=1 GROUP BY id) as cd1
UNION ALL
SELECT codigo, CONCAT(codigo, " - ", nombre) as nombre,
  SUM(monto) as monto, SUM(montoAlternativo) as montoAlternativo, nivel
FROM child_data
WHERE nivel>1 AND monto!=0
GROUP BY id ORDER BY INET_TRUCHON(codigo) ASC

###############LIBROMAYOR
SELECT pe.id_period, em.name as NomEmpresa, us.user,
ge.name as NomGestion, ge.start_date as gfi, ge.end_date as gfn,
mo.name as moneda, mo.abbreviation as monedaSigno,
pe.name as NomPeriodo, pe.start_date as pfi, pe.end_date as pfn,
 CASE WHEN emm.id_maincoin = mo.id_coin THEN '1'
 	WHEN emm.id_maincoin!= mo.id_coin THEN '0'  END as esPrincipal FROM companies as em
INNER JOIN users as us ON em.id_user=us.id_user
INNER JOIN management_dates as ge ON ge.id_user=us.id_user AND ge.id_company=em.id_company
INNER JOIN periods as pe ON pe.id_management=ge.id_management
INNER JOIN coincompanies as emm ON emm.id_coincompany=(SELECT id_coincompany FROM coincompanies WHERE id_company=em.id_company AND id_user=us.id_user ORDER BY id_coincompany DESC LIMIT 1)
INNER JOIN coins as mo ON (mo.id_coin=emm.id_maincoin OR mo.id_coin=emm.id_alternativecoin)
WHERE
em.id_company =$P{companyID}
AND em.id_user =$P{userID}
AND ge.id_management=$P{gestionID}
AND pe.id_period LIKE IF($P{periodoID} > 0, $P{periodoID}, "%")
AND mo.id_coin=$P{moneyID}
LIMIT 1
