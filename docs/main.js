(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+pWd":
/*!*************************************!*\
  !*** ./src/app/root/root.module.ts ***!
  \*************************************/
/*! exports provided: RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/material.module */ "5dmV");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routing.module */ "Ovbq");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/introduction/introduction.component */ "OiF5");
/* harmony import */ var _components_root_default_root_default_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/root-default/root-default.component */ "Avag");











class RootModule {
}
RootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RootModule, bootstrap: [_components_root_default_root_default_component__WEBPACK_IMPORTED_MODULE_9__["RootDefaultComponent"]] });
RootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RootModule_Factory(t) { return new (t || RootModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RootModule, { declarations: [_components_root_default_root_default_component__WEBPACK_IMPORTED_MODULE_9__["RootDefaultComponent"],
        _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_root_default_root_default_component__WEBPACK_IMPORTED_MODULE_9__["RootDefaultComponent"],
                    _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"]
                ],
                bootstrap: [_components_root_default_root_default_component__WEBPACK_IMPORTED_MODULE_9__["RootDefaultComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\riad_\Desktop\Genshin Db\src\main.ts */"zUnb");


/***/ }),

/***/ "5dmV":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");




































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_LOCALE"], useValue: 'en-US' }
    ], imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"]
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"]
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_33__["MatBadgeModule"]
                ],
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_LOCALE"], useValue: 'en-US' }
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9zwa":
/*!************************************!*\
  !*** ./src/app/root/navigation.ts ***!
  \************************************/
/*! exports provided: navigations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigations", function() { return navigations; });
const navigations = [
    {
        id: 'home',
        title: 'Introduction',
        url: '/home',
        icon: 'home',
        isParent: true,
        showChild: false,
        children: []
    },
    {
        id: 'character',
        title: 'Characters',
        url: '/character',
        icon: 'face',
        isParent: true,
        showChild: false,
        children: [
            {
                id: 'character-five-star',
                title: '5-Star Characters',
                url: '/character-five-star',
                icon: 'people'
            },
            {
                id: 'character-four-star',
                title: '4-Star Characters',
                url: '/character-four-star',
                icon: 'perm_identity'
            }
        ]
    },
    {
        id: 'weapon',
        title: 'Weapon',
        url: '/weapon',
        icon: 'construction',
        isParent: true,
        showChild: false,
        children: [
            {
                id: 'sword',
                title: 'Sword',
                url: '/sword',
                icon: 'arrow_right'
            },
            {
                id: 'claymore',
                title: 'Claymore',
                url: '/claymore',
                icon: 'arrow_right'
            },
            {
                id: 'bow',
                title: 'Bow',
                url: '/bow',
                icon: 'arrow_right'
            },
            {
                id: 'catalyst',
                title: 'Catalyst',
                url: '/catalyst',
                icon: 'arrow_right'
            },
            {
                id: 'polearm',
                title: 'Polearm',
                url: '/polearm',
                icon: 'arrow_right'
            }
        ]
    },
    {
        id: 'recepie',
        title: 'Recepie',
        url: '/recepie',
        icon: 'menu_book',
        isParent: true,
        showChild: false,
        children: []
    }
];


/***/ }),

/***/ "Avag":
/*!************************************************************************!*\
  !*** ./src/app/root/components/root-default/root-default.component.ts ***!
  \************************************************************************/
/*! exports provided: RootDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootDefaultComponent", function() { return RootDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "9zwa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
















const _c0 = ["sidenav"];
function RootDefaultComponent_div_13_div_6_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootDefaultComponent_div_13_div_6_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const childNav_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.onNavigation(childNav_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childNav_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childNav_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childNav_r6.title);
} }
function RootDefaultComponent_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RootDefaultComponent_div_13_div_6_a_1_Template, 5, 2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nav_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", nav_r3.children);
} }
function RootDefaultComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootDefaultComponent_div_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const nav_r3 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onNavigation(nav_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RootDefaultComponent_div_13_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nav_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nav_r3.showChild);
} }
class RootDefaultComponent {
    constructor(router, mediaObserver) {
        this.router = router;
        this.mediaObserver = mediaObserver;
        this.navigations = _navigation__WEBPACK_IMPORTED_MODULE_2__["navigations"];
        this.sideNavMode = 'side';
        this.isDefaultOpen = true;
        this.mediaObserver.media$.subscribe((change) => {
            if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
                this.sideNavMode = 'over';
                this.isDefaultOpen = false;
            }
            else {
                this.sideNavMode = 'side';
                this.isDefaultOpen = true;
            }
        });
    }
    ngOnInit() {
    }
    onNavigation(selectedNavigation) {
        if (selectedNavigation.isParent) {
            if (selectedNavigation.children && selectedNavigation.children.length) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(this.navigations, nav => {
                    if (nav.id === selectedNavigation.id) {
                        nav.showChild = true;
                    }
                    else {
                        nav.showChild = false;
                    }
                });
                setTimeout(() => {
                    const collapsibleDiv = document.getElementById('collapsible');
                    collapsibleDiv.style.maxHeight = collapsibleDiv.scrollHeight + 'px';
                }, 100);
            }
            else {
                setTimeout(() => {
                    const collapsibleDiv = document.getElementById('collapsible');
                    collapsibleDiv.style.maxHeight = '0px';
                    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(this.navigations, nav => {
                        nav.showChild = false;
                    });
                }, 100);
                this.router.navigate([selectedNavigation.url]);
            }
        }
        else {
            this.router.navigate([selectedNavigation.url]);
        }
    }
    closeSideNav() {
        this.sidenav.close();
    }
    changeTheme(type) {
    }
}
RootDefaultComponent.ɵfac = function RootDefaultComponent_Factory(t) { return new (t || RootDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"])); };
RootDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootDefaultComponent, selectors: [["app-root-default"]], viewQuery: function RootDefaultComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 43, vars: 3, consts: [[1, "container"], [1, "sidenav", 3, "mode", "opened"], ["sidenav", ""], ["fxHide", "", "fxShow.lt-md", "", "fxLayoutAlign", "end center", 2, "padding", "10px"], ["mat-icon-button", "warn", "aria-label", "Example icon button with a filter list icon", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "user-content"], ["src", "./../assets/common.jpg"], [4, "ngFor", "ngForOf"], ["fxHide.lt-md", "", "fxShow", "", 1, "copy-right"], [2, "margin-bottom", "10px"], ["href", "https://genshin.honeyhunterworld.com/", "target", "_blank"], ["href", "https://genshin-impact.fandom.com/", "target", "_blank"], ["fxFlex", "100", "fxLayout", "row wrap", "fxLayoutAlign", "start star"], ["fxFlex", "100"], ["mat-icon-button", "", "color", "secondary", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxFlex", "100"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [2, "height", "94%", "width", "100%"], ["mat-list-item", "", 3, "click"], [1, "nav-caption"], ["id", "collapsible", 4, "ngIf"], ["id", "collapsible"], ["class", "child-nav", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 1, "child-nav", 3, "click"]], template: function RootDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootDefaultComponent_Template_button_click_5_listener() { return ctx.closeSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Genshin impact tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RootDefaultComponent_div_13_Template, 7, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Genshin Impact\u2122 is a registered trademark of MiHoYo Co., Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "This website as a hobby project for learning purpose. Images and data \u00A9MiHoYo Co., Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Credits to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Honey Impact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Genshin Impact Wiki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-toolbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootDefaultComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootDefaultComponent_Template_button_click_36_listener() { return ctx.changeTheme("first-theme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootDefaultComponent_Template_button_click_38_listener() { return ctx.changeTheme("second-theme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.sideNavMode)("opened", ctx.isDefaultOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigations);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: ["h2[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 350px;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 20px;\n}\n\n.card-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.user-content[_ngcontent-%COMP%] {\n  margin: 40px 10px;\n}\n\n.user-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  object-fit: cover;\n}\n\n.user-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n#collapsible[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  background-color: #f1f1f1;\n}\n\n.child-nav[_ngcontent-%COMP%] {\n  background-color: #afafaf;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n@media (max-width: 959px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n\n.nav-caption[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 6px;\n}\n\n.copy-right[_ngcontent-%COMP%] {\n  font-size: 12px;\n  position: absolute;\n  bottom: 0;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  text-align: justify;\n  font-weight: bold;\n  color: #807f7f;\n}\n\n.copy-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d3d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vdC9jb21wb25lbnRzL3Jvb3QtZGVmYXVsdC9yb290LWRlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBRUksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTs7RUFFSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLGtCQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUVJO0VBQ0ksY0FBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvcm9vdC9jb21wb25lbnRzL3Jvb3QtZGVmYXVsdC9yb290LWRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2M4Y2VkMTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgbWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnVzZXItY29udGVudCB7XHJcbiAgICBtYXJnaW46IDQwcHggMTBweDtcclxufVxyXG5cclxuLnVzZXItY29udGVudCBpbWcge1xyXG4gICAgLy8gbWFyZ2luOiA1MHB4IDUwcHggMHB4IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi51c2VyLWNvbnRlbnQgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYTpob3ZlcixcclxuYTphY3RpdmUge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuI2NvbGxhcHNpYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNoaWxkLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1zIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICBtYXQtdG9vbGJhciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2LWNhcHRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5jb3B5LXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDEyOCwgMTI3LCAxMjcpO1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root-default',
                templateUrl: './root-default.component.html',
                styleUrls: ['./root-default.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav', { static: false }]
        }] }); })();


/***/ }),

/***/ "AytR":
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

/***/ "OiF5":
/*!************************************************************************!*\
  !*** ./src/app/root/components/introduction/introduction.component.ts ***!
  \************************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");




class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 48, vars: 0, consts: [[1, "introduction-container"], ["fxLayout", "row", "fxLayout.lt-md", "column", 1, "introduction-banner-image"], ["src", "./../../../../assets/introduction-banner-2.jpg", "alt", ""], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "introduction-description"], ["fxLayout", "row", "fxLayout.lt-md", "column", 1, "introduction-region"], ["fxFlex", "50", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "mondstadt-container"], ["fxFlex", "50", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "liyue-container"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayout", "center center", 1, "p-24", "introduction-info"], ["fxFlex", "20", "fxLayoutAlign.lt-md", "center center"], ["fxFlex", "80"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayout", "center center", 1, "p-24", "introduction-info-grey"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Genshin Impact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You have arrived in Teyvat \u2014 a fantasy world where the seven elements flow and converge. In the distant past, the Archons granted mortals unique elemental abilities. With the help of such powers, people formed a bountiful homeland out of the wilderness. However, 500 years ago, the collapse of an ancient civilization turned the universe upside down... Though the calamity the world suffered has ceased, peace has yet to be restored. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mondstadt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " A city of freedom that lies in the northeast of Teyvat. From amongst mountains and wide-open plains, carefree breezes carry the scent of dandelions \u2014 a gift from the Anemo God, Barbatos \u2014 across Cider Lake to Mondstadt, which sits on an island in the middle of the lake ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Liyue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " A bountiful harbor that lies in the east of Teyvat. Mountains stand tall and proud alongside the stone forest, that together with the open plains and lively rivers make up Liyue's bountiful landscape, which shows its unique beauty through each of the four seasons. Just how many gifts from the Geo God lie in wait amongst the rocks of Liyue's mountains? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " An Epic Fantasy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Experience an immersive single-player campaign. As a traveler from another world, you will embark on a journey to reunite with your long-lost sibling and unravel the mysteries of Teyvat, and yourself. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Your World to Discover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Fly across the open world, swim through crystal-clear waters, and climb towering mountains. Stray off the beaten path to discover all the hidden secrets of a world full of wonder and mystery. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Travel Alone or Battle Together ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Charge head-on into battles solo, or invite friends to join the fight against dangerous monsters with 4-player cross-play for PS4, iOS, Android, and PC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Master the Seven Elements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " ot just another mindless hack and slash. Manipulating the various elements is the key to defeating powerful enemies and solving challenging puzzles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Build Your Dream Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Choose who fights by your side. Build your party from over 20+ characters (with more to come) \u2014 each with unique abilities, personalities, and combat styles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"]], styles: [".introduction-banner-image[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 100%;\n  background-image: url('background-sky.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.introduction-banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90%;\n  margin: 50px;\n  border-radius: 10px;\n  object-fit: contain;\n}\n\n@media only screen and (max-width: 1440px) {\n  .introduction-banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 40px;\n  }\n}\n\n@media only screen and (max-width: 1280px) {\n  .introduction-banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 30px;\n  }\n}\n\n.introduction-description[_ngcontent-%COMP%] {\n  padding: 50px;\n  font-family: Calibri;\n  text-align: center;\n  color: #02536b;\n}\n\n.introduction-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.introduction-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.introduction-region[_ngcontent-%COMP%] {\n  height: 500px !important;\n}\n\n.mondstadt-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #ffffff;\n  height: 100%;\n  background-image: url('mondstadt.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mondstadt-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\n.mondstadt-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n\n.liyue-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #ffffff;\n  background-image: url('liyue.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.liyue-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\n.liyue-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n\n.introduction-info[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.introduction-info-grey[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n\n@media only screen and (max-width: 480px) {\n  .introduction-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n  .introduction-banner-image[_ngcontent-%COMP%] {\n    height: auto;\n    background-size: 100% 100%;\n  }\n\n  .introduction-banner-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n    width: 100%;\n    object-fit: cover;\n    margin: 0px;\n  }\n\n  .introduction-region[_ngcontent-%COMP%] {\n    height: 800px !important;\n  }\n\n  .mondstadt-container[_ngcontent-%COMP%] {\n    background-size: 100% 100%;\n  }\n\n  .liyue-container[_ngcontent-%COMP%] {\n    background-size: 100% 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vdC9jb21wb25lbnRzL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFlBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxZQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksd0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksMkJBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksYUFBQTtFQUROOztFQUlFO0lBQ0ksWUFBQTtJQUNBLDBCQUFBO0VBRE47O0VBSUU7SUFDSSxhQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQUROOztFQUlFO0lBQ0ksd0JBQUE7RUFETjs7RUFJRTtJQUNJLDBCQUFBO0VBRE47O0VBSUU7SUFDSSwwQkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yb290L2NvbXBvbmVudHMvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyb2R1Y3Rpb24tYmFubmVyLWltYWdlIHtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXNreS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uaW50cm9kdWN0aW9uLWJhbm5lci1pbWFnZSBpbWcge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5pbnRyb2R1Y3Rpb24tYmFubmVyLWltYWdlIGltZyB7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLmludHJvZHVjdGlvbi1iYW5uZXItaW1hZ2UgaW1nIHtcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyLCA4MywgMTA3KTtcclxufVxyXG5cclxuLmludHJvZHVjdGlvbi1kZXNjcmlwdGlvbiBoMSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24tZGVzY3JpcHRpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24tcmVnaW9uIHtcclxuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vbmRzdGFkdC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL21vbmRzdGFkdC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5tb25kc3RhZHQtY29udGFpbmVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLm1vbmRzdGFkdC1jb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXl1ZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2xpeXVlLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmxpeXVlLWNvbnRhaW5lciBoMiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi5saXl1ZS1jb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaW50cm9kdWN0aW9uLWluZm8tZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5pbnRyb2R1Y3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnRyb2R1Y3Rpb24tYmFubmVyLWltYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmludHJvZHVjdGlvbi1iYW5uZXItaW1hZ2UgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnRyb2R1Y3Rpb24tcmVnaW9uIHtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbmRzdGFkdC1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXl1ZS1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-introduction',
                templateUrl: './introduction.component.html',
                styleUrls: ['./introduction.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ovbq":
/*!****************************************!*\
  !*** ./src/app/root/routing.module.ts ***!
  \****************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/introduction/introduction.component */ "OiF5");






const routes = [
    {
        path: 'home',
        component: _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'character-five-star',
        loadChildren: () => __webpack_require__.e(/*! import() | character-character-module */ "character-character-module").then(__webpack_require__.bind(null, /*! ../character/character.module */ "cQ6w")).then(m => m.CharacterModule)
    },
    {
        path: 'character-four-star',
        loadChildren: () => __webpack_require__.e(/*! import() | character-character-module */ "character-character-module").then(__webpack_require__.bind(null, /*! ../character/character.module */ "cQ6w")).then(m => m.CharacterModule)
    },
    {
        path: 'sword',
        loadChildren: () => __webpack_require__.e(/*! import() | weapon-weapon-module */ "weapon-weapon-module").then(__webpack_require__.bind(null, /*! ../weapon/weapon.module */ "T1hS")).then(m => m.WeaponModule)
    },
    {
        path: 'claymore',
        loadChildren: () => __webpack_require__.e(/*! import() | weapon-weapon-module */ "weapon-weapon-module").then(__webpack_require__.bind(null, /*! ../weapon/weapon.module */ "T1hS")).then(m => m.WeaponModule)
    },
    {
        path: 'bow',
        loadChildren: () => __webpack_require__.e(/*! import() | weapon-weapon-module */ "weapon-weapon-module").then(__webpack_require__.bind(null, /*! ../weapon/weapon.module */ "T1hS")).then(m => m.WeaponModule)
    },
    {
        path: 'catalyst',
        loadChildren: () => __webpack_require__.e(/*! import() | weapon-weapon-module */ "weapon-weapon-module").then(__webpack_require__.bind(null, /*! ../weapon/weapon.module */ "T1hS")).then(m => m.WeaponModule)
    },
    {
        path: 'polearm',
        loadChildren: () => __webpack_require__.e(/*! import() | weapon-weapon-module */ "weapon-weapon-module").then(__webpack_require__.bind(null, /*! ../weapon/weapon.module */ "T1hS")).then(m => m.WeaponModule)
    }
];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_root_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/root/root.module */ "+pWd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_root_root_module__WEBPACK_IMPORTED_MODULE_2__["RootModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map