(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/ngx-chat-ui/src/index.ts":
/*!**************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/index.ts ***!
  \**************************************************/
/*! exports provided: NgxChatUiModule, NgxChatUiService, INgxChatUiMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-chat-ui.module */ "../../libs/ngx-chat-ui/src/lib/ngx-chat-ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiModule", function() { return _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_0__["NgxChatUiModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiService", function() { return _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_0__["NgxChatUiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageType", function() { return _lib_ngx_chat_ui_module__WEBPACK_IMPORTED_MODULE_0__["INgxChatUiMessageType"]; });




/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.html":
/*!*************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/action.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  response: response,\n  chatKey: chatKey,\n  MessageType: MessageType,\n  isSending: isSending\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.scss":
/*!*************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/action.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

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




var NgxChatUiActionComponent = /** @class */ (function () {
    function NgxChatUiActionComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.isSending = false;
        this.message = null;
        this.MessageType = _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"];
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxChatUiActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('action')
            .subscribe(function (template) { return _this.template = template; });
        this.ngxChatUiService
            .actionGet(this.chatKey)
            .subscribe(function (message) { return _this.message = message; });
        this.ngxChatUiService
            .stateGet(this.chatKey)
            .subscribe(function (state) { return _this.isSending = state.isSending; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiActionComponent.prototype, "response", void 0);
    NgxChatUiActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action',
            template: __webpack_require__(/*! ./action.component.html */ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./action.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionComponent);
    return NgxChatUiActionComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.html":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  item: item,\n  response: response\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.scss":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vc2VsZWN0L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

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



var NgxChatUiActionSelectItemComponent = /** @class */ (function () {
    function NgxChatUiActionSelectItemComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxChatUiActionSelectItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('actionSelectItem')
            .subscribe(function (template) { return _this.template = template; });
    };
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
            template: __webpack_require__(/*! ./item.component.html */ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./item.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionSelectItemComponent);
    return NgxChatUiActionSelectItemComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.html":
/*!********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/select.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  response: response,\n  submit: submit\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.scss":
/*!********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/select/select.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

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




var NgxChatUiActionSelectComponent = /** @class */ (function () {
    function NgxChatUiActionSelectComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxChatUiActionSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService.templatesGet('actionSelect')
            .subscribe(function (template) { return _this.template = template; });
    };
    NgxChatUiActionSelectComponent.prototype.submit = function (item) {
        this.response.emit({
            type: _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"].select,
            item: item.id,
            messageId: this.message.messageId,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionSelectComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionSelectComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiActionSelectComponent.prototype, "response", void 0);
    NgxChatUiActionSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action-select',
            template: __webpack_require__(/*! ./select.component.html */ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiActionSelectComponent);
    return NgxChatUiActionSelectComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.html":
/*!****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/text/text.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  response: response,\n  submit: submit,\n  form: form\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.scss":
/*!****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/action/text/text.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24vdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIn0= */"

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





var NgxChatUiActionTextComponent = /** @class */ (function () {
    function NgxChatUiActionTextComponent(formBuilder, ngxChatUiService) {
        this.formBuilder = formBuilder;
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createForm();
    }
    NgxChatUiActionTextComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    NgxChatUiActionTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('actionText')
            .subscribe(function (template) { return _this.template = template; });
    };
    NgxChatUiActionTextComponent.prototype.submit = function () {
        if (this.form.invalid) {
            return;
        }
        this.response.emit({
            type: _interfaces__WEBPACK_IMPORTED_MODULE_4__["INgxChatUiMessageType"].text,
            text: this.form.value.text,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionTextComponent.prototype, "chatKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiActionTextComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiActionTextComponent.prototype, "response", void 0);
    NgxChatUiActionTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-action-text',
            template: __webpack_require__(/*! ./text.component.html */ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./text.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["NgxChatUiService"]])
    ], NgxChatUiActionTextComponent);
    return NgxChatUiActionTextComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.html":
/*!*******************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/container/container.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  chatKey: chatKey,\n  response: response\n}\"></ng-container>\n\n<ng-template\n  #containerTemplateDefault\n  let-chatKey=\"chatKey\"\n  let-response=\"response\"\n>\n  <ngx-chat-ui-message-list\n    [chatKey]=\"chatKey\"\n  ></ngx-chat-ui-message-list>\n  <ngx-chat-ui-action\n    [chatKey]=\"chatKey\"\n    (response)=\"response.emit($event)\"\n  ></ngx-chat-ui-action>\n</ng-template>\n\n<ng-template\n  #messageTypingTemplateDefault\n  let-partner=\"partner\"\n>\n  <div\n    *ngIf=\"partner\"\n    class=\"ngx-chat-ui-message-typing\"\n  >{{ partner.firstName }}</div>\n</ng-template>\n\n<ng-template\n  #messageListTemplateDefault\n  let-messages=\"messages\"\n  let-chatKey=\"chatKey\"\n  let-trackByFn=\"trackByFn\"\n>\n  <div class=\"ngx-chat-ui-message-spacer\"></div>\n  <ngx-chat-ui-message-item\n    *ngFor=\"let message of messages; trackBy: trackByFn\"\n    [class.ngx-chat-ui-message-item-incoming]=\"message.isIncoming\"\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-item>\n  <ngx-chat-ui-message-typing\n    [chatKey]=\"chatKey\"\n  ></ngx-chat-ui-message-typing>\n</ng-template>\n\n<ng-template\n  #messageItemTemplateDefault\n  let-message=\"message\"\n  let-chatKey=\"chatKey\"\n>\n  <ngx-chat-ui-message-partner\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-partner>\n  <ngx-chat-ui-message-meta\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-meta>\n  <ngx-chat-ui-message-payload\n    *ngIf=\"message.payload\"\n    [chatKey]=\"chatKey\"\n    [message]=\"message\"\n  ></ngx-chat-ui-message-payload>\n</ng-template>\n\n<ng-template\n  #messagePartnerTemplateDefault\n  let-message=\"message\"\n  let-avatar=\"avatar\"\n>\n  <ng-container *ngIf=\"message.partner && message.partner.avatar; else avatarTpl\"><img [src]=\"message.partner.avatar\"></ng-container>\n  <ng-template #avatarTpl>\n    <ng-container *ngIf=\"avatar\">{{avatar}}</ng-container>\n  </ng-template>\n</ng-template>\n\n<ng-template\n  #messageMetaTemplateDefault\n  let-message=\"message\"\n>\n  {{message.date | date}}\n</ng-template>\n\n<ng-template\n  #messagePayloadTemplate\n  let-message=\"message\"\n  let-MessageType=\"MessageType\"\n  let-chatKey=\"chatKey\"\n>\n  <ng-container [ngSwitch]=\"message.payload.type\">\n    <ngx-chat-ui-message-payload-text\n      *ngSwitchCase=\"MessageType.text\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-message-payload-text>\n    <ngx-chat-ui-message-payload-select\n      *ngSwitchCase=\"MessageType.select\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n    ></ngx-chat-ui-message-payload-select>\n  </ng-container>\n</ng-template>\n\n<ng-template\n  #messagePayloadTextTemplateDefault\n  let-message=\"message\"\n>\n  {{message.payload.text}}\n</ng-template>\n\n<ng-template\n  #messagePayloadSelectTemplateDefault\n  let-message=\"message\"\n  let-item=\"item\"\n>\n  <div\n    class=\"ngx-chat-ui-action-select-item-icon\"\n    *ngIf=\"item.icon\"\n  >{{ item.icon }}</div>\n  <div\n    class=\"ngx-chat-ui-action-select-item-text\"\n    *ngIf=\"item.text\"\n  >{{ item.text }}</div>\n</ng-template>\n\n<ng-template\n  #actionTemplate\n  let-message=\"message\"\n  let-MessageType=\"MessageType\"\n  let-chatKey=\"chatKey\"\n  let-response=\"response\"\n  let-isSending=\"isSending\"\n>\n  <div\n    *ngIf=\"message && message.action\"\n    [class.ngx-chat-ui-action-sending]=\"isSending\"\n    [ngSwitch]=\"message.action.type\"\n  >\n    <ngx-chat-ui-action-text\n      *ngSwitchCase=\"MessageType.text\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n      (response)=\"response.emit($event)\"\n    ></ngx-chat-ui-action-text>\n    <ngx-chat-ui-action-select\n      *ngSwitchCase=\"MessageType.select\"\n      [chatKey]=\"chatKey\"\n      [message]=\"message\"\n      (response)=\"response.emit($event)\"\n    ></ngx-chat-ui-action-select>\n  </div>\n</ng-template>\n\n<ng-template\n  #actionTextTemplateDefault\n  let-message=\"message\"\n  let-submit=\"submit\"\n  let-form=\"form\"\n>\n  <form\n    novalidate\n    [formGroup]=\"form\"\n    (ngSubmit)=\"submit()\"\n  >\n    <input\n      formControlName=\"text\"\n      type=\"text\"\n    >\n    <button></button>\n  </form>\n</ng-template>\n\n<ng-template\n  #actionSelectTemplateDefault\n  let-message=\"message\"\n  let-submit=\"submit\"\n>\n  <div\n    class=\"ngx-chat-ui-action-select-frame\"\n    [ngClass]=\"message.action.className || 'ngx-chat-ui-action-select-button'\"\n  >\n    <div class=\"ngx-chat-ui-message-spacer\"></div>\n    <div class=\"ngx-chat-ui-action-select-items\">\n      <ngx-chat-ui-action-select-item\n        *ngFor=\"let item of message.action.items\"\n        [item]=\"item\"\n        (response)=\"submit($event)\"\n      ></ngx-chat-ui-action-select-item>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template\n  #actionSelectItemTemplateDefault\n  let-item=\"item\"\n  let-response=\"response\"\n>\n  <a\n    (click)=\"response.emit(item)\"\n    class=\"ngx-chat-ui-action-select-item-frame\"\n    [ngClass]=\"item.className || 'ngx-chat-ui-action-select-item-regular'\"\n    href=\"javascript:;\"\n  >\n    <span\n      class=\"ngx-chat-ui-action-select-item-icon\"\n      *ngIf=\"item.icon\"\n    >{{ item.icon }}</span>\n    <span\n      class=\"ngx-chat-ui-action-select-item-text\"\n      *ngIf=\"item.text\"\n    >{{ item.text }}</span>\n  </a>\n</ng-template>\n\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.scss":
/*!*******************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/container/container.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"

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



var NgxChatUiContainerComponent = /** @class */ (function () {
    function NgxChatUiContainerComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    };
    NgxChatUiContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService.templatesSet({
            container: this.containerTemplate || this.containerTemplateDefault,
            messageTyping: this.messageTypingTemplate || this.messageTypingTemplateDefault,
            messageList: this.messageListTemplate || this.messageListTemplateDefault,
            messageItem: this.messageItemTemplate || this.messageItemTemplateDefault,
            messagePartner: this.messagePartnerTemplate || this.messagePartnerTemplateDefault,
            messagePayload: this.messagePayloadTemplate,
            messagePayloadText: this.messagePayloadTextTemplate || this.messagePayloadTextTemplateDefault,
            messagePayloadSelect: this.messagePayloadSelectTemplate || this.messagePayloadSelectTemplateDefault,
            messageMeta: this.messageMetaTemplate || this.messageMetaTemplateDefault,
            action: this.actionTemplate,
            actionText: this.actionTextTemplate || this.actionTextTemplateDefault,
            actionSelect: this.actionSelectTemplate || this.actionSelectTemplateDefault,
            actionSelectItem: this.actionSelectItemTemplate || this.actionSelectItemTemplateDefault,
        });
        this.ngxChatUiService
            .templatesGet('container')
            .subscribe(function (template) { return _this.template = template; });
        this.response
            .subscribe(function () { return _this.onResponse(); });
    };
    NgxChatUiContainerComponent.prototype.onResponse = function () {
        this.ngxChatUiService
            .stateSet({ isSending: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('containerTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "containerTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageTypingTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageTypingTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageListTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageListTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageItemTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageItemTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePartnerTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePartnerTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadTextTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadTextTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagePayloadSelectTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadSelectTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageMetaTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageMetaTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTextTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionTextTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionSelectTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionSelectTemplateDefault", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionSelectItemTemplateDefault'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionSelectItemTemplateDefault", void 0);
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
    ], NgxChatUiContainerComponent.prototype, "messagePayloadTextTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messagePayloadSelectTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "messageMetaTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NgxChatUiContainerComponent.prototype, "actionTextTemplate", void 0);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxChatUiContainerComponent.prototype, "response", void 0);
    NgxChatUiContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-container',
            template: __webpack_require__(/*! ./container.component.html */ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./container.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiContainerComponent);
    return NgxChatUiContainerComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.html":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/item/item.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  chatKey: chatKey\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.scss":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/item/item.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

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



var NgxChatUiMessageItemComponent = /** @class */ (function () {
    function NgxChatUiMessageItemComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
    }
    NgxChatUiMessageItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messageItem')
            .subscribe(function (template) { return _this.template = template; });
    };
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
            template: __webpack_require__(/*! ./item.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./item.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageItemComponent);
    return NgxChatUiMessageItemComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.html":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/list/list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  messages: messages,\n  chatKey: chatKey,\n  trackByFn: trackByFn\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.scss":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/list/list.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

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



var NgxChatUiMessageListComponent = /** @class */ (function () {
    function NgxChatUiMessageListComponent(element, ngxChatUiService) {
        this.element = element;
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.messages = [];
    }
    NgxChatUiMessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messageList')
            .subscribe(function (template) { return _this.template = template; });
        this.ngxChatUiService
            .messagesGet(this.chatKey)
            .subscribe(function (messages) { return _this.onMessageChanged(messages); });
    };
    NgxChatUiMessageListComponent.prototype.trackByFn = function (index) {
        return index;
    };
    NgxChatUiMessageListComponent.prototype.onMessageChanged = function (messages) {
        this.messages = messages;
        var el = this.element.nativeElement;
        el.scrollTop = el.scrollHeight;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageListComponent.prototype, "chatKey", void 0);
    NgxChatUiMessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-list',
            template: __webpack_require__(/*! ./list.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./list.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageListComponent);
    return NgxChatUiMessageListComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.html":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.scss":
/*!*****************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL21ldGEvbWV0YS5jb21wb25lbnQuc2NzcyJ9 */"

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



var NgxChatUiMessageMetaComponent = /** @class */ (function () {
    function NgxChatUiMessageMetaComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
    }
    NgxChatUiMessageMetaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messageMeta')
            .subscribe(function (template) { return _this.template = template; });
    };
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
            template: __webpack_require__(/*! ./meta.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./meta.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageMetaComponent);
    return NgxChatUiMessageMetaComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.html":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  avatar: avatar\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.scss":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BhcnRuZXIvcGFydG5lci5jb21wb25lbnQuc2NzcyJ9 */"

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



var NgxChatUiMessagePartnerComponent = /** @class */ (function () {
    function NgxChatUiMessagePartnerComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
    }
    NgxChatUiMessagePartnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messagePartner')
            .subscribe(function (template) { return _this.template = template; });
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
            template: __webpack_require__(/*! ./partner.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./partner.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePartnerComponent);
    return NgxChatUiMessagePartnerComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.html":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  chatKey: chatKey,\n  MessageType: MessageType\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.scss":
/*!***********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvcGF5bG9hZC5jb21wb25lbnQuc2NzcyJ9 */"

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




var NgxChatUiMessagePayloadComponent = /** @class */ (function () {
    function NgxChatUiMessagePayloadComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.MessageType = _interfaces__WEBPACK_IMPORTED_MODULE_3__["INgxChatUiMessageType"];
    }
    NgxChatUiMessagePayloadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messagePayload')
            .subscribe(function (template) { return _this.template = template; });
    };
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
            template: __webpack_require__(/*! ./payload.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./payload.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadComponent);
    return NgxChatUiMessagePayloadComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.html":
/*!*****************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message,\n  item: item\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.scss":
/*!*****************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

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



var NgxChatUiMessagePayloadSelectComponent = /** @class */ (function () {
    function NgxChatUiMessagePayloadSelectComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
    }
    NgxChatUiMessagePayloadSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messagePayloadSelect')
            .subscribe(function (template) { return _this.template = template; });
        this.initMessage();
    };
    NgxChatUiMessagePayloadSelectComponent.prototype.initMessage = function () {
        var _this = this;
        var message = this.ngxChatUiService
            .messagesGet(this.chatKey)
            .getValue()
            .find(function (message) { return message.messageId === _this.message.payload.messageId; });
        this.item = message.action.items[this.message.payload.item];
    };
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
            template: __webpack_require__(/*! ./select.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadSelectComponent);
    return NgxChatUiMessagePayloadSelectComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.html":
/*!*************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  message: message\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.scss":
/*!*************************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3BheWxvYWQvdGV4dC90ZXh0LmNvbXBvbmVudC5zY3NzIn0= */"

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



var NgxChatUiMessagePayloadTextComponent = /** @class */ (function () {
    function NgxChatUiMessagePayloadTextComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
    }
    NgxChatUiMessagePayloadTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messagePayloadText')
            .subscribe(function (template) { _this.template = template; });
    };
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
            template: __webpack_require__(/*! ./text.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./text.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessagePayloadTextComponent);
    return NgxChatUiMessagePayloadTextComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.html":
/*!*********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"template; context: {\n  partner: partner,\n  chatKey: chatKey\n}\"></ng-container>\n"

/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.scss":
/*!*********************************************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25neC1jaGF0LXVpL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL3R5cGluZy90eXBpbmcuY29tcG9uZW50LnNjc3MifQ== */"

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



var NgxChatUiMessageTypingComponent = /** @class */ (function () {
    function NgxChatUiMessageTypingComponent(ngxChatUiService) {
        this.ngxChatUiService = ngxChatUiService;
        this.chatKey = 'default';
        this.partner = null;
    }
    NgxChatUiMessageTypingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxChatUiService
            .templatesGet('messageTyping')
            .subscribe(function (template) { return _this.template = template; });
        this.ngxChatUiService
            .stateGet(this.chatKey)
            .subscribe(function (state) { return _this.stateUpdated(state); });
    };
    NgxChatUiMessageTypingComponent.prototype.stateUpdated = function (state) {
        this.partner = (state.isTyping
            && (this.ngxChatUiService
                .partnersGet(this.chatKey)
                .getValue()
                .find(function (messagePartner) { return messagePartner.messagePartnerId === state.isTyping; }) || !!state.isTyping)) || null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxChatUiMessageTypingComponent.prototype, "chatKey", void 0);
    NgxChatUiMessageTypingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-message-typing',
            template: __webpack_require__(/*! ./typing.component.html */ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./typing.component.scss */ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["NgxChatUiService"]])
    ], NgxChatUiMessageTypingComponent);
    return NgxChatUiMessageTypingComponent;
}());



/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts":
/*!*****************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/interfaces/index.ts ***!
  \*****************************************************************/
/*! exports provided: INgxChatUiMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-type */ "../../libs/ngx-chat-ui/src/lib/interfaces/message-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageType", function() { return _message_type__WEBPACK_IMPORTED_MODULE_0__["INgxChatUiMessageType"]; });




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
var INgxChatUiMessageType;
(function (INgxChatUiMessageType) {
    INgxChatUiMessageType[INgxChatUiMessageType["text"] = 0] = "text";
    INgxChatUiMessageType[INgxChatUiMessageType["select"] = 1] = "select";
})(INgxChatUiMessageType || (INgxChatUiMessageType = {}));


/***/ }),

/***/ "../../libs/ngx-chat-ui/src/lib/ngx-chat-ui.module.ts":
/*!*******************************************************************!*\
  !*** /ngx-chat-ui/libs/ngx-chat-ui/src/lib/ngx-chat-ui.module.ts ***!
  \*******************************************************************/
/*! exports provided: NgxChatUiModule, NgxChatUiService, INgxChatUiMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiModule", function() { return NgxChatUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/container/container.component */ "../../libs/ngx-chat-ui/src/lib/components/container/container.component.ts");
/* harmony import */ var _components_message_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message/list/list.component */ "../../libs/ngx-chat-ui/src/lib/components/message/list/list.component.ts");
/* harmony import */ var _components_message_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/message/item/item.component */ "../../libs/ngx-chat-ui/src/lib/components/message/item/item.component.ts");
/* harmony import */ var _components_action_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/action/action.component */ "../../libs/ngx-chat-ui/src/lib/components/action/action.component.ts");
/* harmony import */ var _components_message_partner_partner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/message/partner/partner.component */ "../../libs/ngx-chat-ui/src/lib/components/message/partner/partner.component.ts");
/* harmony import */ var _components_message_payload_payload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/message/payload/payload.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/payload.component.ts");
/* harmony import */ var _components_message_payload_text_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/message/payload/text/text.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/text/text.component.ts");
/* harmony import */ var _components_message_payload_select_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/message/payload/select/select.component */ "../../libs/ngx-chat-ui/src/lib/components/message/payload/select/select.component.ts");
/* harmony import */ var _components_message_meta_meta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/message/meta/meta.component */ "../../libs/ngx-chat-ui/src/lib/components/message/meta/meta.component.ts");
/* harmony import */ var _components_action_text_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/action/text/text.component */ "../../libs/ngx-chat-ui/src/lib/components/action/text/text.component.ts");
/* harmony import */ var _components_action_select_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/action/select/select.component */ "../../libs/ngx-chat-ui/src/lib/components/action/select/select.component.ts");
/* harmony import */ var _components_action_select_item_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/action/select/item/item.component */ "../../libs/ngx-chat-ui/src/lib/components/action/select/item/item.component.ts");
/* harmony import */ var _components_message_typing_typing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/message/typing/typing.component */ "../../libs/ngx-chat-ui/src/lib/components/message/typing/typing.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services */ "../../libs/ngx-chat-ui/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiService", function() { return _services__WEBPACK_IMPORTED_MODULE_17__["NgxChatUiService"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interfaces */ "../../libs/ngx-chat-ui/src/lib/interfaces/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INgxChatUiMessageType", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_18__["INgxChatUiMessageType"]; });





















var NgxChatUiModule = /** @class */ (function () {
    function NgxChatUiModule() {
    }
    NgxChatUiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__["NgxChatUiContainerComponent"],
                _components_message_typing_typing_component__WEBPACK_IMPORTED_MODULE_16__["NgxChatUiMessageTypingComponent"],
                _components_message_list_list_component__WEBPACK_IMPORTED_MODULE_5__["NgxChatUiMessageListComponent"],
                _components_message_item_item_component__WEBPACK_IMPORTED_MODULE_6__["NgxChatUiMessageItemComponent"],
                _components_message_partner_partner_component__WEBPACK_IMPORTED_MODULE_8__["NgxChatUiMessagePartnerComponent"],
                _components_message_payload_payload_component__WEBPACK_IMPORTED_MODULE_9__["NgxChatUiMessagePayloadComponent"],
                _components_message_payload_text_text_component__WEBPACK_IMPORTED_MODULE_10__["NgxChatUiMessagePayloadTextComponent"],
                _components_message_payload_select_select_component__WEBPACK_IMPORTED_MODULE_11__["NgxChatUiMessagePayloadSelectComponent"],
                _components_message_meta_meta_component__WEBPACK_IMPORTED_MODULE_12__["NgxChatUiMessageMetaComponent"],
                _components_action_action_component__WEBPACK_IMPORTED_MODULE_7__["NgxChatUiActionComponent"],
                _components_action_text_text_component__WEBPACK_IMPORTED_MODULE_13__["NgxChatUiActionTextComponent"],
                _components_action_select_select_component__WEBPACK_IMPORTED_MODULE_14__["NgxChatUiActionSelectComponent"],
                _components_action_select_item_item_component__WEBPACK_IMPORTED_MODULE_15__["NgxChatUiActionSelectItemComponent"]
            ],
            exports: [
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__["NgxChatUiContainerComponent"],
                _components_message_typing_typing_component__WEBPACK_IMPORTED_MODULE_16__["NgxChatUiMessageTypingComponent"],
                _components_message_list_list_component__WEBPACK_IMPORTED_MODULE_5__["NgxChatUiMessageListComponent"],
                _components_message_item_item_component__WEBPACK_IMPORTED_MODULE_6__["NgxChatUiMessageItemComponent"],
                _components_message_partner_partner_component__WEBPACK_IMPORTED_MODULE_8__["NgxChatUiMessagePartnerComponent"],
                _components_message_payload_payload_component__WEBPACK_IMPORTED_MODULE_9__["NgxChatUiMessagePayloadComponent"],
                _components_message_payload_text_text_component__WEBPACK_IMPORTED_MODULE_10__["NgxChatUiMessagePayloadTextComponent"],
                _components_message_payload_select_select_component__WEBPACK_IMPORTED_MODULE_11__["NgxChatUiMessagePayloadSelectComponent"],
                _components_message_meta_meta_component__WEBPACK_IMPORTED_MODULE_12__["NgxChatUiMessageMetaComponent"],
                _components_action_action_component__WEBPACK_IMPORTED_MODULE_7__["NgxChatUiActionComponent"],
                _components_action_text_text_component__WEBPACK_IMPORTED_MODULE_13__["NgxChatUiActionTextComponent"],
                _components_action_select_select_component__WEBPACK_IMPORTED_MODULE_14__["NgxChatUiActionSelectComponent"],
                _components_action_select_item_item_component__WEBPACK_IMPORTED_MODULE_15__["NgxChatUiActionSelectItemComponent"]
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



var NgxChatUiService = /** @class */ (function () {
    function NgxChatUiService() {
        this.templatesStore = {
            container$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messageTyping$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messageList$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messageItem$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messagePartner$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messagePayload$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messagePayloadText$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messagePayloadSelect$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            messageMeta$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            action$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            actionText$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            actionSelect$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            actionSelectItem$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
        };
        this.partnersStore = {};
        this.messagesStore = {};
        this.actionsStore = {};
        this.statesStore = {};
    }
    NgxChatUiService.prototype.templatesSet = function (templates) {
        var _this = this;
        Object.keys(this.templatesStore)
            .forEach(function (templateKey) {
            var key = templateKey.replace(/\$/, '');
            if (templates[key] !== undefined) {
                _this.templatesStore[templateKey].next(templates[key]);
            }
        });
    };
    NgxChatUiService.prototype.templatesGet = function (templateKey) {
        return this.templatesStore[templateKey + "$"];
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
        var subject = this.messagesGet(chatKey);
        var current = subject.getValue();
        subject.next(current.concat(messages.map(function (message) { return _this.processMessage(message, chatKey); })));
    };
    NgxChatUiService.prototype.messagesSet = function (messages, chatKey) {
        var _this = this;
        if (chatKey === void 0) { chatKey = 'default'; }
        this.messagesGet(chatKey).next(messages.map(function (message) { return _this.processMessage(message, chatKey); }));
    };
    NgxChatUiService.prototype.processMessage = function (message, chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        var msg = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, message);
        if (msg.messagePartnerId && !msg.partner) {
            msg.partner = this.partnersGet(chatKey).getValue().find(function (messagePartner) { return messagePartner.messagePartnerId === msg.messagePartnerId; });
        }
        return msg;
    };
    NgxChatUiService.prototype.messagesClear = function (chatKey) {
        if (chatKey === void 0) { chatKey = 'default'; }
        this.messagesGet(chatKey).next([]);
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
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.service */ "../../libs/ngx-chat-ui/src/lib/services/chat.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxChatUiService", function() { return _chat_service__WEBPACK_IMPORTED_MODULE_0__["NgxChatUiService"]; });




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
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-chat-ui/libs/ngx-chat-ui */ "../../libs/ngx-chat-ui/src/index.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_4__["NgxChatUiModule"]
            ],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-chat-ui-container\r\n  chatKey=\"first\"\r\n  [state]=\"state.first\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.first\"\r\n  (response)=\"onResponse('first', $event)\"\r\n></ngx-chat-ui-container>\r\n<ngx-chat-ui-container\r\n  chatKey=\"second\"\r\n  [state]=\"state.second\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.second\"\r\n  (response)=\"onResponse('second', $event)\"\r\n></ngx-chat-ui-container>\r\n<ngx-chat-ui-container\r\n  chatKey=\"third\"\r\n  [state]=\"state.third\"\r\n  [partners]=\"partners\"\r\n  [messages]=\"messages.third\"\r\n  (response)=\"onResponse('third', $event)\"\r\n></ngx-chat-ui-container>\r\n"

/***/ }),

/***/ "./src/app/components/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL25neC1jaGF0LXVpLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */"

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
            first: [],
            second: [],
            third: []
        };
        this.state = {
            first: {},
            second: {},
            third: {}
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
        this.messages.first = this.messages.first.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    text: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '1',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    text: 'Wanna play?'
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
        this.messages.second = this.messages.second.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    text: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '2',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    text: 'Wanna play?'
                },
                action: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text
                }
            },
        ]);
        this.messages.third = this.messages.third.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    text: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '1',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: _ngx_chat_ui_libs_ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    text: 'Wanna play?'
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
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-chat-ui-demo-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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