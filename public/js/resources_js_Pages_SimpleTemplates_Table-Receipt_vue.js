"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SimpleTemplates_Table-Receipt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  emits: ["update-data"],
  props: {
    company: {
      type: Object,
      "default": {}
    }
  },
  components: {
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      receipts: this.company.receipts,
      filters: {
        global: {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS
        }
      },
      selectedReceipt: {},
      userData: []
    };
  },
  mounted: function mounted() {
    this.receipts != undefined ? this.transformData() : "";
  },
  watch: {
    company: {
      handler: function handler() {
        this.receipts = this.company.receipts;
        this.selectedReceipt = {};
        this.transformData();
      }
    }
  },
  methods: {
    editReceipt: function editReceipt() {},
    getReceiptType: function getReceiptType(num) {
      /* <option value="1">Ingreso</option>
              <option value="2">Egreso</option>
              <option value="3">Traspaso</option>
              <option value="4" selected>Apertura</option>
              <option value="5">Traspaso</option> */
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
    transformData: function transformData() {
      var _this = this;

      this.receipts.forEach(function (date) {
        date.date = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date.date).format("DD/MM/YYYY");
        date.receipt_type = _this.getReceiptType(date.receipt_type);
      });
    },
    newReceipt: function newReceipt() {
      console.log(this.company);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get(route("view.create.receipt", this.company.name));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=template&id=9728e990":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=template&id=9728e990 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-5"
};
var _hoisted_2 = {
  "class": "grid grid-cols-1 sm:grid-cols-2 mb-2"
};
var _hoisted_3 = {
  "class": "col-span-1 self-end justify-center order-last sm:order-first"
};
var _hoisted_4 = {
  "class": "self-center items-center content-center"
};
var _hoisted_5 = {
  "class": "p-input-icon-left"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "col-span-1 self-end mb-2 sm:mb-0"
};
var _hoisted_8 = {
  "class": "flex justify-center sm:justify-end space-x-2"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_10 = [_hoisted_9];
var _hoisted_11 = {
  "class": "disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg px-4 py-2.5"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = ["disabled"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_16 = [_hoisted_15];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No hay comprobantes, ¡añade uno! ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedReceipt) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    type: "text",
    modelValue: $data.filters['global'].value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.filters['global'].value = $event;
    }),
    placeholder: "Buscar"
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.newReceipt && $options.newReceipt.apply($options, arguments);
    })
  }, _hoisted_10)), [[_directive_tooltip, {
    value: 'Crear comprobante',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_11, _hoisted_13)), [[_directive_tooltip, {
    value: 'Generar reportes',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": "disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5",
    disabled: Object.keys($data.selectedReceipt).length == 0,
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.editReceipt && $options.editReceipt.apply($options, arguments);
    })
  }, _hoisted_16, 8
  /* PROPS */
  , _hoisted_14)), [[_directive_tooltip, {
    value: 'Editar comprobante',
    "class": 'text-center'
  }, void 0, {
    left: true
  }]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
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
      return [_hoisted_17];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "serial_number",
        header: "Serie",
        sortable: true,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "comment",
        header: "Glosa",
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
  , ["value", "selection", "filters"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-Receipt.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-Receipt.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_Receipt_vue_vue_type_template_id_9728e990__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table-Receipt.vue?vue&type=template&id=9728e990 */ "./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=template&id=9728e990");
/* harmony import */ var _Table_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table-Receipt.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Table_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Table_Receipt_vue_vue_type_template_id_9728e990__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Table-Receipt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Receipt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-Receipt.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=template&id=9728e990":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=template&id=9728e990 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Receipt_vue_vue_type_template_id_9728e990__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Receipt_vue_vue_type_template_id_9728e990__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-Receipt.vue?vue&type=template&id=9728e990 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Receipt.vue?vue&type=template&id=9728e990");


/***/ })

}]);