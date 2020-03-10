(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\" href=\"#\">Swiss-String</a>\n  <a class=\"btn\" href=\"#\">View</a>\n  <!-- Toggle Data Flow Lines -->\n  <!-- Toggle Data Operators -->\n  <!-- Toggle Edit buttons -->\n  <span class=\"filler\"></span>\n  <a class=\"btn\" href=\"#\">Save</a>\n  <a class=\"btn\" href=\"#\">Load</a>\n\n</nav>\n<div class=\"main\">\n  <app-main [style.padding]=\"(isMobile ? 8 : 20) + 'px'\"></app-main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/column/column.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/column/column.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-view-widget\n  *ngIf=\"viewWidget != null\" [stepID]=\"stepID\" [index]=\"index\"\n  [viewWidget]=\"viewWidget\"\n  [isOrganizeMode]=\"editMode === StepEditMode.ORGANIZE\"\n  [attr.data-entity-id]=\"viewWidget.id\"\n  [attr.data-entity-name]=\"viewWidget.view.name\"\n>\n</app-view-widget>\n\n<app-operator-widget\n  *ngIf=\"operatorWidget != null\" [stepID]=\"stepID\" [index]=\"index\"\n  [operatorWidget]=\"operatorWidget\"\n  [isOrganizeMode]=\"editMode === StepEditMode.ORGANIZE\"\n>\n</app-operator-widget>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/button/button.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/button/button.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\">\n  <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/circle/circle.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/circle/circle.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/editable-wrapper/editable-wrapper.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/editable-wrapper/editable-wrapper.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" *ngIf=\"isEdit\" [value]=\"value\" (blur)=\"onEditorBlur()\" #editor\n  (keyup.enter)=\"onEditorEnter()\">\n<span *ngIf=\"!isEdit\" (click)=\"onContentClicked()\" (mouseenter)=\"onMouseEnterLabel()\"\n  (mouseleave)=\"onMouseLeaveLabel()\">{{value}}</span>\n<fa-icon [icon]=\"faEdit\" *ngIf=\"isLabelOver\"></fa-icon>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-editor\">\n  <div class=\"back\" #back>\n    <!-- <svg width=\"200\" height=\"200\" #graph>\n      <circle cx=\"50\" cy=\"50\" r=\"5\" fill=\"green\" />\n    </svg> -->\n  </div>\n  <div class=\"front\" #front>\n    <app-step *ngFor=\"let step of steps; let i = index; trackBy: trackItem\" [step]=\"step\" [itemIndex]=\"i\"\n      [isNextStop]=\"(step.type==='view' && i+1 < steps.length && steps[i+1].type !==step.type)\"></app-step>\n    <div *ngIf=\"steps.length <= 0\">\n      <div class=\"alert alert-primary\" role=\"alert\">\n        <fa-icon [icon]=\"faInfoCircle\"></fa-icon>\n        Start by pressing \"Add step\"\n      </div>\n    </div>\n  </div>\n</div>\n<div>\n  <app-button (click)=\"onClickAddStep()\">Add step</app-button>\n</div>\n\n<div>\n  <p>stepsJSON</p>\n  <textarea style=\"width:100%; max-width:500px; height: 200px;\">{{stepsJSON}}</textarea>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/operator-widget/operator-widget.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/operator-widget/operator-widget.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column-input operator-parameter-container\">\n  <div class=\"operator-parameter\" *ngFor=\"let input of inputs\" [attr.data-entity-id]=\"input.id\"\n    [attr.data-entity-name]=\"input.contextName\">\n    <span class=\"debug-entity-id\">[{{input.id}}]{{' '}}</span>\n    {{input.contextName}}\n  </div>\n</div>\n<div class=\"operator\">\n  <h3 class=\"text-secondary\">{{operatorWidget.operator.title || operatorWidget.operator.type}}</h3>\n</div>\n<div class=\"column-output operator-parameter-container\">\n  <div class=\"operator-parameter\" *ngFor=\"let output of outputs\" [attr.data-entity-id]=\"output.id\"\n    [attr.data-entity-name]=\"output.contextName\">\n    <span class=\"debug-entity-id\">[{{output.id}}]{{' '}}</span>\n    {{output.contextName}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/step/step.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/step/step.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      <button class=\"expand-button btn btn-secondary btn-sm\" (click)=\"onExpandButtonClick()\">\n        <fa-icon *ngIf=\"isExpanded\" [icon]=\"faMinus\"></fa-icon>\n        <fa-icon *ngIf=\"!isExpanded\" [icon]=\"faPlus\"></fa-icon>\n      </button>\n      <span class=\"app-text-secondary\">{{itemIndex+1}}.{{ ' ' }}</span>\n      <span class=\"debug-entity-id\">[{{step.id}}]{{' '}}</span>\n      <app-editable-wrapper [value]=\"step.title\" (valueChange)=\"onTitleUpdated($event)\"></app-editable-wrapper>{{ ' ' }}\n      <span style=\"display:inline-block;width:4px;\"></span>\n      <span class=\"app-text-secondary step-type\" [hidden]=\"isExpanded\">{{summary}}</span>\n    </h5>\n    <div class=\"indented-body after-title\" [hidden]=\"!isExpanded\">\n      <div class=\"step-body\" *ngIf=\"step.type!=='basic'\">\n        <div class=\"column-row\" [class.isMobile]=\"isMobile\">\n          <app-column class=\"column\" [stepID]=\"step.id\"\n            *ngFor=\"let column of step.columns; let i = index; trackBy: trackColumn\"\n            [style.width]=\"isMobile ? '' : (column.width+column.widthUnit)\" [column]=\"column\" [index]=\"i\"\n            [editMode]=\"editMode\">\n          </app-column>\n          <div *ngIf=\"step.columns.length <= 0\" class=\"column\" [class.isMobile]=\"isMobile\">\n            <div class=\"alert alert-primary\" role=\"alert\">\n              <fa-icon [icon]=\"faInfoCircle\"></fa-icon>\n              Start by pressing \"Add {{this.step.type}}\"\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"step.type==='basic'\" [class.isMobile]=\"isMobile\">\n        <h6>Select step type:</h6>\n        <div class=\"column step-type-selector\" [class.isMobile]=\"isMobile\" [style.width]=\"'100%'\">\n          <button class=\"btn btn-secondary\" (click)=\"onClickTypeSelector('view')\">View</button>\n          <button class=\"btn btn-secondary\" (click)=\"onClickTypeSelector('operator')\">Operator</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"step-buttons toolbar\" [hidden]=\"!isExpanded\">\n      <div class=\"toolbar-default\" *ngIf=\"editMode === StepEditMode.DEFAULT\">\n        <button class=\"btn btn-light\" *ngIf=\"step.type!=='basic'\">Add {{this.step.type}}</button>{{ ' ' }}\n        <button class=\"btn btn-light\" *ngIf=\"step.type!=='basic'\" (click)=\"onClickOrganize()\">Organize</button>{{ ' ' }}\n        <button class=\"btn btn-light\" (click)=\"onClickRemoveStep()\">Remove Step</button>\n      </div>\n      <div class=\"toolbar-organize\" *ngIf=\"editMode === StepEditMode.ORGANIZE\">\n        <button class=\"btn btn-light\" *ngIf=\"step.type!=='basic'\" (click)=\"onClickEndOrganize()\">End\n          Organize</button>{{ ' ' }}\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"isNextStop\" class=\"card\">\n  <div class=\"card-body indented-body\">\n    <button class=\"btn btn-primary\" style=\"padding-left: 40px; padding-right: 40px; \">Next</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-widget/view-widget.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-widget/view-widget.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column-input\">\n  <div class=\"toolbar\" *ngIf=\"isOrganizeMode\">\n    <div class=\"filler\"></div>\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"onClickResizeButton(+1)\">\n      <fa-icon [icon]=\"faPlus\" size=\"xs\"></fa-icon>\n    </button>\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"onClickResizeButton(-1)\">\n      <fa-icon [icon]=\"faMinus\" size=\"xs\"></fa-icon>\n    </button>\n    <button class=\"btn btn-secondary btn-sm\" *ngIf=\"isOrganizeMode\" (click)=\"onClickTrash()\">\n      <fa-icon [icon]=\"faTrashAlt\" size=\"xs\"></fa-icon>\n    </button>\n  </div>\n  <h6 class=\"text-secondary view-title\">\n    <span class=\"debug-entity-id\">[{{viewWidget.id}}]{{' '}}</span>\n    <app-editable-wrapper [value]=\"viewWidget.view.title\" (valueChange)=\"onTitleUpdated($event)\"></app-editable-wrapper>\n  </h6>\n</div>\n<div class=\"view\">\n  <textarea [style.height]=\"height+'px'\">{{viewWidget.view.default}}</textarea>\n</div>\n<div class=\"column-output\"></div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 32px);\n  background-color: #d6eafd;\n}\n\nnav {\n  background-color: #007bff;\n  color: white;\n}\n\nnav a,\nnav button {\n  color: white;\n}\n\n:host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHBcXHN3aXNzLXN0cmluZy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLHlCRVZlO0VGV2YsWUFBQTtBQ0RGOztBREdFOztFQUVFLFlBQUE7QUNESjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3ZhcmlhYmxlcyc7XG5cbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjM0LCAyNTMpO1xufVxuXG5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGEsXG4gIGJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlYWZkO1xufVxuXG5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5uYXYgYSxcbm5hdiBidXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIiRib290c3RyYXAtYmx1ZTogIzAwN2JmZjtcbiRtYXhpbXVtLWJsdWU6ICM1MkIyQ0Y7XG4kZGFyay1za3ktYmx1ZTogIzdFQzRDRjtcbiR3aWxkLWJsdWUteW9uZGVyOiAjOUNBRENFO1xuJGxhbmd1aWQtbGF2ZW5kZXI6ICNEMUNGRTI7XG4kcGFsZS1jaGVzdG51dDojRDRBRkI5O1xuXG5cbiRwcmltYXJ5LWNvbG9yOiAkYm9vdHN0cmFwLWJsdWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkbWF4aW11bS1ibHVlO1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/media */ "./src/media.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'swiss-string';
        this.isMobile = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.updateDeviceWidth();
    };
    AppComponent.prototype.onResize = function (event) {
        this.updateDeviceWidth();
    };
    AppComponent.prototype.updateDeviceWidth = function () {
        var innerWidth = window.innerWidth;
        this.isMobile = (innerWidth < src_media__WEBPACK_IMPORTED_MODULE_2__["TABLET_PORTRAIT"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_editable_wrapper_editable_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/editable-wrapper/editable-wrapper.component */ "./src/app/components/editable-wrapper/editable-wrapper.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./step/step.component */ "./src/app/step/step.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _column_column_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./column/column.component */ "./src/app/column/column.component.ts");
/* harmony import */ var _view_widget_view_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-widget/view-widget.component */ "./src/app/view-widget/view-widget.component.ts");
/* harmony import */ var _operator_widget_operator_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operator-widget/operator-widget.component */ "./src/app/operator-widget/operator-widget.component.ts");
/* harmony import */ var _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/circle/circle.component */ "./src/app/components/circle/circle.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
                _step_step_component__WEBPACK_IMPORTED_MODULE_9__["StepComponent"],
                _components_editable_wrapper_editable_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["EditableWrapperComponent"],
                _column_column_component__WEBPACK_IMPORTED_MODULE_11__["ColumnComponent"],
                _view_widget_view_widget_component__WEBPACK_IMPORTED_MODULE_12__["ViewWidgetComponent"],
                _operator_widget_operator_widget_component__WEBPACK_IMPORTED_MODULE_13__["OperatorWidgetComponent"],
                _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_14__["CircleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/column/column.component.scss":
/*!**********************************************!*\
  !*** ./src/app/column/column.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbHVtbi9jb2x1bW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/column/column.component.ts":
/*!********************************************!*\
  !*** ./src/app/column/column.component.ts ***!
  \********************************************/
/*! exports provided: ColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnComponent", function() { return ColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _s_Step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../s/Step */ "./src/app/s/Step.ts");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../step/step.component */ "./src/app/step/step.component.ts");




var ColumnComponent = /** @class */ (function () {
    function ColumnComponent() {
        this.StepEditMode = _step_step_component__WEBPACK_IMPORTED_MODULE_3__["StepEditMode"];
        this.viewWidget = null;
        this.operatorWidget = null;
    }
    ColumnComponent.prototype.ngOnInit = function () {
        switch (this.column.type) {
            case _s_Step__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].VIEW:
                this.viewWidget = this.column;
                break;
            case _s_Step__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].OPERATOR:
                this.operatorWidget = this.column;
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ColumnComponent.prototype, "stepID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ColumnComponent.prototype, "column", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ColumnComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ColumnComponent.prototype, "editMode", void 0);
    ColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-column',
            template: __webpack_require__(/*! raw-loader!./column.component.html */ "./node_modules/raw-loader/index.js!./src/app/column/column.component.html"),
            styles: [__webpack_require__(/*! ./column.component.scss */ "./src/app/column/column.component.scss")]
        })
    ], ColumnComponent);
    return ColumnComponent;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/circle/circle.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/circle/circle.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: absolute;\n  border-radius: 50%;\n  box-sizing: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaXJjbGUvQzpcXHBcXHN3aXNzLXN0cmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2lyY2xlXFxjaXJjbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/circle/circle.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/circle/circle.component.ts ***!
  \*******************************************************/
/*! exports provided: CircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CircleComponent = /** @class */ (function () {
    function CircleComponent(elementRef) {
        this.elementRef = elementRef;
        this.color = '#0A0';
        this.borderColor = '#FFF';
        this.radius = 5;
    }
    CircleComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.style.backgroundColor = this.color;
        this.elementRef.nativeElement.style.border = "5px solid " + this.borderColor;
        this.elementRef.nativeElement.style.marginLeft = "" + -this.radius;
        this.elementRef.nativeElement.style.marginTop = "" + -this.radius;
        this.elementRef.nativeElement.style.width = this.radius * 2 + "px";
        this.elementRef.nativeElement.style.height = this.radius * 2 + "px";
    };
    CircleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CircleComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CircleComponent.prototype, "borderColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CircleComponent.prototype, "radius", void 0);
    CircleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-circle',
            template: __webpack_require__(/*! raw-loader!./circle.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/circle/circle.component.html"),
            styles: [__webpack_require__(/*! ./circle.component.scss */ "./src/app/components/circle/circle.component.scss")]
        })
    ], CircleComponent);
    return CircleComponent;
}());



/***/ }),

/***/ "./src/app/components/editable-wrapper/editable-wrapper.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/editable-wrapper/editable-wrapper.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n}\n\nfa-icon {\n  display: inline-block;\n  padding-left: 4px;\n  color: #888;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0YWJsZS13cmFwcGVyL0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVkaXRhYmxlLXdyYXBwZXJcXGVkaXRhYmxlLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFibGUtd3JhcHBlci9lZGl0YWJsZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFibGUtd3JhcHBlci9lZGl0YWJsZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cblxuZmEtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmZhLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/editable-wrapper/editable-wrapper.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/editable-wrapper/editable-wrapper.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditableWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableWrapperComponent", function() { return EditableWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var EditableWrapperComponent = /** @class */ (function () {
    function EditableWrapperComponent() {
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.isEdit = false;
        this.isLabelOver = false;
        this.value = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditableWrapperComponent.prototype.ngOnInit = function () {
    };
    EditableWrapperComponent.prototype.onContentClicked = function () {
        var _this = this;
        this.isEdit = true;
        this.isLabelOver = false;
        setTimeout(function () {
            _this.editorElement.nativeElement.focus();
        }, 100);
    };
    EditableWrapperComponent.prototype.onMouseEnterLabel = function () {
        this.isLabelOver = true;
    };
    EditableWrapperComponent.prototype.onMouseLeaveLabel = function () {
        this.isLabelOver = false;
    };
    EditableWrapperComponent.prototype.onEditorEnter = function () {
        this.finalizeInput();
    };
    EditableWrapperComponent.prototype.onEditorBlur = function () {
        this.finalizeInput();
    };
    EditableWrapperComponent.prototype.finalizeInput = function () {
        this.value = this.editorElement.nativeElement.value;
        this.isEdit = false;
        this.valueChange.emit(this.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditableWrapperComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], EditableWrapperComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor', { static: false })
    ], EditableWrapperComponent.prototype, "editorElement", void 0);
    EditableWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editable-wrapper',
            template: __webpack_require__(/*! raw-loader!./editable-wrapper.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/editable-wrapper/editable-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./editable-wrapper.component.scss */ "./src/app/components/editable-wrapper/editable-wrapper.component.scss")]
        })
    ], EditableWrapperComponent);
    return EditableWrapperComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  background-color: #EEE;\n}\n\n.steps-editor {\n  position: relative;\n}\n\n.back {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxccFxcc3dpc3Mtc3RyaW5nL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbn1cblxuLnN0ZXBzLWVkaXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2t7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xufVxuXG4uc3RlcHMtZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/media */ "./src/media.ts");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils */ "./src/utils.ts");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");







var MainComponent = /** @class */ (function () {
    function MainComponent(stepsService) {
        var _this = this;
        this.stepsService = stepsService;
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
        this.stepsJSON = '';
        this.isMobile = false;
        this.graphWidth = 0;
        this.graphHeight = 0;
        this.updateGraphInterval = 0;
        this.stepsService.steps$.subscribe(function (steps) {
            _this.steps = steps;
            _this.stepsJSON = JSON.stringify(steps, null, 4);
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateDeviceWidth();
        this.updateGraphInterval = window.setInterval(function () { return _this.updateDataFlowGraph(); }, 1000);
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.updateGraphInterval) {
            clearInterval(this.updateGraphInterval);
        }
    };
    MainComponent.prototype.ngAfterContentChecked = function () {
        this.updateDataFlowGraph();
    };
    MainComponent.prototype.onClickAddStep = function () {
        this.stepsService.addStep();
    };
    MainComponent.prototype.trackItem = function (index, item) {
        return item.id;
    };
    MainComponent.prototype.updateDataFlowGraph = function () {
        var _this = this;
        if (!this.frontElement) {
            return;
        }
        var viewWidgets = document.querySelectorAll('app-view-widget');
        var operatorWidgets = document.querySelectorAll('app-operator-widget');
        // console.log('updateDataFlowGraph', viewWidgets, operatorWidgets);
        this.graphWidth = this.frontElement.nativeElement.clientWidth;
        this.graphHeight = this.frontElement.nativeElement.clientHeight;
        this.backElement.nativeElement.innerHTML = '';
        var svg = this.createSVG(this.backElement.nativeElement);
        var backBB = this.backElement.nativeElement.getBoundingClientRect();
        // draw lines
        this.stepsService.contexts.forEach(function (context, afterStepIndex) {
            var afterStepID = context.afterStepID, keys = context.keys;
            keys.forEach(function (_a, keyIndex) {
                var fromID = _a.fromID, toID = _a.toID, name = _a.name, destStepIndex = _a.destStepIndex;
                var fromWidgetElement = document.querySelector("[data-entity-id=\"" + fromID + "\"]");
                var toWidgetElement = document.querySelector("[data-entity-id=\"" + toID + "\"]");
                if (!fromWidgetElement || !toWidgetElement) {
                    return;
                }
                var fromBB = fromWidgetElement.getBoundingClientRect();
                var toBB = toWidgetElement.getBoundingClientRect();
                var _destStepIndex = destStepIndex || -1;
                if (fromBB.top === 0 && fromBB.left === 0) {
                    return;
                }
                if (toBB.top === 0 && toBB.left === 0) {
                    return;
                }
                var fromPoint = {
                    x: -backBB.left + ((fromBB.left + fromBB.right) / 2),
                    y: -backBB.top + (fromBB.bottom + 4),
                };
                if (_this.isMobile) {
                    fromPoint.x = -backBB.left + fromBB.left + fromBB.width * (keyIndex + 0.5) / keys.length;
                }
                var toPoint = {
                    x: -backBB.left + ((toBB.left + toBB.right) / 2),
                    y: -backBB.top + (toBB.top - 4),
                };
                if (_this.isMobile) {
                    toPoint.x = -backBB.left + toBB.left + toBB.width * (keyIndex + 0.5) / keys.length;
                }
                // console.log(fromWidgetElement, toWidgetElement);
                var line = (function () {
                    if (_destStepIndex - afterStepIndex <= 1) {
                        return [
                            "M",
                            fromPoint.x + " " + fromPoint.y,
                            "C",
                            [
                                fromPoint.x + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                                toPoint.x + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                                toPoint.x + " " + toPoint.y,
                            ].join(', '),
                        ].join(' ');
                    }
                    else {
                        var escapeX = src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_X"] + Object(src_utils__WEBPACK_IMPORTED_MODULE_4__["hashStringToNumber"])(name) * src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_WIDTH"];
                        var curve1 = [
                            fromPoint.x + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            escapeX + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_LEAD"] - src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            escapeX + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_LEAD"]),
                        ].join(', ');
                        var curve2 = [
                            escapeX + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_LEAD"] + src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            toPoint.x + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            toPoint.x + " " + toPoint.y,
                        ].join(', ');
                        return [
                            "M", fromPoint.x + " " + fromPoint.y,
                            "C", curve1,
                            "L", escapeX + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_6__["SIDEBAR_LEAD"]),
                            "C", curve2,
                        ].join(' ');
                    }
                })();
                var pathBG = _this.createPath(svg);
                pathBG.setAttributeNS(null, 'stroke', '#DDD');
                pathBG.setAttributeNS(null, 'stroke-width', '6');
                pathBG.setAttributeNS(null, 'd', line);
                var path = _this.createPath(svg);
                path.setAttributeNS(null, 'stroke', Object(src_utils__WEBPACK_IMPORTED_MODULE_4__["hashStringToColor"])(name));
                path.setAttributeNS(null, 'stroke-width', '3');
                path.setAttributeNS(null, 'd', line);
                var circleIn = _this.createPoint(svg);
                circleIn.setAttributeNS(null, 'fill', Object(src_utils__WEBPACK_IMPORTED_MODULE_4__["hashStringToColor"])(name));
                circleIn.setAttributeNS(null, 'cx', '' + fromPoint.x);
                circleIn.setAttributeNS(null, 'cy', '' + fromPoint.y);
                var circleOut = _this.createPoint(svg);
                circleOut.setAttributeNS(null, 'fill', Object(src_utils__WEBPACK_IMPORTED_MODULE_4__["hashStringToColor"])(name));
                circleOut.setAttributeNS(null, 'cx', '' + toPoint.x);
                circleOut.setAttributeNS(null, 'cy', '' + toPoint.y);
            });
        });
    };
    MainComponent.prototype.createSVG = function (svgContainer) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttributeNS(null, 'id', 'svgDoc');
        svg.setAttributeNS(null, 'width', '' + this.graphWidth);
        svg.setAttributeNS(null, 'height', '' + this.graphHeight);
        // const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        // rect.setAttributeNS(null, 'width', '100%');
        // rect.setAttributeNS(null, 'height', '100%');
        // rect.setAttributeNS(null, 'stroke', '#000');
        // rect.setAttributeNS(null, 'stroke-width', '3');
        // rect.setAttributeNS(null, 'fill', '#AAA');
        // svg.appendChild(rect);
        svgContainer.appendChild(svg);
        return svg;
    };
    MainComponent.prototype.createPath = function (svg) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttributeNS(null, 'stroke', '#DDD');
        path.setAttributeNS(null, 'stroke-width', '3');
        path.setAttributeNS(null, 'fill', 'transparent');
        svg.appendChild(path);
        return path;
    };
    MainComponent.prototype.createPoint = function (svg) {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttributeNS(null, 'r', '7');
        circle.setAttributeNS(null, 'stroke', '#DDD');
        circle.setAttributeNS(null, 'stroke-width', '3');
        circle.setAttributeNS(null, 'fill', '#0A0');
        svg.appendChild(circle);
        return circle;
    };
    MainComponent.prototype.createRect = function (svg) {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttributeNS(null, 'stroke', '#EEE');
        rect.setAttributeNS(null, 'stroke-width', '3');
        rect.setAttributeNS(null, 'fill', '#0A0');
        svg.appendChild(rect);
        return rect;
    };
    MainComponent.prototype.onResize = function (event) {
        this.updateDeviceWidth();
    };
    MainComponent.prototype.updateDeviceWidth = function () {
        var innerWidth = window.innerWidth;
        this.isMobile = (innerWidth < src_media__WEBPACK_IMPORTED_MODULE_3__["TABLET_PORTRAIT"]);
    };
    MainComponent.ctorParameters = function () { return [
        { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_5__["StepsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('graph', { static: false })
    ], MainComponent.prototype, "graphElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('front', { static: false })
    ], MainComponent.prototype, "frontElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('back', { static: false })
    ], MainComponent.prototype, "backElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], MainComponent.prototype, "onResize", null);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/operator-widget/operator-widget.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/operator-widget/operator-widget.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.operator {\n  background-color: white;\n  text-align: center;\n}\n\n.operator-parameter-container {\n  display: -webkit-box;\n  display: flex;\n}\n\n.operator-parameter {\n  width: 100%;\n  text-align: center;\n  margin: 8px;\n  padding: 2px 6px;\n  background-color: #DDD;\n  border-radius: 10000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0b3Itd2lkZ2V0L0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFxhcHBcXG9wZXJhdG9yLXdpZGdldFxcb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcGVyYXRvci13aWRnZXQvb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBRUUsdUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFHQSxzQkFBQTtFQUNBLHNCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9vcGVyYXRvci13aWRnZXQvb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cbi5vcGVyYXRvciB7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcGVyYXRvci1wYXJhbWV0ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm9wZXJhdG9yLXBhcmFtZXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogOHB4O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAvLyBib3JkZXItbGVmdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcbn1cbi5vcGVyYXRvci1wYXJhbWV0ZXI6Zmlyc3QtY2hpbGQge1xuICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4ODg7XG59XG4iLCJoMyB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ub3BlcmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3BlcmF0b3ItcGFyYW1ldGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5vcGVyYXRvci1wYXJhbWV0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDhweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/operator-widget/operator-widget.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/operator-widget/operator-widget.component.ts ***!
  \**************************************************************/
/*! exports provided: OperatorWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorWidgetComponent", function() { return OperatorWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OperatorWidgetComponent = /** @class */ (function () {
    function OperatorWidgetComponent() {
        this.isOrganizeMode = false;
        this.inputs = [];
        this.outputs = [];
    }
    OperatorWidgetComponent.prototype.ngOnInit = function () {
        this.inputs = Object.entries(this.operatorWidget.operator.inputs).map(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), k = _b[0], v = _b[1];
            return v;
        });
        this.outputs = Object.entries(this.operatorWidget.operator.outputs).map(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), k = _b[0], v = _b[1];
            return v;
        });
        // console.log(this.inputs, this.outputs);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OperatorWidgetComponent.prototype, "stepID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OperatorWidgetComponent.prototype, "operatorWidget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OperatorWidgetComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OperatorWidgetComponent.prototype, "isOrganizeMode", void 0);
    OperatorWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operator-widget',
            template: __webpack_require__(/*! raw-loader!./operator-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/operator-widget/operator-widget.component.html"),
            styles: [__webpack_require__(/*! ./operator-widget.component.scss */ "./src/app/operator-widget/operator-widget.component.scss")]
        })
    ], OperatorWidgetComponent);
    return OperatorWidgetComponent;
}());



/***/ }),

/***/ "./src/app/s/Step.ts":
/*!***************************!*\
  !*** ./src/app/s/Step.ts ***!
  \***************************/
/*! exports provided: WidthUnit, WidgetType, StepFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidthUnit", function() { return WidthUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepFactory", function() { return StepFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var WidthUnit;
(function (WidthUnit) {
    WidthUnit["PIXEL"] = "px";
    WidthUnit["PERCENTAGE"] = "%";
})(WidthUnit || (WidthUnit = {}));
var WidgetType;
(function (WidgetType) {
    WidgetType["BASIC"] = "basic";
    WidgetType["VIEW"] = "view";
    WidgetType["OPERATOR"] = "operator";
})(WidgetType || (WidgetType = {}));
var StepFactory = /** @class */ (function () {
    function StepFactory() {
    }
    StepFactory.createStep = function (config) {
        var result = {
            id: 0,
            title: 'Input',
            type: WidgetType.BASIC,
            columns: [],
        };
        result = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, result, config);
        return result;
    };
    return StepFactory;
}());



/***/ }),

/***/ "./src/app/s/_mockSteps.json":
/*!***********************************!*\
  !*** ./src/app/s/_mockSteps.json ***!
  \***********************************/
/*! exports provided: steps, default */
/***/ (function(module) {

module.exports = {"steps":[{"id":1,"title":"Input","type":"view","columns":[{"id":7,"width":50,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Input","name":"input","default":"hello world"}},{"id":8,"width":40,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Input Regex","name":"inputRegex","default":"llo*"}},{"id":3,"width":10,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Token Names","name":"inputRegexTokenNames","default":"aaa"}}]},{"id":2,"title":"Process","type":"operator","columns":[{"id":9,"width":100,"widthUnit":"%","type":"operator","operator":{"type":"regex-match-rename","inputs":{"source":{"id":15,"contextName":"input"},"regex":{"id":16,"contextName":"inputRegex"},"names":{"id":17,"contextName":"inputRegexTokenNames"}},"outputs":{"result":{"id":18,"contextName":"tokens"},"residue":{"id":19,"contextName":"tokens-residue"}}}}]},{"id":3,"title":"Tokens","type":"view","columns":[{"id":10,"width":60,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Tokens","name":"tokens","default":""}},{"id":11,"width":40,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Residue","name":"tokens-residue","default":""}}]},{"id":4,"title":"Template","type":"view","columns":[{"id":12,"width":70,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Template","name":"template","default":""}}]},{"id":5,"title":"Combine","type":"operator","columns":[{"id":13,"width":100,"widthUnit":"%","type":"operator","operator":{"type":"handlebars-template","inputs":{"template":{"id":20,"contextName":"template"},"data":{"id":21,"contextName":"tokens"}},"outputs":{"result":{"id":22,"contextName":"output"}}}}]},{"id":6,"title":"Output","type":"view","columns":[{"id":14,"width":100,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Result","name":"output","default":""}}]}]};

/***/ }),

/***/ "./src/app/s/mockSteps.ts":
/*!********************************!*\
  !*** ./src/app/s/mockSteps.ts ***!
  \********************************/
/*! exports provided: mockSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockSteps", function() { return mockSteps; });
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Step */ "./src/app/s/Step.ts");
/* harmony import */ var _mockSteps_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mockSteps.json */ "./src/app/s/_mockSteps.json");
var _mockSteps_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./_mockSteps.json */ "./src/app/s/_mockSteps.json", 1);


var mockSteps = (_mockSteps_json__WEBPACK_IMPORTED_MODULE_1__["steps"]
    .map(function (v) { return _Step__WEBPACK_IMPORTED_MODULE_0__["StepFactory"].createStep(v); }));


/***/ }),

/***/ "./src/app/s/steps.service.ts":
/*!************************************!*\
  !*** ./src/app/s/steps.service.ts ***!
  \************************************/
/*! exports provided: StepsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsService", function() { return StepsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mockSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mockSteps */ "./src/app/s/mockSteps.ts");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step */ "./src/app/s/Step.ts");






var StepsService = /** @class */ (function () {
    function StepsService() {
        var _this = this;
        this.stepsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_mockSteps__WEBPACK_IMPORTED_MODULE_4__["mockSteps"]);
        this.entities = [];
        this.latestStepID = _mockSteps__WEBPACK_IMPORTED_MODULE_4__["mockSteps"].map(function (s) { return s.id; }).reduce(function (a, v) { return Math.max(a, v); }, 0);
        this.steps$ = this.stepsSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (steps) { return _this.updateContexts(steps); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    StepsService.prototype.addStep = function () {
        var oldSteps = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.stepsSource.getValue());
        this.latestStepID += 1;
        oldSteps.push(_Step__WEBPACK_IMPORTED_MODULE_5__["StepFactory"].createStep({ id: this.latestStepID, title: 'New Step' }));
        this.stepsSource.next(oldSteps);
    };
    StepsService.prototype.updateStep = function (stepID, newValue) {
        var oldSteps = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.stepsSource.getValue());
        var positionID = oldSteps.findIndex(function (step) { return step.id === stepID; });
        oldSteps[positionID] = _Step__WEBPACK_IMPORTED_MODULE_5__["StepFactory"].createStep(newValue);
        console.log('updateStep', stepID, oldSteps[positionID]);
        this.stepsSource.next(oldSteps);
    };
    StepsService.prototype.removeStep = function (stepID) {
        var oldSteps = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.stepsSource.getValue());
        var positionID = oldSteps.findIndex(function (step) { return step.id === stepID; });
        oldSteps.splice(positionID, 1);
        this.stepsSource.next(oldSteps);
    };
    StepsService.prototype.addWidget = function (stepID, widgetType) {
    };
    StepsService.prototype.updateWidget = function (stepID, widgetIndex, widget) {
        var targetStep = this.stepsSource.getValue().find(function (step) { return step.id === stepID; });
        if (!targetStep) {
            throw new TypeError("Step ID \"" + stepID + "\" not found");
        }
        targetStep.columns[widgetIndex] = widget;
        this.updateStep(stepID, targetStep);
    };
    StepsService.prototype.updateContexts = function (steps) {
        this.entities = [];
        var newContexts = [];
        var contextHolder = {}; // holds keys and last-seen widgetID
        for (var stepIndex = 0; stepIndex < steps.length; stepIndex++) {
            var step = steps[stepIndex];
            // const nextStep = steps[i + 1];
            var stepID = step.id, columns = step.columns, type = step.type;
            // console.log('step', i, id);
            if (this.entities[stepID]) {
                throw new Error("Duplicate entityID \"" + stepID + "\" in index \"" + stepIndex + "\"");
            }
            this.entities[stepID] = step;
            switch (type) {
                case _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].VIEW:
                    {
                        var afterContext = this.updateViewWidgetContext(stepIndex, stepID, columns, contextHolder, newContexts);
                        newContexts.push(afterContext);
                    }
                    break;
                case _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].OPERATOR:
                    {
                        var afterContext = this.updateOperatorWidgetContext(stepIndex, stepID, columns, contextHolder, newContexts);
                        newContexts.push(afterContext);
                    }
                    break;
            }
            // console.log('contextHolder', { ...contextHolder });
        }
        // console.log('newContexts', JSON.stringify(newContexts, null, 4));
        this.contexts = newContexts;
    };
    StepsService.prototype.updateViewWidgetContext = function (stepIndex, stepID, columns, contextHolder, newContexts) {
        // mutates contextHolder and newContexts in place
        var afterContext = {
            afterStepID: stepID,
            keys: [],
        };
        columns.forEach(function (column) {
            var e_1, _a, e_2, _b;
            var columnID = column.id, columnType = column.type;
            var viewWidget = column.view;
            var name = viewWidget.name, title = viewWidget.title;
            // console.log('view', name, columnID);
            if (contextHolder[name]) {
                var lastSeenID = contextHolder[name].lastSeenColumnID;
                try {
                    for (var newContexts_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](newContexts), newContexts_1_1 = newContexts_1.next(); !newContexts_1_1.done; newContexts_1_1 = newContexts_1.next()) {
                        var context = newContexts_1_1.value;
                        try {
                            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](context.keys), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var key = _d.value;
                                if (key.fromID === lastSeenID) {
                                    key.toID = columnID;
                                    key.destStepIndex = stepIndex;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (newContexts_1_1 && !newContexts_1_1.done && (_a = newContexts_1.return)) _a.call(newContexts_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            contextHolder[name] = { lastSeenColumnID: columnID, lastSeenStepIndex: stepIndex };
            afterContext.keys.push({
                name: name, destStepIndex: stepIndex,
                fromID: columnID, toID: null, type: null,
            });
        });
        return afterContext;
    };
    StepsService.prototype.updateOperatorWidgetContext = function (stepIndex, stepID, columns, contextHolder, newContexts) {
        // mutates contextHolder and newContexts in place
        var afterContext = {
            afterStepID: stepID,
            keys: [],
        };
        columns.forEach(function (column) {
            var columnID = column.id, columnType = column.type;
            var operatorWidget = column.operator;
            var inputs = operatorWidget.inputs, outputs = operatorWidget.outputs;
            Object.entries(inputs).forEach(function (_a) {
                // console.log('operator', contextName, connectorID);
                var e_3, _b, e_4, _c;
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), inputKey = _d[0], _e = _d[1], connectorID = _e.id, contextName = _e.contextName;
                if (contextHolder[contextName]) {
                    var lastSeenID = contextHolder[contextName].lastSeenColumnID;
                    try {
                        for (var newContexts_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](newContexts), newContexts_2_1 = newContexts_2.next(); !newContexts_2_1.done; newContexts_2_1 = newContexts_2.next()) {
                            var context = newContexts_2_1.value;
                            try {
                                for (var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](context.keys), _g = _f.next(); !_g.done; _g = _f.next()) {
                                    var key = _g.value;
                                    if (key.fromID === lastSeenID) {
                                        key.toID = connectorID;
                                        key.destStepIndex = stepIndex;
                                    }
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (newContexts_2_1 && !newContexts_2_1.done && (_b = newContexts_2.return)) _b.call(newContexts_2);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                // contextHolder[inputKey] = columnID;
                // afterContext.keys.push({ name:inputKey, fromID: columnID, toID: null, type: null });
            });
            Object.entries(outputs).forEach(function (_a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), outputKey = _b[0], _c = _b[1], connectorID = _c.id, contextName = _c.contextName;
                contextHolder[contextName] = { lastSeenColumnID: connectorID, lastSeenStepIndex: stepIndex };
                afterContext.keys.push({
                    name: contextName, destStepIndex: null,
                    fromID: connectorID, toID: null, type: null,
                });
            });
        });
        return afterContext;
    };
    StepsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StepsService);
    return StepsService;
}());



/***/ }),

/***/ "./src/app/step/step.component.scss":
/*!******************************************!*\
  !*** ./src/app/step/step.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.expand-button {\n  width: 30px;\n  margin-right: 20px;\n}\n\n.card-title {\n  margin-bottom: 0;\n  color: black;\n}\n\n.card-subtitle {\n  margin-bottom: 0;\n  margin-left: 40px;\n}\n\n.card {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.step-body {\n  overflow: auto;\n}\n\n.step-body .column-row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-left: -4px;\n  margin-right: -4px;\n}\n\n.step-body .column-row.isMobile {\n  display: block;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.step-body .column {\n  margin: 4px;\n  width: 100%;\n}\n\n.indented-body {\n  margin-left: 50px;\n  margin-right: 8px;\n}\n\n.indented-body.after-title {\n  padding-top: 0px;\n}\n\n.step-buttons {\n  margin-left: calc(50px - 0.75rem);\n  padding-top: 0;\n}\n\n.step-type {\n  font-size: 0.8em;\n  font-style: italic;\n}\n\n.step-type-selector {\n  margin-left: -4px;\n  margin-right: -4px;\n}\n\n.step-type-selector button {\n  width: calc(50% - 8px);\n  margin: 4px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcC9DOlxccFxcc3dpc3Mtc3RyaW5nL3NyY1xcYXBwXFxzdGVwXFxzdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGVwL3N0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NOOztBREdFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNESjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURJRTtFQUNFLGdCQUFBO0FDRko7O0FETUE7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7QUNIRjs7QURVQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURTRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3N0ZXAvc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyAvL3JnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmV4cGFuZC1idXR0b24ge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnN0ZXAtYm9keSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIC5jb2x1bW4tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTRweDtcblxuICAgICYuaXNNb2JpbGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBtYXJnaW46IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaW5kZW50ZWQtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcblxuICAmLmFmdGVyLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG59XG5cbi5zdGVwLWJ1dHRvbnMge1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MHB4IC0gMC43NXJlbSk7XG4gIHBhZGRpbmctdG9wOiAwO1xuXG4gIC8vIC5idG4tbGlnaHQ6Zmlyc3QtY2hpbGQge1xuICAvLyAgIHBhZGRpbmctbGVmdDogMDtcbiAgLy8gfVxufVxuXG4uc3RlcC10eXBlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3RlcC10eXBlLXNlbGVjdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDhweCk7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuIiwiLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5leHBhbmQtYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zdGVwLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zdGVwLWJvZHkgLmNvbHVtbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbn1cbi5zdGVwLWJvZHkgLmNvbHVtbi1yb3cuaXNNb2JpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5zdGVwLWJvZHkgLmNvbHVtbiB7XG4gIG1hcmdpbjogNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZGVudGVkLWJvZHkge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uaW5kZW50ZWQtYm9keS5hZnRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5zdGVwLWJ1dHRvbnMge1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MHB4IC0gMC43NXJlbSk7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uc3RlcC10eXBlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3RlcC10eXBlLXNlbGVjdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbn1cbi5zdGVwLXR5cGUtc2VsZWN0b3IgYnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcbiAgbWFyZ2luOiA0cHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/step/step.component.ts":
/*!****************************************!*\
  !*** ./src/app/step/step.component.ts ***!
  \****************************************/
/*! exports provided: StepEditMode, StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepEditMode", function() { return StepEditMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/media */ "./src/media.ts");
/* harmony import */ var _s_Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../s/Step */ "./src/app/s/Step.ts");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");






var StepEditMode;
(function (StepEditMode) {
    StepEditMode["DEFAULT"] = "default";
    StepEditMode["ORGANIZE"] = "organize";
})(StepEditMode || (StepEditMode = {}));
var StepComponent = /** @class */ (function () {
    function StepComponent(stepsService) {
        this.stepsService = stepsService;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinus"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
        this.StepEditMode = StepEditMode;
        this.editMode = StepEditMode.DEFAULT;
        this.isExpanded = true;
        this.isMobile = false;
    }
    StepComponent.prototype.ngOnInit = function () {
    };
    StepComponent.prototype.ngAfterContentChecked = function () {
        this.updateDeviceWidth();
        switch (this.step.type) {
            case _s_Step__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].VIEW:
                this.summary = this.step.columns.map(function (c) {
                    return c.view.title;
                }).join(', ');
                break;
            case _s_Step__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].OPERATOR:
                this.summary = '[' + this.step.columns.map(function (c) {
                    return c.operator.title || c.operator.type;
                }).join(', ') + ']';
                break;
            default:
                this.summary = 'Step';
        }
    };
    StepComponent.prototype.onExpandButtonClick = function () {
        this.isExpanded = !this.isExpanded;
    };
    StepComponent.prototype.onClickRemoveStep = function () {
        this.stepsService.removeStep(this.step.id);
    };
    StepComponent.prototype.onTitleUpdated = function (val) {
        console.log('onTitleUpdated');
        this.step.title = val;
        this.stepsService.updateStep(this.step.id, this.step);
    };
    StepComponent.prototype.trackColumn = function (index, item) {
        return item.id;
    };
    StepComponent.prototype.onResize = function (event) {
        this.updateDeviceWidth();
    };
    StepComponent.prototype.updateDeviceWidth = function () {
        var innerWidth = window.innerWidth;
        this.isMobile = (innerWidth < src_media__WEBPACK_IMPORTED_MODULE_3__["TABLET_PORTRAIT"]);
    };
    StepComponent.prototype.onClickTypeSelector = function (widgetType) {
        this.step.type = widgetType;
        this.stepsService.updateStep(this.step.id, this.step);
    };
    StepComponent.prototype.changeToEditMode = function (stepEditMode) {
        this.editMode = stepEditMode;
    };
    StepComponent.prototype.onClickOrganize = function () {
        this.changeToEditMode(StepEditMode.ORGANIZE);
    };
    StepComponent.prototype.onClickEndOrganize = function () {
        this.changeToEditMode(StepEditMode.DEFAULT);
    };
    StepComponent.ctorParameters = function () { return [
        { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_5__["StepsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StepComponent.prototype, "itemIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StepComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StepComponent.prototype, "isNextStop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], StepComponent.prototype, "onResize", null);
    StepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step',
            template: __webpack_require__(/*! raw-loader!./step.component.html */ "./node_modules/raw-loader/index.js!./src/app/step/step.component.html"),
            styles: [__webpack_require__(/*! ./step.component.scss */ "./src/app/step/step.component.scss")]
        })
    ], StepComponent);
    return StepComponent;
}());



/***/ }),

/***/ "./src/app/view-widget/view-widget.component.scss":
/*!********************************************************!*\
  !*** ./src/app/view-widget/view-widget.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid #888;\n  display: block;\n  padding: 4px;\n  background: white;\n}\n\nh6 {\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-top: 4px;\n  margin-bottom: 2px;\n}\n\n.view-title {\n  background-color: white;\n  width: 100%;\n  text-align: center;\n}\n\n.toolbar {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  border: none;\n  border-top: 1px solid #888;\n  display: block;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy13aWRnZXQvQzpcXHBcXHN3aXNzLXN0cmluZy9zcmNcXGFwcFxcdmlldy13aWRnZXRcXHZpZXctd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LXdpZGdldC92aWV3LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdmlldy13aWRnZXQvdmlldy13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5oNiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnZpZXctdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmVzaXplOiBub25lO1xufVxuIiwiOmhvc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaDYge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi52aWV3LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4ODg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICByZXNpemU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/view-widget/view-widget.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-widget/view-widget.component.ts ***!
  \******************************************************/
/*! exports provided: ViewWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWidgetComponent", function() { return ViewWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");




var ViewWidgetComponent = /** @class */ (function () {
    function ViewWidgetComponent(stepsService, elementRef) {
        this.stepsService = stepsService;
        this.elementRef = elementRef;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinus"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.isOrganizeMode = false;
        this.height = 300;
    }
    ViewWidgetComponent.prototype.ngOnInit = function () {
    };
    ViewWidgetComponent.prototype.onTitleUpdated = function (value) {
        this.viewWidget.view.title = value;
        this.stepsService.updateWidget(this.stepID, this.index, this.viewWidget);
    };
    ViewWidgetComponent.prototype.elGetBoundingClientRect = function () {
        return this.elementRef.nativeElement.getBoundingClientRect();
    };
    ViewWidgetComponent.prototype.onClickResizeButton = function (delta) {
        if (delta < 0) {
            this.height = Math.max(100, this.height - 100);
        }
        if (delta > 0) {
            this.height += 100;
        }
    };
    ViewWidgetComponent.prototype.onClickTrash = function () {
        console.log('onClickTrash stub');
    };
    ViewWidgetComponent.ctorParameters = function () { return [
        { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_3__["StepsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ViewWidgetComponent.prototype, "stepID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ViewWidgetComponent.prototype, "viewWidget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ViewWidgetComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ViewWidgetComponent.prototype, "isOrganizeMode", void 0);
    ViewWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-widget',
            template: __webpack_require__(/*! raw-loader!./view-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-widget/view-widget.component.html"),
            styles: [__webpack_require__(/*! ./view-widget.component.scss */ "./src/app/view-widget/view-widget.component.scss")]
        })
    ], ViewWidgetComponent);
    return ViewWidgetComponent;
}());



/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: LINE_COLOR_SATURATION, LINE_COLOR_LIGHTNESS, SIDEBAR_X, SIDEBAR_WIDTH, SIDEBAR_LEAD, SIDEBAR_CROSSING_CONNECTOR_MOMENTUM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_COLOR_SATURATION", function() { return LINE_COLOR_SATURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_COLOR_LIGHTNESS", function() { return LINE_COLOR_LIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_X", function() { return SIDEBAR_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_WIDTH", function() { return SIDEBAR_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_LEAD", function() { return SIDEBAR_LEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_CROSSING_CONNECTOR_MOMENTUM", function() { return SIDEBAR_CROSSING_CONNECTOR_MOMENTUM; });
var LINE_COLOR_SATURATION = 0.7;
var LINE_COLOR_LIGHTNESS = 0.5;
var SIDEBAR_X = 14;
var SIDEBAR_WIDTH = 40;
var SIDEBAR_LEAD = 120;
var SIDEBAR_CROSSING_CONNECTOR_MOMENTUM = 100;


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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




// import './app/s/use-operators';

if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/media.ts":
/*!**********************!*\
  !*** ./src/media.ts ***!
  \**********************/
/*! exports provided: MOBILE, TABLET_PORTRAIT, TABLET_LANDSCAPE, DESKTOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE", function() { return MOBILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLET_PORTRAIT", function() { return TABLET_PORTRAIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLET_LANDSCAPE", function() { return TABLET_LANDSCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESKTOP", function() { return DESKTOP; });
// less than
var MOBILE = 480; // Mobile-landscape (and larger)
var TABLET_PORTRAIT = 768; // Tablet-portrait (and larger)
var TABLET_LANDSCAPE = 992; // Tablet-landscape (and larger)
var DESKTOP = 1200; // Laptops (and langer)


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: djb2, hashStringToNumber, hashStringToColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "djb2", function() { return djb2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashStringToNumber", function() { return hashStringToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashStringToColor", function() { return hashStringToColor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");


function djb2(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
        // tslint:disable-next-line: no-bitwise
        hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
}
function hashStringToNumber(str) {
    var hash = djb2(str);
    var result = (Math.abs(hash)) / 17179869180;
    return result;
}
function hashStringToColor(str) {
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](hslToRgb(hashStringToNumber(str), _constants__WEBPACK_IMPORTED_MODULE_1__["LINE_COLOR_SATURATION"], _constants__WEBPACK_IMPORTED_MODULE_1__["LINE_COLOR_LIGHTNESS"]), 3), r = _a[0], g = _a[1], b = _a[2];
    return [
        '#',
        ('0' + r.toString(16)).substr(-2),
        ('0' + g.toString(16)).substr(-2),
        ('0' + b.toString(16)).substr(-2),
    ].join('');
}
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 */
function hslToRgb(h, s, l) {
    function hue2rgb(p, q, t) {
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    var r;
    var g;
    var b;
    if (s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\p\swiss-string\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map