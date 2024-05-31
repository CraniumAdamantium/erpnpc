"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SimpleTemplates_Table-Periods_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primevue_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/calendar */ "./node_modules/primevue/calendar/calendar.esm.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notiflix */ "./node_modules/notiflix/dist/notiflix-aio-3.2.4.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5__);






dayjs__WEBPACK_IMPORTED_MODULE_3___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4___default()));
dayjs__WEBPACK_IMPORTED_MODULE_3___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5___default()));
var focus = {
  mounted: function mounted(el) {
    return el.focus();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    focus: focus
  },
  components: {
    Calendar: primevue_calendar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    managementData: {
      type: Object,
      "default": {}
    },
    periodDates: Array,
    id_management: Number,
    id_company: Number,
    id_user: Number,
    realstartdate: String,
    realenddate: String,
    showModal: {
      type: Boolean,
      "default": false
    },
    modalTitle: String,
    modalButtons: String,
    periodData: {
      type: Object,
      "default": {
        id_period: "",
        id_user: "",
        id_management: "",
        status: "",
        start_date: "",
        end_date: "",
        name: ""
      }
    }
  },
  watch: {
    periodData: {
      handler: function handler() {
        this.newData = Object.assign({}, this.periodData); //Shallow copy, newData will be a reference to periodData but it can't periodData
      }
    }
  },
  data: function data() {
    return {
      newData: Object.assign({}, this.periodData),
      //We make it here since props are unmutable NOTE, this shit is mutable and idk why
      dates: this.periodDates,
      errorName: false,
      messageErrorName: "",
      errorStart_date: false,
      messageErrorStart_date: "",
      errorEnd_date: false,
      messageErrorEnd_date: "",
      errorGeneric: false,
      messageErrorGeneric: ""
    };
  },
  methods: {
    flushErrors: function flushErrors() {
      this.errorName = false;
      this.messageErrorName = "";
      this.errorStart_date = false;
      this.messageErrorStart_date = "";
      this.errorEnd_date = false;
      this.messageErrorEnd_date = "";
      this.errorGeneric = false;
      this.messageErrorGeneric = "";
    },
    cancel: function cancel() {
      this.$emit("close");
      this.newData = Object.assign({}, this.periodData); //Reset old state

      this.flushErrors();
    },
    setColorForDate: function setColorForDate(checkDate) {
      /* First we make the first checkDate, calendar returns it in 3 objects (day, month, year) so we make it a str */
      var month = parseFloat(checkDate.month) + parseFloat(1); //Sum 1 because months are from 0 to 11

      var checkDateStr = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(checkDate.day + "/" + month + "/" + checkDate.year, "D/M/YYYY", true);
      var sendColor = "white";
      /* Then we check if the date is valid*/

      for (var i = 0; i < this.periodDates.length; i++) {
        var start = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.periodDates[i].start_date, "DD/MM/YYYY", true);
        var end = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.periodDates[i].end_date, "DD/MM/YYYY", true);

        if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()(checkDateStr).isBetween(start, end, //End
        null, //Limit
        "[]" //Include
        )) {
          sendColor = "red";

          if (this.periodDates[i].id_period == this.periodData.id_period) {
            sendColor = "green";
          }
        }
      }

      if (!dayjs__WEBPACK_IMPORTED_MODULE_3___default()(checkDateStr).isBetween(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.managementData.start_date, "DD/MM/YYYY"), dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.managementData.end_date, "DD/MM/YYYY"), null, "[]")) {
        sendColor = "LightCoral";
      }

      return sendColor;
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
    setErrors: function setErrors(errors, defaultError) {
      for (var key in errors) {
        if (key == "name" && errors[key][0]) {
          this.errorName = true; //this.messageErrorName = errors[key][0];

          notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure(errors[key][0]);
        }

        if (key == "start_date" && errors[key][0]) {
          this.errorStart_date = true; //this.messageErrorStart_date = errors[key][0];

          notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure(errors[key][0]);
        }

        if (key == "end_date" && errors[key][0]) {
          console.log(errors[key][0]);
          this.errorEnd_date = true; //this.messageErrorEnd_date = errors[key][0];

          notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure(errors[key][0]);
        }
      }
    },
    create: function create() {
      var _this = this;

      console.log(this.newData);
      var dataToSet = {
        name: this.newData.name,
        start_date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.start_date).format("YYYY-MM-DD"),
        end_date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.end_date).format("YYYY-MM-DD"),
        id_management: this.id_management.toString() //Db validates string based in string not number

      };
      notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.init({
        clickToClose: true
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("period.api.create"), dataToSet)["catch"](function (error) {
        _this.flushErrors();

        if (error.response.data.message) {
          if (error.response.data.type == 1) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure(error.response.data.message);
          } else {
            _this.setErrors(error.response.data.errors, error.response.data.message);
          }
        } else {
          if (error.response.data.type == 1) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure("Error al crear");
          } else {
            _this.errorGeneric = true;
            _this.messageErrorGeneric = error.response.data.message;
          }
        }
      }).then(function (response) {
        try {
          var _response$data;

          if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.success) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.success("Periodo creado con éxito");

            _this.$emit("updatePeriods");

            _this.cancel();
          }
        } catch (error) {
          console.log("No se pudo completar la peticion");
        }
      });
    },
    update: function update() {
      var _this2 = this;

      console.log(this.newData);
      var dataToRefresh = {
        id_period: this.newData.id_period,
        name: this.newData.name,
        start_date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.start_date instanceof Date ? this.newData.start_date.getTime() : dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.start_date, "DD/MM/YYYY")).format("YYYY-MM-DD"),
        end_date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.end_date instanceof Date ? this.newData.end_date.getTime() : dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.end_date, "DD/MM/YYYY")).format("YYYY-MM-DD"),
        id_company: this.id_company,
        realstartdate: this.realstartdate,
        realenddate: this.realenddate
      };
      dataToRefresh = this.removeEmptyValues(dataToRefresh);
      notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.init({
        clickToClose: true
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("period.api.update"), dataToRefresh)["catch"](function (error) {
        _this2.flushErrors();

        if (error.response.data.message) {
          if (error.response.data.type == 1) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure(error.response.data.message);
          } else {
            _this2.setErrors(error.response.data.errors, error.response.data.message);
          }
        } else {
          if (error.response.data.type == 1) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure("Error al actualizar");
          } else {
            _this2.errorGeneric = true;
            _this2.messageErrorGeneric = error.response.data.message;
          }
        }
      }).then(function (response) {
        var _response$data2;

        if (response !== null && response !== void 0 && (_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.success) {
          notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.success("Se ha actualizado el periodo");

          _this2.$emit("updatePeriods");

          _this2.$emit("cleanSelectedPeriod");

          _this2.cancel();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var _Modal_Period_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal-Period.vue */ "./resources/js/Pages/SimpleTemplates/Modal-Period.vue");
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notiflix/build/notiflix-confirm-aio */ "./node_modules/notiflix/build/notiflix-confirm-aio.js");
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notiflix/build/notiflix-loading-aio */ "./node_modules/notiflix/build/notiflix-loading-aio.js");
/* harmony import */ var notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  emits: ["updateData", "goBack", "setTitleUp"],
  components: {
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_0__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModalPeriod: _Modal_Period_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    management: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      filters: {
        global: {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_3__.FilterMatchMode.CONTAINS
        }
      },
      periodsData: [],
      selectedPeriod: {},
      showModalCreate: false,
      showModalEdit: false
    };
  },
  watch: {
    management: {
      handler: function handler() {
        this.setDataTable();
      }
    }
  },
  mounted: function mounted() {
    this.setDataTable();
    this.$emit("setTitleUp", "Administraci\xF3n de gesti\xF3n -> ".concat(this.management.name, " [ ").concat(this.management.start_date, " - ").concat(this.management.end_date, " ]"));
  },
  methods: {
    goReport: function goReport() {
      window.open("\n                http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReportePeriodo&standAlone=true&id_user=".concat(this.management.id_user, "&id_company=").concat(this.management.id_company, "&id_management=").concat(this.management.id_management, "&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no\n                "));
    },
    deletePeriod: function deletePeriod() {
      var _this = this;

      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__.Confirm.init({
        titleColor: "#FF0000",
        messageColor: "#FF0000",
        okButtonBackground: "#FF0000"
      });
      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__.Confirm.show("¿Deseas eliminar el periodo?", "Estás a punto de eliminar el periodo " + this.selectedPeriod.name, "Eliminar", "Cancelar", function () {
        notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_8__.Loading.standard({
          clickToClose: false,
          svgSize: "200"
        });
        var params = {
          id_period: _this.selectedPeriod.id_period,
          id_user: _this.management.id_user,
          id_company: _this.management.id_company,
          start_date: _this.selectedPeriod.start_date,
          end_date: _this.selectedPeriod.end_date
        };
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_9__.Notify.init({
          clickToClose: true
        });
        console.log("pasando trash", params);
        axios__WEBPACK_IMPORTED_MODULE_4___default().post(route("period.api.delete"), params).then(function (res) {
          var _res$data;

          if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.success) {
            _this.setDataTable();

            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_9__.Notify.success("Periodo eliminado");
            _this.selectedPeriod = {};
          } else {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_9__.Notify.failure(res.data.message);
            _this.selectedPeriod = {};
          }

          notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_8__.Loading.remove(250);
        })["catch"](function (err) {
          // console.error(err);
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_9__.Notify.failure(err);
          notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_8__.Loading.remove(250);
        });
      }); //
    },
    formatDate: function formatDate(data) {
      data.forEach(function (val) {
        val.start_date = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(val.start_date).format("DD/MM/YYYY");
        val.end_date = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(val.end_date).format("DD/MM/YYYY");
      });
    },
    setDataTable: function setDataTable() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default().get(route("period.api.read", this.management.id_management)).then(function (response) {
        _this2.periodsData = response.data; // console.log("fecha original", this.periodsData);

        _this2.formatDate(_this2.periodsData); // console.log("fecha transformada🤨", this.periodsData);

      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=template&id=89f87f9c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=template&id=89f87f9c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "relative px-4 w-full max-w-2xl h-full md:h-auto"
};
var _hoisted_4 = {
  "class": "relative bg-gray-800 rounded-lg shadow"
};
var _hoisted_5 = {
  "class": "flex justify-between items-start p-3 rounded-t border-b border-gray-500"
};
var _hoisted_6 = {
  "class": "text-xl font-semibold text-gray-300 lg:text-2xl"
};
var _hoisted_7 = {
  "class": "p-4 space-y-6"
};
var _hoisted_8 = {
  "class": "relative z-0 mb-5 w-full group"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
}, "Nombre Periodo *", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "relative mb-5 z-0 w-full group"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "address",
  "class": "block mb-2 text-gray-400"
}, "Seleccione el rango de fechas:", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "flex items-center"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mx-2 text-gray-400"
}, "Desde", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mr-2 ml-8 text-gray-400"
}, "Hasta", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex items-center p-3 space-x-2 rounded-b border-t border-gray-500"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _directive_focus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("focus");

  return $props.showModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.modalTitle), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    autocomplete: "off",
    type: "text",
    "class": "block py-2.5 px-0 w-full text-xl text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
    onkeypress: "return /[A-Z 0-9]/i.test(event.key)",
    maxlength: "15",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.newData.name = $event;
    }),
    placeholder: " ",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[_directive_focus], [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newData.name]]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<label\n                                    v-if=\"errorName\"\n                                    for=\"name\"\n                                    class=\"absolute text-sm text-red-500 duration-300 transform\"\n                                    >{{ messageErrorName }}\n                                </label>")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
    modelValue: $data.newData.start_date,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.newData.start_date = $event;
    }),
    dateFormat: "dd/mm/yy",
    baseZIndex: 100
  }, {
    date: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('color: ' + $options.setColorForDate(slotProps.date) + ';')
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.date.day), 5
      /* TEXT, STYLE */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
    baseZIndex: 100,
    modelValue: $data.newData.end_date,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.newData.end_date = $event;
    }),
    dateFormat: "dd/mm/yy"
  }, {
    date: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('color: ' + $options.setColorForDate(slotProps.date) + ';')
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.date.day), 5
      /* TEXT, STYLE */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>\n                                    <label\n                                        v-if=\"errorStart_date\"\n                                        style=\"width: 270px\"\n                                        class=\"absolute text-sm text-red-500 duration-300 transform\"\n                                        >{{ messageErrorStart_date }}\n                                    </label>\n                                </p>\n                                <p class=\"ml-80\">\n                                    <label\n                                        v-if=\"errorEnd_date\"\n                                        class=\"absolute text-sm text-red-500 duration-300 transform\"\n                                        >{{ messageErrorEnd_date }}\n                                    </label>\n                                </p>\n                                <label\n                                    v-if=\"errorGeneric\"\n                                    for=\"name\"\n                                    class=\"text-base text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6\"\n                                    >{{ messageErrorGeneric }}\n                                </label>")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.cancel();
    }),
    type: "button",
    "class": "text-white bg-rose-600 hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Cancelar "), $props.modalButtons == 'register' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.create && $options.create.apply($options, arguments);
    }),
    type: "button",
    id: "register",
    "class": "text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Registrar ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.modalButtons == 'edit' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.update && $options.update.apply($options, arguments);
    }),
    type: "button",
    id: "edit",
    "class": "text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Editar ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=template&id=03067ed2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=template&id=03067ed2 ***!
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  "class": "col-span-1 self-end mb-2 sm:mb-0"
};
var _hoisted_7 = {
  "class": "flex justify-center sm:justify-end space-x-2"
};
var _hoisted_8 = ["disabled"];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_10 = [_hoisted_9];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_12 = [_hoisted_11];
var _hoisted_13 = ["disabled"];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_15 = [_hoisted_14];
var _hoisted_16 = ["disabled"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
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

var _hoisted_18 = [_hoisted_17];

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No hay periodos, ¡añade uno! ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_ModalPeriod = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalPeriod");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      _ctx.$emit('goBack');

      _ctx.$emit('setTitleUp', "Administraci\xF3n de gesti\xF3n");
    }),
    "class": "bg-sky-600 hover:bg-sky-700 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_5)), [[_directive_tooltip, {
    value: 'Volver a gestiones',
    "class": 'text-center'
  }, void 0, {
    right: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: $props.management.status == 0,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.showModalCreate = true;
    }),
    "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_10, 8
  /* PROPS */
  , _hoisted_8)), [[_directive_tooltip, {
    value: 'Añadir un periodo',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.goReport && $options.goReport.apply($options, arguments);
    }),
    "class": "disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_12)), [[_directive_tooltip, {
    value: 'Generar reportes',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: Object.keys($data.selectedPeriod).length == 0 ? true : $props.management.status == 0 ? true : false,
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.showModalEdit = true;
    }),
    "class": "disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_15, 8
  /* PROPS */
  , _hoisted_13)), [[_directive_tooltip, {
    value: 'Edita periodo',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.deletePeriod();
    }),
    disabled: Object.keys($data.selectedPeriod).length == 0 ? true : false,
    "class": "disabled:bg-rose-800 bg-rose-500 hover:bg-rose-600 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_18, 8
  /* PROPS */
  , _hoisted_16)), [[_directive_tooltip, {
    value: 'Eliminar esta periodo',
    "class": 'text-center'
  }, void 0, {
    left: true
  }]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    "class": "p-datatable-lg",
    value: $data.periodsData,
    dataKey: "id_period",
    paginator: true,
    rows: 10,
    responsiveLayout: "scroll",
    selection: $data.selectedPeriod,
    "onUpdate:selection": _cache[5] || (_cache[5] = function ($event) {
      return $data.selectedPeriod = $event;
    }),
    selectionMode: "single",
    filters: $data.filters,
    "onUpdate:filters": _cache[6] || (_cache[6] = function ($event) {
      return $data.filters = $event;
    }),
    style: {}
  }, {
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_19];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Nombre",
        sortable: true,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "start_date",
        header: "Fecha inicio",
        sortable: false,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "end_date",
        header: "Fecha fin",
        sortable: false,
        filterMatchMode: "contains"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "status",
        header: "Estado",
        sortable: true,
        filterMatchMode: "contains"
      }, {
        body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('bg-' + (slotProps.data.status == 1 ? 'green' : 'red') + '-600 text-white p-1.5 rounded-lg')
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.status == 1 ? "ABIERTO" : "CERRADO"), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "selection", "filters"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal for creating"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalPeriod, {
    managementData: $props.management,
    periodDates: $data.periodsData,
    id_management: $props.management.id_management,
    showModal: $data.showModalCreate,
    modalTitle: "Crear periodo",
    modalButtons: "register",
    onClose: _cache[7] || (_cache[7] = function ($event) {
      return $data.showModalCreate = false;
    }),
    onUpdatePeriods: $options.setDataTable
  }, null, 8
  /* PROPS */
  , ["managementData", "periodDates", "id_management", "showModal", "onUpdatePeriods"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal for editing "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalPeriod, {
    managementData: $props.management,
    periodData: $data.selectedPeriod,
    periodDates: $data.periodsData,
    id_management: $props.management.id_management,
    id_company: $props.management.id_company,
    id_user: $props.management.id_user,
    showModal: $data.showModalEdit,
    modalTitle: "Editar Periodo",
    modalButtons: "edit",
    onClose: _cache[8] || (_cache[8] = function ($event) {
      return $data.showModalEdit = false;
    }),
    onUpdatePeriods: $options.setDataTable,
    onCleanSelectedPeriod: _cache[9] || (_cache[9] = function ($event) {
      return $data.selectedPeriod = {};
    }),
    realstartdate: $data.selectedPeriod.start_date,
    realenddate: $data.selectedPeriod.end_date
  }, null, 8
  /* PROPS */
  , ["managementData", "periodData", "periodDates", "id_management", "id_company", "id_user", "showModal", "onUpdatePeriods", "realstartdate", "realenddate"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Period.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Period.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_Period_vue_vue_type_template_id_89f87f9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal-Period.vue?vue&type=template&id=89f87f9c */ "./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=template&id=89f87f9c");
/* harmony import */ var _Modal_Period_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal-Period.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_Period_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_Period_vue_vue_type_template_id_89f87f9c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Modal-Period.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-Periods.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-Periods.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_Periods_vue_vue_type_template_id_03067ed2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table-Periods.vue?vue&type=template&id=03067ed2 */ "./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=template&id=03067ed2");
/* harmony import */ var _Table_Periods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table-Periods.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Table_Periods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Table_Periods_vue_vue_type_template_id_03067ed2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Table-Periods.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Period_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Period_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Period.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Periods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Periods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-Periods.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=template&id=89f87f9c":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=template&id=89f87f9c ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Period_vue_vue_type_template_id_89f87f9c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Period_vue_vue_type_template_id_89f87f9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Period.vue?vue&type=template&id=89f87f9c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Period.vue?vue&type=template&id=89f87f9c");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=template&id=03067ed2":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=template&id=03067ed2 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Periods_vue_vue_type_template_id_03067ed2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_Periods_vue_vue_type_template_id_03067ed2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-Periods.vue?vue&type=template&id=03067ed2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-Periods.vue?vue&type=template&id=03067ed2");


/***/ })

}]);