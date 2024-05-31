#getMonto
BEGIN
  RETURN IFNULL((
    SELECT
    (SUM(dc.balance_debit) - SUM(dc.balance_assets)) AS monto
      FROM receiptdetails as dc
    INNER JOIN receipts as co
      ON dc.id_receipt=co.id_receipt
    LEFT JOIN management_dates as ge
      ON (ge.start_date<=co.date AND ge.end_date>=co.date)
    WHERE dc.id_account = id_acc
    AND ge.id_management = id_gest
    ), 0);
END
#getMontoApertura
BEGIN
    RETURN IFNULL((
    SELECT
    (SUM(dc.balance_debit) - SUM(dc.balance_assets)) AS monto
      FROM receiptdetails as dc
    INNER JOIN receipts as co
      ON dc.id_receipt=co.id_receipt
      AND co.receipt_type=4
    LEFT JOIN management_dates as ge
      ON (ge.start_date<=co.date AND ge.end_date>=co.date)
    WHERE dc.id_account = id_acc
    AND ge.id_management = id_gest
    ), 0);
END
#getMontoAlternativo
BEGIN
    RETURN IFNULL((
    SELECT
    (SUM(dc.balance_debitAlt) - SUM(dc.balance_assetsAlt)) AS monto
      FROM receiptdetails as dc
    INNER JOIN receipts as co
      ON dc.id_receipt=co.id_receipt
    LEFT JOIN management_dates as ge
      ON (ge.start_date<=co.date AND ge.end_date>=co.date)
    WHERE dc.id_account = id_acc
    AND ge.id_management = id_gest
    ), 0);
END
#getMontoAperturaAlternativo
BEGIN
    RETURN IFNULL((
    SELECT
    (SUM(dc.balance_debitAlt) - SUM(dc.balance_assetsAlt)) AS monto
      FROM receiptdetails as dc
    INNER JOIN receipts as co
      ON dc.id_receipt=co.id_receipt
      AND co.receipt_type=4
    LEFT JOIN management_dates as ge
      ON (ge.start_date<=co.date AND ge.end_date>=co.date)
    WHERE dc.id_account = id_acc
    AND ge.id_management = id_gest
    ), 0);
END
#mainreport
SELECT em.name as NomEmpresa, us.user,
ge.name as NomGestion, ge.start_date as fi, ge.end_date as fn,
mm.moneda, mm.monedaSigno
FROM `management_dates` AS ge
	INNER JOIN `companies` AS em ON
	 ge.id_company=em.id_company
	INNER JOIN `users` AS us ON
	 ge.id_user=us.id_user
	 INNER JOIN
    (SELECT emm.id_maincoin as idMoneda,
      mo.name as moneda, mo.abbreviation as monedaSigno,
      emm.id_company FROM coincompanies as emm
	 	LEFT JOIN coins as mo
     ON mo.id_coin=emm.id_maincoin
	 	WHERE emm.id_company=$P{companyID}
     ORDER BY id_coincompany DESC LIMIT 1
	 ) as mm
	 ON mm.id_company=em.id_company
WHERE
	 ge.`id_company` = $P{companyID}
	 AND ge.`id_user` = $P{userID}
	 AND ge.`id_management` = $P{gestionID}
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
          id_account, name, code, id_parent_account, type,
          CAST((COUNT(*) * 0) AS DECIMAL(12,2)), level
        FROM
          (SELECT * FROM accounts
            WHERE id_company=$P{companyID}
            AND id_user=$P{userID}
            AND level=1 LIMIT 1 OFFSET 0) as cu
        UNION ALL
          SELECT
            cuu.id_account, cuu.name, cuu.code,
            cuu.id_parent_account, cuu.type,
            getMontoApertura(cuu.id_account, $P{gestionID}),
            cuu.level
          FROM accounts as cuu
        INNER JOIN account_children_detail as acd
          ON cuu.id_parent_account=acd.id
        WHERE
          cuu.id_user=$P{userID} AND
          cuu.id_company=$P{companyID}
      )
      SELECT * FROM account_children_detail WHERE tipo=2) as cd
      UNION ALL
      SELECT
        cu.id_account, cu.name, cu.code, cu.id_parent_account,
        (chd.monto+getMontoApertura(cu.id_account, $P{gestionID})),
        cu.level FROM accounts as cu
      INNER JOIN child_data as chd
        ON cu.id_account=chd.idPadre
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
        SELECT id_account, name, code,
          id_parent_account, type,
          CAST((COUNT(*) * 0) AS DECIMAL(12,2)), level
        FROM (
          SELECT * FROM accounts
            WHERE id_company=$P{companyID}
            AND id_user=$P{userID}
            AND level=1 LIMIT 2 OFFSET 1) as cu
        UNION ALL
        SELECT cuu.id_account, cuu.name, cuu.code,
          cuu.id_parent_account, cuu.type,
          getMontoApertura(cuu.id_account, $P{gestionID}), cuu.level
        FROM accounts as cuu
        INNER JOIN account_children_detail as acd
          ON cuu.id_parent_account=acd.id
        WHERE
          cuu.id_user=$P{userID} AND
          cuu.id_company=$P{companyID}
    )
  SELECT * FROM account_children_detail WHERE tipo=2) as cd
  UNION ALL
  SELECT cu.id_account, cu.name,
    cu.code, cu.id_parent_account,
    (chd.monto+getMontoApertura(cu.id_account, $P{gestionID})), cu.level
  FROM accounts as cu
  INNER JOIN child_data as chd ON cu.id_account=chd.idPadre
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

WITH RECURSIVE
  child_data(id, nombre, codigo, idPadre, monto, montoAlternativo, nivel) AS (
  SELECT
    id, nombre, codigo, idPadre, monto, montoAlternativo, nivel
      FROM (WITH RECURSIVE account_children_detail(
        id, nombre, codigo, idPadre, tipo, monto, montoAlternativo, nivel) AS (
          SELECT id_account, name, code,
            id_parent_account, type,
            CAST((0*0) AS DECIMAL(12,2)), CAST((0*0) AS DECIMAL(12,2)), level
          FROM (
            SELECT * FROM accounts
              WHERE id_company=$P{companyID}
              AND id_user=$P{userID}
              AND level=1 LIMIT 2 OFFSET 1) as cu
          UNION ALL
          SELECT cuu.id_account, cuu.name, cuu.code,
            cuu.id_parent_account, cuu.type,
            getMontoApertura(cuu.id_account, $P{gestionID}), getMontoAperturaAlternativo(cuu.id_account, $P{gestionID}), cuu.level
          FROM accounts as cuu
          INNER JOIN account_children_detail as acd
            ON cuu.id_parent_account=acd.id
          WHERE
            cuu.id_user=$P{userID} AND
            cuu.id_company=$P{companyID}
          )
  SELECT * FROM account_children_detail WHERE tipo=2) as cd
  UNION ALL
  SELECT cu.id_account, cu.name,
    cu.code, cu.id_parent_account,
    (chd.monto+getMontoApertura(cu.id_account, $P{gestionID})),
    (chd.montoAlternativo+getMontoAperturaAlternativo(cu.id_account, $P{gestionID})),
    cu.level
  FROM accounts as cu
  INNER JOIN child_data as chd ON cu.id_account=chd.idPadre
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


SELECT DATE_FORMAT(co.date, '%d/%m/%Y') as Fecha, co.serial_number as 'Nro Comp',
CASE co.receipt_type
WHEN 0 THEN 'Ingreso' WHEN 1
THEN 'Egreso' WHEN 2
THEN 'Traspaso' WHEN 3
THEN 'Apertura' WHEN 4
THEN 'Ajuste' END as 'Tipo',
co.comment as Glosa, dc.balance_debit as Debe, dc.balance_assets as Haber,
dc.balance_debitAlt as DebeAlt, dc.balance_assetsAlt as HaberAlt, dc.id_account
FROM receipts as co
INNER JOIN receiptdetails as dc ON dc.id_receipt=co.id_receipt
INNER JOIN management_dates as ge ON (ge.start_date<=co.date OR ge.end_date>=co.date)
	AND ge.id_company=co.id_company AND ge.id_user=co.id_user
INNER JOIN periods as pe ON ge.id_management=pe.id_management
WHERE pe.id_period LIKE IF ($P{periodoID} > 0, $P{periodoID}, "%")
AND ge.id_management=$P{gestionID}
AND co.id_company=$P{companyID}
AND co.id_user=$P{userID}
AND dc.id_account=$P{accountID}
ORDER BY co.Serie ASC
