"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SimpleTemplates_Modal-Category_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__);


var focus = {
  mounted: function mounted(el) {
    return el.focus();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    focus: focus
  },
  props: {
    modalButtons: {
      type: String,
      "default": "register"
    },
    showModal: {
      type: Boolean,
      "default": false
    },
    selectedAccount: {
      type: Object,
      "default": null
    },
    id_company: {
      type: Number,
      "default": null
    }
  },
  data: function data() {
    return {
      name: ""
    };
  },
  watch: {
    selectedAccount: function selectedAccount() {
      var _this$selectedAccount;

      this.name = (_this$selectedAccount = this.selectedAccount) === null || _this$selectedAccount === void 0 ? void 0 : _this$selectedAccount.name;
    }
  },
  methods: {
    cancel: function cancel() {
      this.$emit("cancel");
    },
    update: function update() {
      var _this = this;

      notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.init({
        clickToClose: true
      });
      var data = {
        id_account: this.selectedAccount.id_account,
        name: this.name,
        id_company: this.id_company
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("accounts.api.update", data))["catch"](function (error) {
        for (var i in error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.errors) {
          var _error$response, _error$response$data;

          console.log(error.response.data.errors);

          if (error.response.data.errors[i][0] != error.response.data.message) {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.failure(error.response.data.errors[i][0]);
          } else {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.failure(error.response.data.message);
          }
        }
      }).then(function (response) {
        var _response$data;

        if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.success) {
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.success("Categoría actualizada con éxito");

          _this.$emit("created");

          _this.cancel();
        }
      });
    },
    create: function create() {
      var _this2 = this;

      notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.init({
        clickToClose: true
      });
      var data = {
        id_company: this.id_company,
        name: this.name
      };

      if (this.selectedAccount != {}) {
        data.id_parent = this.selectedAccount.id_account;
      }

      if (this.name == "") {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.failure("El nombre no puede estar vacio");
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("accounts.api.create", data))["catch"](function (error) {
        for (var i in error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.errors) {
          var _error$response2, _error$response2$data;

          console.log(error.response.data.errors);

          if (error.response.data.errors[i][0] != error.response.data.message) {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.failure(error.response.data.errors[i][0]);
          } else {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.failure(error.response.data.message);
          }
        }
      }).then(function (response) {
        var _response$data2;

        if (response !== null && response !== void 0 && (_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.success) {
          _this2.$emit("created");

          _this2.name = "";

          _this2.cancel();

          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.success("Categoría creada con éxito");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=template&id=63ec6eaf":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=template&id=63ec6eaf ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "relative z-0 left-20 mt-2 mb-5 w-full group"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
}, "Nombre de la categoría *", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "flex items-center p-3 space-x-2 rounded-b border-t"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_focus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("focus");

  return $props.showModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.modalButtons == "edit" ? "Editando categoría " : "Añadiendo a ") + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.selectedAccount.name ? $props.selectedAccount.label : "Raiz"), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.name = $event;
    }),
    autocomplete: "off",
    type: "text",
    "class": "block py-2.5 px-0 text-xl w-3/4 text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
    maxlength: "20",
    onkeypress: "return /[A-Z 0-9]/i.test(event.key)",
    placeholder: " ",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[_directive_focus], [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.name]]), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.cancel && $options.cancel.apply($options, arguments);
    }),
    type: "button",
    "class": "text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Cancelar "), $props.modalButtons == 'register' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.create && $options.create.apply($options, arguments);
    }),
    type: "button",
    "class": "text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Registrar ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.modalButtons == 'edit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.update && $options.update.apply($options, arguments);
    }),
    type: "button",
    "class": "text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Editar ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Category.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Category.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_Category_vue_vue_type_template_id_63ec6eaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal-Category.vue?vue&type=template&id=63ec6eaf */ "./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=template&id=63ec6eaf");
/* harmony import */ var _Modal_Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal-Category.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_Category_vue_vue_type_template_id_63ec6eaf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Modal-Category.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Category.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=template&id=63ec6eaf":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=template&id=63ec6eaf ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Category_vue_vue_type_template_id_63ec6eaf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Category_vue_vue_type_template_id_63ec6eaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Category.vue?vue&type=template&id=63ec6eaf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Category.vue?vue&type=template&id=63ec6eaf");


/***/ })

}]);