"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Crud-Account_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Crud-Account.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Crud-Account.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimpleTemplates_DropDownUser_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleTemplates/DropDownUser.vue */ "./resources/js/Pages/SimpleTemplates/DropDownUser.vue");
/* harmony import */ var _SimpleTemplates_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleTemplates/Navbar.vue */ "./resources/js/Pages/SimpleTemplates/Navbar.vue");
/* harmony import */ var _SimpleTemplates_Table_ManagementDate_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleTemplates/Table-ManagementDate.vue */ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var primevue_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/tree */ "./node_modules/primevue/tree/tree.esm.js");
/* harmony import */ var _SimpleTemplates_Modal_Account_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SimpleTemplates/Modal-Account.vue */ "./resources/js/Pages/SimpleTemplates/Modal-Account.vue");
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notiflix/build/notiflix-confirm-aio */ "./node_modules/notiflix/build/notiflix-confirm-aio.js");
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_8__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  components: {
    DropDownUser: _SimpleTemplates_DropDownUser_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navbar: _SimpleTemplates_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TableManagementDate: _SimpleTemplates_Table_ManagementDate_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Tree: primevue_tree__WEBPACK_IMPORTED_MODULE_5__["default"],
    ModalAccount: _SimpleTemplates_Modal_Account_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      company: [],
      userData: [],
      accounts: [],
      expandedKeys: {},
      selectedAccount: {},
      newAccount: "",
      showModalCreate: false,
      showModalEdit: false,
      selectedAccountData: {}
    };
  },
  mounted: function mounted() {
    this.setUser();
    this.setData();
  },
  methods: {
    goReport: function goReport() {
      window.open("http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteCuenta&standAlone=true&idd_user=".concat(this.company.id_user, "&id_company=").concat(this.company.id_company, "&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no"));
    },
    deleteAccount: function deleteAccount() {
      var _this = this;

      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__.Confirm.init({
        titleColor: "#FF0000",
        messageColor: "#FF0000",
        okButtonBackground: "#FF0000"
      });
      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_7__.Confirm.show("¿Deseas eliminar la cuenta?", "Estás a punto de eliminar la cuenta " + this.selectedAccountData.label, "Eliminar", "Cancelar", function () {
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_8__.Notify.init({
          clickToClose: true
        });
        var data = {
          id_account: _this.selectedAccountData.id_account
        };
        axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("accounts.api.delete"), data)["catch"](function (error) {
          // Notify.failure(error?.response?.data?.message);
          for (var i in error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.errors) {
            var _error$response, _error$response$data;

            console.log(error.response.data.errors);

            if (error.response.data.errors[i][0] != error.response.data.message) {
              notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_8__.Notify.failure(error.response.data.errors[i][0]);
            }
          }
        }).then(function (response) {
          if (response.data.success) {
            _this.setData();

            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_8__.Notify.success("Cuenta eliminada con éxito");
            _this.selectedAccountData = {};
          }
        });
      });
    },
    onNodeUnselect: function onNodeUnselect(e) {
      console.log("Unselected", e);
      this.selectedAccountData = {};
    },
    onNodeSelect: function onNodeSelect(e) {
      this.selectedAccountData = e;
    },
    expandAll: function expandAll() {
      for (var node in this.accounts) {
        this.expandNode(this.accounts[node]);
      }

      this.expandedKeys = _objectSpread({}, this.expandedKeys);
    },
    collapseAll: function collapseAll() {
      this.expandedKeys = {};
    },
    expandNode: function expandNode(node) {
      this.expandedKeys[node.key] = true;

      if (node.children && node.children.length) {
        var _iterator = _createForOfIteratorHelper(node.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            this.expandNode(child);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
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
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(route("accounts.api.read", company)).then(function (response) {
        _this3.company = response.data.company; //Set accounts
        //Sort accounts as tree

        /* Complexity to the moon */

        var arrayToTree = function arrayToTree(array) {
          //Assign "Key" to each node
          array.forEach(function (node) {
            node.key = node.id_account;
            node.label = node.code + " - " + node.name;
          });

          var findParent = function findParent(id_parent_account) {
            for (var i = 0; i < array.length; i++) {
              if (array[i]["id_account"] == id_parent_account) {
                return i;
              }
            }

            return -1;
          };

          var allParentsNull = function allParentsNull(array) {
            var _iterator2 = _createForOfIteratorHelper(array),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var node = _step2.value;

                if (node.id_parent_account != null) {
                  return true;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return false;
          };

          var hasChildren = function hasChildren(id_node) {
            var _iterator3 = _createForOfIteratorHelper(array),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var nodes = _step3.value;

                if (nodes.id_parent_account == id_node) {
                  return true;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return false;
          };

          var check = allParentsNull(array);
          var count = 0;

          while (check || count > 1000) {
            for (var i = 0; i < array.length; i++) {
              if (array[i].id_parent_account != null) {
                if (!hasChildren(array[i].id_account)) {
                  var indexParent = findParent(array[i].id_parent_account);

                  if (indexParent != -1) {
                    var found = array[indexParent];

                    if (!found.children) {
                      found.children = [];
                    }

                    found.children.push(array[i]);
                    found.children.sort(function (a, b) {
                      return a.code.localeCompare(b.code, undefined, {
                        numeric: true
                      });
                    });
                  }

                  array.splice(i, 1);
                  break;
                }
              }
            }

            check = allParentsNull(array);
            count++;
          }

          array.sort(function (a, b) {
            return a.code.localeCompare(b.code, undefined, {
              numeric: true
            });
          });
          return array;
        };

        _this3.accounts = arrayToTree(response.data.company.accounts);

        _this3.expandAll(); //Expand all

      });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=script&lang=js ***!
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
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.success("Cuenta actualizada con éxito");

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

          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_1__.Notify.success("Cuenta creada con éxito");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    modalTitle: String,
    modalButtons: String,
    id_company: Number,
    allDates: Array,
    managementData: {
      type: Object,
      "default": {
        id_management: "",
        id_user: "",
        id_company: "",
        status: "",
        start_date: "",
        end_date: "",
        name: ""
      }
    },
    showModal: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    managementData: {
      handler: function handler() {
        this.newData = Object.assign({}, this.managementData); //Shallow copy, newData will be a reference to managementData but it can't managementData
      }
    }
  },
  data: function data() {
    return {
      newData: Object.assign({}, this.managementData),
      //We make it here since props are unmutable NOTE, this shit is mutable and idk why
      dates: this.allDates,
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
      this.newData = Object.assign({}, this.managementData); //Reset old state

      this.flushErrors();
    },
    setColorForDate: function setColorForDate(checkDate) {
      /* First we make the first checkDate, calendar returns it in 3 objects (day, month, year) so we make it a str */
      var month = parseFloat(checkDate.month) + parseFloat(1); //Sum 1 because months are from 0 to 11

      var checkDateStr = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(checkDate.day + "/" + month + "/" + checkDate.year, "D/M/YYYY", true);
      var sendColor = "white";
      /* Then we check if the date is valid*/

      for (var i = 0; i < this.allDates.length; i++) {
        var start = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.allDates[i].start_date, "DD/MM/YYYY", true);
        var end = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.allDates[i].end_date, "DD/MM/YYYY", true);

        if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()(checkDateStr).isBetween(start, end, //End
        null, //Limit
        "[]" //Include
        )) {
          sendColor = "red";

          if (this.allDates[i].id_management == this.managementData.id_management) {
            sendColor = "green";
          }
        }
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
    setErrors: function setErrors(errors) {
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
        id_company: this.id_company.toString() //Db validates string based in string not number

      };
      notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.init({
        clickToClose: true
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("managementdate.api.create"), dataToSet)["catch"](function (error) {
        _this.flushErrors();

        if (error.response.data.message) {
          if (error.response.data.type == 1) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure(error.response.data.message);
          } else {
            var _error$response, _error$response$data;

            _this.setErrors(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.errors);
          }
        } else {
          //Me parece que este else esta de mas, pero bue porsiaca.
          if (error.response.data.type == 1) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure("Error al crear");
          } else {
            _this.errorGeneric = true;
            _this.messageErrorGeneric = error.response.data.message;
          }
        }
      }).then(function (response) {
        try {
          if (response.data.success) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.success("Gestión creada con éxito");

            _this.$emit("update-data");

            _this.cancel();
          }

          console.log(response);
        } catch (error) {
          //console.log(error);
          console.log("No se pudo completar la peticion");
        }
      });
    },
    update: function update() {
      var _this2 = this;

      console.log(this.newData);
      var dataToRefresh = {
        id_management: this.newData.id_management,
        name: this.newData.name,
        start_date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.start_date instanceof Date ? this.newData.start_date.getTime() : dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.start_date, "DD/MM/YYYY")).format("YYYY-MM-DD"),
        end_date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.end_date instanceof Date ? this.newData.end_date.getTime() : dayjs__WEBPACK_IMPORTED_MODULE_3___default()(this.newData.end_date, "DD/MM/YYYY")).format("YYYY-MM-DD")
      };
      dataToRefresh = this.removeEmptyValues(dataToRefresh);
      notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.init({
        clickToClose: true
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(route("managementdate.api.update"), dataToRefresh)["catch"](function (error) {
        _this2.flushErrors();

        if (error.response.data.message) {
          if (error.response.data.type == 1) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.failure(error.response.data.message);
          } else {
            var _error$response2, _error$response2$data;

            _this2.setErrors(error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.errors);
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
        try {
          if (response.data.success) {
            notiflix__WEBPACK_IMPORTED_MODULE_2__.Notify.success("Se ha actualizado la gestión");

            _this2.$emit("update-data");

            _this2.cancel();
          }
        } catch (error) {
          console.log("No se pudo completar la peticion");
        }
      });
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/datatable */ "./node_modules/primevue/datatable/datatable.esm.js");
/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/column */ "./node_modules/primevue/column/column.esm.js");
/* harmony import */ var _Modal_Management_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal-Management.vue */ "./resources/js/Pages/SimpleTemplates/Modal-Management.vue");
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notiflix/build/notiflix-confirm-aio */ "./node_modules/notiflix/build/notiflix-confirm-aio.js");
/* harmony import */ var notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! notiflix/build/notiflix-loading-aio */ "./node_modules/notiflix/build/notiflix-loading-aio.js");
/* harmony import */ var notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notiflix/build/notiflix-notify-aio */ "./node_modules/notiflix/build/notiflix-notify-aio.js");
/* harmony import */ var notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Table_Periods_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table-Periods.vue */ "./resources/js/Pages/SimpleTemplates/Table-Periods.vue");











 //Set options for notify

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    tooltip: primevue_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"]
  },

  /* With emits you tell the parent component to do something */
  emits: ["update-data", "setTitleUp"],
  props: {
    company: {
      type: Object,
      "default": {}
    }
  },
  components: {
    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Column: primevue_column__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalManagementDate: _Modal_Management_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TablePeriods: _Table_Periods_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },

  /* Because we can't edit props directly we must define data from props */
  data: function data() {
    return {
      dates: this.company.management_dates,
      filters: {
        global: {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS
        }
      },
      currentCellId: "",
      showModalCreate: false,
      showModalEdit: false,
      searchValue: "",
      selectedDate: {},
      showManagementDate: true
    };
  },
  mounted: function mounted() {
    this.dates != undefined ? this.transformDates() : "";
  },

  /* Also this props are updated with a watcher */
  watch: {
    company: {
      handler: function handler() {
        this.dates = this.company.management_dates;
        this.selectedDate = {};
        this.transformDates();
      }
    }
  },
  methods: {
    goReport: function goReport() {
      window.open("http://reportes.queeserp.tk/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Fthemes%2FReportes&reportUnit=%2Fthemes%2FReportes%2FReporteGestion&standAlone=true&id_user=".concat(this.company.id_user, "&id_company=").concat(this.company.id_company, "&j_username=jasperadmin&j_password=bitnami&sessionDecorator=no"));
    },
    log: function log(message) {
      console.log(message);
    },
    setTitleUp: function setTitleUp(title) {
      this.$emit("setTitleUp", title);
    },
    goToPeriods: function goToPeriods() {
      this.showManagementDate = false;
    },
    deleteManagement: function deleteManagement() {
      var _this = this;

      console.log(this.selectedDate);
      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_8__.Confirm.init({
        titleColor: "#FF0000",
        messageColor: "#FF0000",
        okButtonBackground: "#FF0000"
      });
      notiflix_build_notiflix_confirm_aio__WEBPACK_IMPORTED_MODULE_8__.Confirm.show("¿Deseas eliminar la gestión?", "Estás a punto de eliminar la gestión " + this.selectedDate.name, "Eliminar", "Cancelar", function () {
        notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_9__.Loading.standard({
          clickToClose: false,
          svgSize: "200"
        });
        var params = {
          id_management: _this.selectedDate.id_management
        };
        notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_10__.Notify.init({
          clickToClose: true
        });
        axios__WEBPACK_IMPORTED_MODULE_7___default().post(route("managementdate.api.delete"), params).then(function (res) {
          var _res$data;

          if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.success) {
            _this.$emit("update-data");

            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_10__.Notify.success("Gestión eliminada");
            _this.selectedDate = {};
          } else {
            notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_10__.Notify.failure(res.data.message);
          }

          notiflix_build_notiflix_loading_aio__WEBPACK_IMPORTED_MODULE_9__.Loading.remove(250);
        })["catch"](function (err) {
          console.error(err);
          notiflix_build_notiflix_notify_aio__WEBPACK_IMPORTED_MODULE_10__.Notify.failure("Error al eliminar la gestión");
        });
      }); //

      console.log(this.selectedDate);
      var params = {
        id_management: this.selectedDate.id_management
      };
    },
    setColorForDate: function setColorForDate(checkDate) {
      /* First we make the first checkDate, calendar returns it in 3 objects (day, month, year) so we make it a str */
      var month = parseFloat(checkDate.month) + parseFloat(1); //Sum 1 because months are from 0 to 11

      var checkDateStr = checkDate.year + "/" + month + "/" + checkDate.day;
      var sendColor = "white";
      /* Then we check if the date is valid*/

      for (var i = 0; i < this.dates.length; i++) {
        if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()(checkDateStr).isBetween(this.dates[i].start_date, //Start
        this.dates[i].end_date, //End
        null, //Limit
        "[]" //Include
        )) {
          sendColor = "red";

          if (this.dates[i].id_management == this.currentCellId) {
            sendColor = "green";
          }
        }
      }

      return sendColor;
    },

    /* Transform dates to YYYY/MM/DD */
    transformDates: function transformDates() {
      this.dates.forEach(function (date) {
        date.start_date = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(date.start_date).format("DD/MM/YYYY");
        date.end_date = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(date.end_date).format("DD/MM/YYYY");
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Crud-Account.vue?vue&type=template&id=c3e8ecb2":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Crud-Account.vue?vue&type=template&id=c3e8ecb2 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "text-2xl text-white mb-2"
};
var _hoisted_5 = {
  "class": "flex ml-auto items-center"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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
  d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
})], -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = ["disabled"];

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
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
})], -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];
var _hoisted_13 = ["disabled"];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_15 = [_hoisted_14];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-white"
}, " ▮ Para deseleccionar una cuenta, mantén control y haz click sobre la que te encuentras ", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "w-11/12 ml-auto mr-auto mt-2"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-white text-center mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Copyright© "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://github.com/Hyhy092"
}, "JASM")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navbar");

  var _component_Tree = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tree");

  var _component_ModalAccount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalAccount");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar, {
    userName: $data.userData.name,
    companyName: $data.company.name
  }, null, 8
  /* PROPS */
  , ["userName", "companyName"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_4, " Administracion de Cuentas" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.newAccount), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": "text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showModalCreate = true;
    })
  }, _hoisted_7)), [[_directive_tooltip, {
    value: 'Crear cuenta',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.goReport && $options.goReport.apply($options, arguments);
    }),
    "class": "text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
  }, _hoisted_9)), [[_directive_tooltip, {
    value: 'Reporte de empresas',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: Object.keys($data.selectedAccount).length == 0 ? true : false,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.showModalEdit = true;
    }),
    "class": "text-white disabled:bg-yellow-600 bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
  }, _hoisted_12, 8
  /* PROPS */
  , _hoisted_10)), [[_directive_tooltip, {
    value: 'Editar cuenta seleccionada',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: Object.keys($data.selectedAccount).length == 0 ? true : false,
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.deleteAccount && $options.deleteAccount.apply($options, arguments);
    }),
    "class": "text-white disabled:bg-red-800 bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-2 py-2 text-center"
  }, _hoisted_15, 8
  /* PROPS */
  , _hoisted_13)), [[_directive_tooltip, {
    value: 'Eliminar cuenta seleccionada',
    "class": 'text-center'
  }, void 0, {
    top: true
  }]])])]), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tree, {
    "class": "overflow-x-scroll overflow-y-scroll mt-1",
    style: {
      "max-height": "70vh",
      "max-width": "92vw"
    },
    value: $data.accounts,
    expandedKeys: $data.expandedKeys,
    selectionMode: "single",
    selectionKeys: $data.selectedAccount,
    "onUpdate:selectionKeys": _cache[4] || (_cache[4] = function ($event) {
      return $data.selectedAccount = $event;
    }),
    onNodeSelect: $options.onNodeSelect,
    onNodeUnselect: $options.onNodeUnselect,
    filter: true,
    filterMode: "lenient"
  }, null, 8
  /* PROPS */
  , ["value", "expandedKeys", "selectionKeys", "onNodeSelect", "onNodeUnselect"])])]), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal to create "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalAccount, {
    showModal: $data.showModalCreate,
    onCancel: _cache[5] || (_cache[5] = function ($event) {
      return $data.showModalCreate = false;
    }),
    selectedAccount: $data.selectedAccountData,
    id_company: $data.company.id_company,
    onCreated: $options.setData
  }, null, 8
  /* PROPS */
  , ["showModal", "selectedAccount", "id_company", "onCreated"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal to edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalAccount, {
    modalButtons: "edit",
    showModal: $data.showModalEdit,
    onCancel: _cache[6] || (_cache[6] = function ($event) {
      return $data.showModalEdit = false;
    }),
    selectedAccount: $data.selectedAccountData,
    id_company: $data.company.id_company,
    onCreated: $options.setData
  }, null, 8
  /* PROPS */
  , ["showModal", "selectedAccount", "id_company", "onCreated"])], 64
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=template&id=14ef090c":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=template&id=14ef090c ***!
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
  "class": "relative z-0 left-20 mt-2 mb-5 w-full group"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
}, "Nombre de la cuenta *", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "flex items-center p-3 space-x-2 rounded-b border-t"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_focus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("focus");

  return $props.showModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.modalButtons == "edit" ? "Editando cuenta " : "Añadiendo a ") + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.selectedAccount.name ? $props.selectedAccount.label : "Raiz"), 1
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=template&id=37384598":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=template&id=37384598 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
}, "Nombre Gestión *", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "relative z-0 w-full group"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "address",
  "class": "block mb-2 text-gray-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Seleccione el rango de fechas: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<label\n                                        v-if=\"\n                                            messageErrorGeneric ==\n                                            'Existe solapamiento con otra gestión.'\n                                        \"\n                                        class=\"ml-2 absolute text-sm text-red-500 duration-300 transform\"\n                                        >{{ messageErrorGeneric }}\n                                    </label>")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "flex items-center mb-3"
};
var _hoisted_13 = {
  "class": "relative z-0 w-full group"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mx-2 text-gray-400"
}, "Desde", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "relative z-0 w-full group"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mx-2 text-gray-400"
}, "Hasta", -1
/* HOISTED */
);

var _hoisted_17 = {
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
  ), [[_directive_focus], [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newData.name]]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<label\n                                    v-if=\"errorName\"\n                                    for=\"name\"\n                                    class=\"absolute text-sm text-red-500 duration-300 transform\"\n                                    >{{ messageErrorName }}\n                                </label>\n                                <label\n                                    v-if=\"\n                                        messageErrorGeneric ==\n                                        'El nombre de la gestión ya está tomado.'\n                                    \"\n                                    for=\"name\"\n                                    class=\"absolute text-sm text-red-500 duration-300 transform\"\n                                    >{{ messageErrorGeneric }}\n                                </label>")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
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
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p>\n                                            <label\n                                                v-if=\"errorStart_date\"\n                                                class=\"absolute text-sm text-red-500 duration-300 transform\"\n                                                >{{ messageErrorStart_date }}\n                                            </label>\n                                        </p>")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
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
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<p class=\"ml-4\">\n                                            <label\n                                                v-if=\"errorEnd_date\"\n                                                class=\"absolute text-sm text-red-500 duration-300 transform\"\n                                                >{{ messageErrorEnd_date }}\n                                            </label>\n                                        </p>")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<label\n                                    v-if=\"errorGeneric\"\n                                    for=\"name\"\n                                    class=\"text-base text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6\"\n                                    >{{ messageErrorGeneric }}\n                                </label>")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.cancel();
    }),
    "data-modal-toggle": "modal-addmanagement",
    type: "button",
    "class": "text-white bg-rose-600 hover:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }, " Cancelar "), $props.modalButtons == 'register' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.create && $options.create.apply($options, arguments);
    }),
    "data-modal-toggle": "modal-addmanagement",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=template&id=8b5c857e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=template&id=8b5c857e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "mt-5"
};
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

var _hoisted_11 = [_hoisted_10];

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
var _hoisted_17 = ["disabled"];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
})], -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = ["disabled"];

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_22 = [_hoisted_21];

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No hay gestiones, ¡añade una! ");

var _hoisted_24 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_ModalManagementDate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalManagementDate");

  var _component_TablePeriods = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TablePeriods");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return $data.showManagementDate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    type: "text",
    modelValue: $data.filters['global'].value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.filters['global'].value = $event;
    }),
    placeholder: "Buscar"
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.showModalCreate = true;
    }),
    "class": "disabled:bg-green-800 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_11)), [[_directive_tooltip, {
    value: 'Añadir una gestión',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.goReport && $options.goReport.apply($options, arguments);
    }),
    "class": "disabled:bg-indigo-800 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_13)), [[_directive_tooltip, {
    value: 'Generar reportes',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: Object.keys($data.selectedDate).length == 0 ? true : $data.selectedDate.status == 0 ? true : false,
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.showModalEdit = true;
    }),
    "class": "disabled:bg-yellow-600 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_16, 8
  /* PROPS */
  , _hoisted_14)), [[_directive_tooltip, {
    value: 'Edita la gestión',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: Object.keys($data.selectedDate).length == 0 ? true : false,
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.goToPeriods();
    }),
    "class": "disabled:bg-sky-800 bg-sky-500 hover:bg-sky-600 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_19, 8
  /* PROPS */
  , _hoisted_17)), [[_directive_tooltip, {
    value: 'Ver periodos de esta gestión',
    "class": 'text-center'
  }, void 0, {
    bottom: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: Object.keys($data.selectedDate).length == 0 ? true : false,
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.deleteManagement();
    }),
    "class": "disabled:bg-rose-800 bg-rose-500 hover:bg-rose-600 text-white rounded-lg px-4 py-2.5"
  }, _hoisted_22, 8
  /* PROPS */
  , _hoisted_20)), [[_directive_tooltip, {
    value: 'Eliminar esta gestión',
    "class": 'text-center'
  }, void 0, {
    left: true
  }]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    "class": "p-datatable-lg",
    value: $data.dates,
    dataKey: "id_management",
    paginator: true,
    rows: 10,
    responsiveLayout: "scroll",
    selection: $data.selectedDate,
    "onUpdate:selection": _cache[6] || (_cache[6] = function ($event) {
      return $data.selectedDate = $event;
    }),
    selectionMode: "single",
    filters: $data.filters,
    "onUpdate:filters": _cache[7] || (_cache[7] = function ($event) {
      return $data.filters = $event;
    }),
    style: {}
  }, {
    empty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_23];
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
  , ["value", "selection", "filters"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal for create "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalManagementDate, {
    allDates: $props.company.management_dates,
    id_company: $props.company.id_company,
    showModal: $data.showModalCreate,
    modalTitle: "Crea una gestión",
    modalButtons: "register",
    onClose: _cache[8] || (_cache[8] = function ($event) {
      return $data.showModalCreate = false;
    }),
    onUpdateData: _cache[9] || (_cache[9] = function ($event) {
      return _ctx.$emit('update-data'), $data.selectedDate;
    })
  }, null, 8
  /* PROPS */
  , ["allDates", "id_company", "showModal"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal for edit "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalManagementDate, {
    allDates: $props.company.management_dates,
    id_company: $props.company.id_company,
    showModal: $data.showModalEdit,
    modalTitle: "Editando gestión",
    modalButtons: "edit",
    onClose: _cache[10] || (_cache[10] = function ($event) {
      return $data.showModalEdit = false;
    }),
    managementData: $data.selectedDate,
    onEraseSelection: _cache[11] || (_cache[11] = function ($event) {
      return $data.selectedDate = {};
    }),
    onUpdateData: _cache[12] || (_cache[12] = function ($event) {
      return _ctx.$emit('update-data');
    })
  }, null, 8
  /* PROPS */
  , ["allDates", "id_company", "showModal", "managementData"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TablePeriods, {
    onGoBack: _cache[13] || (_cache[13] = function ($event) {
      return $data.showManagementDate = true;
    }),
    onSetTitleUp: $options.setTitleUp,
    management: $data.selectedDate
  }, null, 8
  /* PROPS */
  , ["onSetTitleUp", "management"])]));
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntr.p-highlight {\n    background: rgba(100, 181, 246, 0.5) !important;\n    color: rgba(255, 255, 255, 0.87) !important;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_style_index_0_id_8b5c857e_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_style_index_0_id_8b5c857e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_style_index_0_id_8b5c857e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Crud-Account.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Crud-Account.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Crud_Account_vue_vue_type_template_id_c3e8ecb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Crud-Account.vue?vue&type=template&id=c3e8ecb2 */ "./resources/js/Pages/Crud-Account.vue?vue&type=template&id=c3e8ecb2");
/* harmony import */ var _Crud_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Crud-Account.vue?vue&type=script&lang=js */ "./resources/js/Pages/Crud-Account.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Crud_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Crud_Account_vue_vue_type_template_id_c3e8ecb2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Crud-Account.vue"]])
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

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Account.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Account.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_Account_vue_vue_type_template_id_14ef090c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal-Account.vue?vue&type=template&id=14ef090c */ "./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=template&id=14ef090c");
/* harmony import */ var _Modal_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal-Account.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_Account_vue_vue_type_template_id_14ef090c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Modal-Account.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Management.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Management.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_Management_vue_vue_type_template_id_37384598__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal-Management.vue?vue&type=template&id=37384598 */ "./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=template&id=37384598");
/* harmony import */ var _Modal_Management_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal-Management.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=script&lang=js");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_Management_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_Management_vue_vue_type_template_id_37384598__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Modal-Management.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_ManagementDate_vue_vue_type_template_id_8b5c857e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table-ManagementDate.vue?vue&type=template&id=8b5c857e */ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=template&id=8b5c857e");
/* harmony import */ var _Table_ManagementDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table-ManagementDate.vue?vue&type=script&lang=js */ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=script&lang=js");
/* harmony import */ var _Table_ManagementDate_vue_vue_type_style_index_0_id_8b5c857e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css */ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css");
/* harmony import */ var _home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_silva_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Table_ManagementDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Table_ManagementDate_vue_vue_type_template_id_8b5c857e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue"]])
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

/***/ "./resources/js/Pages/Crud-Account.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Crud-Account.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Crud_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Crud_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Crud-Account.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Crud-Account.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Account.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Management_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Management_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Management.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-ManagementDate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Crud-Account.vue?vue&type=template&id=c3e8ecb2":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Crud-Account.vue?vue&type=template&id=c3e8ecb2 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Crud_Account_vue_vue_type_template_id_c3e8ecb2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Crud_Account_vue_vue_type_template_id_c3e8ecb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Crud-Account.vue?vue&type=template&id=c3e8ecb2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Crud-Account.vue?vue&type=template&id=c3e8ecb2");


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

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=template&id=14ef090c":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=template&id=14ef090c ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Account_vue_vue_type_template_id_14ef090c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Account_vue_vue_type_template_id_14ef090c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Account.vue?vue&type=template&id=14ef090c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Account.vue?vue&type=template&id=14ef090c");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=template&id=37384598":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=template&id=37384598 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Management_vue_vue_type_template_id_37384598__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_Management_vue_vue_type_template_id_37384598__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal-Management.vue?vue&type=template&id=37384598 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Modal-Management.vue?vue&type=template&id=37384598");


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

/***/ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=template&id=8b5c857e":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=template&id=8b5c857e ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_template_id_8b5c857e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_template_id_8b5c857e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-ManagementDate.vue?vue&type=template&id=8b5c857e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=template&id=8b5c857e");


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

/***/ "./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_bfbe42fe_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Navbar.vue?vue&type=style&index=0&id=bfbe42fe&lang=css");


/***/ }),

/***/ "./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Table_ManagementDate_vue_vue_type_style_index_0_id_8b5c857e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SimpleTemplates/Table-ManagementDate.vue?vue&type=style&index=0&id=8b5c857e&lang=css");


/***/ })

}]);