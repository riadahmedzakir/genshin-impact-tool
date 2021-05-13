(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-character-module"],{

/***/ "14Jy":
/*!*********************************************************!*\
  !*** ./src/app/character/services/character.service.ts ***!
  \*********************************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CharacterService {
    constructor(http) {
        this.http = http;
    }
    getCharacterData(name) {
        return this.http.get(`./assets/character-data/${name}.json`);
    }
}
CharacterService.ɵfac = function CharacterService_Factory(t) { return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CharacterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharacterService, factory: CharacterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "36vw":
/*!*********************************************************************************!*\
  !*** ./src/app/character/components/character-list/character-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CharacterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return CharacterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants_element_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/constants/element.constant */ "yTkT");
/* harmony import */ var _shared_constants_weapon_class_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/constants/weapon-class.constant */ "5kHr");
/* harmony import */ var _shared_character_basic_data_character_data_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/character-basic-data/character-data.constant */ "P8xy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
// tslint:disable: no-string-literal
// tslint:disable: max-line-length















function CharacterListComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterListComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const class_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.filterWeapon(class_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/weapon-class/", class_r5, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CharacterListComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterListComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const element_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.filterElement(element_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/element-logo/", element_r8, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CharacterListComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterListComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const class_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.filterWeapon(class_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/weapon-class/", class_r11, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CharacterListComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterListComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.filterElement(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/element-logo/", element_r14, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CharacterListComponent_mat_card_23_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterListComponent_mat_card_23_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const character_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.characterDetails(character_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Allegiance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Weapon Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Birthday: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Element: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Constellation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", character_r17.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-portrait/", character_r17.img, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r17.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r17.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r17.Allegiance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r17.WeaponType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r17.Birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r17.Element);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](character_r17.Constellation);
} }
class CharacterListComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.characterTypeMap = {
            'character-five-star': 5,
            'character-four-star': 4
        };
        this.currentRoute = this.activatedRoute.snapshot['_routerState'].url;
        this.currentCharacterType = this.characterTypeMap[this.currentRoute.replace('/', '')];
        this.elements = _shared_constants_element_constant__WEBPACK_IMPORTED_MODULE_2__["elements"];
        this.weaponClass = _shared_constants_weapon_class_constant__WEBPACK_IMPORTED_MODULE_3__["weaponClass"];
        this.allCharacterList = _shared_character_basic_data_character_data_constant__WEBPACK_IMPORTED_MODULE_4__["CharacterData"];
    }
    characterDetails(character) {
        this.router.navigate([this.currentRoute + '/' + character.Name]);
    }
    filterElement(element) {
        this.characterList = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(this.allCharacterList, { Rarity: this.currentCharacterType, Element: element.charAt(0).toUpperCase() + element.slice(1) });
    }
    filterWeapon(weapon) {
        this.characterList = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(this.allCharacterList, { Rarity: this.currentCharacterType, WeaponType: weapon.charAt(0).toUpperCase() + weapon.slice(1) });
    }
    reset() {
        this.characterList = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(this.allCharacterList, { Rarity: this.currentCharacterType });
    }
    ngOnInit() {
        console.log(this.currentCharacterType);
        this.characterList = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(this.allCharacterList, { Rarity: this.currentCharacterType });
    }
}
CharacterListComponent.ɵfac = function CharacterListComponent_Factory(t) { return new (t || CharacterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CharacterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterListComponent, selectors: [["app-character-list"]], decls: 24, vars: 5, consts: [["fxLayout", "row wrap"], ["fxFlex", "100", "fxHide.lt-md", ""], ["fxFlex", "40", "fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "element-button", "mat-icon-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxFlex", "20", "fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "warn", "mat-icon-button", "", 1, "element-button", 3, "click"], [1, "material-icons-outlined"], ["fxFlex", "40", "fxLayout", "row", "fxLayoutAlign", "end center"], ["fxHide.md", "", "fxHide.gt-md", "", "fxShow.lt-md", ""], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "center center"], [2, "margin-top", "1px"], ["fxFlex", "100", "fxLayout", "row wrap", 1, "p-24"], ["fxFlex.gt-lg", "32", "fxFlex.lg", "48", "fxFlex.md", "100", "fxFlex.lt-md", "100", "class", "character-list-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "element-button", 3, "click"], ["alt", "", 3, "src"], ["fxFlex.gt-lg", "32", "fxFlex.lg", "48", "fxFlex.md", "100", "fxFlex.lt-md", "100", 1, "character-list-card", 3, "ngClass", "click"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "start center"], [1, "character-list-portrait"], ["fxFlex", "60", "fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "character-info-name"], [1, "character-info"], [1, "character-info-title"], [1, "character-info-details"]], template: function CharacterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterListComponent_button_3_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterListComponent_Template_button_click_5_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterListComponent_button_9_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-toolbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterListComponent_button_12_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-toolbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterListComponent_button_15_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-toolbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterListComponent_Template_button_click_18_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CharacterListComponent_mat_card_23_Template, 37, 9, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weaponClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.elements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weaponClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.elements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.characterList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"]], styles: [".character-list-card[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.character-list-card[_ngcontent-%COMP%]   .character-list-portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 248;\n  width: 208;\n}\n.character-list-card[_ngcontent-%COMP%]   .character-info-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  border-bottom: 1px solid lightgrey;\n  padding-bottom: 4px;\n}\n.character-list-card[_ngcontent-%COMP%]   .character-info[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.character-list-card[_ngcontent-%COMP%]   .character-info[_ngcontent-%COMP%]   .character-info-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.character-list-card[_ngcontent-%COMP%]   .character-info[_ngcontent-%COMP%]   .character-info-details[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.character-list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n.diluc[_ngcontent-%COMP%] {\n  background-image: url('diluc.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jean[_ngcontent-%COMP%] {\n  background-image: url('jean.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.keqing[_ngcontent-%COMP%] {\n  background-image: url('keqing.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.klee[_ngcontent-%COMP%] {\n  background-image: url('klee.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mona[_ngcontent-%COMP%] {\n  background-image: url('mona.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.qiqi[_ngcontent-%COMP%] {\n  background-image: url('qiqi.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.venti[_ngcontent-%COMP%] {\n  background-image: url('venti.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.xiao[_ngcontent-%COMP%] {\n  background-image: url('xiao.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.tartaglia[_ngcontent-%COMP%] {\n  background-image: url('tartaglia.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.zhongli[_ngcontent-%COMP%] {\n  background-image: url('zhongli.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.ganyu[_ngcontent-%COMP%] {\n  background-image: url('ganyu.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.albedo[_ngcontent-%COMP%] {\n  background-image: url('albedo.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hutao[_ngcontent-%COMP%] {\n  background-image: url('hutao.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.amber[_ngcontent-%COMP%] {\n  background-image: url('amber.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.barbara[_ngcontent-%COMP%] {\n  background-image: url('barbara.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.beidou[_ngcontent-%COMP%] {\n  background-image: url('beidou.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.bennett[_ngcontent-%COMP%] {\n  background-image: url('bennett.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.chongyun[_ngcontent-%COMP%] {\n  background-image: url('chongyun.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.fischl[_ngcontent-%COMP%] {\n  background-image: url('fischl.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.kaeya[_ngcontent-%COMP%] {\n  background-image: url('kaeya.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.lisa[_ngcontent-%COMP%] {\n  background-image: url('lisa.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.ningguang[_ngcontent-%COMP%] {\n  background-image: url('ningguang.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.noelle[_ngcontent-%COMP%] {\n  background-image: url('noelle.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.razor[_ngcontent-%COMP%] {\n  background-image: url('razor.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.sucrose[_ngcontent-%COMP%] {\n  background-image: url('sucrose.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.xiangling[_ngcontent-%COMP%] {\n  background-image: url('xiangling.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.xingqiu[_ngcontent-%COMP%] {\n  background-image: url('xingqiu.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.diona[_ngcontent-%COMP%] {\n  background-image: url('diona.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.xinyan[_ngcontent-%COMP%] {\n  background-image: url('xinyan.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.rosaria[_ngcontent-%COMP%] {\n  background-image: url('rosaria.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.yanfei[_ngcontent-%COMP%] {\n  background-image: url('yanfei.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL2NvbXBvbmVudHMvY2hhcmFjdGVyLWxpc3QvY2hhcmFjdGVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBQVo7QUFJSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtBQUhSO0FBS1E7RUFDSSxlQUFBO0FBSFo7QUFNUTtFQUNJLGlCQUFBO0FBSlo7QUFTQTtFQUNJLHFIQUFBO0VBQ0EsZUFBQTtBQU5KO0FBU0E7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVNBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KO0FBU0E7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci9jb21wb25lbnRzL2NoYXJhY3Rlci1saXN0L2NoYXJhY3Rlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJhY3Rlci1saXN0LWNhcmQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAuY2hhcmFjdGVyLWxpc3QtcG9ydHJhaXQge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjQ4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjA4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hhcmFjdGVyLWluZm8tbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhcmFjdGVyLWluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgLmNoYXJhY3Rlci1pbmZvLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYXJhY3Rlci1pbmZvLWRldGFpbHMge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItbGlzdC1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYigwIDAgMCAvIDIwJSksIDAgOHB4IDEwcHggMXB4IHJnYigwIDAgMCAvIDE0JSksIDAgM3B4IDE0cHggMnB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kaWx1YyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQvZGlsdWMucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5qZWFuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9qZWFuLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ua2VxaW5nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9rZXFpbmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5rbGVlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9rbGVlLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubW9uYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQvbW9uYS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnFpcWkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL3FpcWkucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi52ZW50aSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQvdmVudGkucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi54aWFvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC94aWFvLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGFydGFnbGlhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC90YXJ0YWdsaWEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi56aG9uZ2xpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC96aG9uZ2xpLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZ2FueXUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL2dhbnl1LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWxiZWRvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9hbGJlZG8ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5odXRhbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQvaHV0YW8ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5hbWJlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQvYW1iZXIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iYXJiYXJhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9iYXJiYXJhLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYmVpZG91IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9iZWlkb3UucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZW5uZXR0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9iZW5uZXR0LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2hvbmd5dW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL2Nob25neXVuLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZmlzY2hsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9maXNjaGwucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5rYWV5YSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQva2FleWEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5saXNhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9saXNhLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubmluZ2d1YW5nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9uaW5nZ3VhbmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5ub2VsbGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL25vZWxsZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnJhem9yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC9yYXpvci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnN1Y3Jvc2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL3N1Y3Jvc2UucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi54aWFuZ2xpbmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL3hpYW5nbGluZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnhpbmdxaXUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL3hpbmdxaXUucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5kaW9uYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQvZGlvbmEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi54aW55YW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL3hpbnlhbi5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnJvc2FyaWEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL3Jvc2FyaWEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi55YW5mZWkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkL3lhbmZlaS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character-list',
                templateUrl: './character-list.component.html',
                styleUrls: ['./character-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "5kHr":
/*!***********************************************************!*\
  !*** ./src/app/shared/constants/weapon-class.constant.ts ***!
  \***********************************************************/
/*! exports provided: weaponClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weaponClass", function() { return weaponClass; });
const weaponClass = [
    'bow',
    'catalyst',
    'claymore',
    'polearm',
    'sword'
];


/***/ }),

/***/ "C7Nr":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/elemental-stone.constant.ts ***!
  \**************************************************************/
/*! exports provided: ElementalStone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementalStone", function() { return ElementalStone; });
const ElementalStone = {
    Item_0: 'Everflame Seed',
    Item_1: 'Cleansing Heart',
    Item_2: 'Lightning Prism',
    Item_3: 'Hoarfrost Core',
    Item_4: 'Hurricane Seed',
    Item_5: 'Basalt Pillar',
    Item_6: 'Juvenile Jade',
    Item_7: 'Crystalline Bloom',
    Item_8: 'Dream Solvent'
};


/***/ }),

/***/ "MtyM":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/elemental-jewel.constant.ts ***!
  \**************************************************************/
/*! exports provided: ElementalJewelConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementalJewelConstant", function() { return ElementalJewelConstant; });
const ElementalJewelConstant = {
    Pyro: {
        Item_1: 'Agnidus Agate Sliver',
        Item_2: 'Agnidus Agate Fragment',
        Item_3: 'Agnidus Agate Chunk',
        Item_4: 'Agnidus Agate Gemstone'
    },
    Cryo: {
        Item_1: 'Shivada Jade Sliver',
        Item_2: 'Shivada Jade Fragment',
        Item_3: 'Shivada Jade Chunk',
        Item_4: 'Shivada Jade Gemstone'
    },
    Hydro: {
        Item_1: 'Varunada Lazurite Sliver',
        Item_2: 'Varunada Lazurite Fragment',
        Item_3: 'Varunada Lazurite Chunk',
        Item_4: 'Varunada Lazurite Gemstone'
    },
    Anemo: {
        Item_1: 'Vayuda Turquoise Sliver',
        Item_2: 'Vayuda Turquoise Fragment',
        Item_3: 'Vayuda Turquoise Chunk',
        Item_4: 'Vayuda Turquoise Gemstone'
    },
    Geo: {
        Item_1: 'Prithiva Topaz Sliver',
        Item_2: 'Prithiva Topaz Fragment',
        Item_3: 'Prithiva Topaz Chunk',
        Item_4: 'Prithiva Topaz Gemstone'
    },
    Electro: {
        Item_1: 'Vajrada Amethyst Sliver',
        Item_2: 'Vajrada Amethyst Fragment',
        Item_3: 'Vajrada Amethyst Chunk',
        Item_4: 'Vajrada Amethyst Gemstone'
    },
    Dendro: {
        Item_1: 'Nagadus Emerald Sliver',
        Item_2: 'Nagadus Emerald Fragment',
        Item_3: 'Nagadus Emerald Chunk',
        Item_4: 'Nagadus Emerald Gemstone'
    },
    Dimond: {
        Item_1: 'Brilliant Diamond Sliver',
        Item_2: 'Brilliant Diamond Fragment',
        Item_3: 'Brilliant Diamond Chunk',
        Item_4: 'Brilliant Diamond Gemstone'
    }
};


/***/ }),

/***/ "P8xy":
/*!************************************************************************!*\
  !*** ./src/app/shared/character-basic-data/character-data.constant.ts ***!
  \************************************************************************/
/*! exports provided: CharacterData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterData", function() { return CharacterData; });
const CharacterData = [
    {
        Name: 'Diluc',
        img: 'diluc',
        Title: 'The Dark Side of Dawn',
        Allegiance: 'Dawn Winery',
        WeaponType: 'Claymore',
        Birthday: '30 April',
        Element: 'Pyro',
        Constellation: 'Noctua',
        Rarity: 5
    },
    {
        Name: 'Jean',
        img: 'jean',
        Title: 'Dandelion Knight',
        Allegiance: 'Knights of Favonius',
        WeaponType: 'Sword',
        Birthday: '14 March',
        Element: 'Anemo',
        Constellation: 'Leo Minor',
        Rarity: 5
    },
    {
        Name: 'Keqing',
        img: 'keqing',
        Title: 'Driving Thunder',
        Allegiance: 'Liyue Qixing',
        WeaponType: 'Sword',
        Birthday: '20 November',
        Element: 'Electro',
        Constellation: 'Trulla Cementarii',
        Rarity: 5
    },
    {
        Name: 'Klee',
        img: 'klee',
        Title: 'Fleeing Sunlight',
        Allegiance: 'Knights of Favonius',
        WeaponType: 'Catalyst',
        Birthday: '27 July',
        Element: 'Pyro',
        Constellation: 'Trifolium',
        Rarity: 5
    },
    {
        Name: 'Mona',
        img: 'mona',
        Title: 'Astral Reflection',
        Allegiance: 'Mondstadt',
        WeaponType: 'Catalyst',
        Birthday: '31 August',
        Element: 'Hydro',
        Constellation: 'Astrolabos',
        Rarity: 5
    },
    {
        Name: 'Qiqi',
        img: 'qiqi',
        Title: 'Icy Resurrection',
        Allegiance: 'Bubu Pharmacy',
        WeaponType: 'Sword',
        Birthday: '3 March',
        Element: 'Cryo',
        Constellation: 'Pristina Nola',
        Rarity: 5
    },
    {
        Name: 'Venti',
        img: 'venti',
        Title: 'Windbprne Bard',
        Allegiance: 'Mondstadt',
        WeaponType: 'Bow',
        Birthday: '16 June',
        Element: 'Anemo',
        Constellation: 'Erika Harlacher',
        Rarity: 5
    },
    {
        Name: 'Xiao',
        img: 'xiao',
        Title: 'Vigilant Yaksha',
        Allegiance: 'Liyue Adeptus',
        WeaponType: 'Polearm',
        Birthday: '17 April',
        Element: 'Anemo',
        Constellation: 'Alatus Nemeseos',
        Rarity: 5
    },
    {
        Name: 'Tartaglia',
        img: 'tartaglia',
        Title: 'Childe',
        Allegiance: 'Fatui',
        WeaponType: 'Bow',
        Birthday: '20 July',
        Element: 'Hydro',
        Constellation: 'Monoceros Caeli',
        Rarity: 5
    },
    {
        Name: 'Zhongli',
        img: 'zhongli',
        Title: 'Vago Mundo',
        Allegiance: 'Liyue Harbor',
        WeaponType: 'Polearm',
        Birthday: '31 December',
        Element: 'Geo',
        Constellation: 'Lapis Dei',
        Rarity: 5
    },
    {
        Name: 'Ganyu',
        img: 'ganyu',
        Title: 'Plenilune Gaze',
        Allegiance: 'Yuehai Pavilion',
        WeaponType: 'Bow',
        Birthday: '2 December',
        Element: 'Cryo',
        Constellation: 'Sinae Unicornis',
        Rarity: 5
    },
    {
        Name: 'Albedo',
        img: 'albedo',
        Title: 'Kreideprinz',
        Allegiance: 'Yuehai Pavilion',
        WeaponType: 'Sword',
        Birthday: '13 September',
        Element: 'Geo',
        Constellation: 'Princeps Cretaceus',
        Rarity: 5
    },
    {
        Name: 'Hu Tao',
        img: 'hutao',
        Title: 'Fragrance in Thaw',
        Allegiance: 'Wangsheng Funeral Parlor',
        WeaponType: 'Polearm',
        Birthday: '15 July',
        Element: 'Pyro',
        Constellation: 'Papilio Charontis',
        Rarity: 5
    },
    {
        Name: 'Amber',
        img: 'amber',
        Title: 'Gliding Champion',
        Allegiance: 'Knights of Favonius',
        WeaponType: 'Bow',
        Birthday: '10 August',
        Element: 'Pyro',
        Constellation: 'Lepus',
        Rarity: 4
    },
    {
        Name: 'Barbara',
        img: 'barbara',
        Title: 'Shining Idol',
        Allegiance: 'Church of Favonius',
        WeaponType: 'Catalyst',
        Birthday: '5 July',
        Element: 'Hydro',
        Constellation: 'Crater',
        Rarity: 4
    },
    {
        Name: 'Beidou',
        img: 'beidou',
        Title: 'Uncrowned Lord of the Ocean',
        Allegiance: 'The Crux',
        WeaponType: 'Claymore',
        Birthday: '14 February',
        Element: 'Electro',
        Constellation: 'Victor Mare',
        Rarity: 4
    },
    {
        Name: 'Bennett',
        img: 'bennett',
        Title: 'Trial by Fire',
        Allegiance: 'Adventurers\' Guild',
        WeaponType: 'Sword',
        Birthday: '29 February',
        Element: 'Pyro',
        Constellation: 'Rota Calamitas',
        Rarity: 4
    },
    {
        Name: 'Chongyun',
        img: 'chongyun',
        Title: 'Frozen Ardor',
        Allegiance: 'Liyue Harbor',
        WeaponType: 'Claymore',
        Birthday: '7 September',
        Element: 'Cryo',
        Constellation: 'Nubis Caesor',
        Rarity: 4
    },
    {
        Name: 'Fischl',
        img: 'fischl',
        Title: 'Prinzessin der Verurteilung!',
        Allegiance: 'Adventurers\' Guild',
        WeaponType: 'Bow',
        Birthday: '27 May',
        Element: 'Electro',
        Constellation: 'Corvus',
        Rarity: 4
    },
    {
        Name: 'Kaeya',
        img: 'kaeya',
        Title: 'Frostwind Swordsman',
        Allegiance: 'Knights of Favonius',
        WeaponType: 'Sword',
        Birthday: '30 November',
        Element: 'Cryo',
        Constellation: 'Pavo Ocellus',
        Rarity: 4
    },
    {
        Name: 'Lisa',
        img: 'lisa',
        Title: 'Witch of Purple Rose',
        Allegiance: 'Knights of Favonius',
        WeaponType: 'Catalyst',
        Birthday: '9 June',
        Element: 'Electro',
        Constellation: 'Tempus Fugit',
        Rarity: 4
    },
    {
        Name: 'Ningguang',
        img: 'ningguang',
        Title: 'Eclipsing Star',
        Allegiance: 'Liyue Qixing',
        WeaponType: 'Catalyst',
        Birthday: '26 August',
        Element: 'Geo',
        Constellation: 'Opus Aequilibrium',
        Rarity: 4
    },
    {
        Name: 'Noelle',
        img: 'noelle',
        Title: 'Chivalric Blossom',
        Allegiance: 'Knights of Favonius',
        WeaponType: 'Claymore',
        Birthday: '21 March',
        Element: 'Geo',
        Constellation: 'Parma Cordis',
        Rarity: 4
    },
    {
        Name: 'Razor',
        img: 'razor',
        Title: 'Wolf Boy',
        Allegiance: 'Wolvendom',
        WeaponType: 'Claymore',
        Birthday: '9 September',
        Element: 'Electro',
        Constellation: 'Lupus Minor',
        Rarity: 4
    },
    {
        Name: 'Sucrose',
        img: 'sucrose',
        Title: 'Harmless Sweetie',
        Allegiance: 'Knights of Favonius',
        WeaponType: 'Catalyst',
        Birthday: '26 November',
        Element: 'Anemo',
        Constellation: 'Ampulla',
        Rarity: 4
    },
    {
        Name: 'Xiangling',
        img: 'xiangling',
        Title: 'Exquisite Delicacy',
        Allegiance: 'Wanmin Restaurant',
        WeaponType: 'Polearm',
        Birthday: '2 November',
        Element: 'Pyro',
        Constellation: 'Trulla',
        Rarity: 4
    },
    {
        Name: 'Xingqiu',
        img: 'xingqiu',
        Title: 'Juvenile Galant',
        Allegiance: 'Feiyun Commerce Guild',
        WeaponType: 'Sword',
        Birthday: '9 October',
        Element: 'Hydro',
        Constellation: 'Fabulae Textile',
        Rarity: 4
    },
    {
        Name: 'Diona',
        img: 'diona',
        Title: 'Kätzlein Cocktail',
        Allegiance: 'The Cat\'s Tail',
        WeaponType: 'Bow',
        Birthday: '18 January',
        Element: 'Cryo',
        Constellation: 'Feles',
        Rarity: 4
    },
    {
        Name: 'Xinyan',
        img: 'xinyan',
        Title: 'Blazing Riff',
        Allegiance: 'Liyue Harbor',
        WeaponType: 'Claymore',
        Birthday: '16 October',
        Element: 'Pyro',
        Constellation: 'Fila Ignium',
        Rarity: 4
    },
    {
        Name: 'Rosaria',
        img: 'rosaria',
        Title: 'Thorny Benevolence',
        Allegiance: 'Church of Favonius',
        WeaponType: 'Polearm',
        Birthday: '24 January',
        Element: 'Cryo',
        Constellation: 'Spinea Corona',
        Rarity: 4
    },
    {
        Name: 'Yanfei',
        img: 'yanfei',
        Title: 'Wise Innocence',
        Allegiance: 'Liyue Harbor',
        WeaponType: 'Catalyst',
        Birthday: '28 July',
        Element: 'Pyro',
        Constellation: 'Bestia Iustitia',
        Rarity: 4
    }
];


/***/ }),

/***/ "UOP8":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/talent-material.constant.ts ***!
  \**************************************************************/
/*! exports provided: TalentMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentMaterial", function() { return TalentMaterial; });
const TalentMaterial = {
    Davalin: {
        Item_1: 'Dvalin\'s Claw',
        Item_2: 'Dvalin\'s Plume',
        Item_3: 'Dvalin\'s Sigh'
    },
    Boreas: {
        Item_1: 'Ring of Boreas',
        Item_2: 'Tail of Boreas',
        Item_3: 'Spirit Locket of Boreas'
    },
    Childe: {
        Item_1: 'Shadow of the Warrior',
        Item_2: 'Shard of a Foul Legacy',
        Item_3: 'Tusk of Monoceros Caeli'
    },
    Azhdaha: {
        Item_1: 'Bloodjade Branch',
        Item_2: 'Dragon Lord\'s Crown',
        Item_3: 'Gilded Scale'
    },
    Crown: {
        Item_1: 'Crown of Insight'
    }
};


/***/ }),

/***/ "bncD":
/*!***************************************************************************************!*\
  !*** ./src/app/character/components/character-details/character-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CharacterDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsComponent", function() { return CharacterDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_constants_common_character_ascension_material_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/constants/common-character-ascension.material.constant */ "iOAG");
/* harmony import */ var _shared_constants_elemental_jewel_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/constants/elemental-jewel.constant */ "MtyM");
/* harmony import */ var _shared_constants_elemental_stone_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/constants/elemental-stone.constant */ "C7Nr");
/* harmony import */ var _shared_constants_local_material_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/constants/local-material.constant */ "uu6I");
/* harmony import */ var _shared_constants_talent_book_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/constants/talent-book.constant */ "oxJT");
/* harmony import */ var _shared_constants_talent_material_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../shared/constants/talent-material.constant */ "UOP8");
/* harmony import */ var _shared_constants_talent_level_up_count_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../shared/constants/talent-level-up-count.constant */ "u3T9");
/* harmony import */ var _shared_constants_character_level_up_count_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../shared/constants/character-level-up-count.constant */ "jC1v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/character.service */ "14Jy");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
// tslint:disable: no-string-literal
// tslint:disable: deprecation




















function CharacterDetailsComponent_div_1_p_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4);
} }
function CharacterDetailsComponent_div_1_p_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5);
} }
function CharacterDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Full Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sex: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Birthday: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Constellation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Nation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Affiliation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Special Dish: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Titles: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Introduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "mat-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Personality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CharacterDetailsComponent_div_1_p_84_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "mat-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Appearance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, CharacterDetailsComponent_div_1_p_88_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-portrait-full/", ctx_r0.selectedCharacter, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/weapon-class/", ctx_r0.selectedCharacterData.Weapon.toLowerCase(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Weapon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/element-logo/", ctx_r0.selectedCharacterData.Element.toLowerCase(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Element);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r0.selectedCharacter, "-1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Skill.Skill_1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r0.selectedCharacter, "-2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Skill.Skill_2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r0.selectedCharacter, "-3.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Skill.Skill_3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r0.selectedCharacter, "-4.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Skill.Skill_4.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r0.selectedCharacter, "-5.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Skill.Skill_5.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r0.selectedCharacter, "-6.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.selectedCharacterData.Skill.Skill_6.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/jewel/", ctx_r0.elementalJewelConstant[ctx_r0.selectedCharacterData.Element].Item_4, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.elementalJewelConstant[ctx_r0.selectedCharacterData.Element].Item_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/elemental-stone/", ctx_r0.elementalStone[ctx_r0.selectedCharacterData.Ascensions.ElementalStone], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.elementalStone[ctx_r0.selectedCharacterData.Ascensions.ElementalStone]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/common-material/", ctx_r0.commonCharacterAscensionMaterial[ctx_r0.selectedCharacterData.Ascensions.CommonCharacterAscensionMaterial].Item_3, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.commonCharacterAscensionMaterial[ctx_r0.selectedCharacterData.Ascensions.CommonCharacterAscensionMaterial].Item_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/local-material/", ctx_r0.localMaterial[ctx_r0.selectedCharacterData.Ascensions.LocalMaterial], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.localMaterial[ctx_r0.selectedCharacterData.Ascensions.LocalMaterial]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/talent-book/", ctx_r0.talentBook[ctx_r0.selectedCharacterData.Ascensions.TalentBook].Item_3, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.talentBook[ctx_r0.selectedCharacterData.Ascensions.TalentBook].Item_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/common-material/", ctx_r0.commonCharacterAscensionMaterial[ctx_r0.selectedCharacterData.Ascensions.CommonCharacterAscensionMaterial].Item_3, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.commonCharacterAscensionMaterial[ctx_r0.selectedCharacterData.Ascensions.CommonCharacterAscensionMaterial].Item_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/talent-material/", ctx_r0.talentMaterial[ctx_r0.selectedCharacterData.Ascensions.TalentBoss][ctx_r0.selectedCharacterData.Ascensions.TalentMaterial], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.talentMaterial[ctx_r0.selectedCharacterData.Ascensions.TalentBoss][ctx_r0.selectedCharacterData.Ascensions.TalentMaterial]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/talent-material/", ctx_r0.talentMaterial.Crown.Item_1, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.talentMaterial.Crown.Item_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngClass", ctx_r0.selectedCharacterData.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.FullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Constellation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Nation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Affiliation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.SpecialDish);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedCharacterData.Introduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedCharacterData.Personality);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedCharacterData.Appearance);
} }
function CharacterDetailsComponent_div_2_table_10_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_10_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Level " + stats_r34.LEVEL, " ");
} }
function CharacterDetailsComponent_div_2_table_10_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_10_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r35.HP), " ");
} }
function CharacterDetailsComponent_div_2_table_10_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ATK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_10_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r36.ATK), " ");
} }
function CharacterDetailsComponent_div_2_table_10_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DEF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_10_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r37.DEF), " ");
} }
function CharacterDetailsComponent_div_2_table_10_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.selectedCharacterData.ExtraStats, " (%)");
} }
function CharacterDetailsComponent_div_2_table_10_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stats_r38.ExtraStatsValue, " ");
} }
function CharacterDetailsComponent_div_2_table_10_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_10_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_10_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_10_td_3_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_10_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_10_td_6_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_10_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_10_td_9_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_10_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_10_td_12_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_10_th_14_Template, 2, 1, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_10_td_15_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CharacterDetailsComponent_div_2_table_10_tr_16_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_10_tr_17_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r6.baseStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.baseStatsDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r6.baseStatsDisplayColumns);
} }
function CharacterDetailsComponent_div_2_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r40);
} }
function CharacterDetailsComponent_div_2_table_27_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stats_r67.HitCount, " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r68.Level_1), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r69.Level_2), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r70.Level_3), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r71.Level_4), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r72.Level_5), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r73.Level_6), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r74.Level_7), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r75.Level_8), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r76.Level_9), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r77.Level_10), " ");
} }
function CharacterDetailsComponent_div_2_table_27_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_27_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r78.Level_11), " ");
} }
function CharacterDetailsComponent_div_2_table_27_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_27_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_27_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_27_td_3_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_27_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_27_td_6_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_27_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_27_td_9_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_27_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_27_td_12_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_27_th_14_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_27_td_15_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_27_th_17_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CharacterDetailsComponent_div_2_table_27_td_18_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CharacterDetailsComponent_div_2_table_27_th_20_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CharacterDetailsComponent_div_2_table_27_td_21_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CharacterDetailsComponent_div_2_table_27_th_23_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CharacterDetailsComponent_div_2_table_27_td_24_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CharacterDetailsComponent_div_2_table_27_th_26_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CharacterDetailsComponent_div_2_table_27_td_27_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CharacterDetailsComponent_div_2_table_27_th_29_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CharacterDetailsComponent_div_2_table_27_td_30_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CharacterDetailsComponent_div_2_table_27_th_32_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CharacterDetailsComponent_div_2_table_27_td_33_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CharacterDetailsComponent_div_2_table_27_th_35_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CharacterDetailsComponent_div_2_table_27_td_36_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CharacterDetailsComponent_div_2_table_27_tr_37_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CharacterDetailsComponent_div_2_table_27_tr_38_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r8.normalAttackScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.attackScalingDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r8.attackScalingDisplayColumns);
} }
function CharacterDetailsComponent_div_2_table_35_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stats_r106.HitCount, " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r107.Level_1), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r108.Level_2), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r109.Level_3), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r110.Level_4), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r111.Level_5), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r112.Level_6), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r113.Level_7), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r114.Level_8), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r115.Level_9), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r116.Level_10), " ");
} }
function CharacterDetailsComponent_div_2_table_35_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_35_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r117.Level_11), " ");
} }
function CharacterDetailsComponent_div_2_table_35_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_35_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_35_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_35_td_3_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_35_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_35_td_6_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_35_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_35_td_9_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_35_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_35_td_12_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_35_th_14_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_35_td_15_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_35_th_17_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CharacterDetailsComponent_div_2_table_35_td_18_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CharacterDetailsComponent_div_2_table_35_th_20_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CharacterDetailsComponent_div_2_table_35_td_21_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CharacterDetailsComponent_div_2_table_35_th_23_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CharacterDetailsComponent_div_2_table_35_td_24_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CharacterDetailsComponent_div_2_table_35_th_26_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CharacterDetailsComponent_div_2_table_35_td_27_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CharacterDetailsComponent_div_2_table_35_th_29_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CharacterDetailsComponent_div_2_table_35_td_30_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CharacterDetailsComponent_div_2_table_35_th_32_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CharacterDetailsComponent_div_2_table_35_td_33_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CharacterDetailsComponent_div_2_table_35_th_35_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CharacterDetailsComponent_div_2_table_35_td_36_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CharacterDetailsComponent_div_2_table_35_tr_37_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CharacterDetailsComponent_div_2_table_35_tr_38_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r9.chargedAttackScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.attackScalingDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r9.attackScalingDisplayColumns);
} }
function CharacterDetailsComponent_div_2_table_39_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stats_r145.HitCount, " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r146 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r146.Level_1), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r147 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r147.Level_2), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r148.Level_3), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r149 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r149.Level_4), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r150 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r150.Level_5), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r151 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r151.Level_6), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r152.Level_7), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r153 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r153.Level_8), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r154.Level_9), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r155.Level_10), " ");
} }
function CharacterDetailsComponent_div_2_table_39_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_39_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r156.Level_11), " ");
} }
function CharacterDetailsComponent_div_2_table_39_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_39_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_39_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_39_td_3_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_39_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_39_td_6_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_39_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_39_td_9_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_39_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_39_td_12_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_39_th_14_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_39_td_15_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_39_th_17_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CharacterDetailsComponent_div_2_table_39_td_18_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CharacterDetailsComponent_div_2_table_39_th_20_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CharacterDetailsComponent_div_2_table_39_td_21_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CharacterDetailsComponent_div_2_table_39_th_23_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CharacterDetailsComponent_div_2_table_39_td_24_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CharacterDetailsComponent_div_2_table_39_th_26_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CharacterDetailsComponent_div_2_table_39_td_27_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CharacterDetailsComponent_div_2_table_39_th_29_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CharacterDetailsComponent_div_2_table_39_td_30_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CharacterDetailsComponent_div_2_table_39_th_32_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CharacterDetailsComponent_div_2_table_39_td_33_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CharacterDetailsComponent_div_2_table_39_th_35_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CharacterDetailsComponent_div_2_table_39_td_36_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CharacterDetailsComponent_div_2_table_39_tr_37_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CharacterDetailsComponent_div_2_table_39_tr_38_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r10.plungingAttackScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r10.attackScalingDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r10.attackScalingDisplayColumns);
} }
function CharacterDetailsComponent_div_2_p_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r158);
} }
function CharacterDetailsComponent_div_2_table_53_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r193 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stats_r193.HitCount, " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r194 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r194.Level_1), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r195 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r195.Level_2), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r196.Level_3), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r197.Level_4), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r198.Level_5), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r199 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r199.Level_6), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r200.Level_7), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r201 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r201.Level_8), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r202 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r202.Level_9), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r203 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r203.Level_10), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r204.Level_11), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 12 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r205 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r205.Level_12), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 13 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r206.Level_13), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r207 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r207.Level_14), " ");
} }
function CharacterDetailsComponent_div_2_table_53_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_53_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r208 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r208.Level_15), " ");
} }
function CharacterDetailsComponent_div_2_table_53_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_53_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_53_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_53_td_3_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_53_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_53_td_6_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_53_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_53_td_9_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_53_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_53_td_12_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_53_th_14_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_53_td_15_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_53_th_17_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CharacterDetailsComponent_div_2_table_53_td_18_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CharacterDetailsComponent_div_2_table_53_th_20_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CharacterDetailsComponent_div_2_table_53_td_21_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CharacterDetailsComponent_div_2_table_53_th_23_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CharacterDetailsComponent_div_2_table_53_td_24_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CharacterDetailsComponent_div_2_table_53_th_26_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CharacterDetailsComponent_div_2_table_53_td_27_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CharacterDetailsComponent_div_2_table_53_th_29_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CharacterDetailsComponent_div_2_table_53_td_30_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CharacterDetailsComponent_div_2_table_53_th_32_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CharacterDetailsComponent_div_2_table_53_td_33_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CharacterDetailsComponent_div_2_table_53_th_35_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CharacterDetailsComponent_div_2_table_53_td_36_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CharacterDetailsComponent_div_2_table_53_th_38_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CharacterDetailsComponent_div_2_table_53_td_39_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CharacterDetailsComponent_div_2_table_53_th_41_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CharacterDetailsComponent_div_2_table_53_td_42_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CharacterDetailsComponent_div_2_table_53_th_44_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CharacterDetailsComponent_div_2_table_53_td_45_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CharacterDetailsComponent_div_2_table_53_th_47_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CharacterDetailsComponent_div_2_table_53_td_48_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CharacterDetailsComponent_div_2_table_53_tr_49_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CharacterDetailsComponent_div_2_table_53_tr_50_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r12.elementalSkillScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.elementalSkillScalingDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.elementalSkillScalingDisplayColumns);
} }
function CharacterDetailsComponent_div_2_p_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r210 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r210);
} }
function CharacterDetailsComponent_div_2_table_67_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r245 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stats_r245.HitCount, " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r246 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r246.Level_1), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r247 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r247.Level_2), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r248 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r248.Level_3), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r249 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r249.Level_4), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r250 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r250.Level_5), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r251 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r251.Level_6), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r252 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r252.Level_7), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r253 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r253.Level_8), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r254 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r254.Level_9), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r255 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r255.Level_10), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r256 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r256.Level_11), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 12 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r257 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r257.Level_12), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 13 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r258 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r258.Level_13), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 14 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r259 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r259.Level_14), " ");
} }
function CharacterDetailsComponent_div_2_table_67_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_67_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r260 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r260.Level_15), " ");
} }
function CharacterDetailsComponent_div_2_table_67_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_67_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_67_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_67_td_3_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_67_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_67_td_6_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_67_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_67_td_9_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_67_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_67_td_12_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_67_th_14_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_67_td_15_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_67_th_17_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CharacterDetailsComponent_div_2_table_67_td_18_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CharacterDetailsComponent_div_2_table_67_th_20_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CharacterDetailsComponent_div_2_table_67_td_21_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CharacterDetailsComponent_div_2_table_67_th_23_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CharacterDetailsComponent_div_2_table_67_td_24_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CharacterDetailsComponent_div_2_table_67_th_26_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CharacterDetailsComponent_div_2_table_67_td_27_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CharacterDetailsComponent_div_2_table_67_th_29_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CharacterDetailsComponent_div_2_table_67_td_30_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CharacterDetailsComponent_div_2_table_67_th_32_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CharacterDetailsComponent_div_2_table_67_td_33_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CharacterDetailsComponent_div_2_table_67_th_35_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CharacterDetailsComponent_div_2_table_67_td_36_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CharacterDetailsComponent_div_2_table_67_th_38_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CharacterDetailsComponent_div_2_table_67_td_39_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CharacterDetailsComponent_div_2_table_67_th_41_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CharacterDetailsComponent_div_2_table_67_td_42_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CharacterDetailsComponent_div_2_table_67_th_44_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CharacterDetailsComponent_div_2_table_67_td_45_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CharacterDetailsComponent_div_2_table_67_th_47_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CharacterDetailsComponent_div_2_table_67_td_48_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CharacterDetailsComponent_div_2_table_67_tr_49_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CharacterDetailsComponent_div_2_table_67_tr_50_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r14.elementalBrustScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r14.elementalBrustScalingDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r14.elementalBrustScalingDisplayColumns);
} }
function CharacterDetailsComponent_div_2_p_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r262 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r262);
} }
function CharacterDetailsComponent_div_2_p_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r263 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r263);
} }
function CharacterDetailsComponent_div_2_p_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r264 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r264);
} }
function CharacterDetailsComponent_div_2_div_96_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r266 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r266);
} }
function CharacterDetailsComponent_div_2_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_div_96_p_6_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r18.selectedCharacter, "-7.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.selectedCharacterData.Skill.Skill_7.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.selectedCharacterData.Skill.Skill_6.Description);
} }
function CharacterDetailsComponent_div_2_table_100_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_100_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r281 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r281.Phase), " ");
} }
function CharacterDetailsComponent_div_2_table_100_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_100_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r282 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, stats_r282.Mora));
} }
function CharacterDetailsComponent_div_2_table_100_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jewel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_100_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r283 = ctx.$implicit;
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/jewel/", ctx_r272.elementalJewelConstant[ctx_r272.selectedCharacterData.Element][stats_r283.JewelLevel], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r283.JewelCount), "");
} }
function CharacterDetailsComponent_div_2_table_100_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Elemental Stone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_100_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r284 = ctx.$implicit;
    const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/elemental-stone/", ctx_r274.elementalStone[ctx_r274.selectedCharacterData.Ascensions.ElementalStone], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r284.ElementalStoneCount), "");
} }
function CharacterDetailsComponent_div_2_table_100_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Local Specialty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_100_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r285 = ctx.$implicit;
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/local-material/", ctx_r276.localMaterial[ctx_r276.selectedCharacterData.Ascensions.LocalMaterial], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r285.LocalSpecialtyCount), "");
} }
function CharacterDetailsComponent_div_2_table_100_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Common Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_100_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r286 = ctx.$implicit;
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/common-material/", ctx_r278.commonCharacterAscensionMaterial[ctx_r278.selectedCharacterData.Ascensions.CommonCharacterAscensionMaterial][stats_r286.CommonMaterialLevel], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r286.CommonMaterilCount), "");
} }
function CharacterDetailsComponent_div_2_table_100_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_100_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_100_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_100_td_3_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_100_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_100_td_6_Template, 6, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_100_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_100_td_9_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_100_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_100_td_12_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_100_th_14_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_100_td_15_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_100_th_17_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CharacterDetailsComponent_div_2_table_100_td_18_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CharacterDetailsComponent_div_2_table_100_tr_19_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CharacterDetailsComponent_div_2_table_100_tr_20_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r19.characterLevelUpCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r19.characterLevelingDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r19.characterLevelingDisplayColumns);
} }
function CharacterDetailsComponent_div_2_table_104_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_104_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r302 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, stats_r302.Phase), " ");
} }
function CharacterDetailsComponent_div_2_table_104_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_104_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r303 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, stats_r303.Mora));
} }
function CharacterDetailsComponent_div_2_table_104_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Common Material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_104_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r304 = ctx.$implicit;
    const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/common-material/", ctx_r293.commonCharacterAscensionMaterial[ctx_r293.selectedCharacterData.Ascensions.CommonCharacterAscensionMaterial][stats_r304.ItemLevel], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r304.CommonMeterialCount), "");
} }
function CharacterDetailsComponent_div_2_table_104_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Talent Book Material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_104_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r305 = ctx.$implicit;
    const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/talent-book/", ctx_r295.talentBook[ctx_r295.selectedCharacterData.Ascensions.TalentBook][stats_r305.ItemLevel], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r305.TalentBookCount), "");
} }
function CharacterDetailsComponent_div_2_table_104_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weekly Boss Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_104_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r306 = ctx.$implicit;
    const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/talent-material/", ctx_r297.talentMaterial[ctx_r297.selectedCharacterData.Ascensions.TalentBoss][ctx_r297.selectedCharacterData.Ascensions.TalentMaterial], ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r306.TalentBossCount), "");
} }
function CharacterDetailsComponent_div_2_table_104_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Crown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterDetailsComponent_div_2_table_104_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r307 = ctx.$implicit;
    const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/talent-material/", ctx_r299.talentMaterial.Crown.Item_1, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0x\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, stats_r307.Crown), "");
} }
function CharacterDetailsComponent_div_2_table_104_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function CharacterDetailsComponent_div_2_table_104_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function CharacterDetailsComponent_div_2_table_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_table_104_th_2_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterDetailsComponent_div_2_table_104_td_3_Template, 3, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterDetailsComponent_div_2_table_104_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterDetailsComponent_div_2_table_104_td_6_Template, 6, 3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterDetailsComponent_div_2_table_104_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailsComponent_div_2_table_104_td_9_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailsComponent_div_2_table_104_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailsComponent_div_2_table_104_td_12_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CharacterDetailsComponent_div_2_table_104_th_14_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CharacterDetailsComponent_div_2_table_104_td_15_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CharacterDetailsComponent_div_2_table_104_th_17_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CharacterDetailsComponent_div_2_table_104_td_18_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CharacterDetailsComponent_div_2_table_104_tr_19_Template, 1, 0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CharacterDetailsComponent_div_2_table_104_tr_20_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r20.talentLevelUpCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r20.talentLevelingDisplayColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r20.talentLevelingDisplayColumns);
} }
function CharacterDetailsComponent_div_2_div_112_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r311 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r311);
} }
function CharacterDetailsComponent_div_2_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CharacterDetailsComponent_div_2_div_112_p_7_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r309 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "assets/character-constellation/", ctx_r21.selectedCharacter, "-", item_r309.Level, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r309.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r309.Details);
} }
function CharacterDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Base Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The character's base stats before and after each Ascension: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CharacterDetailsComponent_div_2_table_10_Template, 18, 3, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Talents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Normal Attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CharacterDetailsComponent_div_2_p_25_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CharacterDetailsComponent_div_2_table_27_Template, 39, 3, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Charged Attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CharacterDetailsComponent_div_2_table_35_Template, 39, 3, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Plunging Attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CharacterDetailsComponent_div_2_table_39_Template, 39, 3, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Elemental Skill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CharacterDetailsComponent_div_2_p_51_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CharacterDetailsComponent_div_2_table_53_Template, 51, 3, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Elemental Brust");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CharacterDetailsComponent_div_2_p_65_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CharacterDetailsComponent_div_2_table_67_Template, 51, 3, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Passive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, CharacterDetailsComponent_div_2_p_79_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, CharacterDetailsComponent_div_2_p_87_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, CharacterDetailsComponent_div_2_p_95_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, CharacterDetailsComponent_div_2_div_96_Template, 7, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Character Leveling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, CharacterDetailsComponent_div_2_table_100_Template, 21, 3, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Talents Leveling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, CharacterDetailsComponent_div_2_table_104_Template, 21, 3, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Constellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Each Constellation activation requires a Stella Fortuna. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, CharacterDetailsComponent_div_2_div_112_Template, 9, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.baseStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r1.selectedCharacter, "-1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedCharacterData.Skill.Skill_1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCharacterData.Skill.Skill_1.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.normalAttackScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Stamina Cost: ", ctx_r1.selectedCharacterData.ChargedAttackStaminaCost, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Max Duration: ", ctx_r1.selectedCharacterData.ChargedAttackMaxDuration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.chargedAttackScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.plungingAttackScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r1.selectedCharacter, "-2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedCharacterData.Skill.Skill_2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCharacterData.Skill.Skill_2.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.elementalSkillScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r1.selectedCharacter, "-3.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedCharacterData.Skill.Skill_3.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCharacterData.Skill.Skill_3.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.elementalBrustScale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r1.selectedCharacter, "-4.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedCharacterData.Skill.Skill_4.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCharacterData.Skill.Skill_4.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r1.selectedCharacter, "-5.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedCharacterData.Skill.Skill_5.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCharacterData.Skill.Skill_5.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/character-skills/", ctx_r1.selectedCharacter, "-6.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedCharacterData.Skill.Skill_6.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCharacterData.Skill.Skill_6.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedCharacterData.Skill.Skill_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.characterLevelUpCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.talentLevelUpCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.constellationDetails);
} }
class CharacterDetailsComponent {
    constructor(activatedRoute, characterService) {
        this.activatedRoute = activatedRoute;
        this.characterService = characterService;
        this.commonCharacterAscensionMaterial = _shared_constants_common_character_ascension_material_constant__WEBPACK_IMPORTED_MODULE_2__["CommonCharacterAscensionMaterial"];
        this.elementalJewelConstant = _shared_constants_elemental_jewel_constant__WEBPACK_IMPORTED_MODULE_3__["ElementalJewelConstant"];
        this.elementalStone = _shared_constants_elemental_stone_constant__WEBPACK_IMPORTED_MODULE_4__["ElementalStone"];
        this.localMaterial = _shared_constants_local_material_constant__WEBPACK_IMPORTED_MODULE_5__["LocalMaterial"];
        this.talentBook = _shared_constants_talent_book_constant__WEBPACK_IMPORTED_MODULE_6__["TalentBook"];
        this.talentMaterial = _shared_constants_talent_material_constant__WEBPACK_IMPORTED_MODULE_7__["TalentMaterial"];
        this.talentLevelUpCount = _shared_constants_talent_level_up_count_constant__WEBPACK_IMPORTED_MODULE_8__["TalentLevelUpCount"];
        this.characterLevelUpCount = _shared_constants_character_level_up_count_constant__WEBPACK_IMPORTED_MODULE_9__["CharacterLevelUpCount"];
        this.baseStatsDisplayColumns = ['Level', 'HP', 'ATK', 'DEF', 'ExtraStats'];
        this.attackScalingDisplayColumns = ['Hits', 'Level1', 'Level2', 'Level3', 'Level4', 'Level5', 'Level6', 'Level7', 'Level8', 'Level9', 'Level10', 'Level11'];
        this.elementalSkillScalingDisplayColumns = ['Hits', 'Level1', 'Level2', 'Level3', 'Level4', 'Level5', 'Level6', 'Level7', 'Level8', 'Level9', 'Level10', 'Level11', 'Level12', 'Level13', 'Level14', 'Level15'];
        this.elementalBrustScalingDisplayColumns = ['Hits', 'Level1', 'Level2', 'Level3', 'Level4', 'Level5', 'Level6', 'Level7', 'Level8', 'Level9', 'Level10', 'Level11', 'Level12', 'Level13', 'Level14', 'Level15'];
        this.characterLevelingDisplayColumns = ['Phase', 'Mora', 'Jewel', 'ElementalStone', 'LocalSpecialty', 'CommonMaterial'];
        this.talentLevelingDisplayColumns = ['Phase', 'Mora', 'CommonMaterial', 'TalentMaterial', 'BossMaterial', 'Crown'];
        this.currentRoute = this.activatedRoute.snapshot['_routerState'].url;
        this.selectedCharacter = this.currentRoute.split('/')[2].toLowerCase();
        this.noDataAvailable = false;
    }
    getCharacterData() {
        this.characterService.getCharacterData(this.selectedCharacter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(res => {
            this.selectedCharacterData = res;
            this.baseStats = res.BaseStats;
            this.normalAttackScale = res.NormalAttackScale;
            this.chargedAttackScale = res.ChargedAttackScale;
            this.plungingAttackScale = res.PlungingAttackScale;
            this.elementalSkillScale = res.ElementalSkill;
            this.elementalBrustScale = res.ElementalBrust;
            this.constellationDetails = res.ConstellationDetails;
        }, err => {
            this.noDataAvailable = true;
        });
    }
    ngOnInit() {
        this.getCharacterData();
    }
}
CharacterDetailsComponent.ɵfac = function CharacterDetailsComponent_Factory(t) { return new (t || CharacterDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_11__["CharacterService"])); };
CharacterDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterDetailsComponent, selectors: [["app-character-details"]], decls: 3, vars: 2, consts: [["ngClass.md", "p-24", "ngClass.gt-md", "p-24", "ngClass.lt-md", "p-12", "fxLayout", "row wrap"], ["fxFlex", "100", "fxLayout", "row", "fxLayout.lt-md", "column", 4, "ngIf"], ["fxFlex", "100", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "row", "fxLayout.lt-md", "column"], [1, "character-details-image"], ["alt", "", 1, "character-portrait-full", "mat-elevation-z4", 3, "src"], [1, "character-info-icon", "mat-elevation-z4"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "character-class"], ["fxLayout", "30"], ["alt", "", 3, "matTooltip", "src"], [2, "margin-top", "5px", "margin-bottom", "5px"], [1, "character-skills"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin-top", "10px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "character-ascension-materials"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "weapon-ascension-materials"], ["fxFlex", "100", 1, "character-details"], [1, "character-header"], [1, "character-details-box", 3, "ngClass"], [2, "text-align", "justify"], [2, "margin", "0px"], [2, "margin-bottom", "10px"], ["style", "text-align: justify;", 4, "ngFor", "ngForOf"], ["fxFlex", "100"], [2, "font-size", "32px"], [1, "responsive-table"], ["style", "width: 100%; margin-bottom: 20px;", "mat-table", "", "class", "mat-elevation-z0", 3, "dataSource", 4, "ngIf"], [2, "font-size", "32px", "margin-top", "20px"], [3, "expanded"], [2, "font-style", "italic", "margin-top", "20px"], ["fxLayout", "row", "fxLayout.lt-md", "column", 1, "p-24"], ["fxFlex", "20", "fxLayoutAlign.lt-md", "center center"], ["alt", "", 3, "src"], ["fxFlex", "80", "ngStyle.lt-md", "margin-top: 20px;"], ["ngStyle.lt-md", "text-align: center;"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayout.lt-md", "column", 1, "p-24", 2, "margin-bottom", "10px"], ["class", "p-24", "style", "margin-bottom: 10px;", 4, "ngIf"], ["style", "width: 100%; margin-bottom: 20px;", "mat-table", "", "class", "mat-elevation-z1", 3, "dataSource", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z0", 2, "width", "100%", "margin-bottom", "20px", 3, "dataSource"], ["matColumnDef", "Level"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "HP"], ["matColumnDef", "ATK"], ["matColumnDef", "DEF"], ["matColumnDef", "ExtraStats"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["matColumnDef", "Hits"], ["matColumnDef", "Level1"], ["matColumnDef", "Level2"], ["matColumnDef", "Level3"], ["matColumnDef", "Level4"], ["matColumnDef", "Level5"], ["matColumnDef", "Level6"], ["matColumnDef", "Level7"], ["matColumnDef", "Level8"], ["matColumnDef", "Level9"], ["matColumnDef", "Level10"], ["matColumnDef", "Level11"], ["matColumnDef", "Level12"], ["matColumnDef", "Level13"], ["matColumnDef", "Level14"], ["matColumnDef", "Level15"], [1, "p-24", 2, "margin-bottom", "10px"], ["fxFlex", "20"], ["fxFlex", "80"], ["mat-table", "", 1, "mat-elevation-z1", 2, "width", "100%", "margin-bottom", "20px", 3, "dataSource"], ["matColumnDef", "Phase"], ["matColumnDef", "Mora"], ["matColumnDef", "Jewel"], ["matColumnDef", "ElementalStone"], ["matColumnDef", "LocalSpecialty"], ["matColumnDef", "CommonMaterial"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["src", "assets/mora.png", "alt", "", 2, "height", "40px", "width", "40px", "object-fit", "contain"], ["alt", "", 2, "height", "40px", "width", "40px", "object-fit", "contain", 3, "src"], ["matColumnDef", "TalentMaterial"], ["matColumnDef", "BossMaterial"], ["matColumnDef", "Crown"]], template: function CharacterDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterDetailsComponent_div_1_Template, 89, 47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailsComponent_div_2_Template, 113, 32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCharacterData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCharacterData);
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanelTitle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]], styles: ["@media only screen and (max-width: 480px) {\n  .responsive-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .responsive-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 900px !important;\n  }\n}\n.character-details-image[_ngcontent-%COMP%]   .character-portrait-full[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #ebe9e9;\n  height: 700px;\n  width: 350px;\n  object-fit: contain;\n}\n@media only screen and (max-width: 480px) {\n  .character-details-image[_ngcontent-%COMP%]   .character-portrait-full[_ngcontent-%COMP%] {\n    height: 700px;\n    width: 100%;\n  }\n}\n.character-details-image[_ngcontent-%COMP%]   .character-info-icon[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-top: 20px;\n  padding: 10px;\n}\n.character-details-image[_ngcontent-%COMP%]   .character-class[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: none;\n  height: 50px;\n  width: 50px;\n  object-fit: contain;\n}\n.character-details-image[_ngcontent-%COMP%]   .character-skills[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: none;\n  height: 50px;\n  width: 50px;\n  object-fit: contain;\n}\n.character-details-image[_ngcontent-%COMP%]   .character-ascension-materials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: none;\n  height: 50px;\n  width: 50px;\n  object-fit: contain;\n}\n.character-details-image[_ngcontent-%COMP%]   .weapon-ascension-materials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: none;\n  height: 50px;\n  width: 50px;\n  object-fit: contain;\n}\n.character-details[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.character-details[_ngcontent-%COMP%]   .character-header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Genshin\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 36px;\n  font-weight: bold;\n}\n@media only screen and (max-width: 480px) {\n  .character-details[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding-left: 0px;\n  }\n}\n.character-details-box[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  margin-bottom: 20px;\n}\n.character-details-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.character-details-box.Diluc[_ngcontent-%COMP%] {\n  background-image: url('Diluc.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Jean[_ngcontent-%COMP%] {\n  background-image: url('Jean.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Keqing[_ngcontent-%COMP%] {\n  background-image: url('Keqing.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Klee[_ngcontent-%COMP%] {\n  background-image: url('Klee.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Mona[_ngcontent-%COMP%] {\n  background-image: url('Mona.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Qiqi[_ngcontent-%COMP%] {\n  background-image: url('Qiqi.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Venti[_ngcontent-%COMP%] {\n  background-image: url('Venti.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Xiao[_ngcontent-%COMP%] {\n  background-image: url('Xiao.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Tartaglia[_ngcontent-%COMP%] {\n  background-image: url('Tartaglia.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Zhongli[_ngcontent-%COMP%] {\n  background-image: url('Zhongli.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Ganyu[_ngcontent-%COMP%] {\n  background-image: url('Ganyu.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Albedo[_ngcontent-%COMP%] {\n  background-image: url('Albedo.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Hutao[_ngcontent-%COMP%] {\n  background-image: url('Hutao.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Amber[_ngcontent-%COMP%] {\n  background-image: url('Amber.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Barbara[_ngcontent-%COMP%] {\n  background-image: url('Barbara.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Beidou[_ngcontent-%COMP%] {\n  background-image: url('Beidou.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Bennett[_ngcontent-%COMP%] {\n  background-image: url('Bennett.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Chongyun[_ngcontent-%COMP%] {\n  background-image: url('Chongyun.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Fischl[_ngcontent-%COMP%] {\n  background-image: url('Fischl.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Kaeya[_ngcontent-%COMP%] {\n  background-image: url('Kaeya.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Lisa[_ngcontent-%COMP%] {\n  background-image: url('Lisa.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Ningguang[_ngcontent-%COMP%] {\n  background-image: url('Ningguang.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Noelle[_ngcontent-%COMP%] {\n  background-image: url('Noelle.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Razor[_ngcontent-%COMP%] {\n  background-image: url('Razor.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Sucrose[_ngcontent-%COMP%] {\n  background-image: url('Sucrose.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Xiangling[_ngcontent-%COMP%] {\n  background-image: url('Xiangling.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Xingqiu[_ngcontent-%COMP%] {\n  background-image: url('Xingqiu.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Diona[_ngcontent-%COMP%] {\n  background-image: url('Diona.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Xinyan[_ngcontent-%COMP%] {\n  background-image: url('Xinyan.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Rosaria[_ngcontent-%COMP%] {\n  background-image: url('Rosaria.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.character-details-box.Yanfei[_ngcontent-%COMP%] {\n  background-image: url('Yanfei.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL2NvbXBvbmVudHMvY2hhcmFjdGVyLWRldGFpbHMvY2hhcmFjdGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGdCQUFBO0VBQ047RUFBTTtJQUNJLHVCQUFBO0VBRVY7QUFDRjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUtJO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQUhWO0FBQ0Y7QUFNSTtFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBTFI7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVBaO0FBWVE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFWWjtBQWVRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBYlo7QUFrQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFoQlo7QUFxQkE7RUFDSSxrQkFBQTtBQWxCSjtBQW1CSTtFQUNJLGtCQUFBO0VBR0Esc0VBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFuQlI7QUF1QkE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUFwQk47QUFDRjtBQXVCQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFyQko7QUFzQkk7RUFDSSxlQUFBO0FBcEJSO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckJKIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVyL2NvbXBvbmVudHMvY2hhcmFjdGVyLWRldGFpbHMvY2hhcmFjdGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAucmVzcG9uc2l2ZS10YWJsZSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWltYWdlIHtcclxuICAgIC5jaGFyYWN0ZXItcG9ydHJhaXQtZnVsbCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzMsIDIzMyk7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiKDAgMCAwIC8gMjAlKSwgMCA4cHggMTBweCAxcHggcmdiKDAgMCAwIC8gMTQlKSwgMCAzcHggMTRweCAycHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAuY2hhcmFjdGVyLXBvcnRyYWl0LWZ1bGwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJhY3Rlci1pbmZvLWljb24ge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMywgMjMzKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhcmFjdGVyLWNsYXNzIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hhcmFjdGVyLXNraWxscyB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJhY3Rlci1hc2NlbnNpb24tbWF0ZXJpYWxzIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2VhcG9uLWFzY2Vuc2lvbi1tYXRlcmlhbHMge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2hhcmFjdGVyLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgLmNoYXJhY3Rlci1oZWFkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlbnNoaW5cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNoYXJhY3Rlci1kZXRhaWxzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hhcmFjdGVyLWRldGFpbHMtYm94IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5EaWx1YyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQtaG9yaXpvbnRhbC9EaWx1Yy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5KZWFuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0plYW4ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guS2VxaW5nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0tlcWluZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5LbGVlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0tsZWUucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guTW9uYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQtaG9yaXpvbnRhbC9Nb25hLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLWRldGFpbHMtYm94LlFpcWkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvUWlxaS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5WZW50aSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQtaG9yaXpvbnRhbC9WZW50aS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5YaWFvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL1hpYW8ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guVGFydGFnbGlhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL1RhcnRhZ2xpYS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5aaG9uZ2xpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL1pob25nbGkucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guR2FueXUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvR2FueXUucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guQWxiZWRvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0FsYmVkby5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5IdXRhbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQtaG9yaXpvbnRhbC9IdXRhby5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5BbWJlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQtaG9yaXpvbnRhbC9BbWJlci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5CYXJiYXJhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0JhcmJhcmEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guQmVpZG91IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0JlaWRvdS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5CZW5uZXR0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0Jlbm5ldHQucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guQ2hvbmd5dW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvQ2hvbmd5dW4ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guRmlzY2hsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0Zpc2NobC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5LYWV5YSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQtaG9yaXpvbnRhbC9LYWV5YS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5MaXNhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL0xpc2EucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItZGV0YWlscy1ib3guTmluZ2d1YW5nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL05pbmdndWFuZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5Ob2VsbGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvTm9lbGxlLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLWRldGFpbHMtYm94LlJhem9yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL25hbWUtY2FyZC1ob3Jpem9udGFsL1Jhem9yLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLWRldGFpbHMtYm94LlN1Y3Jvc2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvU3Vjcm9zZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5YaWFuZ2xpbmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvWGlhbmdsaW5nLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLWRldGFpbHMtYm94LlhpbmdxaXUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvWGluZ3FpdS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5EaW9uYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9uYW1lLWNhcmQtaG9yaXpvbnRhbC9EaW9uYS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5YaW55YW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvWGlueWFuLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2hhcmFjdGVyLWRldGFpbHMtYm94LlJvc2FyaWEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvUm9zYXJpYS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNoYXJhY3Rlci1kZXRhaWxzLWJveC5ZYW5mZWkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvbmFtZS1jYXJkLWhvcml6b250YWwvWWFuZmVpLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character-details',
                templateUrl: './character-details.component.html',
                styleUrls: ['./character-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _services_character_service__WEBPACK_IMPORTED_MODULE_11__["CharacterService"] }]; }, null); })();


/***/ }),

/***/ "cQ6w":
/*!***********************************************!*\
  !*** ./src/app/character/character.module.ts ***!
  \***********************************************/
/*! exports provided: CharacterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterModule", function() { return CharacterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _components_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/character-list/character-list.component */ "36vw");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/material.module */ "5dmV");
/* harmony import */ var _components_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/character-details/character-details.component */ "bncD");









const routes = [
    {
        path: '',
        component: _components_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_4__["CharacterListComponent"],
    },
    {
        path: ':id',
        component: _components_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsComponent"],
    }
];
class CharacterModule {
}
CharacterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CharacterModule });
CharacterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CharacterModule_Factory(t) { return new (t || CharacterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CharacterModule, { declarations: [_components_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_4__["CharacterListComponent"],
        _components_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_4__["CharacterListComponent"],
                    _components_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "iOAG":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/constants/common-character-ascension.material.constant.ts ***!
  \**********************************************************************************/
/*! exports provided: CommonCharacterAscensionMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCharacterAscensionMaterial", function() { return CommonCharacterAscensionMaterial; });
const CommonCharacterAscensionMaterial = {
    Slime: {
        Item_1: 'Slime Condensate',
        Item_2: 'Slime Secretions',
        Item_3: 'Slime Concentrate'
    },
    Mask: {
        Item_1: 'Damaged Mask',
        Item_2: 'Stained Mask',
        Item_3: 'Ominous Mask'
    },
    Scroll: {
        Item_1: 'Divining Scroll',
        Item_2: 'Sealed Scroll',
        Item_3: 'Forbidden Curse Scroll'
    },
    Arrowhead: {
        Item_1: 'Firm Arrowhead',
        Item_2: 'Sharp Arrowhead',
        Item_3: 'Weathered Arrowhead'
    },
    FatuiInsignia: {
        Item_1: 'Recruit\'s Insignia',
        Item_2: 'Sergeant\'s Insignia',
        Item_3: 'Lieutenant\'s Insignia'
    },
    HoarderInsignia: {
        Item_1: 'Treasure Hoarder Insignia',
        Item_2: 'Silver Raven Insignia',
        Item_3: 'Golden Raven Insignia'
    },
    Nectar: {
        Item_1: 'Whopperflower Nectar',
        Item_2: 'Shimmering Nectar',
        Item_3: 'Energy Nectar'
    },
    Statuette: {
        Item_1: 'Gloomy Statuette',
        Item_2: 'Dark Statuette',
        Item_3: 'Deathly Statuette'
    }
};


/***/ }),

/***/ "jC1v":
/*!***********************************************************************!*\
  !*** ./src/app/shared/constants/character-level-up-count.constant.ts ***!
  \***********************************************************************/
/*! exports provided: CharacterLevelUpCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterLevelUpCount", function() { return CharacterLevelUpCount; });
const CharacterLevelUpCount = [
    {
        Phase: 1,
        Mora: 20000,
        JewelLevel: 'Item_1',
        JewelCount: 1,
        ElementalStoneCount: 0,
        LocalSpecialtyCount: 3,
        CommonMaterilCount: 3,
        CommonMaterialLevel: 'Item_1',
    },
    {
        Phase: 2,
        Mora: 40000,
        JewelLevel: 'Item_2',
        JewelCount: 3,
        ElementalStoneCount: 2,
        LocalSpecialtyCount: 10,
        CommonMaterilCount: 15,
        CommonMaterialLevel: 'Item_1',
    },
    {
        Phase: 3,
        Mora: 60000,
        JewelLevel: 'Item_2',
        JewelCount: 6,
        ElementalStoneCount: 4,
        LocalSpecialtyCount: 20,
        CommonMaterilCount: 12,
        CommonMaterialLevel: 'Item_2',
    },
    {
        Phase: 4,
        Mora: 80000,
        JewelLevel: 'Item_3',
        JewelCount: 3,
        ElementalStoneCount: 8,
        LocalSpecialtyCount: 30,
        CommonMaterilCount: 18,
        CommonMaterialLevel: 'Item_2',
    },
    {
        Phase: 5,
        Mora: 100000,
        JewelLevel: 'Item_3',
        JewelCount: 6,
        ElementalStoneCount: 12,
        LocalSpecialtyCount: 45,
        CommonMaterilCount: 12,
        CommonMaterialLevel: 'Item_3',
    },
    {
        Phase: 6,
        Mora: 120000,
        JewelLevel: 'Item_4',
        JewelCount: 6,
        ElementalStoneCount: 20,
        LocalSpecialtyCount: 60,
        CommonMaterilCount: 24,
        CommonMaterialLevel: 'Item_3',
    }
];


/***/ }),

/***/ "oxJT":
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/talent-book.constant.ts ***!
  \**********************************************************/
/*! exports provided: TalentBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentBook", function() { return TalentBook; });
const TalentBook = {
    Ballad: {
        Item_1: 'Teachings of Ballad',
        Item_2: 'Guide to Ballad',
        Item_3: 'Philosophies of Ballad'
    },
    Diligence: {
        Item_1: 'Teachings of Diligence',
        Item_2: 'Guide to Diligence',
        Item_3: 'Philosophies of Diligence'
    },
    Freedom: {
        Item_1: 'Teachings of Freedom',
        Item_2: 'Guide to Freedom',
        Item_3: 'Philosophies of Freedom'
    },
    Gold: {
        Item_1: 'Teachings of Gold',
        Item_2: 'Guide to Gold',
        Item_3: 'Philosophies of Gold'
    },
    Prosperity: {
        Item_1: 'Teachings of Prosperity',
        Item_2: 'Guide to Prosperity',
        Item_3: 'Philosophies of Prosperity'
    },
    Resistance: {
        Item_1: 'Teachings of Resistance',
        Item_2: 'Guide to Resistance',
        Item_3: 'Philosophies of Resistance'
    }
};


/***/ }),

/***/ "u3T9":
/*!********************************************************************!*\
  !*** ./src/app/shared/constants/talent-level-up-count.constant.ts ***!
  \********************************************************************/
/*! exports provided: TalentLevelUpCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentLevelUpCount", function() { return TalentLevelUpCount; });
const TalentLevelUpCount = [
    {
        Phase: 1,
        Mora: 12500,
        ItemLevel: 'Item_1',
        CommonMeterialCount: 6,
        TalentBookCount: 3,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 2,
        Mora: 17500,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 3,
        TalentBookCount: 2,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 3,
        Mora: 25000,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 4,
        TalentBookCount: 4,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 4,
        Mora: 30000,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 6,
        TalentBookCount: 6,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 5,
        Mora: 37500,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 9,
        TalentBookCount: 9,
        TalentBossCount: 0,
        Crown: 0
    },
    {
        Phase: 6,
        Mora: 120000,
        ItemLevel: 'Item_3',
        CommonMeterialCount: 4,
        TalentBookCount: 4,
        TalentBossCount: 1,
        Crown: 0
    },
    {
        Phase: 7,
        Mora: 260000,
        ItemLevel: 'Item_3',
        CommonMeterialCount: 6,
        TalentBookCount: 6,
        TalentBossCount: 1,
        Crown: 0
    },
    {
        Phase: 8,
        Mora: 450000,
        ItemLevel: 'Item_3',
        CommonMeterialCount: 9,
        TalentBookCount: 12,
        TalentBossCount: 2,
        Crown: 0
    },
    {
        Phase: 9,
        Mora: 12500,
        ItemLevel: 'Item_2',
        CommonMeterialCount: 12,
        TalentBookCount: 16,
        TalentBossCount: 2,
        Crown: 1
    }
];


/***/ }),

/***/ "uu6I":
/*!*************************************************************!*\
  !*** ./src/app/shared/constants/local-material.constant.ts ***!
  \*************************************************************/
/*! exports provided: LocalMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalMaterial", function() { return LocalMaterial; });
const LocalMaterial = {
    Item_1: 'Calla Lily',
    Item_2: 'Cecilia',
    Item_3: 'Cor Lapis',
    Item_4: 'Dandelion Seed',
    Item_5: 'Glaze Lily',
    Item_6: 'Jueyun Chili',
    Item_7: 'Noctilucous Jade',
    Item_8: 'Philanemo Mushroom',
    Item_9: 'Silk Flower',
    Item_10: 'Small Lamp Grass',
    Item_11: 'Valberry',
    Item_12: 'Violetgrass',
    Item_13: 'Windwheel Aster',
    Item_14: 'Wolfhook',
    Item_15: 'Qingxin',
    Item_16: 'Starconch'
};


/***/ }),

/***/ "yTkT":
/*!******************************************************!*\
  !*** ./src/app/shared/constants/element.constant.ts ***!
  \******************************************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
const elements = [
    'anemo',
    'geo',
    'pyro',
    'hydro',
    'cryo',
    'electro',
    'dendro'
];


/***/ })

}]);
//# sourceMappingURL=character-character-module.js.map