"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SimpleTemplates_Modal-Company_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"],
    focus: focus
  },
  emits: {
    "update-data": "updateData"
  },
  props: {
    side: {
      type: String,
      "default": "bottom"
    },
    tooltipText: {
      type: String,
      "default": "A tooltip"
    },
    btnClass: {
      type: String,
      "default": "text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2"
    },
    btnContent: {
      type: String,
      "default": "Agregar"
    },
    inputClass: {
      type: String,
      "default": "block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    },
    modalTitle: String,
    modalButtons: String,
    companyData: {
      type: Object,
      "default": {
        id_company: "",
        name: "",
        nit: "",
        initials: "",
        email: "",
        phone: "",
        level: 3,
        address: ""
      }
    }
  },
  data: function data() {
    return {
      id_company: this.companyData.id_company,
      name: this.companyData.name,
      nit: this.companyData.nit,
      initials: this.companyData.initials,
      email: this.companyData.email,
      phone: this.companyData.phone,
      level: this.companyData.level,
      address: this.companyData.address,
      success: false,
      errorInitials: false,
      errorEmail: false,
      errorPhone: false,
      errorName: false,
      errorNit: false,
      errorAddress: false,
      messageErrorName: "",
      messageErrorNit: "",
      messageErrorInitials: "",
      messageErrorEmail: "",
      messageErrorPhone: "",
      messageErrorAddress: "",
      showModal: false,
      coins: [],
      selectedCoin: 2,
      disabledCoin: false
    };
  },
  watch: {
    showModal: {
      handler: function handler(value) {
        if (value) {
          this.getCoins();
          this.setCoinOnUpdate();
        }
      }
    },
    companyData: {
      handler: function handler() {
        this.id_company = this.companyData.id_company;
        this.name = this.companyData.name;
        this.nit = this.companyData.nit;
        this.initials = this.companyData.initials;
        this.email = this.companyData.email;
        this.phone = this.companyData.phone;
        this.level = this.companyData.level;
        this.address = this.companyData.address;
        this.errorInitials = false;
        this.errorEmail = false;
        this.errorPhone = false;
        this.errorName = false;
        this.errorNit = false;
        this.errorAddress = false;
        this.messageErrorName = "";
        this.messageErrorNit = "";
        this.messageErrorInitials = "";
        this.messageErrorEmail = "";
        this.messageErrorPhone = "";
        this.messageErrorAddress = "";
      }
    }
  },
  methods: {
    setCoinOnUpdate: function setCoinOnUpdate() {
      var _this = this;

      if (this.companyData.id_company != "") {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("coincompany.api.getByCompanyId"), {
          id_company: this.companyData.id_company
        }).then(function (response) {
          if ((response === null || response === void 0 ? void 0 : response.data.coins.length) > 1) {
            //Disable select id there's more than one coin registered
            _this.disabledCoin = true;
          } //Supposing that a coin is always available


          var selectCoin = document.getElementById("selectCoin"); //Get first where active = 1

          var coins = response.data.coins.find(function (coin) {
            return coin.active == 1;
          });
          selectCoin.value = coins.id_maincoin;
          _this.selectedCoin = coins.id_maincoin;
        });
      }
    },
    getCoins: function getCoins() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get(route("coins.api.read")).then(function (response) {
        _this2.coins = response.data.coins; //Then process coins

        _this2.coins = _this2.coins.map(function (coin) {
          return {
            value: coin.id_coin,
            text: coin.name
          };
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    flushErrors: function flushErrors() {
      this.errorName = false;
      this.messageErrorName = "";
      this.errorNit = false;
      this.messageErrorNit = "";
      this.errorInitials = false;
      this.messageErrorInitials = "";
      this.errorEmail = false;
      this.messageErrorEmail = "";
      this.errorPhone = false;
      this.messageErrorPhone = "";
      this.errorAddress = false;
      this.messageErrorAddress = "";
    },
    cancelCreate: function cancelCreate() {
      this.blankErrors();
      this.blankFields();
    },
    cancelEdit: function cancelEdit() {
      this.disabledCoin = false;
      this.blankErrors();
      this.id_company = this.companyData.id_company;
      this.name = this.companyData.name;
      this.nit = this.companyData.nit;
      this.initials = this.companyData.initials;
      this.email = this.companyData.email;
      this.phone = this.companyData.phone;
      this.level = this.companyData.level;
      this.address = this.companyData.address;
      /* Better to make a ajax call than  checking which value didn't changez */
    },
    blankFields: function blankFields() {
      this.id_company = "";
      this.name = "";
      this.nit = "";
      this.initials = "";
      this.email = "";
      this.phone = "";
      this.level = "3";
      this.address = "";
    },
    blankErrors: function blankErrors() {
      /* If we are editing, don't clean this shit */
      this.showModal = false;
      this.errorName = false;
      this.errorNit = false;
      this.errorInitials = false;
      this.errorEmail = false;
      this.errorAddress = false;
      this.errorPhone = false;
    },
    removeEmptyValues: function removeEmptyValues(data) {
      var array = data;

      for (var key in array) {
        if (array[key] == "" || array[key] == null) {
          delete array[key];
        }
      }

      return array;
    },
    setErrors: function setErrors(errors) {
      for (var key in errors) {
        if (key == "name") {
          this.errorName = true;
          this.messageErrorName = errors[key][0];
        }

        if (key == "nit") {
          this.errorNit = true;
          this.messageErrorNit = errors[key][0];
        }

        if (key == "initials") {
          this.errorInitials = true;
          this.messageErrorInitials = errors[key][0];
        }

        if (key == "email") {
          this.errorEmail = true;
          this.messageErrorEmail = errors[key][0];
        }

        if (key == "phone") {
          this.errorPhone = true;
          this.messageErrorPhone = errors[key][0];
        }

        if (key == "address") {
          this.errorAddress = true;
          this.messageErrorAddress = errors[key][0];
        }
      }
    },
    create: function create() {
      var _this3 = this;

      var dataToSet = {
        name: this.name,
        nit: this.nit ? this.nit.toString() : null,
        initials: this.initials,
        email: this.email,
        phone: this.phone ? this.phone.toString() : null,
        level: this.level,
        address: this.address,
        id_coin: this.selectedCoin
      };
      /* We remove empty keys, the backend verifies the values if the key is present, so we just remove them. */

      dataToSet = this.removeEmptyValues(dataToSet);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("companies.api.create"), dataToSet)["catch"](function (error) {
        _this3.flushErrors();
        /* Check every response key to assign it to the modal in the specific field*/


        _this3.setErrors(error.response.data.errors); //Notify.failure("Error al crear");

      }).then(function (response) {
        var _response$data;

        if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.success) {
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.success("Empresa creada con éxito");
          _this3.showModal = false;

          _this3.$emit("update-data");
          /*
          Empty values
          */


          _this3.cancelCreate();

          _this3.level = "3";
        }
      });
    },
    update: function update() {
      var _this4 = this;

      var dataToRefresh = {
        id_company: this.id_company,
        name: this.name,
        nit: this.nit ? this.nit.toString() : null,
        initials: this.initials,
        email: this.email,
        phone: this.phone ? this.phone.toString() : null,
        level: this.level,
        address: this.address,
        id_coin: this.selectedCoin
      };
      /* We remove empty keys, the backend verifies the values if the key is present, so we just remove them. */

      dataToRefresh = this.removeEmptyValues(dataToRefresh);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("companies.api.update"), dataToRefresh)["catch"](function (error) {
        _this4.flushErrors();
        /* Check every response key to assign it to the modal in the specific field*/


        _this4.setErrors(error.response.data.errors); //Notify.failure("Error al actualizar");

      }).then(function (response) {
        try {
          if (response.data.success) {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.success("Se ha actualizado la empresa");

            _this4.$emit("update-data", _this4.name, _this4.id_company);

            _this4.showModal = false;
          }
        } catch (error) {
          console.log("No se pudo completar la petición");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=template&id=79fdd948":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=template&id=79fdd948 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "transition-opacity top-0 left-0 min-h-full min-w-full z-auto bg-black bg-opacity-40 absolute overflow-y-scroll"
};
var _hoisted_2 = {
  "class": "flex items-center justify-center min-h-screen"
};
var _hoisted_3 = {
  "class": "relative px-4 w-full max-w-2xl"
};
var _hoisted_4 = {
  "class": "relative bg-white rounded-lg shadow"
};
var _hoisted_5 = {
  "class": "flex justify-between items-start p-3 rounded-t border-b"
};
var _hoisted_6 = {
  "class": "text-xl font-semibold text-gray-900 lg:text-2xl"
};
var _hoisted_7 = {
  "class": "p-6 space-y-6"
};
var _hoisted_8 = {
  "class": "relative z-0 mb-6 w-full group"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
}, "Nombre Empresa * ", -1
/* HOISTED */
);

var _hoisted_10 = {
  key: 0,
  "class": "absolute text-sm text-red-500 duration-300 transform"
};
var _hoisted_11 = {
  "class": "grid xl:grid-cols-2 xl:gap-6"
};
var _hoisted_12 = {
  "class": "relative z-0 mb-6 w-full group"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "nit",
  "class": "absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
}, "NIT *", -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 0,
  "class": "absolute text-sm text-red-500 duration-300 transform"
};
var _hoisted_15 = {
  "class": "relative z-0 mb-6 w-full group"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "absolute text-base text-grey-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
}, "Sigla *", -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 0,
  "class": "absolute text-sm text-red-500 duration-300 transform"
};
var _hoisted_18 = {
  "class": "grid xl:grid-cols-2 xl:gap-6"
};
var _hoisted_19 = {
  "class": "relative z-0 mb-6 w-full group"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  "class": "absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
}, "Correo", -1
/* HOISTED */
);

var _hoisted_21 = {
  key: 0,
  "class": "absolute text-sm text-red-500 duration-300 transform"
};
var _hoisted_22 = {
  "class": "relative z-0 mb-6 w-full group"
};
var _hoisted_23 = ["disabled"];
var _hoisted_24 = ["value"];

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "selectCoin",
  "class": "absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
}, "Moneda *", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "grid xl:grid-cols-2 xl:gap-6"
};
var _hoisted_27 = {
  "class": "relative z-0 mb-6 w-full group"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "phone",
  "class": "absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
}, "Teléfono", -1
/* HOISTED */
);

var _hoisted_29 = {
  key: 0,
  "class": "absolute text-sm text-red-500 duration-300 transform"
};
var _hoisted_30 = {
  "class": "relative z-0 mb-6 w-full group"
};
var _hoisted_31 = ["value", "selected"];

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "levelSelect",
  "class": "absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
}, "Nivel *", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "relative z-0 w-full group"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "address",
  "class": "block mt-3 mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
}, "Dirección", -1
/* HOISTED */
);

var _hoisted_35 = {
  key: 0,
  "class": "absolute text-sm text-red-500 duration-300 transform"
};
var _hoisted_36 = {
  "class": "flex items-center p-3 space-x-2 rounded-b border-t"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  var _directive_focus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("focus");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n        We make a button to display the modal, we can pass certain props to this button like class and value\n        There's no way of making v-tooltip.side work with a dynamic call, so we just define it, update this when primevue module is ok\n    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.btnClass, "ml-2"]),
    type: "button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showModal = true;
    }),
    onClose: _cache[1] || (_cache[1] = function ($event) {
      return $data.showModal = false;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 34
  /* CLASS, HYDRATE_EVENTS */
  )), [[_directive_tooltip, {
    value: $props.tooltipText,
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), $data.showModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.modalTitle) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    autocomplete: "off",
    type: "text",
    name: "name",
    id: "name",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.inputClass),
    oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
    onkeypress: "return /[A-Z 0-9´]/i.test(event.key)",
    maxlength: "50",
    placeholder: " ",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.name = $event;
    }),
    required: ""
  }, null, 2
  /* CLASS */
  ), [[_directive_focus], [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.name]]), _hoisted_9, $data.errorName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageErrorName), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    autocomplete: "off",
    type: "text",
    name: "nit",
    id: "nit",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.inputClass),
    oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
    onkeypress: "return /[0-9]/i.test(event.key)",
    maxlength: "20",
    placeholder: " ",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.nit = $event;
    }),
    required: ""
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.nit]]), _hoisted_13, $data.errorNit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageErrorNit), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    autocomplete: "off",
    type: "text",
    oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
    onkeypress: "return /[A-Z 0-9]/i.test(event.key)",
    maxlength: "15",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.inputClass),
    placeholder: " ",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.initials = $event;
    }),
    required: ""
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.initials]]), _hoisted_16, $data.errorInitials ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageErrorInitials), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    autocomplete: "off",
    type: "email",
    name: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.inputClass),
    placeholder: " ",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.email = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]]), _hoisted_20, $data.errorEmail ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageErrorEmail), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "selectCoin",
    name: "selectCoin",
    disabled: $data.disabledCoin,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.inputClass),
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.selectedCoin = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.coins, function (value, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: key,
      value: value.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.text), 9
    /* TEXT, PROPS */
    , _hoisted_24);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 10
  /* CLASS, PROPS */
  , _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedCoin]]), _hoisted_25])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    autocomplete: "off",
    type: "text",
    name: "phone",
    id: "phone",
    oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
    onkeypress: "return /[0-9]/i.test(event.key)",
    maxlength: "8",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.inputClass),
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.phone = $event;
    }),
    placeholder: " "
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.phone]]), _hoisted_28, $data.errorPhone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageErrorPhone), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "levelSelect",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.inputClass),
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.level = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(5, function (value, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      key: key,
      value: value + 2,
      selected: $data.level == value + 2
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value + 2), 9
    /* TEXT, PROPS */
    , _hoisted_31);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.level]]), _hoisted_32])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.address = $event;
    }),
    id: "address",
    oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
    maxlength: "250",
    rows: "3",
    "class": "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none",
    placeholder: "Ingresa una dirección (Opcional)"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.address]]), $data.errorAddress ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.messageErrorAddress), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return [$props.modalButtons == 'register' ? $options.cancelCreate() : $options.cancelEdit()];
    }),
    type: "button",
    "class": "text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Cancelar "), $props.modalButtons == 'register' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[11] || (_cache[11] = function () {
      return $options.create && $options.create.apply($options, arguments);
    }),
    type: "button",
    "class": "text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Registrar ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.modalButtons == 'edit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[12] || (_cache[12] = function () {
      return $options.update && $options.update.apply($options, arguments);
    }),
    type: "button",
    "class": "text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Editar ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Company.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Company.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_Company_vue_vue_type_template_id_79fdd948__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal-Company.vue?vue&type=template&id=79fdd948 */ "./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=template&id=79fdd948");
/* harmony import */ var _Modal_Company_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal-Company.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_Company_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_Company_vue_vue_type_template_id_79fdd948__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Modal-Company.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Company_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Company_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Company.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=template&id=79fdd948":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=template&id=79fdd948 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Company_vue_vue_type_template_id_79fdd948__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Company_vue_vue_type_template_id_79fdd948__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Company.vue?vue&type=template&id=79fdd948 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Company.vue?vue&type=template&id=79fdd948");


/***/ })

}]);