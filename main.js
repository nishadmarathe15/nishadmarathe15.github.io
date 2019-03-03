(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");








var routes = [
    { path: 'abt', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'calc', component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"] }
];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }\r\n  .myclass{\r\n    background-color: aquamarine;\r\n  }\r\n  .first{\r\n    background-color: crimson;\r\n  }\r\n  .second {\r\n    padding: 20px;\r\n  }\r\n  .third {\r\n    color : white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGVBQWU7RUFDakI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgY29sb3I6ICMzNjk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICB9XHJcbiAgLm15Y2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gIH1cclxuICAuZmlyc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gIH1cclxuICAuc2Vjb25kIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC50aGlyZCB7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n<button  (click)=\"myfun()\" class=\"btn btn-danger\">click me</button>\n<!-- Trigger the modal with a button -->\n<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>\n\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Modal Header</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Some text in the modal.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n  \n</div>\n<form>\n  <input type=\"number\" #dt/>\n  <button (click)=\"showval(dt.value)\">Click</button>\n  <button (click)=\"showval(this.innerHTML)\">8</button>\n\n  \n</form>\n<p> {{ data1 }}</p>\n<h4>{{ x < y ? \"x is amall \" : \"y is small\"}}</h4>\n<h5 [ngClass]=\" ' myclass ' \">This is data wirth class</h5>\n<!-- <h5 [class.myclass]=\"show\">Second Heading</h5> -->\n<h6 [style.color]=\"mycolor\">Another heading</h6>\n\n<p [ngClass]=\" 'myclass' \">{{myidea}}</p>\n\n  <input type=\"text\" #idea/>\n  <button (click)=\"showidea(idea.value)\">click to show idea</button>\n  <button (click)=\"alert(idea.value)\">click to show idea 2</button>\n\n<h1 [style.color]=\"H1color\" >This is my H1</h1>\n\n<h2 >{{datah2}}</h2>\n\n\n\n\n<input type=\"text\" value=\"{{mycolor}}\"/>\n<input type=\"text\" [value]=\"mycolor\"/>\n\n<div [hidden]=\"show\">This is Div1</div>\n<div hidden=\"{{ show }}\">This is Div2</div>\n\n<h6 [style.color]=\" isshow ? 'green' : 'yellow' \">this is 6th head</h6>\n\n\n\n<input type=\"text\" [(ngModel)]=\"str\"/>\n{{str}}\n\n<br/>\n<br/>\n<input type=\"number\" [(ngModel)] = \"var1\"/>\n<input type=\"number\" [(ngModel)] = \"var2\"/>\n{{var1 + var2}}\n<br/>\n<p [ngClass] = \"'first Second third'\"> This is para using multiple classes</p>\n\n<p [ngClass] = \"multiclass\"> This is para using multi classes using multiclass variable</p>\n\n<p [ngStyle] = \"{'color':'red','backgroundColor':'white'}\">This is para with inline style</p>\n\n<p [ngStyle] = \"myinlinestyle\">This is para with inline style</p>\n\n<br/>\n{{ \"This is uppercase by pipes\" | uppercase }}\n\nTime: {{ time | async }}\n<br/>\n<br/>\n<p>A: {{a | currency}}</p>\n<p>A: {{a | currency:'CAD'}}</p>\n<p>A: {{a | currency:'CAD':'code'}}</p>\n<p>B: {{b | currency}}</p>\n<p>B: {{b | currency:'CAD':'symbol':'4.2-2'}}</p>\n<p>B: {{b | currency:'CAD':'symbol':'4.2-2'}}</p>\n<p>B: {{b | currency:'CAD':'symbol':'4.2-6'}}</p>\n\n\n<a routerLink=\"abt\">About</a>\n<a routerLink=\"calc\">Calculator</a>\n<a routerLink=\"contact\">Contact</a>\n<a routerLink='home'>home</a>\n<a routerLink='new'>new</a>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My First Angular app';
        this.hasError = true;
        this.data1 = "This is string data of app component";
        this.x = 12;
        this.y = 13;
        this.isshow = true;
        this.mycolor = "red";
        this.show = false;
        this.H1color = "crimson";
        this.datah2 = "This is my H1 done with interpolation";
        this.myidea = "Worth it";
        this.str = "";
        this.var1 = 0;
        this.var2 = 0;
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setInterval(function () { return observer.next(new Date().toString()); }, 1000);
        });
        this.a = 0.259;
        this.b = 1.3495;
        this.multiclass = {
            first: true,
            second: true,
            third: false
        };
        this.myinlinestyle = { 'color': 'red', 'backgroundColor': 'white' };
    }
    AppComponent.prototype.myfun = function () {
        alert("Hello");
    };
    AppComponent.prototype.showval = function (x) {
        alert(x);
    };
    AppComponent.prototype.showidea = function (idea) {
        alert(idea);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _structuraldir_structuraldir_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./structuraldir/structuraldir.component */ "./src/app/structuraldir/structuraldir.component.ts");
/* harmony import */ var _custom_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom.pipe */ "./src/app/custom.pipe.ts");
/* harmony import */ var _strlen_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./strlen.pipe */ "./src/app/strlen.pipe.ts");
/* harmony import */ var _sumofarray_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sumofarray.pipe */ "./src/app/sumofarray.pipe.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_9__["CalculatorComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_10__["NewComponent"],
                _structuraldir_structuraldir_component__WEBPACK_IMPORTED_MODULE_11__["StructuraldirComponent"],
                _custom_pipe__WEBPACK_IMPORTED_MODULE_12__["CustomPipe"],
                _strlen_pipe__WEBPACK_IMPORTED_MODULE_13__["StrlenPipe"],
                _sumofarray_pipe__WEBPACK_IMPORTED_MODULE_14__["SumofarrayPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  First Value<input type=\"number\" #firstvar/>\n  <br/>\n  <br/>\n  Second Value<input type=\"number\" #secvar/>\n  <br/>\n  <br/>\n  <button (click)=\"showval(dt.value)\">+</button>\n  <button (click)=\"showval(dt.value)\">-</button>\n  <button (click)=\"showval(dt.value)\">X</button>\n  <button (click)=\"showval(dt.value)\">/</button>\n  \n  <br/>\n  <br/>\n  Result<input type=\"number\" #result/>\n  <br/>\n  <br/>\n</form>\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n<h1>This is contact component</h1>\n<h3>{{myvar}}</h3>\n<h3>{{x ?'true' : 'false'}}</h3>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.myvar = "This is string myvar";
        this.x = true;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/custom.pipe.ts":
/*!********************************!*\
  !*** ./src/app/custom.pipe.ts ***!
  \********************************/
/*! exports provided: CustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipe", function() { return CustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomPipe = /** @class */ (function () {
    function CustomPipe() {
    }
    CustomPipe.prototype.transform = function (value, args) {
        return value.slice(0, 7);
    };
    CustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'custom'
        })
    ], CustomPipe);
    return CustomPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n<h1>This is home Component</h1>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new works!\n</p>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewComponent = /** @class */ (function () {
    function NewComponent() {
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/strlen.pipe.ts":
/*!********************************!*\
  !*** ./src/app/strlen.pipe.ts ***!
  \********************************/
/*! exports provided: StrlenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrlenPipe", function() { return StrlenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StrlenPipe = /** @class */ (function () {
    function StrlenPipe() {
    }
    StrlenPipe.prototype.transform = function (value, args) {
        return value.length;
    };
    StrlenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'strlen'
        })
    ], StrlenPipe);
    return StrlenPipe;
}());



/***/ }),

/***/ "./src/app/structuraldir/structuraldir.component.css":
/*!***********************************************************!*\
  !*** ./src/app/structuraldir/structuraldir.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdHVyYWxkaXIvc3RydWN0dXJhbGRpci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/structuraldir/structuraldir.component.html":
/*!************************************************************!*\
  !*** ./src/app/structuraldir/structuraldir.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  structuraldir works!\n</p>\n\n<div *ngIf = \"x ; else elsepart\">\n  This is true\n</div>\n<ng-template #elsepart>\n  this is false\n</ng-template>\n\n<div *ngIf = \"a>b;then ifpartdiv2 else elsepartdiv2\">\n\n</div>\n<ng-template #ifpartdiv2>\n  a is greater\n</ng-template>\n<ng-template #elsepartdiv2>\n  b is greater\n</ng-template>\n<br/>\n<br/>\n<div *ngIf = \"a>b;then if1 else else1\">\n\n</div>\n<ng-template #if1>\n  <ng-container *ngIf = \"a>c;then if1if1 else if1else1\">\n  </ng-container>\n  <ng-template #if1if1>\n    A is greater\n  </ng-template>\n  <ng-template #if1else1>\n    C is greater\n  </ng-template>\n</ng-template>\n\n<ng-template #else1>\n  <ng-container *ngIf = \"b>c;then else1if1 else else1else1\">\n  </ng-container>\n  <ng-template #else1if1>\n    b is greater\n  </ng-template>\n  <ng-template #else1else1>\n    C is greater\n  </ng-template>\n</ng-template>\n\n<br/>\n<br/>\n\n<div *ngIf = \"a>b && a>c; then div3if1 else div3else1\">\n\n</div>\n<ng-template #div3if1>\n  a is greater\n</ng-template>\n<ng-template #div3else1>\n  <ng-container *ngIf = \"b>a && b>c;then div3else1if1 else div3else1else1\">\n\n  </ng-container>\n  <ng-template #div3else1if1>\n    b is greater\n  </ng-template>\n  <ng-template #div3else1else1>\n    c is greater\n  </ng-template>\n</ng-template>\n\n<br/>\n<br/>\n\n<div *ngFor = \"let x of myarr\">\n  {{x}}\n</div>\n<ul *ngFor = \"let x of myarr\">\n  <li>{{x}}</li>\n</ul>\n<br/>\n<br/>\n<div >\n{{mydataobj.lname}}\n</div>\n<br/>\n<br/>\n<div *ngFor = \"let x of mydataobjarr\">\n  {{x.fname+\" \"+x.lname}}\n</div>\n\n<table class=\"table table-striped\">\n  <tr >\n   <th>Srno</th>\n   <th>FirstName</th> \n   <th>LastName</th> \n   <th>age</th> \n  </tr>\n  <tr *ngFor = \"let x of mydataobjarr; let j = index\">\n    <td>{{j+1}}</td>\n    <td>{{x.fname}}</td>\n    <td>{{x.lname}}</td>\n    <td>{{x.age}}</td>\n  </tr>\n\n</table>\n\n<div [ngSwitch] = \"z\">\n    \n  <p *ngSwitchCase = \"2\">\n    This is 2\n  </p>\n  <div *ngSwitchDefault>\n    This is default\n  </div>\n    \n</div>\n\n<form>\n  <input type=\"number\" [(ngModel)]=\"day\" name=\"day\">\n  <div [ngSwitch] = \"day\">\n    <p *ngSwitchCase = \"1\">\n      Sunday\n    </p>\n    <div *ngSwitchDefault>\n        Not A day\n      </div>\n  </div>\n</form>\n\n<form>\n    <input type=\"number\" #whichday name=\"day\">\n    <div [ngSwitch] = \"whichday.value\">\n      <p *ngSwitchCase = \"1\">\n        Sunday\n      </p>\n      <div *ngSwitchDefault>\n          Not A day\n        </div>\n    </div>\n  </form>\n\n  <br/>\n<br/>\n\n<div *ngFor = \"let x of twodarr\">\n\n  {{x}}\n</div>\n\n<br/>\n<br/>\n<div *ngFor = \"let x of twodarr\">\n  <ng-container *ngFor = \"let y of x\">\n    <br/>\n    {{y}}\n  </ng-container>\n</div>\n\n\n<br/>\n<br/>\n\n{{\"this is a string\" | custom }}\n\n<br/>\n<br/>\n\n{{\"this\" | strlen }}\n\n<br/>\n<br/>\n\n{{[1,2,3,4] | sumofarray }}\n\n<br/>\n<br/>\n\n<table class=\"table table-striped\">\n<tr>\n  <th>Name</th>\n  <th>City</th>\n  <th>Class</th>\n</tr>\n\n<tr *ngFor = \"let x of twodobj\">\n \n  <td *ngFor = \"let y of x.names\"></td>\n\n</tr>\n\n\n</table>\n\n\n\n"

/***/ }),

/***/ "./src/app/structuraldir/structuraldir.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/structuraldir/structuraldir.component.ts ***!
  \**********************************************************/
/*! exports provided: StructuraldirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuraldirComponent", function() { return StructuraldirComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StructuraldirComponent = /** @class */ (function () {
    function StructuraldirComponent() {
        this.x = true;
        this.a = 5;
        this.b = 12;
        this.c = 9;
        this.myarr = [1, 2, 3, 4, 5, 6];
        this.mydataobj = { "fname": "abc",
            "lname": "def",
            "age": 21 };
        this.mydataobjarr = [{ "fname": "abc",
                "lname": "def",
                "age": 21 },
            { "fname": "hij",
                "lname": "klm",
                "age": 22 },
            { "fname": "uvw",
                "lname": "xyz",
                "age": 23 }
        ];
        this.z = 2;
        this.day = 0;
        this.twodarr = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ];
        this.twodobj = [{ "names": ["abc", "pqr", "xyz"],
                "city": ["nagpur", "delhi", "mumbai"],
                "class": 10 },
            { "names": ["qwe", "rty", "uio"],
                "city": ["pune", "hyd", "bandlore"],
                "class": 9 }];
    }
    StructuraldirComponent.prototype.ngOnInit = function () {
    };
    StructuraldirComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-structuraldir',
            template: __webpack_require__(/*! ./structuraldir.component.html */ "./src/app/structuraldir/structuraldir.component.html"),
            styles: [__webpack_require__(/*! ./structuraldir.component.css */ "./src/app/structuraldir/structuraldir.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StructuraldirComponent);
    return StructuraldirComponent;
}());



/***/ }),

/***/ "./src/app/sumofarray.pipe.ts":
/*!************************************!*\
  !*** ./src/app/sumofarray.pipe.ts ***!
  \************************************/
/*! exports provided: SumofarrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumofarrayPipe", function() { return SumofarrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SumofarrayPipe = /** @class */ (function () {
    function SumofarrayPipe() {
    }
    SumofarrayPipe.prototype.transform = function (value, args) {
        var x = 0;
        for (var i = 0; i < value.length; i++) {
            x += value[i];
        }
        return x;
    };
    SumofarrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sumofarray'
        })
    ], SumofarrayPipe);
    return SumofarrayPipe;
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\angprojects\newfirstang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map