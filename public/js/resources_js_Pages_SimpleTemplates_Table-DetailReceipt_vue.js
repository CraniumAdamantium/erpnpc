"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SimpleTemplates_Table-DetailReceipt_vue"],{

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

/***/ "./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_DetailReceipt_vue_vue_type_style_index_0_id_779fffb2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-DetailReceipt.vue?vue&type=style&index=0&id=779fffb2&lang=css");


/***/ })

}]);