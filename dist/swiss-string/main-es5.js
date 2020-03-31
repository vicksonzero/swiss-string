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

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Swiss-String</a>\n  <a class=\"btn\" href=\"#\">View</a>\n  <!-- Toggle Data Flow Lines -->\n  <!-- Toggle Data Operators -->\n  <!-- Toggle Edit buttons -->\n  <span class=\"filler\"></span>\n  <a class=\"btn\" href=\"#\">Save</a>\n  <a class=\"btn\" href=\"#\">Load</a>\n\n</nav>\n<div class=\"main\">\n  <app-main [style.padding]=\"(isMobile ? 8 : 20) + 'px'\"></app-main>\n</div>\n"

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

module.exports = "<button class=\"btn btn-primary\" style=\"padding-left: 40px; padding-right: 40px; \">\n  <ng-content></ng-content>\n</button>\n"

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

module.exports = "<input type=\"text\" *ngIf=\"isEdit\" [value]=\"value\" (blur)=\"onEditorBlur()\" #editor\n  (keyup.enter)=\"onEditorEnter()\">\n<span *ngIf=\"!isEdit\" (click)=\"onContentClicked()\" (mouseenter)=\"onMouseEnterLabel()\" [class.wide]=\"wide\"\n  (mouseleave)=\"onMouseLeaveLabel()\">\n  {{value}}\n  <fa-icon [icon]=\"faEdit\" *ngIf=\"isLabelOver\"></fa-icon>\n</span>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-editor\">\n  <div class=\"back\" #back>\n    <!-- <svg width=\"200\" height=\"200\" #graph>\n      <circle cx=\"50\" cy=\"50\" r=\"5\" fill=\"green\" />\n    </svg> -->\n  </div>\n  <div class=\"front\" #front>\n    <app-step *ngFor=\"let step of steps; let i = index; trackBy: trackItem\" [step]=\"step\" [itemIndex]=\"i\"\n      [isNextStop]=\"(step.type==='view' && i+1 < steps.length && steps[i+1].type !==step.type)\"></app-step>\n    <div *ngIf=\"steps.length <= 0\">\n      <div class=\"alert alert-primary\" role=\"alert\">\n        <fa-icon [icon]=\"faInfoCircle\"></fa-icon>\n        Start by pressing \"Add step\", or press \"Load\" from the corner.\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-body indented-card-body\">\n    <app-button (click)=\"onClickAddStep()\">Add step</app-button>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h5>stepsJSON</h5>\n    <textarea style=\"width:100%; max-width:500px; height: 200px;\">{{stepsJSON}}</textarea>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/operator-widget/operator-widget.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/operator-widget/operator-widget.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"operator\">\n  <div class=\"column-input operator-parameter-container\">\n    <div class=\"operator-parameter\" *ngFor=\"let input of inputs\" [attr.data-entity-id]=\"input.id\"\n      [attr.data-entity-name]=\"input.contextName\">\n      <span class=\"debug-entity-id\">[{{input.id}}]{{' '}}</span>\n      {{input.contextName}}\n    </div>\n  </div>\n  <div class=\"operator-title\">\n    <h3 class=\"text-secondary\">\n      <span class=\"debug-entity-id\">[{{operatorWidget.id}}]{{' '}}</span>\n      {{operatorWidget.operator.title || operatorWidget.operator.type}}</h3>\n  </div>\n  <div class=\"column-output operator-parameter-container\">\n    <div class=\"operator-parameter\" *ngFor=\"let output of outputs\" [attr.data-entity-id]=\"output.id\"\n      [attr.data-entity-name]=\"output.contextName\">\n      <span class=\"debug-entity-id\">[{{output.id}}]{{' '}}</span>\n      {{output.contextName}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/step/step.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/step/step.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title noselect\">\n      <button class=\"expand-button btn btn-secondary btn-sm\" (click)=\"onExpandButtonClick()\">\n        <fa-icon *ngIf=\"isExpanded\" [icon]=\"faMinus\"></fa-icon>\n        <fa-icon *ngIf=\"!isExpanded\" [icon]=\"faPlus\"></fa-icon>\n      </button>\n      <div class=\"app-text-secondary\">{{itemIndex+1}}.{{ ' ' }}</div>\n      <div class=\"debug-entity-id\">[{{step.id}}]{{' '}}</div>\n      <app-editable-wrapper [value]=\"step.title\" (valueChange)=\"onTitleUpdated($event)\"></app-editable-wrapper>{{ ' ' }}\n      <div style=\"display:inline-block;width:4px;\"></div>\n      <div class=\"app-text-secondary step-type\" [hidden]=\"isExpanded\">{{summary}}</div>\n    </h5>\n    <div class=\"indented-card-body after-title\" [hidden]=\"!isExpanded\">\n      <div class=\"step-body\" *ngIf=\"step.type!=='basic'\">\n        <div class=\"column-row\" [class.isMobile]=\"isMobile\">\n          <app-column class=\"column\" [stepID]=\"step.id\"\n            *ngFor=\"let column of step.columns; let i = index; trackBy: trackColumn\"\n            [style.width]=\"(isMobile || column.widthUnit==='flex') ? '' : (column.width+column.widthUnit)\"\n            [column]=\"column\" [index]=\"i\" [editMode]=\"editMode\">\n          </app-column>\n          <div *ngIf=\"step.columns.length <= 0\" class=\"column\" [class.isMobile]=\"isMobile\">\n            <div class=\"alert alert-primary\" role=\"alert\">\n              <fa-icon [icon]=\"faInfoCircle\"></fa-icon>\n              Start by pressing \"Add {{this.step.type}}\"\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"step.type==='basic'\" [class.isMobile]=\"isMobile\">\n        <h6>Select step type:</h6>\n        <div class=\"column step-type-selector\" [class.isMobile]=\"isMobile\" [style.width]=\"'100%'\">\n          <button class=\"btn btn-secondary\" (click)=\"onClickTypeSelector('view')\">View</button>\n          <button class=\"btn btn-secondary\" (click)=\"onClickTypeSelector('operator')\">Operator</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"step-buttons toolbar\" [hidden]=\"!isExpanded\">\n      <div class=\"toolbar-default\" *ngIf=\"editMode === StepEditMode.DEFAULT\">\n        <button class=\"btn btn-light\" *ngIf=\"step.type!=='basic'\" (click)=\"onClickAddColumn()\">Add\n          {{this.step.type}}</button>{{ ' ' }}\n        <button class=\"btn btn-light\" *ngIf=\"step.type!=='basic'\" (click)=\"onClickOrganize()\">Organize</button>{{ ' ' }}\n        <button class=\"btn btn-light\" (click)=\"onClickRemoveStep()\">Remove Step</button>\n      </div>\n      <div class=\"toolbar-organize\" *ngIf=\"editMode === StepEditMode.ORGANIZE\">\n        <button class=\"btn btn-light\" *ngIf=\"step.type!=='basic'\" (click)=\"onClickEndOrganize()\">End\n          Organize</button>{{ ' ' }}\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"isNextStop\" class=\"card\">\n  <div class=\"card-body indented-card-body\">\n    <app-button>Next</app-button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-widget/json-view/json-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-widget/json-view/json-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea [style.height]=\"height+'px'\" (blur)=\"onContentUpdated($event)\">{{jsonString}}</textarea>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-widget/textarea-view/textarea-view.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-widget/textarea-view/textarea-view.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea [style.height]=\"height+'px'\" (blur)=\"onContentUpdated($event)\">{{content}}</textarea>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-widget/view-widget.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-widget/view-widget.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column-input\">\n  <div class=\"toolbar\" *ngIf=\"isOrganizeMode\">\n    <div class=\"filler\"></div>\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"onClickResizeButton(+1)\">\n      <fa-icon [icon]=\"faPlus\" size=\"xs\"></fa-icon>\n    </button>\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"onClickResizeButton(-1)\">\n      <fa-icon [icon]=\"faMinus\" size=\"xs\"></fa-icon>\n    </button>\n    <button class=\"btn btn-secondary btn-sm\" *ngIf=\"isOrganizeMode\" (click)=\"onClickTrash()\">\n      <fa-icon [icon]=\"faTrashAlt\" size=\"xs\"></fa-icon>\n    </button>\n  </div>\n  <h6 class=\"text-secondary view-title\">\n    <div class=\"debug-entity-id\">[{{viewWidget.id}}]{{' '}}</div>\n    <app-editable-wrapper [value]=\"viewWidget.view.title\" (valueChange)=\"onTitleUpdated($event)\" wide=\"true\"></app-editable-wrapper>\n  </h6>\n</div>\n<div class=\"view\">\n  <!-- <textarea [style.height]=\"height+'px'\" (blur)=\"onContentUpdated($event)\">{{content}}</textarea> -->\n  <app-textarea-view *ngIf=\"viewWidget.view.type === ViewWidgetType.TEXTAREA\" [style.height]=\"height+'px'\"\n    (valueChange)=\"onContentUpdated($event)\" [content]=\"content\"></app-textarea-view>\n  <app-json-view *ngIf=\"viewWidget.view.type === ViewWidgetType.JSON\" [style.height]=\"height+'px'\"\n    (valueChange)=\"onContentUpdated($event)\" [content]=\"content\"></app-json-view>\n</div>\n<div class=\"column-output\"></div>\n"

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

module.exports = ".main {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 32px);\n  background-color: #d6eafd;\n  margin-top: 55px;\n}\n\nnav {\n  background-color: #007bff;\n  color: white;\n}\n\nnav a,\nnav button {\n  color: white;\n}\n\n:host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHBcXHN3aXNzLXN0cmluZy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJFWGU7RUZZZixZQUFBO0FDREY7O0FER0U7O0VBRUUsWUFBQTtBQ0RKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyaWFibGVzJztcblxuLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMzQsIDI1Myk7XG4gIG1hcmdpbi10b3A6IDU1cHg7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgYSxcbiAgYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmVhZmQ7XG4gIG1hcmdpbi10b3A6IDU1cHg7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm5hdiBhLFxubmF2IGJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiJGJvb3RzdHJhcC1ibHVlOiAjMDA3YmZmO1xuJG1heGltdW0tYmx1ZTogIzUyQjJDRjtcbiRkYXJrLXNreS1ibHVlOiAjN0VDNENGO1xuJHdpbGQtYmx1ZS15b25kZXI6ICM5Q0FEQ0U7XG4kbGFuZ3VpZC1sYXZlbmRlcjogI0QxQ0ZFMjtcbiRwYWxlLWNoZXN0bnV0OiNENEFGQjk7XG5cblxuJHByaW1hcnktY29sb3I6ICRib290c3RyYXAtYmx1ZTtcbiRzZWNvbmRhcnktY29sb3I6ICRtYXhpbXVtLWJsdWU7XG5cbiJdfQ== */"

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
/* harmony import */ var _view_widget_textarea_view_textarea_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-widget/textarea-view/textarea-view.component */ "./src/app/view-widget/textarea-view/textarea-view.component.ts");
/* harmony import */ var _view_widget_json_view_json_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-widget/json-view/json-view.component */ "./src/app/view-widget/json-view/json-view.component.ts");

















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
                _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_14__["CircleComponent"],
                _view_widget_textarea_view_textarea_view_component__WEBPACK_IMPORTED_MODULE_15__["TextareaViewComponent"],
                _view_widget_json_view_json_view_component__WEBPACK_IMPORTED_MODULE_16__["JsonViewComponent"]
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

module.exports = ":host {\n  padding: 2px 1px;\n}\n:host[wide=true] {\n  display: block;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\nspan {\n  background: none;\n}\nspan.wide {\n  display: block;\n  width: 100%;\n}\nspan:hover {\n  background-color: #EEE;\n}\nspan:active {\n  background-color: #DDD;\n}\ninput {\n  display: block;\n  width: 100%;\n  margin: -3px -2px;\n}\nfa-icon {\n  display: inline-block;\n  padding-left: 4px;\n  color: #888;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0YWJsZS13cmFwcGVyL0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVkaXRhYmxlLXdyYXBwZXJcXGVkaXRhYmxlLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFibGUtd3JhcHBlci9lZGl0YWJsZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBUUUsZ0JBQUE7QUNORjtBRENFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0NKO0FES0E7RUFRRSxnQkFBQTtBQ1RGO0FESUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FET0U7RUFDRSxzQkFBQTtBQ0xKO0FEUUU7RUFDRSxzQkFBQTtBQ05KO0FEV0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0FDVEY7QURhQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFibGUtd3JhcHBlci9lZGl0YWJsZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIC8vIHdpZHRoOiAxMDAlO1xuICAmW3dpZGU9dHJ1ZV0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gIHBhZGRpbmc6IDJweCAxcHg7XG59XG5cbnNwYW4ge1xuICAvLyBwYWRkaW5nOiAycHggMXB4O1xuXG4gICYud2lkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcblxuICB9XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIG1hcmdpbjogLTNweCAtMnB4O1xufVxuXG5cbmZhLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbiIsIjpob3N0IHtcbiAgcGFkZGluZzogMnB4IDFweDtcbn1cbjpob3N0W3dpZGU9dHJ1ZV0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1ncm93OiAxO1xufVxuXG5zcGFuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbnNwYW4ud2lkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbnNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xufVxuc3BhbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xufVxuXG5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAtM3B4IC0ycHg7XG59XG5cbmZhLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */"

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
        this.wide = false;
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
    ], EditableWrapperComponent.prototype, "wide", void 0);
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

module.exports = ":host {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  background-color: #EEE;\n}\n\n.steps-editor {\n  position: relative;\n}\n\n.back {\n  position: absolute;\n}\n\n.indented-card-body {\n  margin-left: 50px;\n  margin-right: 8px;\n}\n\n.indented-card-body.after-title {\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxccFxcc3dpc3Mtc3RyaW5nL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFRTtFQUNFLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG59XG5cbi5zdGVwcy1lZGl0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYWNre1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuXG4uaW5kZW50ZWQtY2FyZC1ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICYuYWZ0ZXItdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbn1cblxuLnN0ZXBzLWVkaXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbmRlbnRlZC1jYXJkLWJvZHkge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uaW5kZW50ZWQtY2FyZC1ib2R5LmFmdGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn0iXX0= */"

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
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var src_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/media */ "./src/media.ts");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils */ "./src/utils.ts");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");







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
            // console.log(this.stepsService.contexts);
            // console.log(this.stepsService.contextHolders);
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
        this.stepsService.contexts.forEach(function (context, beforeStepIndex) {
            var beforeStepID = context.beforeStepID, keys = context.keys;
            keys.forEach(function (_a, keyIndex) {
                var fromID = _a.fromID, toID = _a.toID, name = _a.name, fromStepIndex = _a.fromStepIndex;
                var fromWidgetElement = document.querySelector("[data-entity-id=\"" + fromID + "\"]");
                var toWidgetElement = document.querySelector("[data-entity-id=\"" + toID + "\"]");
                if (!fromWidgetElement || !toWidgetElement) {
                    return;
                }
                var fromBB = fromWidgetElement.getBoundingClientRect();
                var toBB = toWidgetElement.getBoundingClientRect();
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
                    if (beforeStepIndex - fromStepIndex <= 1) {
                        return [
                            "M",
                            fromPoint.x + " " + fromPoint.y,
                            "C",
                            [
                                fromPoint.x + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                                toPoint.x + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                                toPoint.x + " " + toPoint.y,
                            ].join(', '),
                        ].join(' ');
                    }
                    else {
                        var escapeX = src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_X"] + Object(src_utils__WEBPACK_IMPORTED_MODULE_5__["hashStringToNumber"])(name) * src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_WIDTH"];
                        var curve1 = [
                            fromPoint.x + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            escapeX + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_LEAD"] - src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            escapeX + " " + (fromPoint.y + src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_LEAD"]),
                        ].join(', ');
                        var curve2 = [
                            escapeX + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_LEAD"] + src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            toPoint.x + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_CROSSING_CONNECTOR_MOMENTUM"]),
                            toPoint.x + " " + toPoint.y,
                        ].join(', ');
                        return [
                            "M", fromPoint.x + " " + fromPoint.y,
                            "C", curve1,
                            "L", escapeX + " " + (toPoint.y - src_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_LEAD"]),
                            "C", curve2,
                        ].join(' ');
                    }
                })();
                var pathBG = _this.createPath(svg);
                pathBG.setAttributeNS(null, 'stroke', '#DDD');
                pathBG.setAttributeNS(null, 'stroke-width', '6');
                pathBG.setAttributeNS(null, 'd', line);
                var path = _this.createPath(svg);
                path.setAttributeNS(null, 'stroke', Object(src_utils__WEBPACK_IMPORTED_MODULE_5__["hashStringToColor"])(name));
                path.setAttributeNS(null, 'stroke-width', '3');
                path.setAttributeNS(null, 'd', line);
                var circleIn = _this.createPoint(svg);
                circleIn.setAttributeNS(null, 'fill', Object(src_utils__WEBPACK_IMPORTED_MODULE_5__["hashStringToColor"])(name));
                circleIn.setAttributeNS(null, 'cx', '' + fromPoint.x);
                circleIn.setAttributeNS(null, 'cy', '' + fromPoint.y);
                var circleOut = _this.createPoint(svg);
                circleOut.setAttributeNS(null, 'fill', Object(src_utils__WEBPACK_IMPORTED_MODULE_5__["hashStringToColor"])(name));
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
    MainComponent.prototype.createText = function (svg) {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        rect.setAttributeNS(null, 'class', '#EEE');
        svg.appendChild(rect);
        return rect;
    };
    MainComponent.prototype.onResize = function (event) {
        this.updateDeviceWidth();
    };
    MainComponent.prototype.updateDeviceWidth = function () {
        var innerWidth = window.innerWidth;
        this.isMobile = (innerWidth < src_media__WEBPACK_IMPORTED_MODULE_4__["TABLET_PORTRAIT"]);
    };
    MainComponent.ctorParameters = function () { return [
        { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_6__["StepsService"] }
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

module.exports = "h3 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.operator .operator-title {\n  border: 1px solid #888;\n  background-color: white;\n  text-align: center;\n}\n\n.operator .operator-parameter-container {\n  display: -webkit-box;\n  display: flex;\n}\n\n.operator .operator-parameter {\n  width: 100%;\n  text-align: center;\n  margin: 6px;\n  padding: 2px 6px;\n  background-color: #DDD;\n  border-radius: 10000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0b3Itd2lkZ2V0L0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFxhcHBcXG9wZXJhdG9yLXdpZGdldFxcb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcGVyYXRvci13aWRnZXQvb3BlcmF0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREdFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUdBLHNCQUFBO0VBQ0Esc0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9yLXdpZGdldC9vcGVyYXRvci13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLm9wZXJhdG9yIHtcbiAgLm9wZXJhdG9yLXRpdGxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5vcGVyYXRvci1wYXJhbWV0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLm9wZXJhdG9yLXBhcmFtZXRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNnB4O1xuICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICAvLyBib3JkZXItbGVmdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMDAwcHg7XG4gIH1cblxuICAub3BlcmF0b3ItcGFyYW1ldGVyOmZpcnN0LWNoaWxkIHtcbiAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4ODg7XG4gIH1cbn1cbiIsImgzIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5vcGVyYXRvciAub3BlcmF0b3ItdGl0bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9wZXJhdG9yIC5vcGVyYXRvci1wYXJhbWV0ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vcGVyYXRvciAub3BlcmF0b3ItcGFyYW1ldGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2cHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDAwcHg7XG59Il19 */"

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
/*! exports provided: WidthUnit, WidgetType, StepUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidthUnit", function() { return WidthUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepUtils", function() { return StepUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var WidthUnit;
(function (WidthUnit) {
    WidthUnit["PIXEL"] = "px";
    WidthUnit["PERCENTAGE"] = "%";
    WidthUnit["flex"] = "flex";
})(WidthUnit || (WidthUnit = {}));
var WidgetType;
(function (WidgetType) {
    WidgetType["BASIC"] = "basic";
    WidgetType["VIEW"] = "view";
    WidgetType["OPERATOR"] = "operator";
})(WidgetType || (WidgetType = {}));
var StepUtils = /** @class */ (function () {
    function StepUtils() {
    }
    StepUtils.createStep = function (config) {
        var result = {
            id: 0,
            title: 'Input',
            type: WidgetType.BASIC,
            columns: [],
        };
        result = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, result, config);
        return result;
    };
    StepUtils.iterateOperators = function (args) {
        args.steps.forEach(function (step, stepIndex) {
            var columns = step.columns, stepID = step.id;
            columns.forEach(function (column) {
                switch (column.type) {
                    case WidgetType.VIEW:
                        {
                            args.viewCallback(column, stepID, stepIndex);
                        }
                        break;
                    case WidgetType.OPERATOR:
                        {
                            args.operatorCallback(column, stepID, stepIndex);
                        }
                        break;
                }
            });
        });
    };
    StepUtils.iterateOperatorsOfStep = function (args) {
        var step = args.step, stepID = args.stepID, stepIndex = args.stepIndex;
        var columns = step.columns;
        columns.forEach(function (column) {
            switch (column.type) {
                case WidgetType.VIEW:
                    {
                        args.viewCallback(column, stepID, stepIndex);
                    }
                    break;
                case WidgetType.OPERATOR:
                    {
                        args.operatorCallback(column, stepID, stepIndex);
                    }
                    break;
            }
        });
    };
    return StepUtils;
}());



/***/ }),

/***/ "./src/app/s/View.ts":
/*!***************************!*\
  !*** ./src/app/s/View.ts ***!
  \***************************/
/*! exports provided: ViewWidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWidgetType", function() { return ViewWidgetType; });
var ViewWidgetType;
(function (ViewWidgetType) {
    ViewWidgetType["TEXTAREA"] = "textarea";
    ViewWidgetType["LIST"] = "list";
    ViewWidgetType["TUPLE_TEXT"] = "tupleText";
    ViewWidgetType["JSON"] = "json";
})(ViewWidgetType || (ViewWidgetType = {}));


/***/ }),

/***/ "./src/app/s/_mockSteps.json":
/*!***********************************!*\
  !*** ./src/app/s/_mockSteps.json ***!
  \***********************************/
/*! exports provided: steps, default */
/***/ (function(module) {

module.exports = {"steps":[{"id":1,"title":"Input","type":"view","columns":[{"id":7,"width":50,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Input","name":"input","default":"hello world\n"}},{"id":8,"width":40,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Input Regex","name":"inputRegex","default":"(llo.*)"}},{"id":23,"width":10,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Token Names","name":"inputRegexTokenNames","default":"lolz"}}]},{"id":2,"title":"Process","type":"operator","columns":[{"id":9,"width":100,"widthUnit":"%","type":"operator","operator":{"type":"regex-match-rename","inputs":{"source":{"id":15,"contextName":"input"},"regex":{"id":16,"contextName":"inputRegex"},"names":{"id":17,"contextName":"inputRegexTokenNames"}},"outputs":{"result":{"id":18,"contextName":"tokens"},"residue":{"id":19,"contextName":"tokens-residue"}}}}]},{"id":3,"title":"Tokens","type":"view","columns":[{"id":10,"width":60,"widthUnit":"%","type":"view","view":{"type":"json","title":"Tokens","name":"tokens","default":""}},{"id":11,"width":40,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Residue","name":"tokens-residue","default":""}}]},{"id":4,"title":"Template","type":"view","columns":[{"id":12,"width":70,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Template","name":"template","default":"{{#each @root}}\n{{@index}}: {{lolz}}\n{{/each}}"}}]},{"id":5,"title":"Combine","type":"operator","columns":[{"id":13,"width":100,"widthUnit":"%","type":"operator","operator":{"type":"handlebars-template","inputs":{"template":{"id":20,"contextName":"template"},"data":{"id":21,"contextName":"tokens"}},"outputs":{"result":{"id":22,"contextName":"output"}}}}]},{"id":6,"title":"Output","type":"view","columns":[{"id":14,"width":100,"widthUnit":"%","type":"view","view":{"type":"textarea","title":"Result","name":"output","default":""}}]}]};

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

 // './_mockStepsSimple.json';
var mockSteps = (_mockSteps_json__WEBPACK_IMPORTED_MODULE_1__["steps"]
    .map(function (v) { return _Step__WEBPACK_IMPORTED_MODULE_0__["StepUtils"].createStep(v); }));


/***/ }),

/***/ "./src/app/s/operators.ts":
/*!********************************!*\
  !*** ./src/app/s/operators.ts ***!
  \********************************/
/*! exports provided: operators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operators", function() { return operators; });
var operators = {
    'csv-split': __webpack_require__(/*! ./operators/csv-split */ "./src/app/s/operators/csv-split.ts").operator,
    'handlebars-template': __webpack_require__(/*! ./operators/handlebars-template */ "./src/app/s/operators/handlebars-template.ts").operator,
    'regex-match-rename': __webpack_require__(/*! ./operators/regex-match-rename */ "./src/app/s/operators/regex-match-rename.ts").operator,
};


/***/ }),

/***/ "./src/app/s/operators/csv-split.ts":
/*!******************************************!*\
  !*** ./src/app/s/operators/csv-split.ts ***!
  \******************************************/
/*! exports provided: operator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operator", function() { return operator; });
var operator = {
    name: 'csv-split',
    description: 'split a csv string into tokens, taking account of the presence of quotes',
    inputs: ['str', 'separatorRegex', 'quotesRegex'],
    outputs: ['tokens', 'err'],
    run: function (_a) {
        var str = _a.str, separatorRegex = _a.separatorRegex, quotesRegex = _a.quotesRegex;
        try {
            // const testCase = '123,2.99,AMO024,Title,  "Description\\", more info",,123987564';
            // const regex = / (?=(?:(?:[^\"]|\\")*\"(?:[^\"]|\\")*\")*(?!(?:[^\"]|\\")*\"))/;
            var regexStr = separatorRegex + "(?=(?:(?:[^" + quotesRegex + "]|\\" + quotesRegex + ")*" + quotesRegex + "(?:[^" + quotesRegex + "]|\\" + quotesRegex + ")*" + quotesRegex + ")*(?!(?:[^" + quotesRegex + "]|\\" + quotesRegex + ")*" + quotesRegex + "))";
            var regex = new RegExp(regexStr, '');
            var tokens = str.split(regex).map(function (token, i) {
                return (token
                    .replace(new RegExp("(^" + quotesRegex + ")|(" + quotesRegex + "$)", 'g'), '') // remove start and end quotes
                    .replace(new RegExp("\\\\(" + quotesRegex + ")", 'g'), '$1') // remove escaped quotes
                );
                // return token;
            });
            return {
                tokens: tokens,
                err: 'ok',
            };
        }
        catch (e) {
            return {
                tokens: null,
                err: '' + e.toString(),
            };
        }
    },
};


/***/ }),

/***/ "./src/app/s/operators/handlebars-template.ts":
/*!****************************************************!*\
  !*** ./src/app/s/operators/handlebars-template.ts ***!
  \****************************************************/
/*! exports provided: operator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operator", function() { return operator; });
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlebars */ "./node_modules/handlebars/dist/cjs/handlebars.js");
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_0__);

var operator = {
    name: 'handlebars-template',
    description: 'Generates text by applying a handlebars template to "data"',
    inputs: ['template', 'data'],
    outputs: ['result', 'err'],
    run: function (_a) {
        var template = _a.template, data = _a.data;
        try {
            var handlebarDelegate = Object(handlebars__WEBPACK_IMPORTED_MODULE_0__["compile"])(template);
            var result = handlebarDelegate(data);
            return {
                result: result,
                err: 'ok',
            };
        }
        catch (e) {
            return {
                result: '',
                err: '' + e.toString(),
            };
        }
    },
};


/***/ }),

/***/ "./src/app/s/operators/regex-match-rename.ts":
/*!***************************************************!*\
  !*** ./src/app/s/operators/regex-match-rename.ts ***!
  \***************************************************/
/*! exports provided: operator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operator", function() { return operator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var operator = {
    name: 'regex-match-rename',
    description: 'regex-match and then rename the resulting capture groups',
    inputs: [
        'source',
        'regex',
        'names',
    ],
    outputs: [
        'result',
        'residue',
        'err',
    ],
    run: function (_a) {
        var source = _a.source, regex = _a.regex, names = _a.names;
        var aliasList = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](['_fullMatch'], names.split('\n'));
        var splitRegex = /a/;
        var tokenRegex = /a/;
        try {
            splitRegex = new RegExp(regex, 'gm'); // global multiline
            tokenRegex = new RegExp(regex, 'm'); // multiline
        }
        catch (error) {
            return {
                result: '',
                residue: '',
                err: error.toString(),
            };
        }
        var matchResults = source.match(splitRegex);
        var residue = source.replace(splitRegex, '');
        var isTotalMatch = residue === '';
        var matchResultSummary = (matchResults == null ? 'no match' : matchResults.length + " matches");
        if (isTotalMatch) {
            matchResultSummary += ', full match';
        }
        else {
            matchResultSummary += ', partial match';
        }
        if (!matchResults || matchResults.length <= 0) {
            return {
                result: '',
                residue: '',
                err: matchResultSummary,
            };
        }
        var tokensList = (matchResults
            .map(function (match) {
            return tokenRegex.exec(match);
        })
            .map(function (tokens, matchIndex) {
            var result = { _matchIndex: 0 };
            if (!tokens) {
                return {};
            }
            tokens.forEach(function (token, i) { return (result[aliasList[i] || i] = token); });
            result._matchIndex = matchIndex;
            result._input = tokens.input;
            return result;
        }));
        return {
            result: tokensList,
            residue: residue,
            err: matchResultSummary,
        };
    },
};


/***/ }),

/***/ "./src/app/s/runtime.service.ts":
/*!**************************************!*\
  !*** ./src/app/s/runtime.service.ts ***!
  \**************************************/
/*! exports provided: RuntimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeService", function() { return RuntimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators */ "./src/app/s/operators.ts");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step */ "./src/app/s/Step.ts");
/* harmony import */ var _steps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps.service */ "./src/app/s/steps.service.ts");







var RuntimeService = /** @class */ (function () {
    function RuntimeService(stepsService) {
        var _this = this;
        this.stepsService = stepsService;
        this.entitySubjects = {};
        this.operators = _operators__WEBPACK_IMPORTED_MODULE_4__["operators"];
        this.entitiesChanged$ = this.stepsService.steps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (steps) { return _this.updateEntitySubjects(steps); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return console.log('entitiesChanged'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        // this.entitiesChangedSource$ = merge(
        //   this.entitiesUpdatesSource$,
        //   this.stepsService.steps$.pipe(
        //     map((steps) => this.updateEntitiesAndDispatchDelta(steps)),
        //   ),
        // ).pipe(
        //   // tap((entityDataChanges) => console.log('entitiesChangedSource$', this.entities)),
        // );
        // this.entitiesChanged$ = this.entitiesChangedSource$.pipe(
        //   map((entityDataChanges) => entityDataChanges.map(entityDataChange => entityDataChange.index)),
        // );
    }
    RuntimeService.prototype.updateEntitySubjects = function (steps) {
        var _this = this;
        var contextSubjectHolders = [{}];
        _Step__WEBPACK_IMPORTED_MODULE_5__["StepUtils"].iterateOperators({
            steps: steps,
            viewCallback: function (viewWidget, stepID, stepIndex) {
                var widgetID = viewWidget.id, view = viewWidget.view;
                var contextSubjectHolder = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, contextSubjectHolders[contextSubjectHolders.length - 1]);
                var name = view.name;
                console.log("Step " + stepID + " view[" + widgetID + "] " + name + " input$ would be", contextSubjectHolder[name]);
                var input$ = (contextSubjectHolder[name] || new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](view.default)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(view.default), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return console.log(widgetID + " view " + name + " input$ triggered", val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                var inputUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
                // const input$ = stepIndex === 0 ? of(view.default) : this.entitySubjects[];
                var process$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(input$, inputUpdated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return console.log(widgetID + " view " + name + " inputUpdated$ triggered", val); }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return console.log(widgetID + " view " + name + " process$ triggered", val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                var output$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return console.log(widgetID + " view " + name + " output$ triggered", val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                output$.name = widgetID + " output$";
                output$.subscribe({
                    next: function () { return console.log(widgetID + " view " + name + " output$ subscribe triggered"); },
                    complete: function () { return console.log(widgetID + " view complete"); }
                });
                contextSubjectHolder[name] = output$;
                _this.entitySubjects[widgetID] = {
                    entityID: widgetID,
                    input$: input$,
                    process$: process$,
                    output$: output$,
                    inputUpdated$: inputUpdated$,
                };
                contextSubjectHolders.push(contextSubjectHolder);
            },
            operatorCallback: function (operatorWidget, stepID, stepIndex) {
                var columnID = operatorWidget.id, operator = operatorWidget.operator;
                var type = operator.type;
                var contextSubjectHolder = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, contextSubjectHolders[contextSubjectHolders.length - 1]);
                var inputList = Object.entries(operator.inputs)
                    .map(function (_a, i) {
                    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), inputKey = _b[0], _c = _b[1], widgetID = _c.id, contextName = _c.contextName;
                    console.log("Step " + stepID + " operator[" + columnID + "] " + contextName + " input$ would be", contextSubjectHolder[contextName]);
                    return { inputKey: inputKey, observable: contextSubjectHolder[contextName] || rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"] };
                });
                console.log('inputList', inputList);
                var input$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(inputList.map(function (_a) {
                    var observable = _a.observable;
                    return observable;
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (values) {
                    return inputList.reduce(function (obj, _a, i) {
                        var _b;
                        var inputKey = _a.inputKey;
                        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, (_b = {}, _b[inputKey] = values[i], _b)));
                    }, {});
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (args) { return console.log(columnID + " operator " + type + " input$ triggered", args); })); // TODO: typescript types
                // const input$ = stepIndex === 0 ? of(view.default) : this.entitySubjects[];
                var process$ = input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (args) { return console.log(columnID + " operator " + type + " process$ triggered", args); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return _this.operators[type].run(args); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (args) { return console.log(columnID + " operator " + type + " process$ completed", args); }));
                var output$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) {
                    return Object.entries(operator.outputs)
                        .reduce(function (obj, _a) {
                        var _b;
                        var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), outputKey = _c[0], _d = _c[1], widgetID = _d.id, contextName = _d.contextName;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, (_b = {}, _b[contextName] = val[outputKey] == null ? '' : val[outputKey], _b));
                    }, {});
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return console.log(columnID + " operator " + type + " output$ triggered", val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                output$.name = columnID + " output$";
                Object.entries(operator.outputs)
                    .forEach(function (_a, i) {
                    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), outputKey = _b[0], _c = _b[1], widgetID = _c.id, contextName = _c.contextName;
                    contextSubjectHolder[contextName] = output$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) { return val[contextName] == null ? '' : val[contextName]; }));
                });
                contextSubjectHolders.push(contextSubjectHolder);
            },
        });
        window.contextSubjectHolders = contextSubjectHolders; // Debug
        console.log('this.entitySubjects', this.entitySubjects);
        // this.connectEntitySubjects(steps, this.stepsService.contexts);
        return this.entitySubjects;
    };
    RuntimeService.prototype.connectEntitySubjects = function (steps, contexts) {
        var _this = this;
        contexts.forEach(function (context) {
            var beforeStepID = context.beforeStepID, keys = context.keys;
            keys.forEach(function (key) {
                var fromID = key.fromID, toID = key.toID, name = key.name;
                debugger;
                _this.entitySubjects[fromID].output$.subscribe(function (output) {
                    _this.entitySubjects[toID].inputUpdated$.next(output);
                });
            });
        });
    };
    // // also mutates this.entities
    // updateEntitiesAndDispatchDelta(steps: Step[]) {
    //   const changedEntities: EntityDataChange[] = [];
    //   StepUtils.iterateOperators({
    //     steps,
    //     viewCallback: (viewWidget: ViewWidget) => {
    //       const { id: widgetID, view } = viewWidget;
    //       const entityData: EntityData = this.entities[widgetID] || { contextName: view.name, content: null };
    //       if (!this.entities[widgetID]) {
    //         changedEntities.push({ event: 'create', index: widgetID, old: { contextName: view.name, content: null } });
    //         entityData.content = view.default;
    //       }
    //       this.entities[widgetID] = entityData;
    //     },
    //     operatorCallback: (operatorWidget: OperatorWidget) => {
    //       const { operator } = operatorWidget;
    //       Object.entries(operator.inputs)
    //         .forEach(([inputKey, { id: widgetID, contextName }], i) => {
    //           const entityData: EntityData = this.entities[widgetID] || { contextName, content: null };
    //           if (!this.entities[widgetID]) {
    //             changedEntities.push({ event: 'create', index: widgetID, old: { contextName, content: null } });
    //           }
    //           this.entities[widgetID] = entityData;
    //         });
    //       Object.entries(operator.outputs)
    //         .forEach(([outputKey, { id: widgetID, contextName }], i) => {
    //           const entityData: EntityData = this.entities[widgetID] || { contextName, content: null };
    //           if (!this.entities[widgetID]) {
    //             changedEntities.push({ event: 'create', index: widgetID, old: { contextName, content: null } });
    //           }
    //           this.entities[widgetID] = entityData;
    //         });
    //     },
    //   });
    //   return changedEntities;
    // }
    RuntimeService.prototype.updateContent = function (entityID, content) {
        console.log('updateContent', entityID, content);
        this.entitySubjects[entityID].inputUpdated$.next(content);
        console.log('updateContent done', entityID, content);
    };
    RuntimeService.prototype.onClickNext = function (beforeStepID) {
        console.log("onClickNext beforeStepID: " + beforeStepID);
        // this.stepsService
    };
    RuntimeService.ctorParameters = function () { return [
        { type: _steps_service__WEBPACK_IMPORTED_MODULE_6__["StepsService"] }
    ]; };
    RuntimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RuntimeService);
    return RuntimeService;
}());



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
        this.steps$ = this.stepsSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (steps) { return _this.updateContexts(steps); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (steps) { return console.log('steps', steps, _this.contexts); }));
    }
    StepsService.prototype.addStep = function () {
        var oldSteps = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.stepsSource.getValue());
        oldSteps.push(_Step__WEBPACK_IMPORTED_MODULE_5__["StepUtils"].createStep({ id: this.entities.length, title: 'New Step' }));
        this.stepsSource.next(oldSteps);
    };
    StepsService.prototype.updateStep = function (stepID, newValue) {
        var oldSteps = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.stepsSource.getValue());
        var positionID = oldSteps.findIndex(function (step) { return step.id === stepID; });
        oldSteps[positionID] = _Step__WEBPACK_IMPORTED_MODULE_5__["StepUtils"].createStep(newValue);
        // console.log('updateStep', stepID, oldSteps[positionID]);
        this.stepsSource.next(oldSteps);
    };
    StepsService.prototype.removeStep = function (stepID) {
        var oldSteps = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.stepsSource.getValue());
        var positionID = oldSteps.findIndex(function (step) { return step.id === stepID; });
        oldSteps.splice(positionID, 1);
        this.stepsSource.next(oldSteps);
    };
    StepsService.prototype.addWidget = function (stepID, widgetType) {
        var entityID = this.entities.length;
        var column = {
            id: entityID++,
            width: 1,
            widthUnit: 'flex',
            type: widgetType,
        };
        switch (widgetType) {
            case _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].VIEW:
                {
                    column.type = _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].VIEW;
                    column.view = {
                        default: 'view',
                        name: 'view',
                        title: 'View',
                        type: 'textarea',
                    };
                }
                break;
            case _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].OPERATOR:
                {
                    column.type = _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].OPERATOR;
                    column.operator = {
                        type: 'operator',
                        title: 'operator',
                        inputs: {
                            in: { id: entityID++, contextName: 'context_in' }
                        },
                        outputs: {
                            out: { id: entityID++, contextName: 'context_out' }
                        },
                    };
                }
                break;
        }
        var targetStep = this.stepsSource.getValue().find(function (step) { return step.id === stepID; });
        if (!targetStep) {
            throw new TypeError("Step ID \"" + stepID + "\" not found");
        }
        targetStep.columns.push(column);
        this.updateStep(stepID, targetStep);
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
        var contextHolders = [{}]; // holds keys and last-seen widgetID
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
                        var beforeContext = this.updateViewWidgetContext(stepIndex, stepID, columns, contextHolders, newContexts, this.entities);
                        newContexts.push(beforeContext);
                    }
                    break;
                case _Step__WEBPACK_IMPORTED_MODULE_5__["WidgetType"].OPERATOR:
                    {
                        var beforeContext = this.updateOperatorWidgetContext(stepIndex, stepID, columns, contextHolders, newContexts, this.entities);
                        newContexts.push(beforeContext);
                    }
                    break;
            }
            // console.log('contextHolder', { ...contextHolder });
        }
        // console.log('newContexts', JSON.stringify(newContexts, null, 4));
        this.contexts = newContexts;
        this.contextHolders = contextHolders;
    };
    StepsService.prototype.updateViewWidgetContext = function (stepIndex, stepID, columns, contextHolders, newContexts, entitiesList) {
        // mutates contextHolder and newContexts in place
        var beforeContext = {
            beforeStepID: stepID,
            keys: [],
        };
        var contextHolder = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, contextHolders[contextHolders.length - 1]);
        columns.forEach(function (column) {
            var columnID = column.id, columnType = column.type;
            var viewWidget = column.view;
            var name = viewWidget.name, title = viewWidget.title;
            // console.log('view', name, columnID);
            if (contextHolder[name]) {
                var _a = contextHolder[name], lastSeenID = _a.lastSeenColumnID, lastSeenStepIndex = _a.lastSeenStepIndex;
                beforeContext.keys.push({
                    name: name,
                    fromStepIndex: lastSeenStepIndex,
                    type: null,
                    fromID: lastSeenID, toID: columnID,
                });
            }
            entitiesList[columnID] = column;
            contextHolder[name] = { lastSeenColumnID: columnID, lastSeenStepIndex: stepIndex };
        });
        contextHolders.push(contextHolder);
        return beforeContext;
    };
    StepsService.prototype.updateOperatorWidgetContext = function (stepIndex, stepID, columns, contextHolders, newContexts, entitiesList) {
        // mutates contextHolder and newContexts in place
        var beforeContext = {
            beforeStepID: stepID,
            keys: [],
        };
        var contextHolder = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, contextHolders[contextHolders.length - 1]);
        columns.forEach(function (column) {
            var columnID = column.id, columnType = column.type, operator = column.operator;
            var operatorWidget = operator;
            var inputs = operatorWidget.inputs, outputs = operatorWidget.outputs;
            Object.entries(inputs).forEach(function (_a) {
                // console.log('operator', contextName, connectorID);
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), inputKey = _b[0], _c = _b[1], connectorID = _c.id, contextName = _c.contextName;
                entitiesList[connectorID] = { id: connectorID, contextName: contextName };
                if (contextHolder[contextName]) {
                    var _d = contextHolder[contextName], lastSeenID = _d.lastSeenColumnID, lastSeenStepIndex = _d.lastSeenStepIndex;
                    beforeContext.keys.push({
                        name: contextName,
                        fromStepIndex: lastSeenStepIndex,
                        type: null,
                        fromID: lastSeenID, toID: connectorID,
                    });
                }
                // contextHolder[inputKey] = columnID;
                // beforeContext.keys.push({ name:inputKey, fromID: columnID, toID: null, type: null });
            });
            Object.entries(outputs).forEach(function (_a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), outputKey = _b[0], _c = _b[1], connectorID = _c.id, contextName = _c.contextName;
                entitiesList[connectorID] = { id: connectorID, contextName: contextName };
                contextHolder[contextName] = { lastSeenColumnID: connectorID, lastSeenStepIndex: stepIndex };
            });
        });
        contextHolders.push(contextHolder);
        return beforeContext;
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

module.exports = ".card {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.expand-button {\n  width: 30px;\n  margin-right: 20px;\n}\n\n.card-title {\n  margin-bottom: 0;\n  color: black;\n  display: -webkit-box;\n  display: flex;\n}\n\n.card-title div {\n  padding: 2px;\n  padding-right: 4px;\n}\n\n.card-title div.step-type {\n  font-style: italic;\n}\n\n.card-subtitle {\n  margin-bottom: 0;\n  margin-left: 40px;\n}\n\n.card {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.step-body {\n  overflow: auto;\n}\n\n.step-body .column-row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  margin-left: -4px;\n  margin-right: -4px;\n}\n\n.step-body .column-row.isMobile {\n  display: block;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.step-body .column {\n  margin: 4px;\n  width: 100%;\n}\n\n.indented-card-body {\n  margin-left: 50px;\n  margin-right: 0;\n}\n\n.indented-card-body.after-title {\n  padding-top: 0px;\n}\n\n.step-buttons {\n  margin-left: calc(50px - 0.75rem);\n  padding-top: 0;\n}\n\n.step-type-selector {\n  margin-left: -4px;\n  margin-right: -4px;\n}\n\n.step-type-selector button {\n  width: calc(50% - 8px);\n  margin: 4px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcC9DOlxccFxcc3dpc3Mtc3RyaW5nL3NyY1xcYXBwXFxzdGVwXFxzdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGVwL3N0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0Usa0JBQUE7QUNDTjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBREdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ROOztBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNISjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE1FO0VBQ0UsZ0JBQUE7QUNKSjs7QURRQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFdFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvc3RlcC9zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7IC8vcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZXhwYW5kLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGRpdiB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcblxuICAgICYuc3RlcC10eXBlIHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnN0ZXAtYm9keSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIC5jb2x1bW4tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTRweDtcblxuICAgICYuaXNNb2JpbGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBtYXJnaW46IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaW5kZW50ZWQtY2FyZC1ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcblxuICAmLmFmdGVyLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG59XG5cbi5zdGVwLWJ1dHRvbnMge1xuICBtYXJnaW4tbGVmdDogY2FsYyg1MHB4IC0gMC43NXJlbSk7XG4gIHBhZGRpbmctdG9wOiAwO1xuXG4gIC8vIC5idG4tbGlnaHQ6Zmlyc3QtY2hpbGQge1xuICAvLyAgIHBhZGRpbmctbGVmdDogMDtcbiAgLy8gfVxufVxuXG4uc3RlcC10eXBlLXNlbGVjdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDhweCk7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuIiwiLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5leHBhbmQtYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FyZC10aXRsZSBkaXYge1xuICBwYWRkaW5nOiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5jYXJkLXRpdGxlIGRpdi5zdGVwLXR5cGUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zdGVwLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zdGVwLWJvZHkgLmNvbHVtbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbn1cbi5zdGVwLWJvZHkgLmNvbHVtbi1yb3cuaXNNb2JpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5zdGVwLWJvZHkgLmNvbHVtbiB7XG4gIG1hcmdpbjogNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZGVudGVkLWNhcmQtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uaW5kZW50ZWQtY2FyZC1ib2R5LmFmdGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnN0ZXAtYnV0dG9ucyB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwcHggLSAwLjc1cmVtKTtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5zdGVwLXR5cGUtc2VsZWN0b3Ige1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xufVxuLnN0ZXAtdHlwZS1zZWxlY3RvciBidXR0b24ge1xuICB3aWR0aDogY2FsYyg1MCUgLSA4cHgpO1xuICBtYXJnaW46IDRweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"

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
                    if (c.type !== _s_Step__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].VIEW) {
                        return '';
                    }
                    return c.view.title;
                }).join(', ');
                break;
            case _s_Step__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].OPERATOR:
                this.summary = '[' + this.step.columns.map(function (c) {
                    if (c.type !== _s_Step__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].OPERATOR) {
                        return '';
                    }
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
    StepComponent.prototype.onClickAddColumn = function () {
        this.stepsService.addWidget(this.step.id, this.step.type);
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

/***/ "./src/app/view-widget/json-view/json-view.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/view-widget/json-view/json-view.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-top: 1px solid #888;\n  display: block;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy13aWRnZXQvanNvbi12aWV3L0M6XFxwXFxzd2lzcy1zdHJpbmcvc3JjXFxhcHBcXHZpZXctd2lkZ2V0XFxqc29uLXZpZXdcXGpzb24tdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy13aWRnZXQvanNvbi12aWV3L2pzb24tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctd2lkZ2V0L2pzb24tdmlldy9qc29uLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4ODg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICByZXNpemU6IG5vbmU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4ODg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICByZXNpemU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/view-widget/json-view/json-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view-widget/json-view/json-view.component.ts ***!
  \**************************************************************/
/*! exports provided: JsonViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonViewComponent", function() { return JsonViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JsonViewComponent = /** @class */ (function () {
    function JsonViewComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    JsonViewComponent.prototype.ngOnInit = function () {
    };
    JsonViewComponent.prototype.ngOnChanges = function (changes) {
        var changeInContent = changes.content;
        this.jsonString = JSON.stringify(changeInContent.currentValue, null, 4);
    };
    JsonViewComponent.prototype.onContentUpdated = function (value) {
        try {
            var obj = JSON.parse(value);
            this.valueChange.emit(obj);
        }
        catch (e) {
            this.err = e.toString();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], JsonViewComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], JsonViewComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], JsonViewComponent.prototype, "valueChange", void 0);
    JsonViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-json-view',
            template: __webpack_require__(/*! raw-loader!./json-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-widget/json-view/json-view.component.html"),
            styles: [__webpack_require__(/*! ./json-view.component.scss */ "./src/app/view-widget/json-view/json-view.component.scss")]
        })
    ], JsonViewComponent);
    return JsonViewComponent;
}());



/***/ }),

/***/ "./src/app/view-widget/textarea-view/textarea-view.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/view-widget/textarea-view/textarea-view.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-top: 1px solid #888;\n  display: block;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy13aWRnZXQvdGV4dGFyZWEtdmlldy9DOlxccFxcc3dpc3Mtc3RyaW5nL3NyY1xcYXBwXFx2aWV3LXdpZGdldFxcdGV4dGFyZWEtdmlld1xcdGV4dGFyZWEtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy13aWRnZXQvdGV4dGFyZWEtdmlldy90ZXh0YXJlYS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlldy13aWRnZXQvdGV4dGFyZWEtdmlldy90ZXh0YXJlYS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmVzaXplOiBub25lO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmVzaXplOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-widget/textarea-view/textarea-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view-widget/textarea-view/textarea-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: TextareaViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaViewComponent", function() { return TextareaViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextareaViewComponent = /** @class */ (function () {
    function TextareaViewComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TextareaViewComponent.prototype.ngOnInit = function () {
    };
    TextareaViewComponent.prototype.onContentUpdated = function (value) {
        this.valueChange.emit(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextareaViewComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextareaViewComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TextareaViewComponent.prototype, "valueChange", void 0);
    TextareaViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-textarea-view',
            template: __webpack_require__(/*! raw-loader!./textarea-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-widget/textarea-view/textarea-view.component.html"),
            styles: [__webpack_require__(/*! ./textarea-view.component.scss */ "./src/app/view-widget/textarea-view/textarea-view.component.scss")]
        })
    ], TextareaViewComponent);
    return TextareaViewComponent;
}());



/***/ }),

/***/ "./src/app/view-widget/view-widget.component.scss":
/*!********************************************************!*\
  !*** ./src/app/view-widget/view-widget.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid #888;\n  display: block;\n  padding: 4px;\n  background: white;\n}\n\nh6 {\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-top: 4px;\n  margin-bottom: 2px;\n}\n\n.view-title {\n  background-color: white;\n  width: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.toolbar {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy13aWRnZXQvQzpcXHBcXHN3aXNzLXN0cmluZy9zcmNcXGFwcFxcdmlldy13aWRnZXRcXHZpZXctd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LXdpZGdldC92aWV3LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3LXdpZGdldC92aWV3LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmg2IHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4udmlldy10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhIHtcbn1cbiIsIjpob3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmg2IHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4udmlldy10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
/* harmony import */ var _s_runtime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s/runtime.service */ "./src/app/s/runtime.service.ts");
/* harmony import */ var _s_steps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../s/steps.service */ "./src/app/s/steps.service.ts");
/* harmony import */ var _s_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../s/View */ "./src/app/s/View.ts");






var ViewWidgetComponent = /** @class */ (function () {
    function ViewWidgetComponent(stepsService, runtimeService, elementRef) {
        this.stepsService = stepsService;
        this.runtimeService = runtimeService;
        this.elementRef = elementRef;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinus"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.ViewWidgetType = _s_View__WEBPACK_IMPORTED_MODULE_5__["ViewWidgetType"];
        this.isOrganizeMode = false;
        this.height = 300;
    }
    ViewWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        // merge(
        //   this.runtimeService.entitiesChanged$.pipe(
        //     // tap((a) => console.log('entityRuntimeData', [...a], this.viewWidget.id)),
        //     filter((changedIndexes) => changedIndexes.some(index => index === this.viewWidget.id)),
        //   ),
        //   this.stepsService.steps$.pipe(take(1)),
        // ).subscribe(() => {
        //   // console.log('entityRuntimeData', this.viewWidget.id)),
        //   this.content = this.runtimeService.entities[this.viewWidget.id].content;
        // });
        this.runtimeService.entitiesChanged$.subscribe(function (entitySubjects) {
            entitySubjects[_this.viewWidget.id].input$.subscribe(function (content) {
                _this.content = content;
            });
        });
    };
    ViewWidgetComponent.prototype.onTitleUpdated = function (value) {
        this.viewWidget.view.title = value;
        this.stepsService.updateWidget(this.stepID, this.index, this.viewWidget);
    };
    ViewWidgetComponent.prototype.onContentUpdated = function (_a) {
        var target = _a.target;
        this.runtimeService.updateContent(this.viewWidget.id, target.value);
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
        { type: _s_steps_service__WEBPACK_IMPORTED_MODULE_4__["StepsService"] },
        { type: _s_runtime_service__WEBPACK_IMPORTED_MODULE_3__["RuntimeService"] },
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