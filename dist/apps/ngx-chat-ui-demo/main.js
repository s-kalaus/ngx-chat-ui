(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/ngx-chat-ui/src/index.ts":
/*!**************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/index.ts ***!
  \**************************************************/
/*! exports provided: NgxChatUiModule, NgxChatUiService, INgxChatUiMessageType, INgxChatUiMessageActionSelectItemActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-chat-ui.module */ "../../libs/ngx-chat-ui/src/lib/ngx-chat-ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiModule", function() { return _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_1__["NgxChatUiModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiService", function() { return _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_1__["NgxChatUiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageType", function() { return _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_1__["INgxChatUiMessageType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageActionSelectItemActionType", function() { return _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_1__["INgxChatUiMessageActionSelectItemActionType"]; });





/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/classes/base.component.ts":
/*!***********************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/classes/base.component.ts ***!
  \***********************************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-auto-unsubscribe */ "../../node_modules/ngx-auto-unsubscribe/dist/index.js");


var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.subscriptions = [];
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.init();
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.subscriptions
            .forEach(function (subscription) { return subscription.unsubscribe(); });
        this.destroy();
    };
    BaseComponent.prototype.init = function () {
    };
    BaseComponent.prototype.destroy = function () {
    };
    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__["AutoUnsubscribe"])()
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/classes/index.ts":
/*!**************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/classes/index.ts ***!
  \**************************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ "../../libs/ngx-chat-ui/src/lib/classes/base.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]; });





/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.scss":
/*!*************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/action.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.ts":
/*!***********************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/action.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NgxChatUiActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiActionComponent", function() { return NgxChatUiActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");





var NgxChatUiActionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiActionComponent, _super);
    function NgxChatUiActionComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.isSending = false;
        _this.message = null;
        _this.MessageType = _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"];
        return _this;
    }
    NgxChatUiActionComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('action', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }), this.ngxChatUiService
            .actionGet(this.chatKey)
            .subscribe(function (message) { return _this.message = message; }), this.ngxChatUiService
            .stateGet(this.chatKey)
            .subscribe(function (state) { return _this.isSending = state.isSending; }));
    };
    NgxChatUiActionComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionComponent.prototype, "chatKey", void 0);
    NgxChatUiActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/action.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionComponent);
    return NgxChatUiActionComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.scss":
/*!********************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.ts":
/*!******************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NgxChatUiActionAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiActionAutocompleteComponent", function() { return NgxChatUiActionAutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");





var NgxChatUiActionAutocompleteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiActionAutocompleteComponent, _super);
    function NgxChatUiActionAutocompleteComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.value = [];
        _this.data = [];
        _this.isSingle = false;
        return _this;
    }
    NgxChatUiActionAutocompleteComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('actionAutocomplete', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }), this.ngxChatUiService
            .callbacksGet(this.chatKey)
            .subscribe(function (callbacks) {
            var action = _this.message.action;
            _this.searchCallback = callbacks[action.callback];
            _this.isSingle = action.meta && action.meta.single;
        }));
    };
    NgxChatUiActionAutocompleteComponent.prototype.onChange = function (autocomplete, query) {
        var _this = this;
        this.searchCallback(query, function (data) { return _this.data = data
            .filter(function (item) { return !_this.value.find(function (theValue) { return theValue === item; }); }); });
    };
    NgxChatUiActionAutocompleteComponent.prototype.onFocused = function (autocomplete) {
        autocomplete.clear();
        autocomplete.close();
        this.data = [];
    };
    NgxChatUiActionAutocompleteComponent.prototype.select = function (autocomplete, value) {
        this.value.push(value);
        this.onFocused(autocomplete);
        if (this.isSingle) {
            this.submit();
        }
    };
    NgxChatUiActionAutocompleteComponent.prototype.removeTag = function (value) {
        var index = this.value.findIndex(function (theValue) { return theValue === value; });
        if (index !== -1) {
            this.value.splice(index, 1);
        }
    };
    NgxChatUiActionAutocompleteComponent.prototype.submit = function () {
        if (!this.value.length) {
            return;
        }
        this.response.emit({
            chatKey: this.chatKey,
            payload: {
                type: _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"].autocomplete,
                value: this.value,
            },
        });
    };
    NgxChatUiActionAutocompleteComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionAutocompleteComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionAutocompleteComponent.prototype, "message", void 0);
    NgxChatUiActionAutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action-autocomplete',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autocomplete.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autocomplete.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionAutocompleteComponent);
    return NgxChatUiActionAutocompleteComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.scss":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vc2VsZWN0L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.ts":
/*!*********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NgxChatUiActionSelectItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiActionSelectItemComponent", function() { return NgxChatUiActionSelectItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiActionSelectItemComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiActionSelectItemComponent, _super);
    function NgxChatUiActionSelectItemComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    NgxChatUiActionSelectItemComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('actionSelectItem', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
    };
    NgxChatUiActionSelectItemComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionSelectItemComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionSelectItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiActionSelectItemComponent.prototype, "response", void 0);
    NgxChatUiActionSelectItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action-select-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionSelectItemComponent);
    return NgxChatUiActionSelectItemComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.scss":
/*!********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/select.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.ts":
/*!******************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/select.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NgxChatUiActionSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiActionSelectComponent", function() { return NgxChatUiActionSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");





var NgxChatUiActionSelectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiActionSelectComponent, _super);
    function NgxChatUiActionSelectComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiActionSelectComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService.templatesGet('actionSelect', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
    };
    NgxChatUiActionSelectComponent.prototype.submit = function (item) {
        this.response.emit({
            chatKey: this.chatKey,
            payload: {
                type: _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"].select,
                value: item.id,
                messageId: this.message.messageId,
            },
        });
    };
    NgxChatUiActionSelectComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionSelectComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionSelectComponent.prototype, "message", void 0);
    NgxChatUiActionSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action-select',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionSelectComponent);
    return NgxChatUiActionSelectComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.scss":
/*!****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/text/text.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.ts":
/*!**************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/text/text.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NgxChatUiActionTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiActionTextComponent", function() { return NgxChatUiActionTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");






var NgxChatUiActionTextComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiActionTextComponent, _super);
    function NgxChatUiActionTextComponent(formBuilder, ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.type = 'text';
        _this.createForm();
        return _this;
    }
    NgxChatUiActionTextComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    NgxChatUiActionTextComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('actionText', this.chatKey)
            .subscribe(function (template) {
            _this.template = template;
            _this.type = (_this.message.action.meta && _this.message.action.meta.type) || 'text';
        }));
    };
    NgxChatUiActionTextComponent.prototype.submit = function () {
        if (this.form.invalid) {
            return;
        }
        this.response.emit({
            chatKey: this.chatKey,
            payload: {
                type: _interfaces__WEBPACK_IMPORTED_MODULE_4__["INgxChatUiMessageType"].text,
                meta: {
                    type: this.type,
                },
                value: this.form.value.text,
            },
        });
    };
    NgxChatUiActionTextComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionTextComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionTextComponent.prototype, "message", void 0);
    NgxChatUiActionTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action-text',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["NgxChatUiService"]])
    ], NgxChatUiActionTextComponent);
    return NgxChatUiActionTextComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.scss":
/*!********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.ts":
/*!******************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NgxChatUiActionUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiActionUploadComponent", function() { return NgxChatUiActionUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");





var NgxChatUiActionUploadComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiActionUploadComponent, _super);
    function NgxChatUiActionUploadComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.value = [];
        _this.isSingle = false;
        _this.isUploading = false;
        return _this;
    }
    NgxChatUiActionUploadComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('actionUpload', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }), this.ngxChatUiService
            .callbacksGet(this.chatKey)
            .subscribe(function (callbacks) {
            var action = _this.message.action;
            _this.uploadCallback = callbacks[action.callback];
            _this.config = (action.meta && action.meta.config) || {};
            _this.isSingle = action.meta && action.meta.single;
        }));
    };
    NgxChatUiActionUploadComponent.prototype.onUploadSuccess = function (dropzone, file) {
        var _this = this;
        this.uploadCallback(file[1], function (data) {
            _this.value.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data));
            _this.removeDropzoneFile(dropzone, file[0]);
            if (_this.isSingle) {
                _this.submit();
            }
        });
    };
    NgxChatUiActionUploadComponent.prototype.onUploadError = function (dropzone, file) {
        this.removeDropzoneFile(dropzone, file[0]);
    };
    NgxChatUiActionUploadComponent.prototype.onAddedFile = function () {
        this.isUploading = true;
    };
    NgxChatUiActionUploadComponent.prototype.onComplete = function () {
        this.isUploading = false;
    };
    NgxChatUiActionUploadComponent.prototype.removeDropzoneFile = function (dropzone, file) {
        var dropzoneRef = dropzone.dropzone();
        dropzoneRef.removeFile(file);
    };
    NgxChatUiActionUploadComponent.prototype.removeFile = function (file) {
        var index = this.value.findIndex(function (theFile) { return theFile === file; });
        if (index !== -1) {
            this.value.splice(index, 1);
        }
    };
    NgxChatUiActionUploadComponent.prototype.submit = function () {
        this.response.emit({
            chatKey: this.chatKey,
            payload: {
                type: _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"].upload,
                value: this.value.map(function (file) { return ({
                    name: file.name,
                    url: file.url,
                }); }),
            },
        });
    };
    NgxChatUiActionUploadComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionUploadComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionUploadComponent.prototype, "message", void 0);
    NgxChatUiActionUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action-upload',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionUploadComponent);
    return NgxChatUiActionUploadComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.scss":
/*!*******************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/container/container.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.ts":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/container/container.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NgxChatUiContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiContainerComponent", function() { return NgxChatUiContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiContainerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiContainerComponent, _super);
    function NgxChatUiContainerComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.itemAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.dialogEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    NgxChatUiContainerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.partners !== undefined) {
            this.ngxChatUiService
                .partnersSet(changes.partners.currentValue, this.chatKey);
        }
        if (changes.messages !== undefined) {
            this.ngxChatUiService
                .messagesSet(changes.messages.currentValue, this.chatKey);
        }
        if (changes.state !== undefined) {
            this.ngxChatUiService
                .stateSet(changes.state.currentValue, this.chatKey);
        }
        if (changes.callbacks !== undefined) {
            this.ngxChatUiService
                .callbacksSet(changes.callbacks.currentValue, this.chatKey);
        }
    };
    NgxChatUiContainerComponent.prototype.init = function () {
        var _this = this;
        this.ngxChatUiService.templatesSet(this.ngxChatUiService.templateKeys.reduce(function (prev, key) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prev, (_a = {}, _a[key] = _this[key + "Template"] || _this[key + "TemplateDefault"], _a)));
        }, {}), this.chatKey);
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('container', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }), this.ngxChatUiService
            .response$
            .subscribe(function (response) { return _this.onResponse(response); }), this.ngxChatUiService
            .itemAction$
            .subscribe(function (itemAction) { return _this.onItemAction(itemAction); }), this.ngxChatUiService
            .dialogEnd$
            .subscribe(function (dialogEnd) { return _this.onDialogEnd(dialogEnd); }));
    };
    NgxChatUiContainerComponent.prototype.destroy = function () {
        this.ngxChatUiService.cleanup(this.chatKey);
    };
    NgxChatUiContainerComponent.prototype.onResponse = function (response) {
        if (response.chatKey !== this.chatKey) {
            return;
        }
        if (this.response) {
            this.response.emit(response.payload);
        }
        this.ngxChatUiService
            .stateSet({ isSending: true });
    };
    NgxChatUiContainerComponent.prototype.onItemAction = function (itemAction) {
        if (itemAction.chatKey !== this.chatKey) {
            return;
        }
        if (this.itemAction) {
            this.itemAction.emit(itemAction.payload);
        }
    };
    NgxChatUiContainerComponent.prototype.onDialogEnd = function (dialogEnd) {
        if (dialogEnd.chatKey !== this.chatKey) {
            return;
        }
        if (this.dialogEnd) {
            this.dialogEnd.emit(dialogEnd.payload);
        }
    };
    NgxChatUiContainerComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('containerTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "containerTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageTypingTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageTypingTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageListTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageListTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageItemTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageItemTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePartnerTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePartnerTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadTextTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadTextTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadUploadTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadUploadTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadSelectTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadSelectTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadAutocompleteTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadAutocompleteTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageMetaTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageMetaTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTextTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionTextTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionAutocompleteTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionAutocompleteTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionSelectTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionSelectTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionSelectItemTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionSelectItemTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionUploadTemplateDefault', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionUploadTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "containerTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageTypingTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageListTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageItemTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePartnerTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadTextTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadUploadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadSelectTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadAutocompleteTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageMetaTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionTextTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionAutocompleteTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionSelectTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionSelectItemTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionUploadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiContainerComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgxChatUiContainerComponent.prototype, "messages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgxChatUiContainerComponent.prototype, "partners", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiContainerComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiContainerComponent.prototype, "callbacks", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiContainerComponent.prototype, "itemAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiContainerComponent.prototype, "dialogEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiContainerComponent.prototype, "response", void 0);
    NgxChatUiContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-container',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/container/container.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiContainerComponent);
    return NgxChatUiContainerComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.scss":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/item/item.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.ts":
/*!***************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/item/item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NgxChatUiMessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessageItemComponent", function() { return NgxChatUiMessageItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessageItemComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessageItemComponent, _super);
    function NgxChatUiMessageItemComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiMessageItemComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messageItem', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
    };
    NgxChatUiMessageItemComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageItemComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageItemComponent.prototype, "message", void 0);
    NgxChatUiMessageItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageItemComponent);
    return NgxChatUiMessageItemComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.scss":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/list/list.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.ts":
/*!***************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/list/list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NgxChatUiMessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessageListComponent", function() { return NgxChatUiMessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessageListComponent, _super);
    function NgxChatUiMessageListComponent(element, ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.messages = [];
        return _this;
    }
    NgxChatUiMessageListComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messageList', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }), this.ngxChatUiService
            .messagesGet(this.chatKey)
            .subscribe(function (messages) { return _this.onMessageChanged(messages); }), this.ngxChatUiService
            .stateGet(this.chatKey)
            .subscribe(function () { return _this.scrollBottom(); }));
    };
    NgxChatUiMessageListComponent.prototype.trackByFn = function (index) {
        return index;
    };
    NgxChatUiMessageListComponent.prototype.onMessageChanged = function (messages) {
        this.messages = messages;
        this.scrollBottom();
    };
    NgxChatUiMessageListComponent.prototype.scrollBottom = function () {
        var _this = this;
        setTimeout(function () {
            var el = _this.element.nativeElement;
            el.scrollTop = el.scrollHeight;
        });
    };
    NgxChatUiMessageListComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageListComponent.prototype, "chatKey", void 0);
    NgxChatUiMessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageListComponent);
    return NgxChatUiMessageListComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.scss":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL21ldGEvbWV0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.ts":
/*!***************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NgxChatUiMessageMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessageMetaComponent", function() { return NgxChatUiMessageMetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessageMetaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessageMetaComponent, _super);
    function NgxChatUiMessageMetaComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiMessageMetaComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messageMeta', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
    };
    NgxChatUiMessageMetaComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageMetaComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageMetaComponent.prototype, "message", void 0);
    NgxChatUiMessageMetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-meta',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meta.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meta.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageMetaComponent);
    return NgxChatUiMessageMetaComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.scss":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BhcnRuZXIvcGFydG5lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.ts":
/*!*********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NgxChatUiMessagePartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessagePartnerComponent", function() { return NgxChatUiMessagePartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessagePartnerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessagePartnerComponent, _super);
    function NgxChatUiMessagePartnerComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiMessagePartnerComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messagePartner', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
        this.updateAvatar();
    };
    NgxChatUiMessagePartnerComponent.prototype.updateAvatar = function () {
        var avatar = [];
        if (this.message.partner) {
            if (this.message.partner.firstName) {
                avatar.push(this.message.partner.firstName.slice(0, 1));
            }
            if (this.message.partner.lastName) {
                avatar.push(this.message.partner.lastName.slice(0, 1));
            }
        }
        this.avatar = avatar.join('');
    };
    NgxChatUiMessagePartnerComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePartnerComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePartnerComponent.prototype, "message", void 0);
    NgxChatUiMessagePartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-partner',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partner.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partner.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePartnerComponent);
    return NgxChatUiMessagePartnerComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.scss":
/*!*****************************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.ts":
/*!***************************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NgxChatUiMessagePayloadAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessagePayloadAutocompleteComponent", function() { return NgxChatUiMessagePayloadAutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessagePayloadAutocompleteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessagePayloadAutocompleteComponent, _super);
    function NgxChatUiMessagePayloadAutocompleteComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiMessagePayloadAutocompleteComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messagePayloadAutocomplete', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
        this.value = this.message.payload.value.join(', ');
    };
    NgxChatUiMessagePayloadAutocompleteComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadAutocompleteComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadAutocompleteComponent.prototype, "message", void 0);
    NgxChatUiMessagePayloadAutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-payload-autocomplete',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autocomplete.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autocomplete.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadAutocompleteComponent);
    return NgxChatUiMessagePayloadAutocompleteComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.scss":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvcGF5bG9hZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.ts":
/*!*********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NgxChatUiMessagePayloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessagePayloadComponent", function() { return NgxChatUiMessagePayloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");





var NgxChatUiMessagePayloadComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessagePayloadComponent, _super);
    function NgxChatUiMessagePayloadComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.MessageType = _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"];
        return _this;
    }
    NgxChatUiMessagePayloadComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messagePayload', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
    };
    NgxChatUiMessagePayloadComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadComponent.prototype, "message", void 0);
    NgxChatUiMessagePayloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-payload',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payload.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payload.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadComponent);
    return NgxChatUiMessagePayloadComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.scss":
/*!*****************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.ts":
/*!***************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NgxChatUiMessagePayloadSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessagePayloadSelectComponent", function() { return NgxChatUiMessagePayloadSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessagePayloadSelectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessagePayloadSelectComponent, _super);
    function NgxChatUiMessagePayloadSelectComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiMessagePayloadSelectComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messagePayloadSelect', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
        this.initMessage();
    };
    NgxChatUiMessagePayloadSelectComponent.prototype.initMessage = function () {
        this.item = this.ngxChatUiService
            .getItemForItemAction(this.message, this.chatKey);
    };
    NgxChatUiMessagePayloadSelectComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadSelectComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadSelectComponent.prototype, "message", void 0);
    NgxChatUiMessagePayloadSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-payload-select',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadSelectComponent);
    return NgxChatUiMessagePayloadSelectComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.scss":
/*!*************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.ts":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NgxChatUiMessagePayloadTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessagePayloadTextComponent", function() { return NgxChatUiMessagePayloadTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessagePayloadTextComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessagePayloadTextComponent, _super);
    function NgxChatUiMessagePayloadTextComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiMessagePayloadTextComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messagePayloadText', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
    };
    NgxChatUiMessagePayloadTextComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadTextComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadTextComponent.prototype, "message", void 0);
    NgxChatUiMessagePayloadTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-payload-text',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadTextComponent);
    return NgxChatUiMessagePayloadTextComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.scss":
/*!*****************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.ts":
/*!***************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NgxChatUiMessagePayloadUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessagePayloadUploadComponent", function() { return NgxChatUiMessagePayloadUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessagePayloadUploadComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessagePayloadUploadComponent, _super);
    function NgxChatUiMessagePayloadUploadComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        return _this;
    }
    NgxChatUiMessagePayloadUploadComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messagePayloadUpload', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }));
    };
    NgxChatUiMessagePayloadUploadComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadUploadComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessagePayloadUploadComponent.prototype, "message", void 0);
    NgxChatUiMessagePayloadUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-payload-upload',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadUploadComponent);
    return NgxChatUiMessagePayloadUploadComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.scss":
/*!*********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3R5cGluZy90eXBpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.ts":
/*!*******************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NgxChatUiMessageTypingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiMessageTypingComponent", function() { return NgxChatUiMessageTypingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes */ "../../libs/ngx-chat-ui/src/lib/classes/index.ts");




var NgxChatUiMessageTypingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxChatUiMessageTypingComponent, _super);
    function NgxChatUiMessageTypingComponent(ngxChatUiService) {
        var _this = _super.call(this) || this;
        _this.ngxChatUiService = ngxChatUiService;
        _this.chatKey = 'default';
        _this.partner = null;
        return _this;
    }
    NgxChatUiMessageTypingComponent.prototype.init = function () {
        var _this = this;
        this.subscriptions.push(this.ngxChatUiService
            .templatesGet('messageTyping', this.chatKey)
            .subscribe(function (template) { return _this.template = template; }), this.ngxChatUiService
            .stateGet(this.chatKey)
            .subscribe(function (state) { return _this.stateUpdated(state); }));
    };
    NgxChatUiMessageTypingComponent.prototype.stateUpdated = function (state) {
        this.partner = (state.isTyping
            && (this.ngxChatUiService
                .partnersGet(this.chatKey)
                .getValue()
                .find(function (messagePartner) { return messagePartner.messagePartnerId === state.isTyping; }) || !!state.isTyping)) || null;
    };
    NgxChatUiMessageTypingComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageTypingComponent.prototype, "chatKey", void 0);
    NgxChatUiMessageTypingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-typing',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typing.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./typing.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageTypingComponent);
    return NgxChatUiMessageTypingComponent;
}(_classes__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts":
/*!*****************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/interfaces/index.ts ***!
  \*****************************************************************/
/*! exports provided: INgxChatUiMessageType, INgxChatUiMessageActionSelectItemActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _message_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type */ "../../libs/ngx-chat-ui/src/lib/interfaces/message-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageType", function() { return _message_type__WEBPACK_IMPORTED_MODULE_1__["INgxChatUiMessageType"]; });

/* harmony import */ var _message_action_select_item_action_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-action-select-item-action-type */ "../../libs/ngx-chat-ui/src/lib/interfaces/message-action-select-item-action-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageActionSelectItemActionType", function() { return _message_action_select_item_action_type__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageActionSelectItemActionType"]; });






/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/interfaces/message-action-select-item-action-type.ts":
/*!**************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/interfaces/message-action-select-item-action-type.ts ***!
  \**************************************************************************************************/
/*! exports provided: INgxChatUiMessageActionSelectItemActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageActionSelectItemActionType", function() { return INgxChatUiMessageActionSelectItemActionType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var INgxChatUiMessageActionSelectItemActionType;
(function (INgxChatUiMessageActionSelectItemActionType) {
    INgxChatUiMessageActionSelectItemActionType[INgxChatUiMessageActionSelectItemActionType["flow"] = 0] = "flow";
    INgxChatUiMessageActionSelectItemActionType[INgxChatUiMessageActionSelectItemActionType["redirect"] = 1] = "redirect";
})(INgxChatUiMessageActionSelectItemActionType || (INgxChatUiMessageActionSelectItemActionType = {}));


/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/interfaces/message-type.ts":
/*!************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/interfaces/message-type.ts ***!
  \************************************************************************/
/*! exports provided: INgxChatUiMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageType", function() { return INgxChatUiMessageType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var INgxChatUiMessageType;
(function (INgxChatUiMessageType) {
    INgxChatUiMessageType[INgxChatUiMessageType["text"] = 0] = "text";
    INgxChatUiMessageType[INgxChatUiMessageType["select"] = 1] = "select";
    INgxChatUiMessageType[INgxChatUiMessageType["autocomplete"] = 2] = "autocomplete";
    INgxChatUiMessageType[INgxChatUiMessageType["upload"] = 3] = "upload";
    INgxChatUiMessageType[INgxChatUiMessageType["dialogEnd"] = 4] = "dialogEnd";
})(INgxChatUiMessageType || (INgxChatUiMessageType = {}));


/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/ngx-chat-ui.module.ts":
/*!*******************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/ngx-chat-ui.module.ts ***!
  \*******************************************************************/
/*! exports provided: NgxChatUiModule, NgxChatUiService, INgxChatUiMessageType, INgxChatUiMessageActionSelectItemActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiModule", function() { return NgxChatUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "../../node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container/container.component */ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.ts");
/* harmony import */ var _components_message_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/message/list/list.component */ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.ts");
/* harmony import */ var _components_message_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/message/item/item.component */ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.ts");
/* harmony import */ var _components_action_action_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/action/action.component */ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.ts");
/* harmony import */ var _components_message_partner_partner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/message/partner/partner.component */ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.ts");
/* harmony import */ var _components_message_payload_payload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/message/payload/payload.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.ts");
/* harmony import */ var _components_message_payload_text_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/message/payload/text/text.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.ts");
/* harmony import */ var _components_message_payload_select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/message/payload/select/select.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.ts");
/* harmony import */ var _components_message_meta_meta_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/message/meta/meta.component */ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.ts");
/* harmony import */ var _components_action_text_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/action/text/text.component */ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.ts");
/* harmony import */ var _components_action_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/action/autocomplete/autocomplete.component */ "../../libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.ts");
/* harmony import */ var _components_action_select_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/action/select/select.component */ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.ts");
/* harmony import */ var _components_action_select_item_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/action/select/item/item.component */ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.ts");
/* harmony import */ var _components_message_typing_typing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/message/typing/typing.component */ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.ts");
/* harmony import */ var _components_message_payload_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/message/payload/autocomplete/autocomplete.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.ts");
/* harmony import */ var _components_action_upload_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/action/upload/upload.component */ "../../libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.ts");
/* harmony import */ var _components_message_payload_upload_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/message/payload/upload/upload.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services */ "../../libs/ngx-chat-ui/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiService", function() { return _services__WEBPACK_IMPORTED_MODULE_23__["NgxChatUiService"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageType", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_24__["INgxChatUiMessageType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageActionSelectItemActionType", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_24__["INgxChatUiMessageActionSelectItemActionType"]; });



























var NgxChatUiModule = /** @class */ (function () {
    function NgxChatUiModule() {
    }
    NgxChatUiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__["AutocompleteLibModule"],
                ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_5__["DropzoneModule"],
            ],
            declarations: [
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__["NgxChatUiContainerComponent"],
                _components_message_typing_typing_component__WEBPACK_IMPORTED_MODULE_19__["NgxChatUiMessageTypingComponent"],
                _components_message_list_list_component__WEBPACK_IMPORTED_MODULE_7__["NgxChatUiMessageListComponent"],
                _components_message_item_item_component__WEBPACK_IMPORTED_MODULE_8__["NgxChatUiMessageItemComponent"],
                _components_message_partner_partner_component__WEBPACK_IMPORTED_MODULE_10__["NgxChatUiMessagePartnerComponent"],
                _components_message_payload_payload_component__WEBPACK_IMPORTED_MODULE_11__["NgxChatUiMessagePayloadComponent"],
                _components_message_payload_text_text_component__WEBPACK_IMPORTED_MODULE_12__["NgxChatUiMessagePayloadTextComponent"],
                _components_message_payload_select_select_component__WEBPACK_IMPORTED_MODULE_13__["NgxChatUiMessagePayloadSelectComponent"],
                _components_message_payload_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_20__["NgxChatUiMessagePayloadAutocompleteComponent"],
                _components_message_payload_upload_upload_component__WEBPACK_IMPORTED_MODULE_22__["NgxChatUiMessagePayloadUploadComponent"],
                _components_message_meta_meta_component__WEBPACK_IMPORTED_MODULE_14__["NgxChatUiMessageMetaComponent"],
                _components_action_action_component__WEBPACK_IMPORTED_MODULE_9__["NgxChatUiActionComponent"],
                _components_action_text_text_component__WEBPACK_IMPORTED_MODULE_15__["NgxChatUiActionTextComponent"],
                _components_action_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_16__["NgxChatUiActionAutocompleteComponent"],
                _components_action_upload_upload_component__WEBPACK_IMPORTED_MODULE_21__["NgxChatUiActionUploadComponent"],
                _components_action_select_select_component__WEBPACK_IMPORTED_MODULE_17__["NgxChatUiActionSelectComponent"],
                _components_action_select_item_item_component__WEBPACK_IMPORTED_MODULE_18__["NgxChatUiActionSelectItemComponent"]
            ],
            exports: [
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__["NgxChatUiContainerComponent"],
                _components_message_typing_typing_component__WEBPACK_IMPORTED_MODULE_19__["NgxChatUiMessageTypingComponent"],
                _components_message_list_list_component__WEBPACK_IMPORTED_MODULE_7__["NgxChatUiMessageListComponent"],
                _components_message_item_item_component__WEBPACK_IMPORTED_MODULE_8__["NgxChatUiMessageItemComponent"],
                _components_message_partner_partner_component__WEBPACK_IMPORTED_MODULE_10__["NgxChatUiMessagePartnerComponent"],
                _components_message_payload_payload_component__WEBPACK_IMPORTED_MODULE_11__["NgxChatUiMessagePayloadComponent"],
                _components_message_payload_text_text_component__WEBPACK_IMPORTED_MODULE_12__["NgxChatUiMessagePayloadTextComponent"],
                _components_message_payload_select_select_component__WEBPACK_IMPORTED_MODULE_13__["NgxChatUiMessagePayloadSelectComponent"],
                _components_message_payload_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_20__["NgxChatUiMessagePayloadAutocompleteComponent"],
                _components_message_payload_upload_upload_component__WEBPACK_IMPORTED_MODULE_22__["NgxChatUiMessagePayloadUploadComponent"],
                _components_message_meta_meta_component__WEBPACK_IMPORTED_MODULE_14__["NgxChatUiMessageMetaComponent"],
                _components_action_action_component__WEBPACK_IMPORTED_MODULE_9__["NgxChatUiActionComponent"],
                _components_action_text_text_component__WEBPACK_IMPORTED_MODULE_15__["NgxChatUiActionTextComponent"],
                _components_action_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_16__["NgxChatUiActionAutocompleteComponent"],
                _components_action_upload_upload_component__WEBPACK_IMPORTED_MODULE_21__["NgxChatUiActionUploadComponent"],
                _components_action_select_select_component__WEBPACK_IMPORTED_MODULE_17__["NgxChatUiActionSelectComponent"],
                _components_action_select_item_item_component__WEBPACK_IMPORTED_MODULE_18__["NgxChatUiActionSelectItemComponent"]
            ]
        })
    ], NgxChatUiModule);
    return NgxChatUiModule;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts":
/*!**********************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/services/chat.service.ts ***!
  \**********************************************************************/
/*! exports provided: NgxChatUiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiService", function() { return NgxChatUiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");




var NgxChatUiService = /** @class */ (function () {
    function NgxChatUiService() {
        this.templateKeys = [
            'container',
            'messageTyping',
            'messageList',
            'messageItem',
            'messagePartner',
            'messagePayload',
            'messagePayloadText',
            'messagePayloadSelect',
            'messagePayloadAutocomplete',
            'messagePayloadUpload',
            'messageMeta',
            'action',
            'actionText',
            'actionAutocomplete',
            'actionSelect',
            'actionSelectItem',
            'actionUpload',
        ];
        this.templatesStore = {};
        this.partnersStore = {};
        this.messagesStore = {};
        this.actionsStore = {};
        this.statesStore = {};
        this.callbacksStore = {};
        this.itemAction$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dialogEnd$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.response$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxChatUiService.prototype.templatesSet = function (templates, chatKey) {
        var _this = this;
        if (chatKey === void 0) { chatKey = 'default'; }
        this.ensureTemplatesKey(chatKey);
        this.templateKeys
            .forEach(function (templateKey) {
            if (templates[templateKey] !== undefined) {
                _this.templatesStore[chatKey + "$"][templateKey + "$"].next(templates[templateKey]);
            }
        });
    };
    NgxChatUiService.prototype.templatesGet = function (templateKey, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.ensureTemplatesKey(chatKey);
        return this.templatesStore[chatKey + "$"][templateKey + "$"];
    };
    NgxChatUiService.prototype.ensureTemplatesKey = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var key = chatKey + "$";
        if (!this.templatesStore[key]) {
            this.templatesStore[key] = this.templateKeys.reduce(function (prev, templateKey) {
                var _a;
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prev, (_a = {}, _a[templateKey + "$"] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null), _a)));
            }, {});
        }
    };
    NgxChatUiService.prototype.ensureActionsKey = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var key = chatKey + "$";
        if (!this.actionsStore[key]) {
            this.actionsStore[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
    };
    NgxChatUiService.prototype.ensureStateKey = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var key = chatKey + "$";
        if (!this.statesStore[key]) {
            this.statesStore[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
    };
    NgxChatUiService.prototype.ensureCallbacksKey = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var key = chatKey + "$";
        if (!this.callbacksStore[key]) {
            this.callbacksStore[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
    };
    NgxChatUiService.prototype.ensureMessagesKey = function (chatKey) {
        var _this = this;
        if (chatKey === void 0) { chatKey = 'default'; }
        var key = chatKey + "$";
        if (!this.messagesStore[key]) {
            this.messagesStore[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.messagesStore[key]
                .subscribe(function (messages) { return _this.onMessagesUpdated(messages, chatKey); });
        }
    };
    NgxChatUiService.prototype.ensurePartnersKey = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var key = chatKey + "$";
        if (!this.partnersStore[key]) {
            this.partnersStore[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }
    };
    NgxChatUiService.prototype.partnersSet = function (partners, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.partnersGet(chatKey)
            .next(partners);
    };
    NgxChatUiService.prototype.partnersGet = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.ensurePartnersKey(chatKey);
        var key = chatKey + "$";
        return this.partnersStore[key];
    };
    NgxChatUiService.prototype.messagesAdd = function (messages, chatKey) {
        var _this = this;
        if (chatKey === void 0) { chatKey = 'default'; }
        messages.forEach(function (message) {
            var subject = _this.messagesGet(chatKey);
            var current = subject.getValue();
            var next = _this.processMessage(message, chatKey);
            if (next.payload.type === _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"].dialogEnd) {
                _this.dialogEnd$.emit({
                    chatKey: chatKey,
                    payload: next.payload
                });
            }
            else {
                subject.next(current.concat([next]));
            }
        });
    };
    NgxChatUiService.prototype.messagesSet = function (messages, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.messagesClear(chatKey);
        this.messagesAdd(messages, chatKey);
    };
    NgxChatUiService.prototype.messagesClear = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.messagesGet(chatKey).next([]);
    };
    NgxChatUiService.prototype.processMessage = function (message, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var msg = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, message);
        if (msg.messagePartnerId && !msg.partner) {
            msg.partner = this.partnersGet(chatKey).getValue().find(function (messagePartner) { return messagePartner.messagePartnerId === msg.messagePartnerId; });
        }
        var item = this.getItemForItemAction(message, chatKey);
        if (item && item.action) {
            this.itemAction$.emit({
                chatKey: chatKey,
                payload: item.action
            });
        }
        return msg;
    };
    NgxChatUiService.prototype.getItemForItemAction = function (message, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        if (message.payload.type !== _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"].select) {
            return null;
        }
        var actionMessage;
        var messages = this.messagesGet(chatKey)
            .getValue().slice().reverse();
        if (message.payload.messageId) {
            actionMessage = messages
                .find(function (theMessage) { return theMessage.messageId === message.payload.messageId; });
        }
        else {
            actionMessage = messages
                .find(function (theMessage) { return theMessage.messageId !== message.messageId
                && theMessage.action.type === _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"].select; });
        }
        var action = actionMessage && actionMessage.action;
        return action
            && action.items
            && action.items[message.payload.value];
    };
    NgxChatUiService.prototype.messagesGet = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.ensureMessagesKey(chatKey);
        var key = chatKey + "$";
        return this.messagesStore[key];
    };
    NgxChatUiService.prototype.onMessagesUpdated = function (messages, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var len = messages.length - 1;
        var lastMessage = null;
        var lastContextMessage = null;
        for (var i = len; i >= 0; i--) {
            if (!lastMessage) {
                lastMessage = messages[i];
            }
            if (!messages[i].isIncoming) {
                break;
            }
            if (messages[i].action) {
                lastContextMessage = messages[i];
                break;
            }
        }
        this.actionUpdate(lastContextMessage, chatKey);
        if (lastMessage) {
            this.stateSet(lastMessage.isIncoming ? { isTyping: false } : { isSending: false });
        }
    };
    NgxChatUiService.prototype.actionGet = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.ensureActionsKey(chatKey);
        return this.actionsStore[chatKey + "$"];
    };
    NgxChatUiService.prototype.actionSet = function (action, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.actionGet(chatKey)
            .next(action);
    };
    NgxChatUiService.prototype.actionUpdate = function (message, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.actionSet(message || null, chatKey);
    };
    NgxChatUiService.prototype.stateGet = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.ensureStateKey(chatKey);
        return this.statesStore[chatKey + "$"];
    };
    NgxChatUiService.prototype.stateSet = function (state, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.stateGet(chatKey).next(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.stateGet(chatKey).getValue(), state));
    };
    NgxChatUiService.prototype.callbacksGet = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.ensureCallbacksKey(chatKey);
        return this.callbacksStore[chatKey + "$"];
    };
    NgxChatUiService.prototype.callbacksSet = function (callbacks, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.callbacksGet(chatKey).next(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.callbacksGet(chatKey).getValue(), callbacks));
    };
    NgxChatUiService.prototype.cleanup = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
    };
    NgxChatUiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgxChatUiService);
    return NgxChatUiService;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/services/index.ts":
/*!***************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/services/index.ts ***!
  \***************************************************************/
/*! exports provided: NgxChatUiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiService", function() { return _chat_service__WEBPACK_IMPORTED_MODULE_1__["NgxChatUiService"]; });





/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/action.component.html":
/*!**************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/action.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  chatKey: chatKey,\n  MessageType: MessageType,\n  isSending: isSending\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/autocomplete/autocomplete.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  response: ngxChatUiService.response$,\n  chatKey: chatKey,\n  onChange: onChange,\n  onFocused: onFocused,\n  removeTag: removeTag,\n  select: select,\n  submit: submit,\n  data: data,\n  value: value,\n  searchCallback: searchCallback,\n  isSingle: isSingle\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  item: item,\n  response: response,\n  chatKey: chatKey\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/select.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  response: ngxChatUiService.response$,\n  submit: submit,\n  chatKey: chatKey\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/text/text.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  response: ngxChatUiService.response$,\n  submit: submit,\n  form: form,\n  chatKey: chatKey,\n  type: type\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/upload/upload.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  response: ngxChatUiService.response$,\n  chatKey: chatKey,\n  submit: submit,\n  config: config,\n  onUploadSuccess: onUploadSuccess,\n  onUploadError: onUploadError,\n  onAddedFile: onAddedFile,\n  onComplete: onComplete,\n  uploadCallback: uploadCallback,\n  removeDropzoneFile: removeDropzoneFile,\n  removeFile: removeFile,\n  isUploading: isUploading,\n  isSingle: isSingle,\n  value: value\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/container/container.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/container/container.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  chatKey: chatKey\n}\"></ng-container>\n\n<ng-template\n  #containerTemplateDefault\n  let-chatKey=\"chatKey\"\n>\n  <ngx-chat-ui-message-list\n    [chatKey]=\"chatKey\"\n  ></ngx-chat-ui-message-list>\n  <ngx-chat-ui-action\n    [chatKey]=\"chatKey\"\n  ></ngx-chat-ui-action>\n</ng-template>\n\n<ng-template\n  #messageTypingTemplateDefault\n  let-partner=\"partner\"\n>\n  <div\n    *ngIf=\"partner\"\n    class=\"ngx-chat-ui-message-typing\"\n  >{{ partner.firstName }}</div>\n</ng-template>\n\n<ng-template\n  #messageListTemplateDefault\n  let-messages=\"messages\"\n  let-chatKey=\"chatKey\"\n  let-trackByFn=\"trackByFn\"\n>\n  <div class=\"ngx-chat-ui-message-spacer\"></div>\n  <ngx-chat-ui-message-item\n    *ngFor=\"let message of messages; trackBy: trackByFn\"\n    [class.ngx-chat-ui-message-item-incoming]=\"message.isIncoming\"\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-item>\n  <ngx-chat-ui-message-typing\n    [chatKey]=\"chatKey\"\n  ></ngx-chat-ui-message-typing>\n</ng-template>\n\n<ng-template\n  #messageItemTemplateDefault\n  let-message=\"message\"\n  let-chatKey=\"chatKey\"\n>\n  <ngx-chat-ui-message-partner\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-partner>\n  <ngx-chat-ui-message-meta\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-meta>\n  <ngx-chat-ui-message-payload\n    *ngIf=\"message.payload\"\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-payload>\n</ng-template>\n\n<ng-template\n  #messagePartnerTemplateDefault\n  let-message=\"message\"\n  let-avatar=\"avatar\"\n>\n  <ng-container *ngIf=\"message.partner && message.partner.avatar; else avatarTpl\"><img [src]=\"message.partner.avatar\"></ng-container>\n  <ng-template #avatarTpl>\n    <ng-container *ngIf=\"avatar\">{{avatar}}</ng-container>\n  </ng-template>\n</ng-template>\n\n<ng-template\n  #messageMetaTemplateDefault\n  let-message=\"message\"\n>\n  {{message.date | date}}\n</ng-template>\n\n<ng-template\n  #messagePayloadTemplateDefault\n  let-message=\"message\"\n  let-MessageType=\"MessageType\"\n  let-chatKey=\"chatKey\"\n>\n  <ng-container [ngSwitch]=\"message.payload.type\">\n    <ngx-chat-ui-message-payload-text\n      *ngSwitchCase=\"MessageType.text\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-message-payload-text>\n    <ngx-chat-ui-message-payload-select\n      *ngSwitchCase=\"MessageType.select\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-message-payload-select>\n    <ngx-chat-ui-message-payload-autocomplete\n      *ngSwitchCase=\"MessageType.autocomplete\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-message-payload-autocomplete>\n    <ngx-chat-ui-message-payload-upload\n      *ngSwitchCase=\"MessageType.upload\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-message-payload-upload>\n  </ng-container>\n</ng-template>\n\n<ng-template\n  #messagePayloadTextTemplateDefault\n  let-message=\"message\"\n>\n  {{ message.payload.meta && message.payload.meta.type === 'password' ? '*****' : message.payload.value }}\n</ng-template>\n\n<ng-template\n  #messagePayloadAutocompleteTemplateDefault\n  let-value=\"value\"\n>\n  {{ value }}\n</ng-template>\n\n<ng-template\n  #messagePayloadSelectTemplateDefault\n  let-message=\"message\"\n  let-item=\"item\"\n>\n  <div\n    class=\"ngx-chat-ui-action-select-item-icon\"\n    *ngIf=\"item.icon\"\n  >{{ item.icon }}</div>\n  <div\n    class=\"ngx-chat-ui-action-select-item-text\"\n    *ngIf=\"item.text\"\n  >{{ item.text }}</div>\n</ng-template>\n\n<ng-template\n  #messagePayloadUploadTemplateDefault\n  let-message=\"message\"\n  let-value=\"value\"\n>\n  <a\n    class=\"ngx-chat-ui-message-payload-upload-files-item\"\n    *ngFor=\"let file of message.payload.value\"\n    [href]=\"file.url\"\n    target=\"_blank\"\n  >\n    <div\n      class=\"ngx-chat-ui-message-payload-upload-files-item-image\"\n      [style.background-image]=\"'url(' + (file.preview || file.url) + ')'\"\n    ></div>\n  </a>\n</ng-template>\n\n<ng-template\n  #actionTemplateDefault\n  let-message=\"message\"\n  let-MessageType=\"MessageType\"\n  let-chatKey=\"chatKey\"\n  let-isSending=\"isSending\"\n>\n  <div\n    *ngIf=\"message && message.action\"\n    [class.ngx-chat-ui-action-sending]=\"isSending\"\n    [ngSwitch]=\"message.action.type\"\n  >\n    <ngx-chat-ui-action-text\n      *ngSwitchCase=\"MessageType.text\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-action-text>\n    <ngx-chat-ui-action-select\n      *ngSwitchCase=\"MessageType.select\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-action-select>\n    <ngx-chat-ui-action-autocomplete\n      *ngSwitchCase=\"MessageType.autocomplete\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-action-autocomplete>\n    <ngx-chat-ui-action-upload\n      *ngSwitchCase=\"MessageType.upload\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-action-upload>\n  </div>\n</ng-template>\n\n<ng-template\n  #actionTextTemplateDefault\n  let-message=\"message\"\n  let-submit=\"submit\"\n  let-form=\"form\"\n  let-type=\"type\"\n>\n  <form\n    novalidate\n    [formGroup]=\"form\"\n    (ngSubmit)=\"submit()\"\n  >\n    <input\n      formControlName=\"text\"\n      [type]=\"type\"\n    >\n    <button></button>\n  </form>\n</ng-template>\n\n<ng-template\n  #actionUploadTemplateDefault\n  let-message=\"message\"\n  let-submit=\"submit\"\n  let-config=\"config\"\n  let-value=\"value\"\n  let-onUploadSuccess=\"onUploadSuccess\"\n  let-onUploadError=\"onUploadError\"\n  let-onAddedFile=\"onAddedFile\"\n  let-onComplete=\"onComplete\"\n  let-directiveRef=\"directiveRef\"\n  let-removeFile=\"removeFile\"\n  let-isUploading=\"isUploading\"\n  let-isSingle=\"isSingle\"\n>\n  <div\n    [class.ngx-chat-ui-action-upload-uploading]=\"isUploading\"\n  >\n    <div\n      class=\"ngx-chat-ui-action-upload-files\"\n      *ngIf=\"value.length && !isSingle\"\n    >\n      <div\n        class=\"ngx-chat-ui-action-upload-files-item\"\n        *ngFor=\"let file of value\"\n      >\n        <div\n          class=\"ngx-chat-ui-action-upload-files-item-image\"\n          [style.background-image]=\"'url(' + (file.preview || file.url) + ')'\"\n        ></div>\n        <a\n          class=\"ngx-chat-ui-action-upload-files-item-remove\"\n          href=\"javascript:;\"\n          (click)=\"removeFile(file)\"\n        ></a>\n      </div>\n    </div>\n    <div\n      class=\"ngx-chat-ui-action-upload-dropzone\"\n    >\n      <div\n        *ngIf=\"config\"\n        #dropzone=\"ngxDropzone\"\n        class=\"dropzone\"\n        [dropzone]=\"config\"\n        (error)=\"onUploadError(dropzone, $event)\"\n        (success)=\"onUploadSuccess(dropzone, $event)\"\n        (addedFile)=\"onAddedFile(dropzone, $event)\"\n        (complete)=\"onComplete(dropzone, $event)\"\n      ></div>\n      <button\n        *ngIf=\"!isSingle\"\n        [disabled]=\"!value.length\"\n        (click)=\"submit()\"\n      ></button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template\n  #actionAutocompleteTemplateDefault\n  let-message=\"message\"\n  let-onChange=\"onChange\"\n  let-onFocused=\"onFocused\"\n  let-select=\"select\"\n  let-value=\"value\"\n  let-data=\"data\"\n  let-removeTag=\"removeTag\"\n  let-submit=\"submit\"\n>\n\n  <div\n    class=\"ngx-chat-ui-action-autocomplete-tags\"\n    *ngIf=\"value.length\"\n  >\n    <div\n      class=\"ngx-chat-ui-action-autocomplete-tags-item\"\n      *ngFor=\"let tag of value\"\n    >\n      <div\n        class=\"ngx-chat-ui-action-autocomplete-tags-tag\"\n      >{{ tag }}</div>\n      <a\n        class=\"ngx-chat-ui-action-autocomplete-tags-item-remove\"\n        href=\"javascript:;\"\n        (click)=\"removeTag(tag)\"\n      ></a>\n    </div>\n  </div>\n  <div\n    class=\"ngx-chat-ui-action-autocomplete-picker\"\n  >\n    <ng-autocomplete\n      #autocomplete\n      [data]=\"data\"\n      (selected)=\"select(autocomplete, $event)\"\n      (inputChanged)=\"onChange(autocomplete, $event)\"\n      (inputFocused)=\"onFocused(autocomplete)\"\n      [itemTemplate]=\"itemTemplate\"\n      [notFoundTemplate]=\"notFoundTemplate\">\n    </ng-autocomplete>\n\n    <button (click)=\"submit()\"></button>\n\n    <ng-template #itemTemplate let-item>\n      <a [innerHTML]=\"item\"></a>\n    </ng-template>\n\n    <ng-template #notFoundTemplate let-notFound>\n      <div [innerHTML]=\"notFound\"></div>\n    </ng-template>\n  </div>\n</ng-template>\n\n<ng-template\n  #actionSelectTemplateDefault\n  let-message=\"message\"\n  let-submit=\"submit\"\n>\n  <div\n    class=\"ngx-chat-ui-action-select-frame\"\n    [ngClass]=\"message.action.className || 'ngx-chat-ui-action-select-button'\"\n  >\n    <div class=\"ngx-chat-ui-message-spacer\"></div>\n    <div class=\"ngx-chat-ui-action-select-items\">\n      <ngx-chat-ui-action-select-item\n        *ngFor=\"let item of message.action.items\"\n        [item]=\"item\"\n        [chatKey]=\"chatKey\"\n        (response)=\"submit($event)\"\n      ></ngx-chat-ui-action-select-item>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template\n  #actionSelectItemTemplateDefault\n  let-item=\"item\"\n  let-response=\"response\"\n>\n  <a\n    (click)=\"response.emit(item)\"\n    class=\"ngx-chat-ui-action-select-item-frame\"\n    [ngClass]=\"item.className || 'ngx-chat-ui-action-select-item-regular'\"\n    href=\"javascript:;\"\n  >\n    <span\n      class=\"ngx-chat-ui-action-select-item-icon\"\n      *ngIf=\"item.icon\"\n    >{{ item.icon }}</span>\n    <span\n      class=\"ngx-chat-ui-action-select-item-text\"\n      *ngIf=\"item.text\"\n    >{{ item.text }}</span>\n  </a>\n</ng-template>\n\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/item/item.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  chatKey: chatKey\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/list/list.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  messages: messages,\n  chatKey: chatKey,\n  trackByFn: trackByFn\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  avatar: avatar\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/autocomplete/autocomplete.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  value: value\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  chatKey: chatKey,\n  MessageType: MessageType\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  item: item\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/upload/upload.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!/ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"template; context: {\n  partner: partner,\n  chatKey: chatKey\n}\"></ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html":
/*!****************************************************************************************************!*\
  !*** /ngx-chat-ui/node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Select Action Payload</h2>\r\n<ngx-chat-ui-container\r\n  chatKey=\"demoSelect\"\r\n  [state]=\"state.demoSelect\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.demoSelect\"\r\n  (response)=\"onResponse('demoSelect', $event)\"\r\n></ngx-chat-ui-container>\r\n\r\n<h2>Text Action Payload</h2>\r\n<ngx-chat-ui-container\r\n  chatKey=\"demoText\"\r\n  [state]=\"state.demoText\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.demoText\"\r\n  (response)=\"onResponse('demoText', $event)\"\r\n></ngx-chat-ui-container>\r\n\r\n<h2>List Action Payload</h2>\r\n<ngx-chat-ui-container\r\n  chatKey=\"demoList\"\r\n  [state]=\"state.demoList\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.demoList\"\r\n  (response)=\"onResponse('demoList', $event)\"\r\n></ngx-chat-ui-container>\r\n\r\n<h2>Autocomplete Action Payload</h2>\r\n<ngx-chat-ui-container\r\n  chatKey=\"demoAutocomplete\"\r\n  [state]=\"state.demoAutocomplete\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.demoAutocomplete\"\r\n  (response)=\"onResponse('demoAutocomplete', $event)\"\r\n  [callbacks]=\"callbacks.demoAutocomplete\"\r\n></ngx-chat-ui-container>\r\n\r\n<h2>Upload Action Payload</h2>\r\n<ngx-chat-ui-container\r\n  chatKey=\"demoUpload\"\r\n  [state]=\"state.demoUpload\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.demoUpload\"\r\n  (response)=\"onResponse('demoUpload', $event)\"\r\n  [callbacks]=\"callbacks.demoUpload\"\r\n></ngx-chat-ui-container>\r\n");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!****************************************************!*\
  !*** /ngx-chat-ui/node_modules/tslib/tslib.es6.js ***!
  \****************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "../../node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-chat-ui/libs/ngx-chat-ui */ "../../libs/ngx-chat-ui/src/index.ts");







var DEFAULT_DROPZONE_CONFIG = {
    url: 'https://dashboard.pixc.com/uploadFile/test',
    acceptedFiles: 'image/*',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([]),
                _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_6__["NgxChatUiModule"]
            ],
            providers: [
                {
                    provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_4__["DROPZONE_CONFIG"],
                    useValue: DEFAULT_DROPZONE_CONFIG,
                }
            ],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL25neC1jaGF0LXVpLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-chat-ui/libs/ngx-chat-ui */ "../../libs/ngx-chat-ui/src/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.partners = [];
        this.messages = {
            demoSelect: [],
            demoText: [],
            demoList: [],
            demoAutocomplete: [],
            demoUpload: []
        };
        this.state = {
            demoSelect: {},
            demoText: {},
            demoList: {},
            demoAutocomplete: {},
            demoUpload: {}
        };
        this.callbacks = {
            demoAutocomplete: {
                autocomplete: this.autocompleteTags.bind(this),
            },
            demoUpload: {
                upload: this.uploadFiles.bind(this),
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.partners = this.partners.concat([
            {
                messagePartnerId: 'me',
                firstName: 'Sergey',
                lastName: 'Kalaus'
            },
            {
                messagePartnerId: 'it',
                avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMS42AP/bAEMABQQEBAQDBQQEBAYFBQYIDQgIBwcIEAsMCQ0TEBQTEhASEhQXHRkUFhwWEhIaIxocHh8hISEUGSQnJCAmHSAhIP/bAEMBBQYGCAcIDwgIDyAVEhUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/AABEIABgAGAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsW7uoLGzlu7l9kUS7mP+e9YH/CbaH9hW43y+aW2m2Cgyr7kZxjHOc/rxVXx88kej2hVm8t7gRuqgnPyswJ5xgFR2P4V5nFb3yyBZL7fEgXafLAd8DneenPXgD8K8HH5jPD1fZwS26nqYXBxqw55dz3mORJYkljYMjgMrDoQehorjvh7eXkujXFjeytK9rIAjnuhHA644wRgAcAcUV7FCqq1NVI9Tz6kHTm4PodVe2NrqFqba8iEkZ5weoPqPQ1zf8Awgun+du+13Hl/wB3jP54/pRRUVcLRrNOpG7Kp16lNWg7HSWVja6darbWkQjjHPuT6k96KKK3jFRXLFWRk227s//Z'
            }
        ]);
        this.messages.demoSelect = this.messages.demoSelect.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '1',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].select,
                    items: [
                        {
                            icon: '👌',
                            id: 0,
                            className: 'ngx-chat-ui-action-select-item-cta'
                        },
                        {
                            text: 'No',
                            id: 1
                        }
                    ]
                }
            },
        ]);
        this.messages.demoText = this.messages.demoText.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '2',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text
                }
            },
        ]);
        this.messages.demoList = this.messages.demoList.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '2',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].select,
                    className: 'ngx-chat-ui-action-select-list',
                    items: [
                        {
                            text: 'Yes',
                            id: 0,
                            className: 'ngx-chat-ui-action-select-item-cta'
                        },
                        {
                            text: 'No',
                            id: 1
                        }
                    ]
                }
            },
        ]);
        this.messages.demoAutocomplete = this.messages.demoAutocomplete.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].autocomplete,
                    callback: 'autocomplete',
                }
            },
        ]);
        this.messages.demoUpload = this.messages.demoUpload.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].upload,
                    meta: {
                        single: true,
                    },
                    callback: 'upload',
                }
            },
        ]);
    };
    AppComponent.prototype.onResponse = function (chatKey, payload) {
        var _this = this;
        setTimeout(function () {
            _this.messages[chatKey] = _this.messages[chatKey].concat([
                {
                    date: new Date(),
                    messagePartnerId: 'me',
                    payload: payload
                }
            ]);
        });
    };
    AppComponent.prototype.autocompleteTags = function (query, callback) {
        callback([
            '#aabbccdd',
            '#eeffgghh',
            '#iijjkkll',
            '#mmnnoopp',
            '#qqrrsstt',
            '#uuvvwwxx',
            '#yyzz',
        ]);
    };
    AppComponent.prototype.uploadFiles = function (data, callback) {
        callback({
            name: 'Test.jpg',
            url: 'https://via.placeholder.com/150',
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-demo-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    graphqlUrl: 'http://192.168.2.2:7172/graphql',
    subscriptionUrl: 'ws://192.168.2.2:7172/graphql'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /ngx-chat-ui/apps/ngx-chat-ui-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map