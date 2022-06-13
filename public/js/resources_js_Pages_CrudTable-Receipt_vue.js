"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_CrudTable-Receipt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CrudTable-Receipt.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CrudTable-Receipt.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimpleTemplates_DropDownUser_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleTemplates/DropDownUser.vue */ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue");
/* harmony import */ var _SimpleTemplates_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleTemplates/Navbar.vue */ "./resources/js/Pages/SimpleTemplates/Navbar.vue");
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var _DetailReceipts_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailReceipts.vue */ "./resources/js/Pages/DetailReceipts.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DetailReceipts: _DetailReceipts_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    DropDownUser: _SimpleTemplates_DropDownUser_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navbar: _SimpleTemplates_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_3__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_4__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  directives: {
    Tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      next_table: false,
      id_receipt: null,
      exchange: "",
      coins: [],
      selectedCoin: 0,
      selectedReceipt: {},
      serial: "",
      status: "Abierto",
      date: "",
      comment: "",
      receipt_type: 0,
      receipts: [],
      details: [],
      company: [],
      loaded_company: false,
      userData: [],
      filters: {
        global: {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_6__.FilterMatchMode.CONTAINS
        }
      }
    };
  },
  watch: {
    //Watch changes in next table
    next_table: function next_table(newValue) {
      if (newValue == false) {
        this.setData();
      }
    }
  },
  mounted: function mounted() {
    this.setData();
    this.setUser();
  },
  methods: {
    getReceiptType: function getReceiptType(num) {
      switch (num) {
        case 1:
          return "Ingreso";

        case 2:
          return "Egreso";

        case 3:
          return "Traspaso";

        case 4:
          return "Apertura";

        case 5:
          return "Ajuste";

        default:
          return "";
      }
    },
    returnStatus: function returnStatus(id) {
      switch (id) {
        case 0:
          return "Cerrado";

        case 1:
          return "Abierto";

        case 2:
          return "Anulado";

        default:
          return "";
      }
    },
    transformData: function transformData() {
      var _this = this;

      this.receipts.forEach(function (date) {
        date.date = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(date.date).format("DD/MM/YYYY");
        date.receipt_type = _this.getReceiptType(parseInt(date.receipt_type));
      });
    },
    toggleMenu: function toggleMenu() {
      document.getElementById("menu").classList.toggle("hidden");
    },
    setUser: function setUser() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get(route("user.data"))["catch"](function (error) {
        console.log(error);
      }).then(function (response) {
        _this2.userData = response.data.userData;
      });
    },
    setData: function setData() {
      var _this3 = this;

      var company = window.location.pathname.split("/").pop();
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(route("receipts.api.read", company)).then(function (response) {
        _this3.company = response.data.company;
        _this3.receipts = response.data.company.receipts.map(function (val) {
          return _objectSpread(_objectSpread({}, val), {}, {
            status_c: _this3.returnStatus(val.status)
          });
        });

        _this3.transformData();
      });
      this.loaded_company = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimpleTemplates_Navbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleTemplates/Navbar.vue */ "./resources/js/Pages/SimpleTemplates/Navbar.vue");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var _SimpleTemplates_Table_DetailReceipt_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleTemplates/Table-DetailReceipt.vue */ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue");
/* harmony import */ var primevue_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/calendar */ "./node_modules/primevue/calendar/calendar.esm.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notiflix/build/notiflix-confirm-aio */ "./node_modules/notiflix/build/notiflix-confirm-aio.js");
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notiflix/build/notiflix-loading-aio */ "./node_modules/notiflix/build/notiflix-loading-aio.js");
/* harmony import */ var notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    Navbar: _SimpleTemplates_Navbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TableDetailReceipt: _SimpleTemplates_Table_DetailReceipt_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Calendar: primevue_calendar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  emits: ["hideThis"],
  props: {
    receipt: {
      type: Object,
      required: false
    },
    receiptCount: {
      type: Number,
      required: true
    },
    id_company: {
      type: Number,
      required: true
    },
    id_user: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      createOrEdit: "create",
      company: {},
      userData: {},
      exchange: "",
      coins: [],
      selectedCoin: 0,
      serial: "",
      status: "Abierto",
      date: "",
      comment: "",
      receipt_type: 1,
      details: [],
      actionButtons: false,
      editMode: "cell"
    };
  },
  mounted: function mounted() {
    this.setData();
  },
  watch: {
    receipt: {
      handler: function handler() {
        this.setData();
      },
      deep: true
    }
  },
  methods: {
    goReport: function goReport() {
      window.open("http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteComprobante&standAlone=true&idd_user=".concat(this.id_user, "&id_company=").concat(this.id_company, "&serial_number=").concat(this.serial, "&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no"));
    },
    disableComponents: function disableComponents() {
      var inputs = document.getElementsByTagName("input");

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
        inputs[i].style.color = "white";
      }

      var calendars = document.getElementsByClassName("p-button p-component p-button-icon-only p-datepicker-trigger");

      for (var _i = 0; _i < calendars.length; _i++) {
        calendars[_i].disabled = true;
      }

      var selects = document.getElementsByTagName("select");

      for (var _i2 = 0; _i2 < selects.length; _i2++) {
        selects[_i2].disabled = true;
        selects[_i2].style.color = "black";
      }

      var tableItems = document.getElementsByClassName("p-datatable-header");

      var _iterator = _createForOfIteratorHelper(tableItems),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var header = _step.value;
          header.style.display = "none";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.status == "Anulado") document.getElementById("trash_receipt").disabled = true;else if (this.status == "Abierto") document.getElementById("trash_receipt").disabled = false;
      document.getElementById("showCreate").style.display = "none";
      document.getElementById("showReport").style.display = "initial";
      this.editMode = null;
      this.actionButtons = true;
    },
    validateData: function validateData() {
      notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.init({
        clickToClose: true
      });

      if (this.details.length < 2) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.failure("Debes agregar al menos 2 detalles");
        return true;
      }

      var mustBeZero = this.details.reduce(function (partialSum, b) {
        return partialSum + Number(b.balance_assets);
      }, 0) - this.details.reduce(function (partialSum, b) {
        return partialSum + Number(b.balance_debit);
      }, 0);

      if (mustBeZero != 0) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.failure("La suma de todos los Debe debe ser igual a la suma de todos los Haber");
        return true;
      }

      if (this.comment == "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.failure("Introduce una glosa");
        return true;
      }

      if (this.selectedCoin == 0) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.failure("Selecciona una moneda");
        return true;
      }

      return false;
    },
    returnStatus: function returnStatus(id) {
      switch (id) {
        case 0:
          return "Cerrado";

        case 1:
          return "Abierto";

        case 2:
          return "Anulado";

        default:
          return "";
      }
    },
    setData: function setData() {
      console.log("Datos compania", this.id_company);

      if (Object.keys(this.receipt).length > 0) {
        this.status = this.returnStatus(this.receipt.status);
        this.receipt_type = this.transformReceipt_type(this.receipt.receipt_type);
        this.serial = this.receipt.serial_number;
        this.date = this.receipt.date;
        this.selectedCoin = this.receipt.name;
        this.comment = this.receipt.comment;
        this.exchange = this.receipt.TC;
        this.disableComponents();
      } else {
        document.getElementById("trash_receipt").disabled = true;
        document.getElementById("showReport").style.display = "none";
        this.serial = this.receiptCount + 1;
        this.status = this.returnStatus(1);
        this.getSelectedCoinsByCompany(this.id_company);
        var today = new Date();
        this.date = today;
      }
    },
    transformReceipt_type: function transformReceipt_type(receipt_type) {
      switch (receipt_type) {
        case "Ingreso":
          return 1;

        case "Egreso":
          return 2;

        case "Traspaso":
          return 3;

        case "Apertura":
          return 4;

        case "Ajuste":
          return 5;
      }
    },
    setDetails: function setDetails(details) {
      this.details = details;
    },
    restrictDecimal: function restrictDecimal() {
      this.exchange = this.exchange.match(/^\d+\.?\d{0,2}/)[0];
    },
    backToTable: function backToTable() {
      this.$emit("hideThis");
    },
    getSelectedCoinsByCompany: function getSelectedCoinsByCompany(id_company) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("coincompany.api.getByCompanyId", {
        id_company: id_company
      })).then(function (response) {
        var active = response.data.coins.find(function (trash) {
          return trash.active == 1;
        });
        console.log("Active", active); // console.log("response: ", active.id_maincoin);

        _this.selectedCoin = active.id_maincoin;
        _this.coins = [{
          value: active.id_maincoin,
          text: "".concat(active.m_name, " (").concat(active.m_initials, ")")
        }, {
          value: active.id_alternativecoin,
          text: "".concat(active.a_name, " (").concat(active.a_initials, ")")
        }];
        _this.exchange = active.exchange;
      });
    },
    addReceipt: function addReceipt() {
      var _this2 = this;

      if (this.validateData()) return;
      var today = this.date;
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = yyyy + "/" + mm + "/" + dd;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("receipt.api.create"), {
        serial_number: this.serial,
        comment: this.comment,
        date: today,
        TC: this.exchange,
        receipt_type: this.receipt_type,
        id_company: this.id_company,
        id_coin: this.selectedCoin,
        details: this.details
      }).then(function (response) {
        if (response.data.success) {
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.success("Comprobante creado con éxito");
          localStorage.removeItem("detailsReceipt");

          _this2.disableComponents(); // this.backToTable();

        }
      })["catch"](function (error) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.failure(error.response.data.message);
      });
    },
    deleteReceipt: function deleteReceipt() {
      var _this3 = this;

      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_6__.Confirm.init({
        titleColor: "#FF0000",
        messageColor: "#FF0000",
        okButtonBackground: "#FF0000"
      });
      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_6__.Confirm.show("¿Deseas anular el comprobante?", "Estás a punto de anular el comprobante Número:" + this.serial, "Eliminar", "Cancelar", function () {
        notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_7__.Loading.standard({
          clickToClose: false,
          svgSize: "200"
        });
        var params = {
          serial: _this3.serial,
          id_company: _this3.id_company,
          id_user: _this3.id_user
        };
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.init({
          clickToClose: true
        });
        axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("receipt.api.delete"), params).then(function (res) {
          var _res$data;

          if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.success) {
            _this3.$emit("update-data");

            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.success("Comprobante anulado");
            _this3.status = "Anulado";

            _this3.disableComponents();
          } else {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.failure(res.data.message);
          }

          notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_7__.Loading.remove(250);
        })["catch"](function (err) {
          console.error(err);
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_5__.Notify.failure("Error al eliminar el comprobante");
        });
      });
    },
    editReceipt: function editReceipt() {
      /*    if (this.validateData()) return;
                      axios
                          .post(route("receipt.api.edit"), {
                              id_receipt: this.receipt.id_receipt,
                              //serial_number: this.serial, serial is not editable
                              comment: this.comment,
                              date: this.date.toLocaleString(),
                              TC: this.exchange,
                              receipt_type: this.receipt_type,
                              //id_company: this.company.id_company, id company is not editable
                              id_coin: this.selectedCoin,
                              details: this.details,
                          })
                          .then((response) => {
                              if (response.data.success) {
                                  Notify.success("Comprobante editado con éxito");
                                  localStorage.removeItem("detailsReceipt");
                                  this.backToTable();
                              }
                          })
                          .catch((error) => {});
                  */
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: String,
      "default": "Opciones"
    },
    list: {
      type: Array,

      /* Links means the route defined in web.php as name (method) from route */
      "default": [["Valor", "Enlace"], ["Valor", "Enlace"], ["Valor", "Enlace"]]
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    toggle: function toggle() {
      this.visible = !this.visible;
    },
    takeMeTo: function takeMeTo(myRoute) {
      if (myRoute == "logout") {
        history.pushState(null, document.title, location.href);
        window.addEventListener("popstate", function (event) {
          console.log(event);
          history.pushState(null, document.title, location.href);
        });
        window.location.href = route("logout");
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get(route(myRoute));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropDownUser_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropDownUser.vue */ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _TransparentDropDownUser_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransparentDropDownUser.vue */ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DropDownUser: _DropDownUser_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TransparentDropDown: _TransparentDropDownUser_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    userName: {
      type: String,
      "default": ""
    },
    companyName: {
      type: String,
      "default": ""
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      document.getElementById("menu").classList.toggle("hidden");
    },
    changeCompany: function changeCompany() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(route("companies"));
    },
    //Redirect
    dashboard: function dashboard() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(route("dashboard", decodeURI(window.location.pathname.split("/").pop())));
    },
    joinManagement: function joinManagement() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(route("date.management", decodeURI(window.location.pathname.split("/").pop())));
    },
    joinAccount: function joinAccount() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(route("accounts", decodeURI(window.location.pathname.split("/").pop())));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/button */ "./node_modules/primevue/button/button.esm.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    receiptData: {
      type: Object,
      "default": null
    },
    glosa: {
      type: String,
      "default": null
    },
    actionButtons: {
      type: Boolean,
      "default": false
    },
    editMode: {
      type: String,
      "default": null
    }
  },
  emits: ["detailsReceipt"],
  directives: {
    tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  components: {
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_6__["default"],
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_0__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_1__["default"],
    vSelect: (vue_select__WEBPACK_IMPORTED_MODULE_5___default()),
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      companyLevel: null,
      copyGlosa: true,
      accountsOptions: [],
      newDetail: {
        id_account: null,
        glosa: null,
        balance_debit: 0,
        balance_assets: 0
      },
      idSelectedAccount: null,
      receipts: [],
      coinCompanyData: [],
      selectedReceipt: [],
      filters: {
        id_coincompany: "",
        id_account: "",
        comment: "",
        balance_debit: "",
        balance_assets: ""
      },
      accounts: [],
      ignoreThisAccounts: []
    };
  },
  methods: {
    restrictDecimal: function restrictDecimal(str) {
      var resumed = str.toString().match(/^\d+\.?\d{0,2}/);
      return resumed ? resumed[0] : str;
    },
    isNumber: function isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    deleteThisItem: function deleteThisItem(index) {
      var _this = this;

      //Reset the value in v select
      var restore = this.ignoreThisAccounts.find(function (item) {
        return item == _this.receipts[index].id_account;
      });

      if (restore) {
        this.ignoreThisAccounts.splice(this.ignoreThisAccounts.indexOf(restore), 1);
      }

      this.setAccounts();
      this.receipts.splice(index, 1);
      localStorage.setItem("detailsReceipt", JSON.stringify(this.receipts));
    },
    calculateAssets: function calculateAssets() {
      return this.receipts.reduce(function (partialSum, b) {
        return partialSum + Number(b.balance_assets);
      }, 0);
    },
    calculateDebit: function calculateDebit() {
      return this.receipts.reduce(function (partialSum, b) {
        return partialSum + Number(b.balance_debit);
      }, 0);
    },
    onCellEditComplete: function onCellEditComplete(e) {
      /* Search exact object */
      if (e.newData.comment.trim() == "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__.Notify.failure("Ingresa una glosa");
        return; //Return chinasango
      }

      if (isNaN(e.newData.balance_debit) || isNaN(e.newData.balance_assets) || e.newData.balance_assets === "" || e.newData.balance_debit === "" || e.newData.balance_debit == 0 && e.newData.balance_assets == 0) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__.Notify.failure("El número debe ser mayor a 0");
        return;
      }

      var index = this.receipts.findIndex(function (obj) {
        return obj.id_account == e.data.id_account && obj.comment == e.data.comment && obj.balance_debit == e.data.balance_debit && obj.balance_assets == e.data.balance_assets;
      });
      /* Validate that balance_debit or asset is a number */

      this.receipts[index] = e.newData;
      this.newDetail.comment = this.receipts[index].comment;

      if (this.receipts[index].balance_debit > 0 && e.newValue == this.receipts[index].balance_debit) {
        this.receipts[index].balance_assets = 0;
        this.receipts[index].balance_debit = parseFloat(this.receipts[index].balance_debit);
      }

      if (this.receipts[index].balance_assets > 0 && e.newValue == this.receipts[index].balance_assets) {
        this.receipts[index].balance_debit = 0;
        this.receipts[index].balance_assets = parseFloat(this.receipts[index].balance_assets);
      }
    },
    getReceipts: function getReceipts() {
      var _this2 = this;

      //Only for update
      if (this.receiptData.id_receipt) {
        axios__WEBPACK_IMPORTED_MODULE_3___default().get(route("receiptdetails.api.read", this.receiptData.id_receipt)).then(function (response) {
          console.log("Recibos", response.data);
          _this2.receipts = response.data;
        });
      } else {
        this.setIfExist();
      }
    },
    setIfExist: function setIfExist() {
      this.receipts = localStorage.getItem("detailsReceipt") ? JSON.parse(localStorage.getItem("detailsReceipt")) : [];
      this.$emit("detailsReceipt", this.receipts);
      this.ignoreThisAccounts = localStorage.getItem("ignoredAccounts") ? JSON.parse(localStorage.getItem("ignoredAccounts")) : [];
    },
    addReceiptDetail: function addReceiptDetail() {
      var _this3 = this;

      /* Validate id from account */
      if (this.idSelectedAccount == null || this.idSelectedAccount == "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__.Notify.failure("Selecciona una cuenta");
        return;
      } //Validate debit and asset


      if (this.newDetail.balance_debit == 0 && this.newDetail.balance_assets == 0) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__.Notify.failure("Debe o haber deben ser mayor a cero");
        return;
      }

      if (this.newDetail.balance_debit > 0 && this.newDetail.balance_assets > 0) {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__.Notify.failure("Uno de los 2 debe ser mayor a cero y el otro 0.");
        return;
      }

      if (this.newDetail.balance_debit == "") {
        this.newDetail.balance_debit = 0;
      }

      if (this.newDetail.balance_assets == "") {
        this.newDetail.balance_assets = 0;
      }
      /* Validate glosa */


      if (this.newDetail.comment == null || this.newDetail.comment.trim() === "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_7__.Notify.failure("Ingresa una glosa");
        return;
      } //Setting id account


      this.newDetail.id_account = this.idSelectedAccount.value;
      this.newDetail.name_account = this.idSelectedAccount.label; //Push it to details

      this.receipts.push(this.newDetail); //Setting all to white now

      this.newDetail = {
        id_account: null,
        comment: this.newDetail.comment,
        balance_debit: 0,
        balance_assets: 0
      }; //Add to the ignore list then remove

      this.ignoreThisAccounts.push(this.idSelectedAccount.value);
      this.accountsOptions = this.accountsOptions.filter(function (obj) {
        return obj.value != _this3.idSelectedAccount.value;
      }); // Supongo que esto arregla que se quite la cuenta seleccionada una vez introducida en la tabla

      this.idSelectedAccount = ""; //Save in local storage
      // Not for now... 👍

      /*
      this.idSelectedAccount = null;
      this.$emit("detailsReceipt", this.receipts);
      localStorage.setItem(
          "ignoredAccounts",
          JSON.stringify(this.ignoreThisAccounts)
      );
      localStorage.setItem(
          "detailsReceipt",
          JSON.stringify(this.receipts)
      );
      */
    },
    setAccounts: function setAccounts() {
      var _this4 = this;

      this.accountsOptions = this.accounts.filter(function (account) {
        if (_this4.ignoreThisAccounts.includes(account.id_account)) {
          return false;
        }

        return account.level == _this4.companyLevel;
      });
      this.accountsOptions = this.accountsOptions.map(function (account) {
        return {
          value: account.id_account,
          label: "".concat(account.code, " - ").concat(account.name)
        };
      });
    },
    getAccounts: function getAccounts() {
      var _this5 = this;

      var company = window.location.pathname.split("/").pop();
      console.log(company);
      axios__WEBPACK_IMPORTED_MODULE_3___default().get(route("accounts.api.read", company)).then(function (response) {
        _this5.accounts = response.data.company.accounts;
        _this5.companyLevel = response.data.company.level;

        _this5.setAccounts();
      });
    }
  },
  watch: {
    receiptData: function receiptData(newValue) {
      console.log("id_receipt", newValue.id_receipt);
      newValue ? this.getReceipts() : null;
    },
    glosa: function glosa(newValue) {
      this.copyGlosa ? this.newDetail.comment = newValue : null;
    }
  },
  mounted: function mounted() {
    this.getAccounts();
    this.getReceipts();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: String,
      "default": "Opciones"
    },
    list: {
      type: Array,

      /* Links means the route defined in web.php as name (method) from route */
      "default": [["Valor", "Enlace"], ["Valor", "Enlace"], ["Valor", "Enlace"]]
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  methods: {
    mouseover: function mouseover() {
      this.visible = true;
    },
    mouseleave: function mouseleave() {
      this.visible = false;
    },
    takeMeTo: function takeMeTo(myRoute, name) {
      if (myRoute == "logout") {
        history.pushState(null, document.title, location.href);
        window.addEventListener("popstate", function (event) {
          console.log(event);
          history.pushState(null, document.title, location.href);
        });
        window.location.href = route("logout");
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get(route(myRoute, name));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CrudTable-Receipt.vue?vue&type=template&id=81e4debc":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CrudTable-Receipt.vue?vue&type=template&id=81e4debc ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "px-2 mt-2 mx-10 mb-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mt-5 text-2xl text-white"
}, "Administración de Comprobantes", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "grid grid-cols-1 sm:grid-cols-2 mb-2"
};
var _hoisted_4 = {
  "class": "col-span-1 self-end justify-center order-last sm:order-first"
};
var _hoisted_5 = {
  "class": "self-center items-center content-center"
};
var _hoisted_6 = {
  "class": "p-input-icon-left"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "col-span-1 self-end mb-2 sm:mb-0"
};
var _hoisted_9 = {
  "class": "flex justify-center sm:justify-end space-x-2"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "white",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
})], -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = ["disabled"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
})], -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_13];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No hay comprobantes, ¡añade uno! ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navbar");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_DetailReceipts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DetailReceipts");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar, {
    userName: $data.userData.name,
    companyName: $data.company.name
  }, null, 8
  /* PROPS */
  , ["userName", "companyName"]), $data.next_table == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    type: "text",
    modelValue: $data.filters['global'].value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.filters['global'].value = $event;
    }),
    placeholder: "Buscar"
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.next_table = !$data.next_table, $data.selectedReceipt = {};
    })
  }, _hoisted_11)), [[_directive_tooltip, {
    value: 'Crear comprobante',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": "disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5",
    disabled: Object.keys($data.selectedReceipt).length == 0,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.next_table = !$data.next_table;
    })
  }, _hoisted_14, 8
  /* PROPS */
  , _hoisted_12)), [[_directive_tooltip, {
    value: 'Editar comprobante',
    "class": 'text-center'
  }, void 0, {
    left: true
  }]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    resizableColumns: true,
    columnResizeMode: "fit",
    "class": "p-datatable-lg",
    value: $data.receipts,
    dataKey: "id_receipt",
    paginator: true,
    rows: 10,
    responsiveLayout: "scroll",
    selection: $data.selectedReceipt,
    "onUpdate:selection": _cache[3] || (_cache[3] = function ($event) {
      return $data.selectedReceipt = $event;
    }),
    selectionMode: "single",
    filters: $data.filters,
    "onUpdate:filters": _cache[4] || (_cache[4] = function ($event) {
      return $data.filters = $event;
    })
  }, {
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "serial_number",
        header: "Serie",
        sortable: true,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "date",
        header: "Fecha",
        sortable: true,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "receipt_type",
        header: "Tipo Comprobante",
        sortable: true,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "status_c",
        header: "Estado",
        sortable: true,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Moneda",
        sortable: true,
        filterMatchMode: "contains"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "selection", "filters"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.next_table ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DetailReceipts, {
    key: 1,
    receipt: $data.selectedReceipt,
    onHideThis: _cache[5] || (_cache[5] = function ($event) {
      return $data.next_table = !$data.next_table;
    }),
    receiptCount: $data.company.receipts.length,
    id_company: $data.company.id_company,
    id_user: $data.userData.id_user
  }, null, 8
  /* PROPS */
  , ["receipt", "receiptCount", "id_company", "id_user"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=template&id=dcec1ed6":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=template&id=dcec1ed6 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-2 mt-5"
};
var _hoisted_2 = {
  "class": "w-11/12 ml-auto mr-auto mt-2 transform"
};
var _hoisted_3 = {
  "class": "flex"
};
var _hoisted_4 = {
  "class": "text-2xl text-white"
};
var _hoisted_5 = {
  "class": "flex ml-auto items-center"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "white",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"
})], -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
})], -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
})], -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "white",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
})], -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = {
  "class": "w-11/12 ml-auto mr-auto px-2"
};
var _hoisted_15 = {
  "class": "grid grid-cols-1 sm:grid-cols-5 text-white"
};
var _hoisted_16 = {
  "class": "col-span-1 mt-3"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-base font-semibold"
}, "Serie", -1
/* HOISTED */
);

var _hoisted_18 = ["value"];
var _hoisted_19 = {
  "class": "col-span-1 mt-3"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-base font-semibold"
}, "Fecha", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "col-span-1 mt-3"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-base font-semibold"
}, "Estado", -1
/* HOISTED */
);

var _hoisted_23 = ["value"];
var _hoisted_24 = {
  "class": "col-span-1 mt-3"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-base font-semibold"
}, "Tipo de Comprobante", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"1\">Ingreso</option><option value=\"2\">Egreso</option><option value=\"3\">Traspaso</option><option value=\"4\">Apertura</option><option value=\"5\">Ajuste</option>", 5);

var _hoisted_31 = [_hoisted_26];
var _hoisted_32 = {
  "class": "col-span-1 mt-3"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  id: "h4Basura",
  "class": "text-base font-semibold"
}, " Tipo de Cambio ", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "col-span-1 mt-3"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-base font-semibold"
}, "Moneda", -1
/* HOISTED */
);

var _hoisted_36 = ["value"];
var _hoisted_37 = ["value"];
var _hoisted_38 = {
  "class": "col-span-2 mt-3"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-base font-semibold"
}, "Glosa", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _component_TableDetailReceipt = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TableDetailReceipt");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Here a sidebar if needed "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Object.keys($props.receipt).length > 0 ? "Editando comprobante N# ".concat($props.receipt.serial_number) : "Creando comprobante"), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": "bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg text-sm px-3 py-3 text-center mr-2",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.backToTable && $options.backToTable.apply($options, arguments);
    })
  }, _hoisted_7)), [[_directive_tooltip, {
    value: 'Volver a la tabla',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(Object.keys($props.receipt).length > 0 ? ' text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2' : 'text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2'),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return Object.keys($props.receipt).length > 0 ? $options.editReceipt() : $options.addReceipt();
    }),
    id: "showCreate"
  }, _hoisted_9, 2
  /* CLASS */
  )), [[_directive_tooltip, {
    value: Object.keys($props.receipt).length > 0 ? 'Crear nuevo comprobante' : 'Crear comprobante',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.goReport && $options.goReport.apply($options, arguments);
    }),
    "class": "disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white font-medium rounded-lg text-sm px-2 py-2 text-center mr-2",
    id: "showReport"
  }, _hoisted_11)), [[_directive_tooltip, {
    value: 'Generar reporte',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    id: "trash_receipt",
    "class": "text-white disabled:bg-red-800 bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-2 py-2 text-center",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.deleteReceipt();
    })
  }, _hoisted_13)), [[_directive_tooltip, {
    value: 'Anular Comprobante',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    disabled: "",
    "class": "disabled text-base font-medium border rounded w-6/12 h-9 py-3 px-3 text-white",
    value: $data.serial
  }, null, 8
  /* PROPS */
  , _hoisted_18)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
    "class": "text-base font-medium border rounded w-6/12 h-9 text-black",
    dateFormat: "dd/mm/yy",
    showIcon: true,
    modelValue: $data.date,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.date = $event;
    })
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    disabled: "",
    "class": "text-base font-medium border rounded w-6/12 h-9 py-3 px-3 text-white",
    value: $data.status
  }, null, 8
  /* PROPS */
  , _hoisted_23)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "text-base font-medium border rounded w-8/12 h-9 px-3 text-black",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.receipt_type = $event;
    })
  }, _hoisted_31, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.receipt_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "inputBasura",
    style: {
      "text-align": "right"
    },
    onkeypress: "return /[0-9 .]/i.test(event.key)",
    "class": "text-base font-medium border rounded h-9 py-3 px-3 text-black",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.exchange = $event;
    }),
    onInput: _cache[7] || (_cache[7] = function () {
      return $options.restrictDecimal && $options.restrictDecimal.apply($options, arguments);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.exchange]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, !Object.keys(this.receipt).length > 0 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    key: 0,
    "class": "font-medium border rounded w-100 h-9 px-3 text-black",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.selectedCoin = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.coins, function (value, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: i,
      value: value.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.text), 9
    /* TEXT, PROPS */
    , _hoisted_36);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedCoin]]) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 1,
    "class": "font-medium border rounded w-100 h-9 px-3 text-black",
    type: "text",
    value: $props.receipt.name
  }, null, 8
  /* PROPS */
  , _hoisted_37))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "text-base font-medium border rounded w-9/12 h-9 py-3 px-3 text-black",
    placeholder: "Ingresa una glosa",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.comment = $event;
    }),
    maxlength: "200"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.comment]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TableDetailReceipt, {
    receiptData: $props.receipt,
    onDetailsReceipt: $options.setDetails,
    glosa: $data.comment,
    actionButtons: $data.actionButtons,
    editMode: $data.editMode
  }, null, 8
  /* PROPS */
  , ["receiptData", "onDetailsReceipt", "glosa", "actionButtons", "editMode"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-61a7ad4d"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  id: "app"
};
var _hoisted_2 = ["data-value", "data-list"];
var _hoisted_3 = {
  "class": "label"
};
var _hoisted_4 = {
  "class": "cursor-pointer"
};
var _hoisted_5 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "aselect",
    "data-value": $props.value,
    "data-list": $props.list
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer selector",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggle();
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.value), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["arrow", {
      expanded: $data.visible
    }])
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      hidden: !$data.visible,
      visible: $data.visible
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.list, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        current: item === $props.value
      }),
      key: item,
      onClick: function onClick($event) {
        return $options.takeMeTo(item[1]);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[0]), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_5);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 2
  /* CLASS */
  )])], 8
  /* PROPS */
  , _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=template&id=bfbe42fe":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=template&id=bfbe42fe ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"
};
var _hoisted_2 = {
  "class": "grid auto-cols-min grid-cols-2 w-4/12"
};
var _hoisted_3 = {
  "class": "col"
};
var _hoisted_4 = {
  "class": "col text-base sm:w-96"
};
var _hoisted_5 = {
  "class": "empresa-name font-semibold",
  style: {
    "color": "#171a21"
  }
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 12h16M4 18h16"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = {
  "class": "hidden w-full md:flex md:items-center md:w-auto",
  id: "menu"
};
var _hoisted_9 = {
  "class": "pt-4 text-base text-gray-900 md:flex md:justify-between md:pt-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TransparentDropDown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransparentDropDown");

  var _component_DropDownUser = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropDownUser");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.dashboard && $options.dashboard.apply($options, arguments);
    }),
    src: "https://queeserp.tk/images/queeserp.svg",
    alt: "Logo que es erp",
    "class": "md:w-48 md:mr-8 cursor-pointer"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.companyName), 1
  /* TEXT */
  )])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleMenu && $options.toggleMenu.apply($options, arguments);
    }),
    xmlns: "http://www.w3.org/2000/svg",
    id: "menu-button",
    "class": "h-6 w-6 cursor-pointer md:hidden block",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _hoisted_7)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransparentDropDown, {
    list: [['Reporte de Libro Diario', 'reportld.api.read', $props.companyName], ['Reporte de Libro Mayor', 'reportlm.api.read', $props.companyName], ['Reporte de Balance Inicial', 'reportbi.api.read', $props.companyName], ['Comprobación de Sumas y Saldos', 'reportss.api.read', $props.companyName]],
    value: "Reportes"
  }, null, 8
  /* PROPS */
  , ["list"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransparentDropDown, {
    list: [['Artículos', 'items', $props.companyName], ['Categorías', 'categories', $props.companyName], ['Notas', 'notes', $props.companyName]],
    value: "Inventario"
  }, null, 8
  /* PROPS */
  , ["list"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransparentDropDown, {
    list: [['Gestión', 'date.management', $props.companyName], ['Moneda', 'exchange_rate', $props.companyName]],
    value: "Configuración"
  }, null, 8
  /* PROPS */
  , ["list"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransparentDropDown, {
    list: [['Cuentas', 'accounts', $props.companyName], ['Configurar Integración', 'accounts_config', $props.companyName], ['Comprobante', 'receipt', $props.companyName]],
    value: "Contabilidad"
  }, null, 8
  /* PROPS */
  , ["list"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Usuario acá "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropDownUser, {
    list: [['Cambiar Empresa', 'companies'], ['Cerrar Sesión', 'logout']],
    value: "Preferencias"
  })])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=template&id=779fffb2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=template&id=779fffb2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-2 mt-5"
};
var _hoisted_2 = {
  "class": "w-11/12 ml-auto mr-auto mt-2 transform"
};
var _hoisted_3 = {
  "class": "md:flex md:items-center justify-center md:justify-items-start md:flex-row inline-grid gap-2 ml-auto mr-auto"
};
var _hoisted_4 = {
  id: "cuentaBasis",
  "class": "bg-white text-black rounded-md"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No hay cuentas. ");

var _hoisted_6 = {
  "class": "relative md:basis-1/3 text-gray-600 focus-within:text-gray-400"
};
var _hoisted_7 = {
  "class": "absolute inset-y-0 left-0 flex items-center pl-2"
};
var _hoisted_8 = ["fill"];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_9, _hoisted_10];
var _hoisted_12 = {
  "class": "relative md:basis-1/4 text-gray-600 focus-within:text-gray-400"
};
var _hoisted_13 = ["disabled"];
var _hoisted_14 = {
  "class": "relative md:basis-1/4 text-gray-600 focus-within:text-gray-400"
};
var _hoisted_15 = ["disabled"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No hay detalles de comprobantes, ¡añade uno!");

var _hoisted_17 = {
  "class": "flex content-left w-full"
};
var _hoisted_18 = {
  "class": "flex content-center w-full"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "white",
  "class": "bi bi-plus-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
})], -1
/* HOISTED */
);

var _hoisted_20 = [_hoisted_19];

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-x-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vSelect");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    resizableColumns: true,
    columnResizeMode: "fit",
    "class": "p-datatable-sm",
    value: $data.receipts,
    dataKey: "id_coincompany",
    scrollable: true,
    scrollHeight: "350px",
    responsiveLayout: "scroll",
    filters: $data.filters,
    "onUpdate:filters": _cache[10] || (_cache[10] = function ($event) {
      return $data.filters = $event;
    }),
    editMode: $props.editMode,
    onCellEditComplete: $options.onCellEditComplete
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vSelect, {
        modelValue: $data.idSelectedAccount,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.idSelectedAccount = $event;
        }),
        options: $data.accountsOptions,
        placeholder: "Selecciona una cuenta"
      }, {
        "no-options": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue", "options"])])), [[_directive_tooltip, 'Seleccione una cuenta']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[1] || (_cache[1] = function () {
          return $data.copyGlosa && $data.copyGlosa.apply($data, arguments);
        })
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: $data.copyGlosa ? '#2196f3' : '#bdbdbd',
        "class": "bi bi-card-text",
        viewBox: "0 0 16 16"
      }, _hoisted_11, 8
      /* PROPS */
      , _hoisted_8))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.newDetail.comment = $event;
        }),
        placeholder: "Añade una glosa",
        "class": "w-full py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900",
        maxlength: "100"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newDetail.comment]])])), [[_directive_tooltip, 'Glosa para el detalle']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        style: {
          "text-align": "right"
        },
        type: "number",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.newDetail.balance_debit = $event;
        }),
        onKeypress: _cache[4] || (_cache[4] = function ($event) {
          return $options.isNumber($event);
        }),
        onInput: _cache[5] || (_cache[5] = function ($event) {
          return $data.newDetail.balance_debit = $options.restrictDecimal($data.newDetail.balance_debit);
        }),
        disabled: $data.newDetail.balance_assets > 0,
        placeholder: "Debe",
        "class": "w-full py-2 text-sm rounded-md pr-3 focus:outline-none focus:bg-white focus:text-gray-900"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newDetail.balance_debit]])])), [[_directive_tooltip, 'Debe para el detalle', void 0, {
        top: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        style: {
          "text-align": "right"
        },
        type: "number",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.newDetail.balance_assets = $event;
        }),
        onKeypress: _cache[7] || (_cache[7] = function ($event) {
          return $options.isNumber($event);
        }),
        onInput: _cache[8] || (_cache[8] = function ($event) {
          return $data.newDetail.balance_assets = $options.restrictDecimal($data.newDetail.balance_assets);
        }),
        disabled: $data.newDetail.balance_debit > 0,
        placeholder: "Haber",
        "class": "py-2 text-sm rounded-md pr-3 w-full focus:outline-none focus:bg-white focus:text-gray-900"
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newDetail.balance_assets]])])), [[_directive_tooltip, 'Haber para el detalle', void 0, {
        top: true
      }]])])];
    }),
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name_account",
        header: "Cuenta"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data[slotProps.field]), 1
          /* TEXT */
          )])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "comment",
        header: "Glosa"
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            modelValue: slotProps.data[slotProps.field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return slotProps.data[slotProps.field] = $event;
            },
            maxlength: "100"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        "class": "balance_debit",
        field: "balance_debit",
        header: "Debe",
        footerStyle: '',
        footer: "Total: ".concat($options.calculateDebit())
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            maxlength: "12",
            type: "text",
            "class": "text-right mx-auto",
            modelValue: slotProps.data[slotProps.field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return slotProps.data[slotProps.field] = $event;
            },
            onInput: function onInput($event) {
              return slotProps.data[slotProps.field] = $options.restrictDecimal(slotProps.data[slotProps.field]);
            }
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue", "onInput"])])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["footer"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        "class": "balance_assets",
        field: "balance_assets",
        header: "Haber",
        footer: "Total: ".concat($options.calculateAssets())
      }, {
        editor: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            maxlength: "12",
            type: "text",
            "class": "text-right mx-auto",
            modelValue: slotProps.data[slotProps.field],
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return slotProps.data[slotProps.field] = $event;
            },
            onInput: function onInput($event) {
              return slotProps.data[slotProps.field] = $options.restrictDecimal(slotProps.data[slotProps.field]);
            }
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue", "onInput"])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["footer"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        "class": "addButton",
        hidden: $props.actionButtons,
        footer: $options.calculateAssets() - $options.calculateDebit() === 0 ? '✅' : '≠'
      }, {
        header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<div> relative md:basis-10 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            "class": "text-white disabled:bg-green-800 bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2",
            onClick: _cache[9] || (_cache[9] = function () {
              return $options.addReceiptDetail && $options.addReceiptDetail.apply($options, arguments);
            })
          }, _hoisted_20)), [[_directive_tooltip, {
            value: 'Agregar detalle',
            "class": 'text-center'
          }, void 0, {
            bottom: true
          }]])];
        }),
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            type: "button",
            onClick: function onClick($event) {
              return $options.deleteThisItem(slotProps.index);
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_21];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["onClick"])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["hidden", "footer"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "filters", "editMode", "onCellEditComplete"])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-557eceed"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  id: "app"
};
var _hoisted_2 = ["data-value", "data-list"];
var _hoisted_3 = {
  "class": "label"
};
var _hoisted_4 = {
  "class": "button"
};
var _hoisted_5 = {
  "class": "font-medium"
};
var _hoisted_6 = {
  "class": "cursor-pointer"
};
var _hoisted_7 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "aselect",
    "data-value": $props.value,
    "data-list": $props.list
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cursor-pointer selector",
    onMouseover: _cache[0] || (_cache[0] = function () {
      return $options.mouseover && $options.mouseover.apply($options, arguments);
    }),
    onMouseleave: _cache[1] || (_cache[1] = function () {
      return $options.mouseleave && $options.mouseleave.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.value), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      hidden: !$data.visible,
      visible: $data.visible
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.list, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        current: item === $props.value
      }),
      key: item,
      onClick: function onClick($event) {
        return $options.takeMeTo(item[1], item[2]);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[0]), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_7);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 2
  /* CLASS */
  )], 32
  /* HYDRATE_EVENTS */
  )], 8
  /* PROPS */
  , _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body[data-v-61a7ad4d] {\n  background: STEELBLUE;\n}\n.aselect[data-v-61a7ad4d] {\n  width: 180px;\n  margin: 20px auto;\n}\n.aselect .selector[data-v-61a7ad4d] {\n  border: 2px gainsboro;\n  border-radius: 4px;\n  background: #171a21;\n  position: relative;\n  z-index: 1;\n}\n.aselect .selector .arrow[data-v-61a7ad4d] {\n  position: absolute;\n  right: 10px;\n  top: 40%;\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 10px solid #888;\n  transform: rotateZ(0deg) translateY(0px);\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);\n}\n.aselect .selector .expanded[data-v-61a7ad4d] {\n  transform: rotateZ(180deg) translateY(2px);\n}\n.aselect .selector .label[data-v-61a7ad4d] {\n  display: block;\n  padding: 12px;\n  font-size: 16px;\n  color: white;\n}\n.aselect ul[data-v-61a7ad4d] {\n  width: 100%;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  border: 1px solid gainsboro;\n  position: absolute;\n  z-index: 1;\n  background: #fff;\n}\n.aselect li[data-v-61a7ad4d] {\n  padding: 12px;\n  color: black;\n}\n.aselect li[data-v-61a7ad4d]:hover {\n  color: white;\n  background: #66c0f4;\n}\n.aselect .current[data-v-61a7ad4d] {\n  background: #eaeaea;\n}\n.aselect .hidden[data-v-61a7ad4d] {\n  visibility: hidden;\n}\n.aselect .visible[data-v-61a7ad4d] {\n  visibility: visible;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body[data-v-557eceed] {\n  background: STEELBLUE;\n}\n.aselect[data-v-557eceed] {\n  width: 135px;\n  margin: 20px auto;\n}\n.aselect .selector[data-v-557eceed] {\n  border: 2px gainsboro;\n  border-radius: 4px;\n  background: transparent;\n  position: relative;\n}\n.aselect .selector .label[data-v-557eceed] {\n  display: block;\n  padding: 12px;\n  font-size: 16px;\n  color: #171a21;\n}\n.aselect .selector[data-v-557eceed] :hover {\n  color: #12a5d9;\n}\n.aselect ul[data-v-557eceed] {\n  width: 100%;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  border: 1px solid gainsboro;\n  position: absolute;\n  z-index: 10 !important;\n  background: #fff;\n}\n.aselect li[data-v-557eceed] {\n  padding: 12px;\n  color: black;\n}\n.aselect li[data-v-557eceed]:hover {\n  color: white !important;\n  background: #66c0f4;\n}\n.aselect .current[data-v-557eceed] {\n  background: #eaeaea;\n}\n.aselect .hidden[data-v-557eceed] {\n  visibility: hidden;\n}\n.aselect .visible[data-v-557eceed] {\n  visibility: visible;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media (min-width: 640px) {\n#h4Basura {\n        margin-left: 21%;\n}\n#inputBasura {\n        width: 78%;\n        float: right;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media (max-width: 768px) {\n.empresa-name {\n        display: none;\n}\n}\nul {\n    font-weight: 600;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media (min-width: 768px) {\n#cuentaBasis {\n        flex-basis: 20%;\n        margin-left: auto;\n}\n}\n.balance_assets > .p-column-header-content,\n.balance_debit > .p-column-header-content,\n.addButton > .p-column-header-content {\n    display: inline-flex;\n    align-items: right;\n    margin-left: auto;\n}\ntd.balance_assets,\ntd.balance_debit,\ntd.addButton {\n    text-align: right !important;\n    display: inline !important;\n}\n.p-datatable-tfoot > tr > td.balance_debit,\n.p-datatable-tfoot > tr > td.balance_assets,\n.p-datatable-tfoot > tr > td.addButton {\n    display: inline-flex;\n    align-items: right;\n    margin-left: auto;\n    text-align: right !important;\n    display: inline !important;\n}\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n/* Firefox */\ninput[type=\"number\"] {\n    -moz-appearance: textfield;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_style_index_0_id_61a7ad4d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_style_index_0_id_61a7ad4d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_style_index_0_id_61a7ad4d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_style_index_0_id_557eceed_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_style_index_0_id_557eceed_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_style_index_0_id_557eceed_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_style_index_0_id_dcec1ed6_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_style_index_0_id_dcec1ed6_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_style_index_0_id_dcec1ed6_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_bfbe42fe_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_bfbe42fe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_bfbe42fe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_style_index_0_id_779fffb2_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_style_index_0_id_779fffb2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_style_index_0_id_779fffb2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/CrudTable-Receipt.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/CrudTable-Receipt.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CrudTable_Receipt_vue_vue_type_template_id_81e4debc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrudTable-Receipt.vue?vue&type=template&id=81e4debc */ "./resources/js/Pages/CrudTable-Receipt.vue?vue&type=template&id=81e4debc");
/* harmony import */ var _CrudTable_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrudTable-Receipt.vue?vue&type=script&lang=js */ "./resources/js/Pages/CrudTable-Receipt.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CrudTable_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CrudTable_Receipt_vue_vue_type_template_id_81e4debc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/CrudTable-Receipt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/DetailReceipts.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/DetailReceipts.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailReceipts_vue_vue_type_template_id_dcec1ed6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailReceipts.vue?vue&type=template&id=dcec1ed6 */ "./resources/js/Pages/DetailReceipts.vue?vue&type=template&id=dcec1ed6");
/* harmony import */ var _DetailReceipts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailReceipts.vue?vue&type=script&lang=js */ "./resources/js/Pages/DetailReceipts.vue?vue&type=script&lang=js");
/* harmony import */ var _DetailReceipts_vue_vue_type_style_index_0_id_dcec1ed6_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css */ "./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DetailReceipts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DetailReceipts_vue_vue_type_template_id_dcec1ed6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/DetailReceipts.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/DropDownUser.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropDownUser_vue_vue_type_template_id_61a7ad4d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true */ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true");
/* harmony import */ var _DropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropDownUser.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=script&lang=js");
/* harmony import */ var _DropDownUser_vue_vue_type_style_index_0_id_61a7ad4d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true */ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DropDownUser_vue_vue_type_template_id_61a7ad4d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-61a7ad4d"],['__file',"resources/js/Pages/SimpleTemplates/DropDownUser.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Navbar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Navbar.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_bfbe42fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=bfbe42fe */ "./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=template&id=bfbe42fe");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=script&lang=js");
/* harmony import */ var _Navbar_vue_vue_type_style_index_0_id_bfbe42fe_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css */ "./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navbar_vue_vue_type_template_id_bfbe42fe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Navbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_DetailReceipt_vue_vue_type_template_id_779fffb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table-DetailReceipt.vue?vue&type=template&id=779fffb2 */ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=template&id=779fffb2");
/* harmony import */ var _Table_DetailReceipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table-DetailReceipt.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=script&lang=js");
/* harmony import */ var _Table_DetailReceipt_vue_vue_type_style_index_0_id_779fffb2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css */ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Table_DetailReceipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Table_DetailReceipt_vue_vue_type_template_id_779fffb2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransparentDropDownUser_vue_vue_type_template_id_557eceed_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true */ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true");
/* harmony import */ var _TransparentDropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransparentDropDownUser.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=script&lang=js");
/* harmony import */ var _TransparentDropDownUser_vue_vue_type_style_index_0_id_557eceed_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true */ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TransparentDropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TransparentDropDownUser_vue_vue_type_template_id_557eceed_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-557eceed"],['__file',"resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/CrudTable-Receipt.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/CrudTable-Receipt.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudTable_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudTable_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudTable-Receipt.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CrudTable-Receipt.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/DetailReceipts.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/DetailReceipts.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailReceipts.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DropDownUser.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-DetailReceipt.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TransparentDropDownUser.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/CrudTable-Receipt.vue?vue&type=template&id=81e4debc":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/CrudTable-Receipt.vue?vue&type=template&id=81e4debc ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudTable_Receipt_vue_vue_type_template_id_81e4debc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudTable_Receipt_vue_vue_type_template_id_81e4debc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudTable-Receipt.vue?vue&type=template&id=81e4debc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CrudTable-Receipt.vue?vue&type=template&id=81e4debc");


/***/ }),

/***/ "./resources/js/Pages/DetailReceipts.vue?vue&type=template&id=dcec1ed6":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/DetailReceipts.vue?vue&type=template&id=dcec1ed6 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_template_id_dcec1ed6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_template_id_dcec1ed6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailReceipts.vue?vue&type=template&id=dcec1ed6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=template&id=dcec1ed6");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_template_id_61a7ad4d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_template_id_61a7ad4d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=template&id=61a7ad4d&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=template&id=bfbe42fe":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=template&id=bfbe42fe ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_bfbe42fe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_bfbe42fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=template&id=bfbe42fe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=template&id=bfbe42fe");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=template&id=779fffb2":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=template&id=779fffb2 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_template_id_779fffb2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_template_id_779fffb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-DetailReceipt.vue?vue&type=template&id=779fffb2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=template&id=779fffb2");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_template_id_557eceed_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_template_id_557eceed_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=template&id=557eceed&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DropDownUser_vue_vue_type_style_index_0_id_61a7ad4d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/DropDownUser.vue?vue&type=style&index=0&id=61a7ad4d&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransparentDropDownUser_vue_vue_type_style_index_0_id_557eceed_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/TransparentDropDownUser.vue?vue&type=style&index=0&id=557eceed&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailReceipts_vue_vue_type_style_index_0_id_dcec1ed6_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DetailReceipts.vue?vue&type=style&index=0&id=dcec1ed6&lang=css");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_bfbe42fe_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_style_index_0_id_779fffb2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css");


/***/ })

}]);