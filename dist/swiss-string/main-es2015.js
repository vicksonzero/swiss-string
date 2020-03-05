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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Swiss-String</a>\n  <a class=\"btn\" href=\"#\">View</a>\n  <!-- Toggle Data Flow Lines -->\n  <!-- Toggle Data Operators -->\n  <!-- Toggle Edit buttons -->\n  <span class=\"filler\"></span>\n  <a class=\"btn\" href=\"#\">Save</a>\n  <a class=\"btn\" href=\"#\">Load</a>\n\n</nav>\n<div class=\"main\">\n  <app-main [style.padding]=\"(isMobile ? 8 : 20) + 'px'\"></app-main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/column/column.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/column/column.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-view-widget *ngIf=\"viewWidget != null\" [stepID]=\"stepID\" [index]=\"index\" [viewWidget]=\"viewWidget\" [attr.data-entity-id]=\"viewWidget.id\" [attr.data-entity-name]=\"viewWidget.view.name\"></app-view-widget>\n<app-operator-widget *ngIf=\"operatorWidget != null\" [stepID]=\"stepID\" [index]=\"index\" [operatorWidget]=\"operatorWidget\"></app-operator-widget>\n"

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

module.exports = "<div class=\"steps-editor\">\n  <div class=\"back\" #back>\n    <!-- <svg width=\"200\" height=\"200\" #graph>\n      <circle cx=\"50\" cy=\"50\" r=\"5\" fill=\"green\" />\n    </svg> -->\n  </div>\n  <div class=\"front\" #front>\n    <app-step *ngFor=\"let step of steps; let i = index; trackBy: trackItem\" [step]=\"step\" [itemIndex]=\"i+1\"></app-step>\n    <div *ngIf=\"steps.length <= 0\">\n      <p>Start by pressing \"Add step\"</p>\n    </div>\n  </div>\n</div>\n<div>\n  <app-button (click)=\"onClickAddStep()\">Add step</app-button>\n</div>\n\n<div>\n  <p>stepsJSON</p>\n  <textarea style=\"width:100%; max-width:500px; height: 200px;\">{{stepsJSON}}</textarea>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/operator-widget/operator-widget.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/operator-widget/operator-widget.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column-input operator-parameter-container\">\n  <div class=\"operator-parameter\" *ngFor=\"let input of inputs\" [attr.data-entity-id]=\"input.id\"\n    [attr.data-entity-name]=\"input.contextName\">\n    <span class=\"debug-entity-id\">[{{input.id}}] </span>\n    {{input.contextName}}\n  </div>\n</div>\n<div class=\"operator\">\n  <h3 class=\"text-secondary\">{{operatorWidget.operator.title || operatorWidget.operator.type}}</h3>\n</div>\n<div class=\"column-output operator-parameter-container\">\n  <div class=\"operator-parameter\" *ngFor=\"let output of outputs\" [attr.data-entity-id]=\"output.id\"\n    [attr.data-entity-name]=\"output.contextName\">\n    <span class=\"debug-entity-id\">[{{output.id}}] </span>\n    {{output.contextName}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/step/step.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/step/step.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      <button class=\"expand-button btn btn-outline-secondary btn-sm\" (click)=\"onExpandButtonClick()\">\n        {{isExpanded ? '-' : '+' }}\n      </button>\n      <span class=\"app-text-secondary\">{{itemIndex}}.{{ ' ' }}</span>\n      <span class=\"debug-entity-id\">[{{step.id}}]</span>\n      <app-editable-wrapper [value]=\"step.title\" (valueChange)=\"onTitleUpdated($event)\"></app-editable-wrapper>{{ ' ' }}\n      <span style=\"display:inline-block;width:4px;\"></span>\n      <span class=\"app-text-secondary step-type\" [hidden]=\"isExpanded\">{{summary}}</span>\n    </h5>\n  </div>\n  <div class=\"card-body step-body\" [class.isMobile]=\"isMobile\" [hidden]=\"!isExpanded\">\n    <app-column class=\"column\" [class.isMobile]=\"isMobile\" [stepID]=\"step.id\"\n      *ngFor=\"let column of step.columns; let i = index; trackBy: trackColumn\"\n      [style.width]=\"isMobile ? '' : (column.width+column.widthUnit)\" [column]=\"column\" [index]=\"i\">\n    </app-column>\n  </div>\n  <div class=\"card-body step-buttons\" [hidden]=\"!isExpanded\">\n    <a href=\"#\" class=\"btn btn-primary\">Next</a>{{ ' ' }}\n    <a href=\"#\" class=\"btn btn-light\">Add {{this.step.type}}</a>{{ ' ' }}\n    <a href=\"#\" class=\"btn btn-light\">Organize</a>{{ ' ' }}\n    <a href=\"#\" class=\"btn btn-light\" (click)=\"onClickRemoveStep()\">Remove Step</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-widget/view-widget.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-widget/view-widget.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column-input\">\n  <h6 class=\"text-secondary view-title\">\n    <span class=\"debug-entity-id\">[{{viewWidget.id}}]</span>\n    <app-editable-wrapper [value]=\"viewWidget.view.title\" (valueChange)=\"onTitleUpdated($event)\"></app-editable-wrapper>\n  </h6>\n</div>\n<div class=\"view\">\n  <textarea [style.height]=\"'300px'\">{{viewWidget.view.default}}</textarea>\n</div>\n<div class=\"column-output\"></div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 32px);\n  background-color: #888;\n}\n\nnav {\n  background-color: #7EC4CF;\n}\n\n:host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHBcXHN3aXNzLXN0cmluZy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLHlCRVRjO0FEUWhCOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyaWFibGVzJztcblxuLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG5uYXZ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0VDNENGO1xufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIkbWF4aW11bS1ibHVlOiAjNTJCMkNGO1xuJGRhcmstc2t5LWJsdWU6ICM3RUM0Q0Y7XG4kd2lsZC1ibHVlLXlvbmRlcjogIzlDQURDRTtcbiRsYW5ndWlkLWxhdmVuZGVyOiAjRDFDRkUyO1xuJHBhbGUtY2hlc3RudXQ6I0Q0QUZCOTtcblxuXG4kcHJpbWFyeS1jb2xvcjogIzAwN2JmZjtcbiRzZWNvbmRhcnktY29sb3I6ICRkYXJrLXNreS1ibHVlO1xuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/media */ "./src/media.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'swiss-string';
        this.isMobile = false;
    }
    ngOnInit() {
        this.updateDeviceWidth();
    }
    onResize(event) {
        this.updateDeviceWidth();
    }
    updateDeviceWidth() {
        const innerWidth = window.innerWidth;
        this.isMobile = (innerWidth < src_media__WEBPACK_IMPORTED_MODULE_2__["TABLET_PORTRAIT"]);
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_editable_wrapper_editable_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/editable-wrapper/editable-wrapper.component */ "./src/app/components/editable-wrapper/editable-wrapper.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./step/step.component */ "./src/app/step/step.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _column_column_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./column/column.component */ "./src/app/column/column.component.ts");
/* harmony import */ var _view_widget_view_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-widget/view-widget.component */ "./src/app/view-widget/view-widget.component.ts");
/* harmony import */ var _operator_widget_operator_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operator-widget/operator-widget.component */ "./src/app/operator-widget/operator-widget.component.ts");
/* harmony import */ var _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/circle/circle.component */ "./src/app/components/circle/circle.component.ts");















let AppModule = class AppModule {
};
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



/***/ }),

/***/ "./src/app/column/column.component.scss":
/*!**********************************************!*\
  !*** ./src/app/column/column.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sdW1uL0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFxhcHBcXGNvbHVtblxcY29sdW1uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb2x1bW4vY29sdW1uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29sdW1uL2NvbHVtbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogNHB4O1xufVxuIiwiOmhvc3Qge1xuICBwYWRkaW5nOiA0cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _s_Step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../s/Step */ "./src/app/s/Step.ts");



let ColumnComponent = class ColumnComponent {
    constructor() {
        this.viewWidget = null;
        this.operatorWidget = null;
    }
    ngOnInit() {
        switch (this.column.type) {
            case _s_Step__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].VIEW:
                this.viewWidget = this.column;
                break;
            case _s_Step__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].OPERATOR:
                this.operatorWidget = this.column;
                break;
        }
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
ColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-column',
        template: __webpack_require__(/*! raw-loader!./column.component.html */ "./node_modules/raw-loader/index.js!./src/app/column/column.component.html"),
        styles: [__webpack_require__(/*! ./column.component.scss */ "./src/app/column/column.component.scss")]
    })
], ColumnComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
};
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/button/button.component.html"),
        styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
    })
], ButtonComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CircleComponent = class CircleComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.color = '#0A0';
        this.borderColor = '#FFF';
        this.radius = 5;
    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = this.color;
        this.elementRef.nativeElement.style.border = `5px solid ${this.borderColor}`;
        this.elementRef.nativeElement.style.marginLeft = `${-this.radius}`;
        this.elementRef.nativeElement.style.marginTop = `${-this.radius}`;
        this.elementRef.nativeElement.style.width = `${this.radius * 2}px`;
        this.elementRef.nativeElement.style.height = `${this.radius * 2}px`;
    }
};
CircleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let EditableWrapperComponent = class EditableWrapperComponent {
    constructor() {
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.isEdit = false;
        this.isLabelOver = false;
        this.value = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onContentClicked() {
        this.isEdit = true;
        this.isLabelOver = false;
        setTimeout(() => {
            this.editorElement.nativeElement.focus();
        }, 100);
    }
    onMouseEnterLabel() {
        this.isLabelOver = true;
    }
    onMouseLeaveLabel() {
        this.isLabelOver = false;
    }
    onEditorEnter() {
        this.finalizeInput();
    }
    onEditorBlur() {
        this.finalizeInput();
    }
    finalizeInput() {
        this.value = this.editorElement.nativeElement.value;
        this.isEdit = false;
        this.valueChange.emit(this.value);
    }
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



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  background-color: #EEE;\n}\n\n.steps-editor {\n  position: relative;\n}\n\n.back {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxccFxcc3dpc3Mtc3RyaW5nL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTsgLy8gI2VmZWZlZjtcbn1cblxuLnN0ZXBzLWVkaXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2t7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xufVxuXG4uc3RlcHMtZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/media */ "./src/media.ts");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils */ "./src/utils.ts");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");





let MainComponent = class MainComponent {
    constructor(stepsService) {
        this.stepsService = stepsService;
        this.stepsJSON = '';
        this.isMobile = false;
        this.graphWidth = 0;
        this.graphHeight = 0;
        this.updateGraphInterval = 0;
        this.stepsService.steps$.subscribe((steps) => {
            this.steps = steps;
            this.stepsJSON = JSON.stringify(steps, null, 4);
        });
    }
    ngOnInit() {
        this.updateDeviceWidth();
        this.updateGraphInterval = window.setInterval(() => this.updateDataFlowGraph(), 1000);
    }
    ngOnDestroy() {
        if (this.updateGraphInterval) {
            clearInterval(this.updateGraphInterval);
        }
    }
    ngAfterContentChecked() {
        this.updateDataFlowGraph();
    }
    onClickAddStep() {
        this.stepsService.addStep();
    }
    trackItem(index, item) {
        return item.id;
    }
    updateDataFlowGraph() {
        if (!this.frontElement) {
            return;
        }
        const viewWidgets = document.querySelectorAll('app-view-widget');
        const operatorWidgets = document.querySelectorAll('app-operator-widget');
        // console.log('updateDataFlowGraph', viewWidgets, operatorWidgets);
        this.graphWidth = this.frontElement.nativeElement.clientWidth;
        this.graphHeight = this.frontElement.nativeElement.clientHeight;
        this.backElement.nativeElement.innerHTML = '';
        const svg = this.createSVG(this.backElement.nativeElement);
        const backBB = this.backElement.nativeElement.getBoundingClientRect();
        const sidebarX = 20;
        const sidebarWidth = 20;
        const sidebarLead = 150;
        const connectorMomentum = 100;
        // draw lines
        this.stepsService.contexts.forEach((context, afterStepIndex) => {
            const { afterStepID, keys } = context;
            keys.forEach(({ fromID, toID, name, destStepIndex }, keyIndex) => {
                const fromWidgetElement = document.querySelector(`[data-entity-id="${fromID}"]`);
                const toWidgetElement = document.querySelector(`[data-entity-id="${toID}"]`);
                if (!fromWidgetElement || !toWidgetElement) {
                    return;
                }
                const fromBB = fromWidgetElement.getBoundingClientRect();
                const toBB = toWidgetElement.getBoundingClientRect();
                const _destStepIndex = destStepIndex || -1;
                if (fromBB.top === 0 && fromBB.left === 0) {
                    return;
                }
                if (toBB.top === 0 && toBB.left === 0) {
                    return;
                }
                const fromPoint = {
                    x: -backBB.left + ((fromBB.left + fromBB.right) / 2),
                    y: -backBB.top + (fromBB.bottom + 4),
                };
                if (this.isMobile) {
                    fromPoint.x = -backBB.left + fromBB.left + fromBB.width * (keyIndex + 0.5) / keys.length;
                }
                const toPoint = {
                    x: -backBB.left + ((toBB.left + toBB.right) / 2),
                    y: -backBB.top + (toBB.top - 4),
                };
                if (this.isMobile) {
                    toPoint.x = -backBB.left + toBB.left + toBB.width * (keyIndex + 0.5) / keys.length;
                }
                // console.log(fromWidgetElement, toWidgetElement);
                const line = (() => {
                    if (_destStepIndex - afterStepIndex <= 1) {
                        return [
                            `M`,
                            `${fromPoint.x} ${fromPoint.y}`,
                            `C`,
                            [
                                `${fromPoint.x} ${fromPoint.y + connectorMomentum}`,
                                `${toPoint.x} ${toPoint.y - connectorMomentum}`,
                                `${toPoint.x} ${toPoint.y}`,
                            ].join(', '),
                        ].join(' ');
                    }
                    else {
                        const escapeX = sidebarX + Object(src_utils__WEBPACK_IMPORTED_MODULE_3__["hashStringToNumber"])(name) * sidebarWidth;
                        const curve1 = [
                            `${fromPoint.x} ${fromPoint.y + connectorMomentum}`,
                            `${escapeX} ${fromPoint.y + sidebarLead - connectorMomentum}`,
                            `${escapeX} ${fromPoint.y + sidebarLead}`,
                        ].join(', ');
                        const curve2 = [
                            `${escapeX} ${toPoint.y - sidebarLead + connectorMomentum}`,
                            `${toPoint.x} ${toPoint.y - connectorMomentum}`,
                            `${toPoint.x} ${toPoint.y}`,
                        ].join(', ');
                        return [
                            `M`, `${fromPoint.x} ${fromPoint.y}`,
                            `C`, curve1,
                            `L`, `${escapeX} ${toPoint.y - sidebarLead}`,
                            `C`, curve2,
                        ].join(' ');
                    }
                })();
                const pathBG = this.createPath(svg);
                pathBG.setAttributeNS(null, 'stroke', '#DDD');
                pathBG.setAttributeNS(null, 'stroke-width', '5');
                pathBG.setAttributeNS(null, 'd', line);
                const path = this.createPath(svg);
                path.setAttributeNS(null, 'stroke', Object(src_utils__WEBPACK_IMPORTED_MODULE_3__["hashStringToColor"])(name));
                path.setAttributeNS(null, 'stroke-width', '3');
                path.setAttributeNS(null, 'd', line);
                const circleIn = this.createPoint(svg);
                circleIn.setAttributeNS(null, 'fill', Object(src_utils__WEBPACK_IMPORTED_MODULE_3__["hashStringToColor"])(name));
                circleIn.setAttributeNS(null, 'cx', '' + fromPoint.x);
                circleIn.setAttributeNS(null, 'cy', '' + fromPoint.y);
                const circleOut = this.createPoint(svg);
                circleOut.setAttributeNS(null, 'fill', Object(src_utils__WEBPACK_IMPORTED_MODULE_3__["hashStringToColor"])(name));
                circleOut.setAttributeNS(null, 'cx', '' + toPoint.x);
                circleOut.setAttributeNS(null, 'cy', '' + toPoint.y);
            });
        });
    }
    createSVG(svgContainer) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
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
    }
    createPath(svg) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttributeNS(null, 'stroke', '#DDD');
        path.setAttributeNS(null, 'stroke-width', '3');
        path.setAttributeNS(null, 'fill', 'transparent');
        svg.appendChild(path);
        return path;
    }
    createPoint(svg) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttributeNS(null, 'r', '7');
        circle.setAttributeNS(null, 'stroke', '#DDD');
        circle.setAttributeNS(null, 'stroke-width', '3');
        circle.setAttributeNS(null, 'fill', '#0A0');
        svg.appendChild(circle);
        return circle;
    }
    createRect(svg) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttributeNS(null, 'stroke', '#EEE');
        rect.setAttributeNS(null, 'stroke-width', '3');
        rect.setAttributeNS(null, 'fill', '#0A0');
        svg.appendChild(rect);
        return rect;
    }
    onResize(event) {
        this.updateDeviceWidth();
    }
    updateDeviceWidth() {
        const innerWidth = window.innerWidth;
        this.isMobile = (innerWidth < src_media__WEBPACK_IMPORTED_MODULE_2__["TABLET_PORTRAIT"]);
    }
};
MainComponent.ctorParameters = () => [
    { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_4__["StepsService"] }
];
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



/***/ }),

/***/ "./src/app/operator-widget/operator-widget.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/operator-widget/operator-widget.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".operator {\n  border: 1px solid #888;\n  background-color: white;\n  text-align: center;\n}\n\n.operator-parameter-container {\n  display: -webkit-box;\n  display: flex;\n}\n\n.operator-parameter {\n  width: 100%;\n  text-align: center;\n  margin: 8px;\n  border: 1px solid #888;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0b3Itd2lkZ2V0L0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFxhcHBcXG9wZXJhdG9yLXdpZGdldFxcb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcGVyYXRvci13aWRnZXQvb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9vcGVyYXRvci13aWRnZXQvb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wZXJhdG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9wZXJhdG9yLXBhcmFtZXRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub3BlcmF0b3ItcGFyYW1ldGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIC8vIGJvcmRlci1sZWZ0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5vcGVyYXRvci1wYXJhbWV0ZXI6Zmlyc3QtY2hpbGQge1xuICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4ODg7XG59XG4iLCIub3BlcmF0b3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3BlcmF0b3ItcGFyYW1ldGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5vcGVyYXRvci1wYXJhbWV0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OperatorWidgetComponent = class OperatorWidgetComponent {
    constructor() {
        this.inputs = [];
        this.outputs = [];
    }
    ngOnInit() {
        this.inputs = Object.entries(this.operatorWidget.operator.inputs).map(([k, v]) => v);
        this.outputs = Object.entries(this.operatorWidget.operator.outputs).map(([k, v]) => v);
        // console.log(this.inputs, this.outputs);
    }
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
OperatorWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operator-widget',
        template: __webpack_require__(/*! raw-loader!./operator-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/operator-widget/operator-widget.component.html"),
        styles: [__webpack_require__(/*! ./operator-widget.component.scss */ "./src/app/operator-widget/operator-widget.component.scss")]
    })
], OperatorWidgetComponent);



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
class StepFactory {
    static createStep(config) {
        const a = {
            id: 0,
            title: 'Input',
            type: WidgetType.BASIC,
            columns: [
                { id: 1, width: 100, widthUnit: '%', type: WidgetType.BASIC }
            ],
        };
        return Object.assign({}, a, config);
    }
}


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


const mockSteps = (_mockSteps_json__WEBPACK_IMPORTED_MODULE_1__["steps"]
    .map((v) => _Step__WEBPACK_IMPORTED_MODULE_0__["StepFactory"].createStep(v)));


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _mockSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mockSteps */ "./src/app/s/mockSteps.ts");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step */ "./src/app/s/Step.ts");






let StepsService = class StepsService {
    constructor() {
        this.stepsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_mockSteps__WEBPACK_IMPORTED_MODULE_4__["mockSteps"]);
        this.entities = [];
        this.latestStepID = _mockSteps__WEBPACK_IMPORTED_MODULE_4__["mockSteps"].map(s => s.id).reduce((a, v) => Math.max(a, v), 0);
        this.steps$ = this.stepsSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((steps) => this.updateContexts(steps)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    addStep() {
        const oldSteps = [...this.stepsSource.getValue()];
        this.latestStepID += 1;
        oldSteps.push(_Step__WEBPACK_IMPORTED_MODULE_5__["StepFactory"].createStep({ id: this.latestStepID, title: 'New Step' }));
        this.stepsSource.next(oldSteps);
    }
    updateStep(stepID, newValue) {
        const oldSteps = [...this.stepsSource.getValue()];
        const positionID = oldSteps.findIndex(step => step.id === stepID);
        oldSteps[positionID] = _Step__WEBPACK_IMPORTED_MODULE_5__["StepFactory"].createStep(newValue);
        console.log('updateStep', stepID, oldSteps[positionID]);
        this.stepsSource.next(oldSteps);
    }
    removeStep(stepID) {
        const oldSteps = [...this.stepsSource.getValue()];
        const positionID = oldSteps.findIndex(step => step.id === stepID);
        oldSteps.splice(positionID, 1);
        this.stepsSource.next(oldSteps);
    }
    addWidget(stepID, widgetType) {
    }
    updateWidget(stepID, widgetIndex, widget) {
        const targetStep = this.stepsSource.getValue().find(step => step.id === stepID);
        if (!targetStep) {
            throw new TypeError(`Step ID "${stepID}" not found`);
        }
        targetStep.columns[widgetIndex] = widget;
        this.updateStep(stepID, targetStep);
    }
    updateContexts(steps) {
        this.entities = [];
        const newContexts = [];
        const contextHolder = {}; // holds keys and last-seen widgetID
        for (let stepIndex = 0; stepIndex < steps.length; stepIndex++) {
            const step = steps[stepIndex];
            // const nextStep = steps[i + 1];
            const { id: stepID, columns, type } = step;
            // console.log('step', i, id);
            if (this.entities[stepID]) {
                throw new Error(`Duplicate entityID "${stepID}" in index "${stepIndex}"`);
            }
            this.entities[stepID] = step;
            const afterContext = {
                afterStepID: stepID,
                keys: [],
            };
            switch (type) {
                case _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].VIEW:
                    {
                        columns.forEach((column) => {
                            const { id: columnID, type: columnType } = column;
                            const viewWidget = column.view;
                            const { name, title } = viewWidget;
                            // console.log('view', name, columnID);
                            if (contextHolder[name]) {
                                const { lastSeenColumnID: lastSeenID } = contextHolder[name];
                                for (const context of newContexts) {
                                    for (const key of context.keys) {
                                        if (key.fromID === lastSeenID) {
                                            key.toID = columnID;
                                            key.destStepIndex = stepIndex;
                                        }
                                    }
                                }
                            }
                            contextHolder[name] = { lastSeenColumnID: columnID, lastSeenStepIndex: stepIndex };
                            afterContext.keys.push({ name, destStepIndex: stepIndex, fromID: columnID, toID: null, type: null });
                            // afterContext.types.push(name);
                        });
                    }
                    break;
                case _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].OPERATOR:
                    {
                        columns.forEach((column) => {
                            const { id: columnID, type: columnType } = column;
                            const operatorWidget = column.operator;
                            const { inputs, outputs } = operatorWidget;
                            Object.entries(inputs).forEach(([inputKey, { id: connectorID, contextName }]) => {
                                // console.log('operator', contextName, connectorID);
                                const { lastSeenColumnID: lastSeenID, lastSeenStepIndex } = contextHolder[contextName];
                                for (const context of newContexts) {
                                    for (const key of context.keys) {
                                        if (key.fromID === lastSeenID) {
                                            key.toID = connectorID;
                                            key.destStepIndex = stepIndex;
                                        }
                                    }
                                }
                                // contextHolder[inputKey] = columnID;
                                // afterContext.keys.push({ name:inputKey, fromID: columnID, toID: null, type: null });
                            });
                            Object.entries(outputs).forEach(([outputKey, { id: connectorID, contextName }]) => {
                                contextHolder[contextName] = { lastSeenColumnID: connectorID, lastSeenStepIndex: stepIndex };
                                afterContext.keys.push({ name: contextName, destStepIndex: null, fromID: connectorID, toID: null, type: null });
                            });
                        });
                    }
                    break;
            }
            // console.log('contextHolder', { ...contextHolder });
            newContexts.push(afterContext);
        }
        // console.log('newContexts', JSON.stringify(newContexts, null, 4));
        this.contexts = newContexts;
    }
};
StepsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StepsService);



/***/ }),

/***/ "./src/app/step/step.component.scss":
/*!******************************************!*\
  !*** ./src/app/step/step.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.expand-button {\n  width: 30px;\n  margin-right: 10px;\n}\n\n.card-title {\n  margin-bottom: 0;\n  color: black;\n}\n\n.card-subtitle {\n  margin-bottom: 0;\n  margin-left: 40px;\n}\n\n.card {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.step-body {\n  margin-left: 40px;\n  margin-right: 8px;\n  padding-top: 0;\n  display: -webkit-box;\n  display: flex;\n  overflow: auto;\n}\n\n.step-body.isMobile {\n  display: block;\n}\n\n.step-buttons {\n  margin-left: 40px;\n  padding-top: 0;\n}\n\n.step-type {\n  font-size: 0.8em;\n  font-style: italic;\n}\n\n.btn-light:first-child {\n  padding-left: 0;\n}\n\n.column.isMobile {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcC9DOlxccFxcc3dpc3Mtc3RyaW5nL3NyY1xcYXBwXFxzdGVwXFxzdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGVwL3N0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N0ZXAvc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyAvL3JnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmV4cGFuZC1idXR0b24ge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnN0ZXAtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc3RlcC1ib2R5LmlzTW9iaWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdGVwLWJ1dHRvbnMge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5zdGVwLXR5cGUge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5idG4tbGlnaHQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5jb2x1bW4uaXNNb2JpbGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4uZXhwYW5kLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc3RlcC1ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zdGVwLWJvZHkuaXNNb2JpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN0ZXAtYnV0dG9ucyB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnN0ZXAtdHlwZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmJ0bi1saWdodDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmNvbHVtbi5pc01vYmlsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/step/step.component.ts":
/*!****************************************!*\
  !*** ./src/app/step/step.component.ts ***!
  \****************************************/
/*! exports provided: StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/media */ "./src/media.ts");
/* harmony import */ var _s_Step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s/Step */ "./src/app/s/Step.ts");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");





let StepComponent = class StepComponent {
    constructor(stepsService) {
        this.stepsService = stepsService;
        this.isExpanded = true;
        this.isMobile = false;
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
        this.updateDeviceWidth();
        switch (this.step.type) {
            case _s_Step__WEBPACK_IMPORTED_MODULE_3__["WidgetType"].VIEW:
                this.summary = this.step.columns.map(c => {
                    return c.view.title;
                }).join(', ');
                break;
            case _s_Step__WEBPACK_IMPORTED_MODULE_3__["WidgetType"].OPERATOR:
                this.summary = '[' + this.step.columns.map(c => {
                    return c.operator.title || c.operator.type;
                }).join(', ') + ']';
                break;
            default:
                this.summary = 'Step';
        }
    }
    onExpandButtonClick() {
        this.isExpanded = !this.isExpanded;
    }
    onClickRemoveStep() {
        this.stepsService.removeStep(this.step.id);
    }
    onTitleUpdated(val) {
        console.log('onTitleUpdated');
        this.step.title = val;
        this.stepsService.updateStep(this.step.id, this.step);
    }
    trackColumn(index, item) {
        return item.id;
    }
    onResize(event) {
        this.updateDeviceWidth();
    }
    updateDeviceWidth() {
        const innerWidth = window.innerWidth;
        this.isMobile = (innerWidth < src_media__WEBPACK_IMPORTED_MODULE_2__["TABLET_PORTRAIT"]);
    }
};
StepComponent.ctorParameters = () => [
    { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_4__["StepsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StepComponent.prototype, "itemIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StepComponent.prototype, "step", void 0);
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



/***/ }),

/***/ "./src/app/view-widget/view-widget.component.scss":
/*!********************************************************!*\
  !*** ./src/app/view-widget/view-widget.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid #888;\n  display: block;\n  padding: 4px;\n  background: white;\n}\n\nh6 {\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-top: 4px;\n  margin-bottom: 2px;\n}\n\ntextarea {\n  width: 100%;\n  border: none;\n  border-top: 1px solid #888;\n  display: block;\n}\n\n.view-title {\n  background-color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy13aWRnZXQvQzpcXHBcXHN3aXNzLXN0cmluZy9zcmNcXGFwcFxcdmlldy13aWRnZXRcXHZpZXctd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LXdpZGdldC92aWV3LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctd2lkZ2V0L3ZpZXctd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaDYge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzg4ODtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52aWV3LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIjpob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmg2IHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZpZXctdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");



let ViewWidgetComponent = class ViewWidgetComponent {
    constructor(stepsService, elementRef) {
        this.stepsService = stepsService;
        this.elementRef = elementRef;
    }
    ngOnInit() {
    }
    onTitleUpdated(value) {
        this.viewWidget.view.title = value;
        this.stepsService.updateWidget(this.stepID, this.index, this.viewWidget);
    }
    elGetBoundingClientRect() {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }
};
ViewWidgetComponent.ctorParameters = () => [
    { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_2__["StepsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewWidgetComponent.prototype, "stepID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewWidgetComponent.prototype, "viewWidget", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewWidgetComponent.prototype, "index", void 0);
ViewWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-widget',
        template: __webpack_require__(/*! raw-loader!./view-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-widget/view-widget.component.html"),
        styles: [__webpack_require__(/*! ./view-widget.component.scss */ "./src/app/view-widget/view-widget.component.scss")]
    })
], ViewWidgetComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




// import './app/s/use-operators';

if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


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
const MOBILE = 480; // Mobile-landscape (and larger)
const TABLET_PORTRAIT = 768; // Tablet-portrait (and larger)
const TABLET_LANDSCAPE = 992; // Tablet-landscape (and larger)
const DESKTOP = 1200; // Laptops (and langer)


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
function djb2(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        // tslint:disable-next-line: no-bitwise
        hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
}
function hashStringToNumber(str) {
    const hash = djb2(str);
    return (hash + 2147483648) / 4294967295;
}
function hashStringToColor(str) {
    const hash = djb2(str);
    const [r, g, b] = hslToRgb((hash + 2147483648) / 4294967295, 1, 0.5);
    return '#' + ('0' + r.toString(16)).substr(-2) + ('0' + g.toString(16)).substr(-2) + ('0' + b.toString(16)).substr(-2);
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
    let r;
    let g;
    let b;
    if (s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
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
//# sourceMappingURL=main-es2015.js.map