(this["webpackJsonpclinic-app"] = this["webpackJsonpclinic-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/style/styles.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/style/styles.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var _img_photo_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/photo-1.png */ "./src/assets/img/photo-1.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_photo_1_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header {\n  padding: 14px 0 12px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  font-family: Lato;\n  font-style: normal; }\n  .header .logo {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 270px;\n    height: 98px;\n    margin-bottom: 8px; }\n  .header .content {\n    width: auto;\n    height: 100%; }\n    .header .content .navigation {\n      display: flex;\n      justify-content: flex-end;\n      align-items: flex-end; }\n      .header .content .navigation .nav {\n        margin-bottom: 8px;\n        margin-right: 50px; }\n        .header .content .navigation .nav .active {\n          color: #42AF54; }\n        .header .content .navigation .nav ul {\n          display: flex; }\n        .header .content .navigation .nav .item {\n          position: relative;\n          margin-right: 20px;\n          font-size: 20px;\n          line-height: 24px; }\n          .header .content .navigation .nav .item:hover > .dropdown {\n            transform: translate(0, 0);\n            opacity: 1;\n            pointer-events: all; }\n          .header .content .navigation .nav .item .link {\n            transition: .5s; }\n            .header .content .navigation .nav .item .link:hover {\n              color: #42AF54; }\n          .header .content .navigation .nav .item .dropdown {\n            position: absolute;\n            top: 100%;\n            left: 0;\n            width: 290px;\n            padding: 8px 8px 0 8px;\n            background-color: white;\n            transform: translateY(10px);\n            opacity: 0;\n            pointer-events: none;\n            transition: 0.5s; }\n            .header .content .navigation .nav .item .dropdown-item {\n              margin-bottom: 8px; }\n            .header .content .navigation .nav .item .dropdown-item > a {\n              display: flex;\n              justify-content: space-between;\n              font-size: 20px;\n              width: 100%; }\n        .header .content .navigation .nav .end {\n          margin-right: 0; }\n    .header .content .contacts {\n      display: flex;\n      justify-content: flex-end;\n      font-weight: 300;\n      font-size: 15px;\n      line-height: 18px;\n      margin-bottom: 28px; }\n      .header .content .contacts .faq {\n        margin-right: 22px; }\n      .header .content .contacts .line {\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        height: 40px;\n        margin: 0 10px; }\n      .header .content .contacts-left, .header .content .contacts-right {\n        display: flex;\n        align-items: center; }\n      .header .content .contacts-left .item {\n        display: flex;\n        align-items: center; }\n        .header .content .contacts-left .item .address {\n          width: 162px;\n          margin-left: 10px; }\n        .header .content .contacts-left .item .phone {\n          width: 126px;\n          margin-left: 10px; }\n      .header .content .contacts-right {\n        margin-left: 120px; }\n        .header .content .contacts-right .item {\n          margin-left: 20px; }\n        .header .content .contacts-right select {\n          -webkit-appearance: none;\n          appearance: none;\n          outline: 0;\n          box-shadow: none;\n          border: 1px solid #42AF54 !important;\n          background-image: none;\n          color: #0A0816;\n          padding: 5px;\n          border-radius: 20px;\n          cursor: pointer;\n          font-size: 14px;\n          text-align: center; }\n        .header .content .contacts-right select::-ms-expand {\n          display: none; }\n        .header .content .contacts-right .select {\n          position: relative;\n          display: flex;\n          margin-left: 25px; }\n  .header .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 269px;\n    height: 40px;\n    border-radius: 40px;\n    background: #42AF54;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 19px;\n    color: #FBFBFB; }\n\n* {\n  box-sizing: border-box; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  font-family: Lato;\n  font-style: normal;\n  font-size: 16px;\n  font-weight: normal;\n  height: 100%;\n  position: relative;\n  min-height: 100%; }\n  body ul {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  body h1, body h2, body p {\n    margin: 0; }\n  body a {\n    text-decoration: none;\n    color: inherit;\n    width: 0; }\n  body .container {\n    max-width: 1200px;\n    padding: 0 15px;\n    margin: 0 auto; }\n  body .clinic-photo {\n    width: 100%;\n    object-fit: cover; }\n\n.footer {\n  background: #135458;\n  color: #FFFFFF; }\n  .footer-top {\n    padding: 30px 0 20px 0; }\n    .footer-top .container {\n      display: flex;\n      justify-content: space-between;\n      font-family: 'Open Sans', sans-serif; }\n      .footer-top .container .logo {\n        width: 270px;\n        height: 98px; }\n      .footer-top .container .nav-1, .footer-top .container .nav-2, .footer-top .container .nav-3 {\n        display: flex;\n        flex-direction: column;\n        font-style: normal;\n        font-weight: 600;\n        font-size: 20px; }\n        .footer-top .container .nav-1 .item, .footer-top .container .nav-2 .item, .footer-top .container .nav-3 .item {\n          font-size: 18px;\n          font-weight: 400;\n          margin-top: 10px; }\n      .footer-top .container .nav-1 .item {\n        display: inline-block;\n        width: 100%; }\n      .footer-top .container .nav-2 .item {\n        display: inline-block;\n        width: 100%; }\n      .footer-top .container .nav-3 {\n        width: 172px; }\n        .footer-top .container .nav-3 .icon {\n          margin-top: 20px;\n          margin-right: 30px;\n          fill: #FFFFFF;\n          width: 30px;\n          height: 30px; }\n        .footer-top .container .nav-3 .instagram {\n          margin-right: 0; }\n  .footer-bottom {\n    border-top: 1px solid rgba(255, 255, 255, 0.3);\n    padding: 20px 0 23px 0;\n    text-align: center; }\n\n.modal {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n  font-family: Lato;\n  font-style: normal; }\n  .modal .content {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;\n    padding: 20px 24px;\n    width: 468px;\n    height: 580px;\n    transform: scale(0.5);\n    transition: 0.4s all; }\n    .modal .content .title {\n      text-align: center;\n      font-weight: 600;\n      font-size: 22px;\n      line-height: 26px; }\n    .modal .content p {\n      margin: 15px 0 0 0;\n      text-align: center;\n      font-size: 18px;\n      line-height: 22px; }\n    .modal .content .input {\n      width: 100%;\n      border: 1px solid rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      height: 40px;\n      outline: none;\n      padding: 0 10px;\n      font-size: 16px; }\n    .modal .content .label {\n      margin: 10px 0 5px 0;\n      font-size: 16px;\n      line-height: 19px; }\n    .modal .content .error {\n      font-size: 12px;\n      color: #ff0000; }\n    .modal .content .check-wrapper {\n      margin: 10px 0 0 0; }\n      .modal .content .check-wrapper .check {\n        font-size: 18px; }\n    .modal .content .btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 269px;\n      height: 40px;\n      border-radius: 40px;\n      background: #42AF54;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 16px;\n      line-height: 19px;\n      color: #FBFBFB;\n      width: 100%;\n      margin-top: 15px;\n      height: 40px; }\n  .modal .content.active {\n    transform: scale(1);\n    transition: 0.4s all; }\n\n.active {\n  opacity: 1;\n  pointer-events: all; }\n\n.modal-wrapper {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n  font-family: Lato;\n  font-style: normal; }\n\n.show {\n  opacity: 1;\n  pointer-events: all; }\n\n.modal2 {\n  width: 300px;\n  position: absolute;\n  color: #FFFFFF;\n  top: -100%; }\n  .modal2 .content2 {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    background: #135458;\n    padding: 20px 24px;\n    width: 468px;\n    height: 580px; }\n    .modal2 .content2 .title {\n      text-align: center;\n      font-weight: 600;\n      font-size: 22px;\n      line-height: 26px; }\n    .modal2 .content2 p {\n      margin: 15px 0 0 0;\n      text-align: center;\n      font-size: 18px;\n      line-height: 22px; }\n    .modal2 .content2 .input {\n      width: 100%;\n      border: 1px solid rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      height: 40px;\n      outline: none;\n      padding: 0 10px;\n      font-size: 16px; }\n    .modal2 .content2 .label {\n      margin: 10px 0 5px 0;\n      font-size: 16px;\n      line-height: 19px; }\n    .modal2 .content2 .error {\n      font-size: 15px;\n      color: #f3ef07; }\n    .modal2 .content2 .check-wrapper {\n      margin: 10px 0 0 0; }\n      .modal2 .content2 .check-wrapper .check {\n        font-size: 18px; }\n    .modal2 .content2 .btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 269px;\n      height: 40px;\n      border-radius: 40px;\n      background: #42AF54;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 16px;\n      line-height: 19px;\n      color: #FBFBFB;\n      width: 100%;\n      margin-top: 15px;\n      height: 40px; }\n\n.down {\n  animation: deleteForm 1s forwards ease; }\n\n.up {\n  animation: showForm .5s forwards ease;\n  opacity: 1;\n  pointer-events: all; }\n\n@keyframes showForm {\n  0% {\n    top: 0;\n    right: -100%;\n    transform: translateX(-50%); }\n  100% {\n    top: 0;\n    right: 0;\n    transform: translateX(-55%); } }\n\n@keyframes deleteForm {\n  0% {\n    top: 0;\n    right: 0;\n    transform: translateX(-50%); }\n  30% {\n    right: -100%;\n    transform: translateX(-50%); }\n  100% {\n    top: -100%;\n    right: 0;\n    transform: translateX(-60%);\n    opacity: 0;\n    pointer-events: none; } }\n\n.mainPage .section-1 {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/cover;\n  width: 100%;\n  height: 600px;\n  padding-top: 331px; }\n  .mainPage .section-1 .title {\n    font-size: 32px;\n    line-height: 140%;\n    width: 511px; }\n\n.mainPage .section-2 {\n  margin: 80px 0; }\n  .mainPage .section-2 .container {\n    display: flex; }\n    .mainPage .section-2 .container .photo {\n      width: 570px;\n      height: 500px;\n      margin-right: 28px; }\n    .mainPage .section-2 .container .content .title {\n      color: #42AF54;\n      font-weight: 300;\n      font-size: 36px;\n      line-height: 140%; }\n    .mainPage .section-2 .container .content .text {\n      margin: 20px 0;\n      font-size: 18px;\n      line-height: 140%; }\n    .mainPage .section-2 .container .content .btn {\n      font-weight: 500;\n      font-size: 18px;\n      line-height: 150%;\n      color: #42AF54; }\n\n.mainPage .section-3 .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.mainPage .section-3 .views {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .mainPage .section-3 .views .view {\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 270px;\n    height: 320px;\n    border-radius: 10px;\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15); }\n    .mainPage .section-3 .views .view:hover {\n      transform: scale(1.1); }\n    .mainPage .section-3 .views .view .btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 269px;\n      height: 40px;\n      border-radius: 40px;\n      background: #42AF54;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 16px;\n      line-height: 19px;\n      color: #FBFBFB;\n      width: 170px; }\n\n.mainPage .section-3 .views .icon {\n  margin: 45px 0 37px 0;\n  width: 77px;\n  height: 100px; }\n\n.mainPage .section-3 .views .text {\n  margin-bottom: 38px; }\n\n.mainPage .section-4 {\n  margin: 80px 0; }\n  .mainPage .section-4 .container {\n    padding: 47px 80px 15px 140px;\n    height: 160px;\n    background: #42AF54;\n    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between; }\n    .mainPage .section-4 .container .text {\n      font-weight: 600;\n      font-size: 24px;\n      line-height: 140%;\n      color: #FFFFFF;\n      width: 500px; }\n    .mainPage .section-4 .container .btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 269px;\n      height: 40px;\n      border-radius: 40px;\n      background: #42AF54;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 16px;\n      line-height: 19px;\n      color: #FBFBFB;\n      background: #FFFFFF;\n      color: #42AF54;\n      margin-top: 8px; }\n\n.mainPage .section-5 .container .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.mainPage .section-5 .container .views {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .mainPage .section-5 .container .views .view {\n    width: 370px;\n    height: 341px;\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .mainPage .section-5 .container .views .view .photo {\n      width: 100%;\n      height: 171px;\n      object-fit: cover;\n      border-radius: 10px 10px 0 0; }\n    .mainPage .section-5 .container .views .view .text {\n      margin-top: 26px;\n      font-size: 16px;\n      line-height: 150%;\n      width: 291px; }\n\n.mainPage .section-6 {\n  display: flex;\n  justify-content: center;\n  margin: 40px 0 80px 0; }\n  .mainPage .section-6 .container {\n    position: relative; }\n    .mainPage .section-6 .container .video {\n      border-radius: 10px;\n      width: 970px;\n      height: 470px; }\n    .mainPage .section-6 .container .btn {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      cursor: pointer; }\n\n.worksPage .example .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.worksPage .example .examples {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .worksPage .example .examples .item {\n    margin: 40px 0; }\n    .worksPage .example .examples .item .item-block {\n      display: flex;\n      max-width: 568px;\n      height: 300px; }\n      .worksPage .example .examples .item .item-block .line {\n        border: 2px solid #363535;\n        height: 100%; }\n      .worksPage .example .examples .item .item-block .photo {\n        width: 50%;\n        height: 100%;\n        object-fit: cover; }\n    .worksPage .example .examples .item .name {\n      text-align: center;\n      font-size: 22px;\n      line-height: 140%; }\n\n.worksPage .section-1 .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.worksPage .section-1 p {\n  margin: 25px 0;\n  font-size: 18px;\n  line-height: 150%; }\n\n.worksPage .section-1 .views {\n  display: flex;\n  justify-content: space-between;\n  position: relative; }\n  .worksPage .section-1 .views .left, .worksPage .section-1 .views .right {\n    position: relative;\n    padding: 20px 50px 20px 100px;\n    max-width: 570px;\n    width: 100%;\n    height: 637px;\n    background: #FFFFFF;\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n    border-radius: 10px; }\n    .worksPage .section-1 .views .left .btn, .worksPage .section-1 .views .right .btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 269px;\n      height: 40px;\n      border-radius: 40px;\n      background: #42AF54;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 16px;\n      line-height: 19px;\n      color: #FBFBFB;\n      position: absolute;\n      bottom: 20px;\n      left: 50%;\n      transform: translateX(-50%);\n      font-size: 20px;\n      line-height: 24px; }\n    .worksPage .section-1 .views .left .view-wrapper .view-title, .worksPage .section-1 .views .right .view-wrapper .view-title {\n      font-weight: 500;\n      font-size: 19px;\n      line-height: 150%; }\n    .worksPage .section-1 .views .left .view-wrapper .view, .worksPage .section-1 .views .right .view-wrapper .view {\n      margin-top: 10px;\n      font-weight: normal;\n      font-size: 16px;\n      line-height: 150%; }\n\n.worksPage .section-2 .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.worksPage .section-2 .main-text {\n  font-size: 18px;\n  line-height: 150%;\n  margin-bottom: 20px; }\n\n.worksPage .section-2 .views {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .worksPage .section-2 .views .view {\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 270px;\n    height: 320px;\n    border-radius: 10px;\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15); }\n    .worksPage .section-2 .views .view:hover {\n      transform: scale(1.1); }\n    .worksPage .section-2 .views .view .btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 269px;\n      height: 40px;\n      border-radius: 40px;\n      background: #42AF54;\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 16px;\n      line-height: 19px;\n      color: #FBFBFB;\n      width: 170px; }\n\n.worksPage .section-2 .views .view {\n  padding: 0 22px; }\n  .worksPage .section-2 .views .view p {\n    font-size: 16px;\n    line-height: 150%; }\n  .worksPage .section-2 .views .view .icon {\n    margin: 17px 0 20px 0;\n    width: 56px;\n    height: 52px; }\n  .worksPage .section-2 .views .view .text {\n    margin-bottom: 15px; }\n  .worksPage .section-2 .views .view .item {\n    width: 100%;\n    font-size: 16px;\n    line-height: 150%;\n    margin-bottom: 8px; }\n\n.worksPage .section-2 .views-rec {\n  display: flex;\n  justify-content: center; }\n  .worksPage .section-2 .views-rec .view-rec {\n    margin: 10px 0 20px 0;\n    padding: 15px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    max-width: 970px;\n    width: 100%;\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n    border-radius: 10px; }\n    .worksPage .section-2 .views-rec .view-rec .icon {\n      margin-bottom: 6px; }\n    .worksPage .section-2 .views-rec .view-rec .item {\n      margin-top: 10px;\n      font-size: 16px;\n      line-height: 150%; }\n\n.worksPage .section-3 {\n  padding-left: 100px; }\n  .worksPage .section-3 .title {\n    margin-top: 80px;\n    text-align: center;\n    font-weight: 300;\n    font-size: 36px;\n    line-height: 140%;\n    color: #42AF54;\n    margin-bottom: 30px;\n    margin-bottom: 25px; }\n  .worksPage .section-3 .content {\n    display: flex;\n    justify-content: space-between; }\n    .worksPage .section-3 .content .left {\n      width: 300px; }\n    .worksPage .section-3 .content .right {\n      max-width: 670px;\n      width: 100%; }\n    .worksPage .section-3 .content .left, .worksPage .section-3 .content .right {\n      font-weight: 500;\n      font-size: 18px;\n      line-height: 22px; }\n      .worksPage .section-3 .content .left p, .worksPage .section-3 .content .right p {\n        font-size: 16px;\n        line-height: 150%; }\n        .worksPage .section-3 .content .left p:nth-child(2), .worksPage .section-3 .content .right p:nth-child(2) {\n          font-weight: bold;\n          margin-top: 20px; }\n  .worksPage .section-3 .content--2 {\n    margin-top: 50px; }\n\n.worksPage .section-4 {\n  margin-top: 80px; }\n  .worksPage .section-4 .container {\n    padding: 15px 100px 20px 100px;\n    height: 198px;\n    width: 100%;\n    background: #FFFFFF;\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n    border-radius: 10px; }\n    .worksPage .section-4 .container .title {\n      margin-top: 80px;\n      text-align: center;\n      font-weight: 300;\n      font-size: 36px;\n      line-height: 140%;\n      color: #42AF54;\n      margin-bottom: 30px;\n      margin-top: 0; }\n    .worksPage .section-4 .container .text {\n      font-size: 18px;\n      line-height: 140%; }\n\n.aboutPage img {\n  border-radius: 10px; }\n\n.aboutPage .text {\n  font-size: 18px;\n  line-height: 140%; }\n\n.aboutPage .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.aboutPage .section-1 .selected {\n  width: 100%;\n  height: 550px;\n  object-fit: cover;\n  margin-bottom: 20px; }\n\n.aboutPage .section-1 .images {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .aboutPage .section-1 .images .item {\n    width: 170px;\n    height: 140px;\n    object-fit: cover;\n    cursor: pointer; }\n\n.aboutPage .section-1 .awards {\n  margin: 40px 0 20px 0;\n  height: 800px; }\n\n.aboutPage .section-2 .teams {\n  width: 100%;\n  height: 450px; }\n\n.aboutPage .teams-wrapper {\n  display: flex;\n  justify-content: space-between; }\n  .aboutPage .teams-wrapper .left, .aboutPage .teams-wrapper .right {\n    max-width: 570px;\n    width: 100%; }\n  .aboutPage .teams-wrapper img {\n    width: 100%;\n    height: 350px;\n    margin: 40px 0 20px 0; }\n\n.galleryPage .text {\n  font-size: 18px;\n  line-height: 150%;\n  margin-bottom: 40px; }\n\n.galleryPage .gallery-1 .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.galleryPage .gallery-1 .photos {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .galleryPage .gallery-1 .photos .photo {\n    max-width: 570px;\n    height: 300px;\n    border-radius: 10px; }\n\n.galleryPage .gallery-2 .title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: #42AF54;\n  margin-bottom: 30px; }\n\n.galleryPage .gallery-2 .gallery {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .galleryPage .gallery-2 .gallery .item {\n    margin: 40px 0; }\n    .galleryPage .gallery-2 .gallery .item .item-block {\n      display: flex;\n      max-width: 568px;\n      height: 300px; }\n      .galleryPage .gallery-2 .gallery .item .item-block .line {\n        border: 2px solid #363535;\n        height: 100%; }\n      .galleryPage .gallery-2 .gallery .item .item-block .photo {\n        width: 50%;\n        height: 100%;\n        object-fit: cover; }\n    .galleryPage .gallery-2 .gallery .item .name {\n      text-align: center;\n      font-size: 22px;\n      line-height: 140%; }\n", "",{"version":3,"sources":["webpack://src/assets/style/Header.scss","webpack://src/assets/style/Variables.scss","webpack://src/assets/style/Templates.scss","webpack://src/assets/style/Initial.scss","webpack://src/assets/style/Footer.scss","webpack://src/assets/style/Modal.scss","webpack://src/assets/style/MainPage.scss","webpack://src/assets/style/WorksPage.scss","webpack://src/assets/style/AboutPage.scss","webpack://src/assets/style/Gallery.scss"],"names":[],"mappings":"AAGA;EACE,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB,EAAA;EANpB;IAQI,mDAAkC;IAClC,YAAY;IACZ,YAAY;IACZ,kBAAkB,EAAA;EAXtB;IAcI,WAAW;IACX,YAAY,EAAA;IAfhB;MAiBM,aAAa;MACb,yBAAyB;MACzB,qBAAqB,EAAA;MAnB3B;QAqBQ,kBAAkB;QAClB,kBAAkB,EAAA;QAtB1B;UAwBU,cC3BU,EAAA;QDGpB;UA2BU,aAAa,EAAA;QA3BvB;UA8BU,kBAAkB;UAClB,kBAAkB;UAClB,eAAe;UACf,iBAAiB,EAAA;UAjC3B;YAmCY,0BAAyB;YACzB,UAAU;YACV,mBAAmB,EAAA;UArC/B;YAwCU,eAAe,EAAA;YAxCzB;cA0CY,cC7CQ,EAAA;UDGpB;YA8CY,kBAAkB;YAClB,SAAS;YACT,OAAO;YACP,YAAY;YACZ,sBAAsB;YACtB,uBAAoC;YACpC,2BAA2B;YAC3B,UAAU;YACV,oBAAoB;YACpB,gBAAgB,EAAA;YAvD5B;cAyDc,kBAAkB,EAAA;YAzDhC;cA4Dc,aAAa;cACb,8BAA8B;cAC9B,eAAe;cACf,WAAW,EAAA;QA/DzB;UAoEU,eAAe,EAAA;IApEzB;MAyEM,aAAa;MACb,yBAAyB;MACzB,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,mBAAmB,EAAA;MA9EzB;QAgFQ,kBAAkB,EAAA;MAhF1B;QAmFQ,qCAAqC;QACrC,YAAY;QACZ,cAAc,EAAA;MArFtB;QAwFQ,aAAa;QACb,mBAAmB,EAAA;MAzF3B;QA6FU,aAAa;QACb,mBAAmB,EAAA;QA9F7B;UAgGY,YAAY;UACZ,iBAAiB,EAAA;QAjG7B;UAoGY,YAAY;UACZ,iBAAiB,EAAA;MArG7B;QA0GQ,kBAAkB,EAAA;QA1G1B;UA4GU,iBAAiB,EAAA;QA5G3B;UA+GU,wBAAuB;UAGvB,gBAAe;UACf,UAAS;UACT,gBAAe;UACf,oCAAuC;UAEvC,sBAAsB;UACtB,cAAa;UACb,YAAY;UACZ,mBAAmB;UACnB,eAAc;UACd,eAAe;UACf,kBAAkB,EAAA;QA7H5B;UAgIU,aAAa,EAAA;QAhIvB;UAmIU,kBAAkB;UAClB,aAAa;UACb,iBAAiB,EAAA;EArI3B;IEAI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,mBDTgB;ICUhB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,cAAc,EAAA;;ACflB;EACI,sBAAsB,EAAA;;AAExB;EACE,YAAY,EAAA;;AAEd;EAGE,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,YAAY;EAmBZ,kBAAkB;EAClB,gBAAgB,EAAA;EA5BlB;IAUI,gBAAgB;IAChB,SAAS;IACT,UAAU,EAAA;EAZd;IAeI,SAAS,EAAA;EAfb;IAkBI,qBAAqB;IACrB,cAAc;IACd,QAAQ,EAAA;EApBZ;IAuBI,iBAAiB;IACjB,eAAe;IACf,cAAc,EAAA;EAzBlB;IA8BI,WAAW;IACX,iBAAiB,EAAA;;AClCvB;EACE,mBHHkB;EGIlB,cAAc,EAAA;EACd;IACE,sBAAsB,EAAA;IADvB;MAGG,aAAa;MACb,8BAA8B;MAC9B,oCAAoC,EAAA;MALvC;QAOK,YAAY;QACZ,YAAY,EAAA;MARjB;QAWK,aAAa;QACb,sBAAsB;QACtB,kBAAkB;QAClB,gBAAgB;QAChB,eAAe,EAAA;QAfpB;UAiBO,eAAe;UACf,gBAAgB;UAChB,gBAAgB,EAAA;MAnBvB;QAwBO,qBAAqB;QACrB,WAAW,EAAA;MAzBlB;QA8BO,qBAAqB;QACrB,WAAW,EAAA;MA/BlB;QAmCK,YAAY,EAAA;QAnCjB;UAqCO,gBAAgB;UAChB,kBAAkB;UAClB,aAAa;UACb,WAAW;UACX,YAAY,EAAA;QAzCnB;UA4CO,eAAe,EAAA;EAKvB;IACE,8CAA8C;IAC9C,sBAAsB;IACtB,kBAAkB,EAAA;;ACvDtB;EACE,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,oBAAoB;EACpB,UAAU;EACV,iBAAiB;EACjB,kBAAkB,EAAA;EAdpB;IAgBI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,qFAAqF;IACrF,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,oBAAoB,EAAA;IAzBxB;MA2BM,kBAAkB;MAClB,gBAAgB;MAChB,eAAe;MACf,iBAAiB,EAAA;IA9BvB;MAiCM,kBAAkB;MAClB,kBAAkB;MAClB,eAAe;MACf,iBAAiB,EAAA;IApCvB;MAuCM,WAAW;MACX,oCAAoC;MACpC,mBAAmB;MACnB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe,EAAA;IA7CrB;MAgDM,oBAAoB;MACpB,eAAe;MACf,iBAAiB,EAAA;IAlDvB;MAqDM,eAAe;MACf,cAAc,EAAA;IAtDpB;MAyDM,kBAAkB,EAAA;MAzDxB;QA2DQ,eAAe,EAAA;IA3DvB;MHAI,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,YAAY;MACZ,YAAY;MACZ,mBAAmB;MACnB,mBDTgB;MCUhB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,cAAc;MGoDZ,WAAW;MACX,gBAAgB;MAChB,YAAY,EAAA;EAlElB;IAsEI,mBAAmB;IACnB,oBAAoB,EAAA;;AAIxB;EACE,UAAU;EACV,mBAAmB,EAAA;;AAGrB;EACE,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,eAAe;EACf,MAAM;EACN,OAAO;EACP,UAAU;EACV,oBAAoB;EACpB,UAAU;EACV,iBAAiB;EACjB,kBAAkB,EAAA;;AAEpB;EACE,UAAU;EACV,mBAAmB,EAAA;;AAErB;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,UAAU,EAAA;EAJZ;IAMI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,mBJ7GgB;II8GhB,kBAAkB;IAClB,YAAY;IACZ,aAAa,EAAA;IAbjB;MAeM,kBAAkB;MAClB,gBAAgB;MAChB,eAAe;MACf,iBAAiB,EAAA;IAlBvB;MAqBM,kBAAkB;MAClB,kBAAkB;MAClB,eAAe;MACf,iBAAiB,EAAA;IAxBvB;MA2BM,WAAW;MACX,oCAAoC;MACpC,mBAAmB;MACnB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe,EAAA;IAjCrB;MAoCM,oBAAoB;MACpB,eAAe;MACf,iBAAiB,EAAA;IAtCvB;MAyCM,eAAe;MACf,cAAc,EAAA;IA1CpB;MA6CM,kBAAkB,EAAA;MA7CxB;QA+CQ,eAAe,EAAA;IA/CvB;MHjGI,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,YAAY;MACZ,YAAY;MACZ,mBAAmB;MACnB,mBDTgB;MCUhB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,cAAc;MGyIZ,WAAW;MACX,gBAAgB;MAChB,YAAY,EAAA;;AAKlB;EACE,sCAAsC,EAAA;;AAExC;EACE,qCAAqC;EACrC,UAAU;EACV,mBAAmB,EAAA;;AAGrB;EACE;IACE,MAAM;IACN,YAAY;IACZ,2BAA2B,EAAA;EAE7B;IACE,MAAM;IACN,QAAQ;IACR,2BAA2B,EAAA,EAAA;;AAI/B;EACE;IACE,MAAM;IACN,QAAQ;IACR,2BAA2B,EAAA;EAE7B;IAEE,YAAY;IACZ,2BAA2B,EAAA;EAE7B;IACE,UAAU;IACV,QAAQ;IACR,2BAA2B;IAC3B,UAAU;IACV,oBAAoB,EAAA,EAAA;;AClMxB;EAEI,gEAAkD;EAClD,WAAW;EACX,aAAa;EACb,kBAAkB,EAAA;EALtB;IAOQ,eAAe;IACf,iBAAiB;IACjB,YAAY,EAAA;;AATpB;EAaI,cAAc,EAAA;EAblB;IAeM,aAAa,EAAA;IAfnB;MAiBQ,YAAY;MACZ,aAAa;MACb,kBAAkB,EAAA;IAnB1B;MAuBU,cL1BU;MK2BV,gBAAgB;MAChB,eAAe;MACf,iBAAiB,EAAA;IA1B3B;MA6BU,cAAc;MACd,eAAe;MACf,iBAAiB,EAAA;IA/B3B;MAkCU,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,cLxCU,EAAA;;AKGpB;EJgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AA4BnB;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe,EAAA;EACf;IAIE,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,4CDlEmC,EAAA;ICmEnC;MAGE,qBAAqB,EAAA;IAEvB;MAvEF,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,YAAY;MACZ,YAAY;MACZ,mBAAmB;MACnB,mBDTgB;MCUhB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,cAAc;MA6DV,YAAY,EAAA;;AIzEpB;EAiDQ,qBAAqB;EACrB,WAAW;EACX,aAAa,EAAA;;AAnDrB;EAsDQ,mBACF,EAAA;;AAvDN;EA2DI,cAAc,EAAA;EA3DlB;IA6DM,6BAA6B;IAC7B,aAAa;IACb,mBLlEc;IKmEd,4CAA4C;IAC5C,mBAAmB;IACnB,aAAa;IACb,8BAA8B,EAAA;IAnEpC;MAqEQ,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,cAAc;MACd,YAAY,EAAA;IAzEpB;MJAI,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,YAAY;MACZ,YAAY;MACZ,mBAAmB;MACnB,mBDTgB;MCUhB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,cAAc;MIiEV,mBAAmB;MACnB,cLjFY;MKkFZ,eAAe,EAAA;;AA/EvB;EJgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AItBrB;EAyFQ,aAAa;EACb,8BAA8B;EAC9B,eAAe,EAAA;EA3FvB;IA6FU,YAAY;IACZ,aAAa;IACb,4CLhG+B;IKiG/B,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB,EAAA;IAnG7B;MAqGY,WAAW;MACX,aAAa;MACb,iBAAiB;MACjB,4BAA4B,EAAA;IAxGxC;MA2GY,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,YAAY,EAAA;;AA9GxB;EAqHI,aAAa;EACb,uBAAuB;EACvB,qBAAqB,EAAA;EAvHzB;IAyHM,kBAAkB,EAAA;IAzHxB;MA2HQ,mBAAmB;MACnB,YAAY;MACZ,aAAa,EAAA;IA7HrB;MAgIQ,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,gCAAgC;MAChC,eAAe,EAAA;;ACpIvB;ELgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AKtBrB;EAMK,aAAa;EACb,8BAA8B;EAC9B,eAAe,EAAA;ELkBlB;IACE,cAAc,EAAA;IACf;MACE,aAAa;MACb,gBAAgB;MAChB,aAAa,EAAA;MACb;QACE,yBAAyB;QACzB,YAAY,EAAA;MAEd;QACE,UAAU;QACV,YAAY;QACZ,iBAAiB,EAAA;IAGrB;MACE,kBAAkB;MAClB,eAAe;MACf,iBAAiB,EAAA;;AK7CtB;ELgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AKtBrB;EAiBM,cAAc;EACd,eAAe;EACf,iBAAiB,EAAA;;AAnBvB;EAsBM,aAAa;EACb,8BAA8B;EAC9B,kBAAkB,EAAA;EAxBxB;IA0BQ,kBAAkB;IAClB,6BAA6B;IAC7B,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,4CAA4C;IAC5C,mBAAmB,EAAA;IAjC3B;MLAI,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,YAAY;MACZ,YAAY;MACZ,mBAAmB;MACnB,mBDTgB;MCUhB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,cAAc;MKwBR,kBAAkB;MAClB,YAAY;MACZ,SAAS;MACT,2BAA2B;MAC3B,eAAe;MACf,iBAAiB,EAAA;IAzC3B;MA6CY,gBAAgB;MAChB,eAAe;MACf,iBAAiB,EAAA;IA/C7B;MAkDY,gBAAgB;MAChB,mBAAmB;MACnB,eAAe;MACf,iBAAiB,EAAA;;AArD7B;ELgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AKtBrB;EAgEM,eAAe;EACf,iBAAiB;EACjB,mBACF,EAAA;;ALjBF;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe,EAAA;EACf;IAIE,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,4CDlEmC,EAAA;ICmEnC;MAGE,qBAAqB,EAAA;IAEvB;MAvEF,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,YAAY;MACZ,YAAY;MACZ,mBAAmB;MACnB,mBDTgB;MCUhB,YAAY;MACZ,aAAa;MACb,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,cAAc;MA6DV,YAAY,EAAA;;AKzEpB;EAuEQ,eAAe,EAAA;EAvEvB;IAyEU,eAAe;IACf,iBAAiB,EAAA;EA1E3B;IA6EU,qBAAqB;IACrB,WAAW;IACX,YAAY,EAAA;EA/EtB;IAkFU,mBACF,EAAA;EAnFR;IAqFU,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,kBAAkB,EAAA;;AAxF5B;EA6FM,aAAa;EACb,uBAAuB,EAAA;EA9F7B;IAgGQ,qBAAqB;IACrB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;IACX,4CAA4C;IAC5C,mBAAmB,EAAA;IAzG3B;MA2GU,kBAAkB,EAAA;IA3G5B;MA8GU,gBAAgB;MAChB,eAAe;MACf,iBAAiB,EAAA;;AAhH3B;EAsHI,mBAAmB,EAAA;EAtHvB;ILgBE,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cDxBkB;ICyBlB,mBAAmB;IKmGf,mBAAmB,EAAA;EAzHzB;IA4HM,aAAa;IACb,8BAA8B,EAAA;IA7HpC;MA+HQ,YAAY,EAAA;IA/HpB;MAkIQ,gBAAgB;MAChB,WAAW,EAAA;IAnInB;MAsIQ,gBAAgB;MAChB,eAAe;MACf,iBAAiB,EAAA;MAxIzB;QA0IU,eAAe;QACf,iBAAiB,EAAA;QA3I3B;UA6IY,iBAAiB;UACjB,gBAAgB,EAAA;EA9I5B;IAoJM,gBAAgB,EAAA;;AApJtB;EAwJI,gBAAgB,EAAA;EAxJpB;IA0JM,8BAA8B;IAC9B,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,4CAA4C;IAC5C,mBAAmB,EAAA;IA/JzB;MLgBE,gBAAgB;MAChB,kBAAkB;MAClB,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,cDxBkB;MCyBlB,mBAAmB;MK4Ib,aAAa,EAAA;IAlKrB;MAqKQ,eAAe;MACf,iBAAiB,EAAA;;ACtKzB;EAEI,mBAAmB,EAAA;;AAFvB;EAKI,eAAe;EACf,iBAAiB,EAAA;;AANrB;ENgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AMtBrB;EAaM,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,mBAAmB,EAAA;;AAhBzB;EAmBM,aAAa;EACb,8BAA8B;EAC9B,eAAe,EAAA;EArBrB;IAuBQ,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,eAAe,EAAA;;AA1BvB;EA8BM,qBAAqB;EACrB,aAAa,EAAA;;AA/BnB;EAoCM,WAAW;EACX,aAAa,EAAA;;AArCnB;EAyCI,aAAa;EACb,8BAA8B,EAAA;EA1ClC;IA4CM,gBAAgB;IAChB,WAAW,EAAA;EA7CjB;IAgDM,WAAW;IACX,aAAa;IACb,qBAAqB,EAAA;;AClD3B;EAEI,eAAe;EACf,iBAAiB;EACjB,mBAAmB,EAAA;;AAJvB;EPgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AOtBrB;EAWM,aAAa;EACb,8BAA8B;EAC9B,eAAe,EAAA;EAbrB;IAeQ,gBAAgB;IAChB,aAAa;IACb,mBAAmB,EAAA;;AAjB3B;EPgBE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cDxBkB;ECyBlB,mBAAmB,EAAA;;AOtBrB;EA0BM,aAAa;EACb,8BAA8B;EAC9B,eAAe,EAAA;EPFnB;IACE,cAAc,EAAA;IACf;MACE,aAAa;MACb,gBAAgB;MAChB,aAAa,EAAA;MACb;QACE,yBAAyB;QACzB,YAAY,EAAA;MAEd;QACE,UAAU;QACV,YAAY;QACZ,iBAAiB,EAAA;IAGrB;MACE,kBAAkB;MAClB,eAAe;MACf,iBAAiB,EAAA","sourcesContent":["@import './Variables.scss';\n@import './Templates.scss';\n\n.header {\n  padding: 14px 0 12px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  font-family: Lato;\n  font-style: normal;\n  .logo {\n    background: url('../img/logo.png');\n    width: 270px;\n    height: 98px;\n    margin-bottom: 8px;\n  }\n  .content {\n    width: auto;\n    height: 100%;\n    .navigation {\n      display: flex;\n      justify-content: flex-end;\n      align-items: flex-end;\n      .nav {\n        margin-bottom: 8px;\n        margin-right: 50px;\n        .active {\n          color: $lightGreen;\n        }\n        ul {\n          display: flex;\n        }\n        .item {\n          position: relative;\n          margin-right: 20px;\n          font-size: 20px;\n          line-height: 24px;\n          &:hover > .dropdown {\n            transform: translate(0,0);\n            opacity: 1;\n            pointer-events: all;\n          }\n         .link {\n          transition: .5s;\n          &:hover {\n            color: $lightGreen;\n          }\n         }\n          .dropdown {\n            position: absolute;\n            top: 100%;\n            left: 0;\n            width: 290px;\n            padding: 8px 8px 0 8px;\n            background-color: rgb(255, 255, 255);\n            transform: translateY(10px);\n            opacity: 0;\n            pointer-events: none;\n            transition: 0.5s;\n            &-item {\n              margin-bottom: 8px;\n            }\n            &-item > a {\n              display: flex;\n              justify-content: space-between;\n              font-size: 20px;\n              width: 100%;\n            }\n          }\n        }\n        .end {\n          margin-right: 0;\n        }\n      }\n    }\n    .contacts {\n      display: flex;\n      justify-content: flex-end;\n      font-weight: 300;\n      font-size: 15px;\n      line-height: 18px;\n      margin-bottom: 28px;\n      .faq {\n        margin-right: 22px;\n      }\n      .line {\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        height: 40px;\n        margin: 0 10px;\n      }\n      &-left, &-right {\n        display: flex;\n        align-items: center;\n      }\n      &-left {\n        .item {\n          display: flex;\n          align-items: center;\n          .address {\n            width: 162px;\n            margin-left: 10px;\n          }\n          .phone {\n            width: 126px;\n            margin-left: 10px;\n          }\n        }\n      }\n      &-right {\n        margin-left: 120px;\n        .item {\n          margin-left: 20px;\n        }\n        select {\n          -webkit-appearance:none;\n          -moz-appearance:none;\n          -ms-appearance:none;\n          appearance:none;\n          outline:0;\n          box-shadow:none;\n          border:1px solid $lightGreen !important;\n          // background: $lightGreen;\n          background-image: none;\n          color:#0A0816;;\n          padding: 5px;\n          border-radius: 20px;\n          cursor:pointer;\n          font-size: 14px;\n          text-align: center;\n        }\n        select::-ms-expand {\n          display: none;\n        }\n        .select {\n          position: relative;\n          display: flex;\n          margin-left: 25px;\n        }\n        \n      }\n    }\n  }\n  .btn {\n    @include btn\n  }\n}\n","$lightGreen: #42AF54;\n$darkGreen:  #135458;\n$shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);","@import './Variables.scss';\n\n@mixin btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 269px;\n    height: 40px;\n    border-radius: 40px;\n    background: $lightGreen;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 19px;\n    color: #FBFBFB;\n}\n\n@mixin title {\n  margin-top: 80px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 140%;\n  color: $lightGreen;\n  margin-bottom: 30px;\n}\n\n@mixin  example {\n  .item {\n    margin: 40px 0;\n   .item-block{\n     display: flex;\n     max-width: 568px;\n     height: 300px;\n     .line {\n       border: 2px solid #363535;\n       height: 100%;\n     }\n     .photo {\n       width: 50%;\n       height: 100%;\n       object-fit: cover;\n     }\n   }\n   .name {\n     text-align: center;\n     font-size: 22px;\n     line-height: 140%;\n   }\n  }\n}\n@mixin  views {\n  .views {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    .view {\n      -webkit-transition: all 0.3s ease;;\n      -moz-transition: all 0.3s ease;;\n      -o-transition: all 0.3s ease;;\n      transition: all 0.3s ease;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 270px;\n      height: 320px;\n      border-radius: 10px;\n      box-shadow: $shadow;\n      &:hover {\n        -webkit-transform: scale(1.1);\n        -ms-transform: scale(1.1);\n        transform: scale(1.1);\n      }\n      .btn {\n        @include btn;\n        width: 170px;\n      }\n    }\n  }\n}","* {\n    box-sizing: border-box;\n  }\n  html {\n    height: 100%;\n  }\n  body {\n    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');\n    margin: 0;\n    font-family: Lato;\n    font-style: normal;\n    font-size: 16px;\n    font-weight: normal;\n    height: 100%;\n    ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n    }\n    h1, h2, p {\n      margin: 0;\n    }\n    a {\n      text-decoration: none;\n      color: inherit;\n      width: 0;\n    }\n    .container{\n      max-width: 1200px;\n      padding: 0 15px;\n      margin: 0 auto;\n    }\n    position: relative;\n    min-height: 100%;\n    .clinic-photo {\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n  \n  \n  ","@import './Variables.scss';\n@import './Templates.scss';\n\n.footer {\n  background: $darkGreen;\n  color: #FFFFFF;\n  &-top {\n    padding: 30px 0 20px 0;\n    .container {\n      display: flex;\n      justify-content: space-between;\n      font-family: 'Open Sans', sans-serif;\n      .logo {\n        width: 270px;\n        height: 98px;\n      }\n      .nav-1, .nav-2, .nav-3 {\n        display: flex;\n        flex-direction: column;\n        font-style: normal;\n        font-weight: 600;\n        font-size: 20px;\n        .item {\n          font-size: 18px;\n          font-weight: 400;\n          margin-top: 10px;\n        }\n      }\n      .nav-1 {\n        .item {\n          display: inline-block;\n          width: 100%;\n        }\n      }\n      .nav-2 {\n        .item {\n          display: inline-block;\n          width: 100%;\n        }\n      }\n      .nav-3 {\n        width: 172px;\n        .icon {\n          margin-top: 20px;\n          margin-right: 30px;\n          fill: #FFFFFF;\n          width: 30px;\n          height: 30px;\n        }\n        .instagram {\n          margin-right: 0;\n        }\n      }\n    }\n  }\n  &-bottom {\n    border-top: 1px solid rgba(255, 255, 255, 0.3);\n    padding: 20px 0 23px 0;\n    text-align: center;\n  }\n}","@import './Templates.scss';\n@import './Variables.scss';\n\n.modal {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n  font-family: Lato;\n  font-style: normal;\n  .content {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;\n    padding: 20px 24px;\n    width: 468px;\n    height: 580px;\n    transform: scale(0.5);\n    transition: 0.4s all;\n    .title {\n      text-align: center;\n      font-weight: 600;\n      font-size: 22px;\n      line-height: 26px;\n    }\n    p {\n      margin: 15px 0 0 0;\n      text-align: center;\n      font-size: 18px;\n      line-height: 22px;\n    }\n    .input {\n      width: 100%;\n      border: 1px solid rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      height: 40px;\n      outline: none;\n      padding: 0 10px;\n      font-size: 16px;\n    }\n    .label {\n      margin: 10px 0 5px 0;\n      font-size: 16px;\n      line-height: 19px;\n    }\n    .error {\n      font-size: 12px;\n      color: #ff0000;\n    }\n    .check-wrapper {\n      margin: 10px 0 0 0;\n      .check {\n        font-size: 18px;\n      }\n    }\n    .btn {\n      @include btn;\n      width: 100%;\n      margin-top: 15px;\n      height: 40px;\n    }\n  }\n  .content.active {\n    transform: scale(1);\n    transition: 0.4s all;\n  }\n}\n\n.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.modal-wrapper {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n  font-family: Lato;\n  font-style: normal;\n}\n.show {\n  opacity: 1;\n  pointer-events: all;\n}\n.modal2 {\n  width: 300px;\n  position: absolute;\n  color: #FFFFFF;\n  top: -100%;\n  .content2 {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 10px;\n    background: $darkGreen;\n    padding: 20px 24px;\n    width: 468px;\n    height: 580px;\n    .title {\n      text-align: center;\n      font-weight: 600;\n      font-size: 22px;\n      line-height: 26px;\n    }\n    p {\n      margin: 15px 0 0 0;\n      text-align: center;\n      font-size: 18px;\n      line-height: 22px;\n    }\n    .input {\n      width: 100%;\n      border: 1px solid rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      height: 40px;\n      outline: none;\n      padding: 0 10px;\n      font-size: 16px;\n    }\n    .label {\n      margin: 10px 0 5px 0;\n      font-size: 16px;\n      line-height: 19px;\n    }\n    .error {\n      font-size: 15px;\n      color: #f3ef07;\n    }\n    .check-wrapper {\n      margin: 10px 0 0 0;\n      .check {\n        font-size: 18px;\n      }\n    }\n    .btn {\n      @include btn;\n      width: 100%;\n      margin-top: 15px;\n      height: 40px;\n    }\n  }\n}\n\n.down {\n  animation: deleteForm 1s forwards ease;\n}\n.up {\n  animation: showForm .5s forwards ease;\n  opacity: 1;\n  pointer-events: all;\n  }\n\n@keyframes showForm {\n  0% {\n    top: 0;\n    right: -100%;\n    transform: translateX(-50%);\n  }\n  100% {\n    top: 0;\n    right: 0;\n    transform: translateX(-55%);\n  }\n}  \n\n@keyframes deleteForm {\n  0% {\n    top: 0;\n    right: 0;\n    transform: translateX(-50%);\n  }\n  30% {\n    // top: -100%;\n    right: -100%;\n    transform: translateX(-50%);\n  }\n  100% {\n    top: -100%;\n    right: 0;\n    transform: translateX(-60%);\n    opacity: 0;\n    pointer-events: none;\n  }\n}  \n\n\n\n","@import './Templates.scss';\n@import './Variables.scss';\n\n.mainPage {\n  .section-1{\n    background: url('../img/photo-1.png') center/cover;\n    width: 100%;\n    height: 600px;\n    padding-top: 331px;\n      .title {\n        font-size: 32px;\n        line-height: 140%;\n        width: 511px;\n      }\n  }\n  .section-2 {\n    margin: 80px 0;\n    .container {\n      display: flex;\n      .photo {\n        width: 570px;\n        height: 500px;\n        margin-right: 28px;\n      }\n      .content {\n        .title {\n          color: $lightGreen;\n          font-weight: 300;\n          font-size: 36px;\n          line-height: 140%;\n        }\n        .text {\n          margin: 20px 0;\n          font-size: 18px;\n          line-height: 140%;\n        }\n        .btn {\n          font-weight: 500;\n          font-size: 18px;\n          line-height: 150%;\n          color: $lightGreen;\n        }\n      }\n    }\n  }\n  .section-3 {\n    .title {\n      @include title\n    }\n    @include views;\n    .views {\n      .icon {\n        margin: 45px 0 37px 0;\n        width: 77px;\n        height: 100px;\n      }\n      .text {\n        margin-bottom: 38px\n      }\n    }\n  }\n  .section-4 {\n    margin: 80px 0;\n    .container {\n      padding: 47px 80px 15px 140px;\n      height: 160px;\n      background: $lightGreen;\n      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);\n      border-radius: 10px;\n      display: flex;\n      justify-content: space-between;\n      .text {\n        font-weight: 600;\n        font-size: 24px;\n        line-height: 140%;\n        color: #FFFFFF;\n        width: 500px;\n      }\n      .btn {\n        @include btn;\n        background: #FFFFFF;\n        color: $lightGreen;\n        margin-top: 8px;\n      }\n    }\n  }\n  .section-5 {\n    .container {\n      .title {\n        @include title\n      }\n      .views {\n        display: flex;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        .view {\n          width: 370px;\n          height: 341px;\n          box-shadow: $shadow;\n          border-radius: 10px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          .photo {\n            width: 100%;\n            height: 171px;\n            object-fit: cover;\n            border-radius: 10px 10px 0 0;\n          }\n          .text {\n            margin-top: 26px;\n            font-size: 16px;\n            line-height: 150%;\n            width: 291px;\n          }\n        }\n      }\n    }\n  }\n  .section-6 {\n    display: flex;\n    justify-content: center;\n    margin: 40px 0 80px 0;\n    .container {\n      position: relative;\n      .video {\n        border-radius: 10px;\n        width: 970px;\n        height: 470px;\n      }\n      .btn {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        cursor: pointer;\n      }\n    }\n  }\n}","@import './Templates.scss';\n@import './Variables.scss';\n\n.worksPage {\n  .example {\n    .title {\n      @include title\n    }\n   .examples {\n     display: flex;\n     justify-content: space-between;\n     flex-wrap: wrap;\n     @include example\n   }\n  }\n  .section-1 {\n    .title {\n      @include title\n    }\n    p {\n      margin: 25px 0;\n      font-size: 18px;\n      line-height: 150%;\n    }\n    .views {\n      display: flex;\n      justify-content: space-between;\n      position: relative;\n      .left, .right {\n        position: relative;\n        padding: 20px 50px 20px 100px;\n        max-width: 570px;\n        width: 100%;\n        height: 637px;\n        background: #FFFFFF;\n        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n        border-radius: 10px;\n        .btn {\n          @include btn;\n          position: absolute;\n          bottom: 20px;\n          left: 50%;\n          transform: translateX(-50%);\n          font-size: 20px;\n          line-height: 24px;\n        }\n        .view-wrapper {\n          .view-title {\n            font-weight: 500;\n            font-size: 19px;\n            line-height: 150%;\n          }\n          .view {\n            margin-top: 10px;\n            font-weight: normal;\n            font-size: 16px;\n            line-height: 150%;\n          }\n        }\n      }\n    }\n  }\n  .section-2 {\n    .title {\n      @include title\n    }\n    .main-text {\n      font-size: 18px;\n      line-height: 150%;\n      margin-bottom: 20px\n    }\n    @include views;\n    .views {\n      .view {\n        padding: 0 22px;\n        p {\n          font-size: 16px;\n          line-height: 150%;\n        }\n        .icon {\n          margin: 17px 0 20px 0;\n          width: 56px;\n          height: 52px;\n        }\n        .text {\n          margin-bottom: 15px\n        }\n        .item {\n          width: 100%;\n          font-size: 16px;\n          line-height: 150%;\n          margin-bottom: 8px;\n        }\n      }\n    }\n    .views-rec {\n      display: flex;\n      justify-content: center;\n      .view-rec {\n        margin: 10px 0 20px 0;\n        padding: 15px 0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        max-width: 970px;\n        width: 100%;\n        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n        border-radius: 10px;\n        .icon {\n          margin-bottom: 6px;\n        }\n        .item {\n          margin-top: 10px;\n          font-size: 16px;\n          line-height: 150%;\n        }\n      }\n    }\n  }\n  .section-3 {\n    padding-left: 100px;\n    .title {\n      @include title;\n      margin-bottom: 25px;\n    }\n    .content {\n      display: flex;\n      justify-content: space-between;\n      .left {\n        width: 300px;\n      }\n      .right {\n        max-width: 670px;\n        width: 100%;\n      }\n      .left, .right {\n        font-weight: 500;\n        font-size: 18px;\n        line-height: 22px;\n        p {\n          font-size: 16px;\n          line-height: 150%;\n          &:nth-child(2) {\n            font-weight: bold;\n            margin-top: 20px;\n          }\n        }\n      }\n    }\n    .content--2 {\n      margin-top: 50px;\n    }\n  }\n  .section-4 {\n    margin-top: 80px;\n    .container {\n      padding: 15px 100px 20px 100px;\n      height: 198px;\n      width: 100%;\n      background: #FFFFFF;\n      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n      border-radius: 10px;\n      .title {\n        @include title;\n        margin-top: 0;\n      }\n      .text {\n        font-size: 18px;\n        line-height: 140%;\n      }\n    }\n  }\n}","@import './Templates.scss';\n@import './Variables.scss';\n\n.aboutPage {\n  img {\n    border-radius: 10px;\n  }\n  .text {\n    font-size: 18px;\n    line-height: 140%;\n  }\n  .title {\n    @include title\n  }\n  .section-1 {\n    .selected {\n      width: 100%;\n      height: 550px;\n      object-fit: cover;\n      margin-bottom: 20px;\n    }\n    .images {\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      .item {\n        width: 170px;\n        height: 140px;\n        object-fit: cover;\n        cursor: pointer;\n      }\n    }\n    .awards {\n      margin: 40px 0 20px 0;\n      height: 800px;\n    }\n  }\n  .section-2 {\n    .teams {\n      width: 100%;\n      height: 450px;\n    }\n  }\n  .teams-wrapper {\n    display: flex;\n    justify-content: space-between;\n    .left, .right {\n      max-width: 570px;\n      width: 100%;\n    }\n    img {\n      width: 100%;\n      height: 350px;\n      margin: 40px 0 20px 0;\n    }\n  }\n}","@import './Templates.scss';\n@import './Variables.scss';\n\n.galleryPage {\n  .text {\n    font-size: 18px;\n    line-height: 150%;\n    margin-bottom: 40px;\n  }\n  .gallery-1 {\n    .title {\n      @include title\n    }\n    .photos {\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      .photo {\n        max-width: 570px;\n        height: 300px;\n        border-radius: 10px;\n      }\n    }\n  }\n  .gallery-2 {\n    .title {\n      @include title\n    }\n    .gallery {\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      @include example\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_style_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/style/styles.scss */ "./src/assets/style/styles.scss");
/* harmony import */ var _assets_style_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_style_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_MainPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/MainPage */ "./src/pages/MainPage.js");
/* harmony import */ var _pages_WorksPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/WorksPage */ "./src/pages/WorksPage.js");
/* harmony import */ var _pages_WorksPlacticPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/WorksPlacticPage */ "./src/pages/WorksPlacticPage.js");
/* harmony import */ var _pages_WorksReconstruction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/WorksReconstruction */ "./src/pages/WorksReconstruction.js");
/* harmony import */ var _pages_WorksExamplePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/WorksExamplePage */ "./src/pages/WorksExamplePage.js");
/* harmony import */ var _pages_AboutPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/AboutPage */ "./src/pages/AboutPage.js");
/* harmony import */ var _pages_GalleryPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/GalleryPage */ "./src/pages/GalleryPage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();













function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('http://localhost:3001/blogs').then(res => {
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/",
        component: _pages_MainPage__WEBPACK_IMPORTED_MODULE_4__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/works",
        component: _pages_WorksPage__WEBPACK_IMPORTED_MODULE_5__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/works/plastic",
        component: _pages_WorksPlacticPage__WEBPACK_IMPORTED_MODULE_6__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/works/reconstruction",
        component: _pages_WorksReconstruction__WEBPACK_IMPORTED_MODULE_7__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/works/example",
        component: _pages_WorksExamplePage__WEBPACK_IMPORTED_MODULE_8__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/about",
        component: _pages_AboutPage__WEBPACK_IMPORTED_MODULE_9__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/gallery",
        component: _pages_GalleryPage__WEBPACK_IMPORTED_MODULE_10__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/icons/belly.svg":
/*!************************************!*\
  !*** ./src/assets/icons/belly.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/belly.98a7df62.svg");

/***/ }),

/***/ "./src/assets/icons/consulting.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/consulting.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/consulting.64d11230.svg");

/***/ }),

/***/ "./src/assets/icons/customer.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/customer.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/customer.bf6c0a0d.svg");

/***/ }),

/***/ "./src/assets/icons/eyebrows.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/eyebrows.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/eyebrows.699dff6d.svg");

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/facebook.5799b7c5.svg");

/***/ }),

/***/ "./src/assets/icons/facebook2.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/facebook2.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/facebook2.5b308915.svg");

/***/ }),

/***/ "./src/assets/icons/handshake.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/handshake.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/handshake.64eaf018.svg");

/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/instagram.944bd3f7.svg");

/***/ }),

/***/ "./src/assets/icons/instagram2.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/instagram2.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/instagram2.4e815b47.svg");

/***/ }),

/***/ "./src/assets/icons/lift.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/lift.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lift.5a32c27d.svg");

/***/ }),

/***/ "./src/assets/icons/liposuction.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/liposuction.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/liposuction.5789ee76.svg");

/***/ }),

/***/ "./src/assets/icons/lips.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/lips.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lips.4f2db4c7.svg");

/***/ }),

/***/ "./src/assets/icons/map.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/map.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/map.69d4b98b.svg");

/***/ }),

/***/ "./src/assets/icons/medical-mask.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/medical-mask.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/medical-mask.ffee9d0e.svg");

/***/ }),

/***/ "./src/assets/icons/phone.svg":
/*!************************************!*\
  !*** ./src/assets/icons/phone.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/phone.67b8a7e5.svg");

/***/ }),

/***/ "./src/assets/icons/play.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/play.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/play.6aceb087.svg");

/***/ }),

/***/ "./src/assets/icons/surgery.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/surgery.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/surgery.b1ec949b.svg");

/***/ }),

/***/ "./src/assets/icons/twitter.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/twitter.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/twitter.ce375f52.svg");

/***/ }),

/***/ "./src/assets/icons/twitter2.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/twitter2.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/twitter2.ba8f8d08.svg");

/***/ }),

/***/ "./src/assets/icons/write.svg":
/*!************************************!*\
  !*** ./src/assets/icons/write.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/write.625cd015.svg");

/***/ }),

/***/ "./src/assets/img/awards.png":
/*!***********************************!*\
  !*** ./src/assets/img/awards.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/awards.461e5168.png");

/***/ }),

/***/ "./src/assets/img/clinic.png":
/*!***********************************!*\
  !*** ./src/assets/img/clinic.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/clinic.5058410b.png");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo.07162216.png");

/***/ }),

/***/ "./src/assets/img/mateev-1.png":
/*!*************************************!*\
  !*** ./src/assets/img/mateev-1.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mateev-1.164e6089.png");

/***/ }),

/***/ "./src/assets/img/mateev-2.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/mateev-2.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mateev-2.028a8e85.jpg");

/***/ }),

/***/ "./src/assets/img/mateev-4.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/mateev-4.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mateev-4.d9997ff9.jpg");

/***/ }),

/***/ "./src/assets/img/mateev-5.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/mateev-5.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mateev-5.4b9aee8c.jpg");

/***/ }),

/***/ "./src/assets/img/mateev-6.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/mateev-6.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mateev-6.fa5f0c79.jpg");

/***/ }),

/***/ "./src/assets/img/mateev=3.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/mateev=3.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mateev=3.13b7ed41.jpg");

/***/ }),

/***/ "./src/assets/img/photo-1.png":
/*!************************************!*\
  !*** ./src/assets/img/photo-1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/photo-1.5e7533e7.png");

/***/ }),

/***/ "./src/assets/img/photo-2.png":
/*!************************************!*\
  !*** ./src/assets/img/photo-2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/photo-2.68ec7e72.png");

/***/ }),

/***/ "./src/assets/img/photo-3.png":
/*!************************************!*\
  !*** ./src/assets/img/photo-3.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/photo-3.ad322d16.png");

/***/ }),

/***/ "./src/assets/img/photo-4.png":
/*!************************************!*\
  !*** ./src/assets/img/photo-4.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/photo-4.cbf0bf7e.png");

/***/ }),

/***/ "./src/assets/img/photo-5.png":
/*!************************************!*\
  !*** ./src/assets/img/photo-5.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/photo-5.dc2dbcb2.png");

/***/ }),

/***/ "./src/assets/img/photo-6.png":
/*!************************************!*\
  !*** ./src/assets/img/photo-6.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/photo-6.ddf282bf.png");

/***/ }),

/***/ "./src/assets/img/teams-1.png":
/*!************************************!*\
  !*** ./src/assets/img/teams-1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/teams-1.b2ec6773.png");

/***/ }),

/***/ "./src/assets/img/teams-2.png":
/*!************************************!*\
  !*** ./src/assets/img/teams-2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/teams-2.d69441b6.png");

/***/ }),

/***/ "./src/assets/img/teams-3.png":
/*!************************************!*\
  !*** ./src/assets/img/teams-3.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/teams-3.f1ad0419.png");

/***/ }),

/***/ "./src/assets/style/styles.scss":
/*!**************************************!*\
  !*** ./src/assets/style/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/style/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/style/styles.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/style/styles.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/video/video.mp4":
/*!************************************!*\
  !*** ./src/assets/video/video.mp4 ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/video.aa74400c.mp4");

/***/ }),

/***/ "./src/components/AboutPage/About-1.js":
/*!*********************************************!*\
  !*** ./src/components/AboutPage/About-1.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_mateev_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/mateev-1.png */ "./src/assets/img/mateev-1.png");
/* harmony import */ var _assets_img_mateev_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/mateev-2.jpg */ "./src/assets/img/mateev-2.jpg");
/* harmony import */ var _assets_img_mateev_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/mateev=3.jpg */ "./src/assets/img/mateev=3.jpg");
/* harmony import */ var _assets_img_mateev_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/mateev-4.jpg */ "./src/assets/img/mateev-4.jpg");
/* harmony import */ var _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/mateev-5.jpg */ "./src/assets/img/mateev-5.jpg");
/* harmony import */ var _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/mateev-6.jpg */ "./src/assets/img/mateev-6.jpg");
/* harmony import */ var _assets_img_awards_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/img/awards.png */ "./src/assets/img/awards.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/AboutPage/About-1.js",
    _s = __webpack_require__.$Refresh$.signature();










const About1 = () => {
  _s();

  const images = [{
    img: _assets_img_mateev_1_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    img: _assets_img_mateev_2_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    img: _assets_img_mateev_3_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    img: _assets_img_mateev_4_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    img: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, {
    img: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]
  }];
  const [selectedImg, setSelectedImage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_assets_img_mateev_1_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u041E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: selectedImg,
        alt: "mateev",
        className: "selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "images",
        children: images.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: item.img,
          alt: "mateev",
          className: "item",
          style: {
            opacity: selectedImg === item.img ? 0.3 : 1
          },
          onClick: () => setSelectedImage(item.img)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _assets_img_awards_png__WEBPACK_IMPORTED_MODULE_8__["default"],
        alt: "team",
        className: "awards"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum habitant aliquam viverra morbi et tincidunt diam placerat consectetur. Pellentesque orci pulvinar velit non. Erat libero commodo, felis diam aliquet ac in. Viverra odio dictum mauris et senectus eu quis porttitor pretium. Ut varius proin lectus donec luctus dignissim. Enim integer magna massa commodo. Odio etiam ipsum facilisi augue urna, turpis ullamcorper. Massa ut donec quisque tortor id sapien tincidunt tristique. Sit in et, odio augue ut nulla dui ullamcorper. Elementum amet justo feugiat felis a, vestibulum, tristique nisi. Dignissim euismod tellus luctus vitae eget sapien pretium. Fermentum adipiscing tincidunt in natoque."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

_s(About1, "4crEP5CsL4FuUx2OrOmz3qmIoaI=");

_c = About1;
/* harmony default export */ __webpack_exports__["default"] = (About1);

var _c;

__webpack_require__.$Refresh$.register(_c, "About1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AboutPage/About-2.js":
/*!*********************************************!*\
  !*** ./src/components/AboutPage/About-2.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_teams_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/teams-1.png */ "./src/assets/img/teams-1.png");
/* harmony import */ var _assets_img_teams_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/teams-2.png */ "./src/assets/img/teams-2.png");
/* harmony import */ var _assets_img_teams_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/teams-3.png */ "./src/assets/img/teams-3.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/AboutPage/About-2.js";




const About2 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _assets_img_teams_1_png__WEBPACK_IMPORTED_MODULE_1__["default"],
        alt: "teams",
        className: "teams"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "teams-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_img_teams_2_png__WEBPACK_IMPORTED_MODULE_2__["default"],
            alt: "teams"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum habitant aliquam viverra morbi et tincidunt diam placerat consectetur. Pellentesque orci pulvinar velit non. Erat libero commodo, felis diam aliquet ac in. Viverra odio dictum mauris et senectus eu quis porttitor pretium. Ut varius proin lectus donec luctus dignissim. Enim integer magna massa commodo."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_img_teams_3_png__WEBPACK_IMPORTED_MODULE_3__["default"],
            alt: "teams"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum habitant aliquam viverra morbi et tincidunt diam placerat consectetur. Pellentesque orci pulvinar velit non. Erat libero commodo, felis diam aliquet ac in. Viverra odio dictum mauris et senectus eu quis porttitor pretium. Ut varius proin lectus donec luctus dignissim. Enim integer magna massa commodo."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = About2;
/* harmony default export */ __webpack_exports__["default"] = (About2);

var _c;

__webpack_require__.$Refresh$.register(_c, "About2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GalleryPage/Gallery-1.js":
/*!*************************************************!*\
  !*** ./src/components/GalleryPage/Gallery-1.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_photo_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/photo-1.png */ "./src/assets/img/photo-1.png");
/* harmony import */ var _assets_img_photo_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/photo-2.png */ "./src/assets/img/photo-2.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/GalleryPage/Gallery-1.js";



const Gallery1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "gallery-1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "title",
        children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043A\u043B\u0438\u043D\u0438\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "photos",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_img_photo_1_png__WEBPACK_IMPORTED_MODULE_1__["default"],
          alt: "photo",
          className: "photo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_img_photo_1_png__WEBPACK_IMPORTED_MODULE_1__["default"],
          alt: "photo",
          className: "photo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = Gallery1;
/* harmony default export */ __webpack_exports__["default"] = (Gallery1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Gallery1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GalleryPage/Gallery-2.js":
/*!*************************************************!*\
  !*** ./src/components/GalleryPage/Gallery-2.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/mateev-5.jpg */ "./src/assets/img/mateev-5.jpg");
/* harmony import */ var _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/mateev-6.jpg */ "./src/assets/img/mateev-6.jpg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/GalleryPage/Gallery-2.js";




const Gallery2 = () => {
  const views = [{
    id: 1,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 2,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 3,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 4,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 5,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 6,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "example",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0440\u0430\u0431\u043E\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "gallery",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item-block",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.photo1,
              alt: "example",
              className: "photo photo--left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.photo2,
              alt: "example",
              className: "photo photo--right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "name",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

_c = Gallery2;
/* harmony default export */ __webpack_exports__["default"] = (Gallery2);

var _c;

__webpack_require__.$Refresh$.register(_c, "Gallery2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var _assets_icons_facebook2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/facebook2.svg */ "./src/assets/icons/facebook2.svg");
/* harmony import */ var _assets_icons_twitter2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/twitter2.svg */ "./src/assets/icons/twitter2.svg");
/* harmony import */ var _assets_icons_instagram2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/icons/instagram2.svg */ "./src/assets/icons/instagram2.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/Layout/Footer.js";







const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "footer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "footer-top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
          alt: "logo",
          className: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          className: "nav-1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "\u0421\u0441\u044B\u043B\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/",
            className: "item",
            children: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/about",
            className: "item",
            children: "\u041E \u043D\u0430\u0441"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/portfolio",
            className: "item",
            children: "\u0420\u0430\u0431\u043E\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/gallery",
            className: "item",
            children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/blog",
            className: "item",
            children: "\u0411\u043B\u043E\u0433"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/contacts",
            className: "item end",
            children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          className: "nav-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/",
            className: "item",
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/about",
            className: "item",
            children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/portfolio",
            className: "item",
            children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: "+996 774 728 966"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: "\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D, \u0433. \u0411\u0438\u0448\u043A\u0435\u043A, \u0443\u043B.\u0411\u043E\u043A\u043E\u043C\u0431\u0430\u0435\u0432\u0430 115"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_icons_facebook2_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
              alt: "facebook-icon",
              className: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_icons_twitter2_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
              alt: "twitter-icon",
              className: "icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_icons_instagram2_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
              alt: "instagram-icon",
              className: "icon instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "footer-bottom",
      children: "\xA9 2020  \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Layout/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_icons_map_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/map.svg */ "./src/assets/icons/map.svg");
/* harmony import */ var _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/phone.svg */ "./src/assets/icons/phone.svg");
/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/facebook.svg */ "./src/assets/icons/facebook.svg");
/* harmony import */ var _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/icons/twitter.svg */ "./src/assets/icons/twitter.svg");
/* harmony import */ var _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/instagram.svg */ "./src/assets/icons/instagram.svg");
/* harmony import */ var _UI_modal_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/modal-2 */ "./src/components/UI/modal-2.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/Layout/Header.js",
    _s = __webpack_require__.$Refresh$.signature();










const Header = () => {
  _s();

  const [active, setActive] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [close, setClose] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contacts",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contacts-left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "faq",
              children: "FAQ"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _assets_icons_map_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                alt: "map-icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "address",
                children: "\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D, \u0433. \u0411\u0438\u0448\u043A\u0435\u043A, \u0443\u043B.\u0411\u043E\u043A\u043E\u043C\u0431\u0430\u0435\u0432\u0430 115"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "item",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
                alt: "phone-icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "phone",
                children: "+996 774 728 966"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contacts-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
              alt: "facebook-icon",
              className: "item"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
              alt: "twitter-icon",
              className: "item"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
              alt: "instagram-icon",
              className: "item"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "select",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                name: "myfield",
                value: 'ru',
                className: "language",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "ru",
                  children: "RU"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "en",
                  children: "EN"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "kg",
                  children: "KG"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "navigation",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            className: "nav",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  to: "/",
                  className: "link",
                  activeClassName: "active",
                  exact: true,
                  children: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 42
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  to: "/about",
                  className: "link",
                  activeClassName: "active",
                  exact: true,
                  children: "\u041E \u043A\u043B\u0438\u043D\u0438\u043A\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 42
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  to: "/works",
                  className: "link",
                  activeClassName: "active",
                  exact: true,
                  children: "\u0420\u0430\u0431\u043E\u0442\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "dropdown",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                      to: "/works/plastic",
                      className: "link",
                      activeClassName: "active",
                      exact: true,
                      children: "\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                      to: "/works/reconstruction",
                      className: "link",
                      activeClassName: "active",
                      exact: true,
                      children: "\u0420\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                      to: "/works/example",
                      className: "link",
                      activeClassName: "active",
                      exact: true,
                      children: "\u0420\u0430\u0431\u043E\u0442\u044B \u201C\u0414\u043E - \u041F\u043E\u0441\u043B\u0435\u201D"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  to: "/gallery",
                  className: "link",
                  activeClassName: "active",
                  children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "dropdown",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                      to: "/gallery/1",
                      className: "link",
                      activeClassName: "active",
                      children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u043A\u043B\u0438\u043D\u0438\u043A\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "dropdown-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                      to: "/gallery/2",
                      className: "link",
                      activeClassName: "active",
                      children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0440\u0430\u0431\u043E\u0442 \u201C\u0414\u043E - \u041F\u043E\u0441\u043B\u0435\u201D"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  to: "/blog",
                  className: "link",
                  activeClassName: "active",
                  children: "\u0411\u043B\u043E\u0433"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 42
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "item end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  to: "/contacts",
                  className: "link",
                  activeClassName: "active",
                  children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 46
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn",
            onClick: () => setActive(true),
            children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_modal_2__WEBPACK_IMPORTED_MODULE_8__["default"], {
      active: active,
      setActive: setActive,
      close: close,
      setClose: setClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined);
};

_s(Header, "64c1sSgEqT0T6R8+Y8zWgmZcnSc=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MainPage/Section-1.js":
/*!**********************************************!*\
  !*** ./src/components/MainPage/Section-1.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/MainPage/Section-1.js";

const Section1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "title",
        children: "\u041B\u044E\u0431\u043E\u0432\u044C \u043A \u043A\u0440\u0430\u0441\u043E\u0442\u0435 - \u044D\u0442\u043E \u0432\u043A\u0443\u0441, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0440\u0430\u0441\u043E\u0442\u044B - \u044D\u0442\u043E \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

_c = Section1;
/* harmony default export */ __webpack_exports__["default"] = (Section1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MainPage/Section-2.js":
/*!**********************************************!*\
  !*** ./src/components/MainPage/Section-2.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_img_photo_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/photo-2.png */ "./src/assets/img/photo-2.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/MainPage/Section-2.js";



const Section2 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _assets_img_photo_2_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "photo",
        className: "photo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "title",
          children: "Lorem ipsum dolor sit amet."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text",
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nulla eget curabitur pellentesque aliquam consectetur pharetra. Commodo aenean semper etiam proin quis. Pharetra felis sit in vestibulum nulla imperdiet egestas. Nisi, amet tellus neque, commodo eget sed. At et imperdiet blandit non, vitae malesuada faucibus. Porttitor porttitor vestibulum pulvinar nulla ullamcorper dui. Amet et nec sit blandit ullamcorper sed elit ipsum sit."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/about",
          className: "btn",
          exact: true,
          children: "\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

_c = Section2;
/* harmony default export */ __webpack_exports__["default"] = (Section2);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MainPage/Section-3.js":
/*!**********************************************!*\
  !*** ./src/components/MainPage/Section-3.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_icons_lift_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/lift.svg */ "./src/assets/icons/lift.svg");
/* harmony import */ var _assets_icons_eyebrows_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/eyebrows.svg */ "./src/assets/icons/eyebrows.svg");
/* harmony import */ var _assets_icons_lips_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/lips.svg */ "./src/assets/icons/lips.svg");
/* harmony import */ var _assets_icons_liposuction_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/icons/liposuction.svg */ "./src/assets/icons/liposuction.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/MainPage/Section-3.js";







const Section3 = () => {
  const views = [{
    id: 1,
    title: 'Подтяжка лица',
    icon: _assets_icons_lift_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 2,
    title: 'Пластика век',
    icon: _assets_icons_eyebrows_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    id: 3,
    title: 'Контурная пластика губ',
    icon: _assets_icons_lips_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    id: 4,
    title: 'Липосакция',
    icon: _assets_icons_liposuction_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0412\u0438\u0434\u044B \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "view",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.icon,
            alt: "photo",
            className: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
            to: "/works/",
            className: "btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn",
              children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

_c = Section3;
/* harmony default export */ __webpack_exports__["default"] = (Section3);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section3");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MainPage/Section-4.js":
/*!**********************************************!*\
  !*** ./src/components/MainPage/Section-4.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_photo_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/photo-2.png */ "./src/assets/img/photo-2.png");
/* harmony import */ var _UI_modal_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/modal-1 */ "./src/components/UI/modal-1.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/MainPage/Section-4.js",
    _s = __webpack_require__.$Refresh$.signature();





const Section4 = () => {
  _s();

  const [active, setActive] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seramo lumio tutto."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn",
        onClick: e => setActive(true),
        children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_modal_1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      active: active,
      setActive: setActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_s(Section4, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");

_c = Section4;
/* harmony default export */ __webpack_exports__["default"] = (Section4);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section4");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MainPage/Section-5.js":
/*!**********************************************!*\
  !*** ./src/components/MainPage/Section-5.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_photo_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/photo-3.png */ "./src/assets/img/photo-3.png");
/* harmony import */ var _assets_img_photo_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/photo-4.png */ "./src/assets/img/photo-4.png");
/* harmony import */ var _assets_img_photo_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/photo-5.png */ "./src/assets/img/photo-5.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/MainPage/Section-5.js";





const Section5 = () => {
  const views = [{
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lorem netus dolor sem viverra sit. Elit viverra tempus lacus, nisi, nibh arcu vitae. Euismod consectetur nibh.',
    icon: _assets_img_photo_3_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lorem netus dolor sem viverra sit. Elit viverra tempus lacus, nisi, nibh arcu vitae. Euismod consectetur nibh.',
    icon: _assets_img_photo_4_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lorem netus dolor sem viverra sit. Elit viverra tempus lacus, nisi, nibh arcu vitae. Euismod consectetur nibh.',
    icon: _assets_img_photo_5_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u041E\u0442\u0437\u044B\u0432\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "view",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.icon,
            alt: "photo",
            className: "photo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text",
            children: item.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

_c = Section5;
/* harmony default export */ __webpack_exports__["default"] = (Section5);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section5");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MainPage/Section-6.js":
/*!**********************************************!*\
  !*** ./src/components/MainPage/Section-6.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_video_video_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/video/video.mp4 */ "./src/assets/video/video.mp4");
/* harmony import */ var _assets_img_photo_6_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/photo-6.png */ "./src/assets/img/photo-6.png");
/* harmony import */ var _assets_icons_play_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/play.svg */ "./src/assets/icons/play.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/MainPage/Section-6.js",
    _s = __webpack_require__.$Refresh$.signature();






const Section6 = () => {
  _s();

  const [play, setPlay] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const vidRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
    setPlay(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-6",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("video", {
        className: "video",
        controls: true,
        poster: _assets_img_photo_6_png__WEBPACK_IMPORTED_MODULE_3__["default"],
        ref: vidRef,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
          src: _assets_video_video_mp4__WEBPACK_IMPORTED_MODULE_2__["default"],
          type: "video/mp4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "btn",
        onClick: handlePlayVideo,
        children: !play ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_icons_play_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
          alt: "play"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 20
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

_s(Section6, "nO6tGSGzRWRGuPw0Zf6ZSdjmwu8=");

_c = Section6;
/* harmony default export */ __webpack_exports__["default"] = (Section6);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section6");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Template/PageTemplate.js":
/*!*************************************************!*\
  !*** ./src/components/Template/PageTemplate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Header */ "./src/components/Layout/Header.js");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Footer */ "./src/components/Layout/Footer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/Template/PageTemplate.js";



 // Обертка для всего сайта

const PageTemplate = props => {
  const postBlog = () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3001/blog', {
      name: 'Aman',
      text: 'Hello world'
    }).then(res => {
      console.log('res', res);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Layout_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

_c = PageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (PageTemplate);

var _c;

__webpack_require__.$Refresh$.register(_c, "PageTemplate");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Template/PageTemplate2.js":
/*!**************************************************!*\
  !*** ./src/components/Template/PageTemplate2.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTemplate */ "./src/components/Template/PageTemplate.js");
/* harmony import */ var _MainPage_Section_4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainPage/Section-4 */ "./src/components/MainPage/Section-4.js");
/* harmony import */ var _assets_img_clinic_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/clinic.png */ "./src/assets/img/clinic.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/Template/PageTemplate2.js";




const PageTemplate2 = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: _assets_img_clinic_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: "photo",
      className: "clinic-photo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mainPage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainPage_Section_4__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

_c = PageTemplate2;
/* harmony default export */ __webpack_exports__["default"] = (PageTemplate2);

var _c;

__webpack_require__.$Refresh$.register(_c, "PageTemplate2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/UI/modal-1.js":
/*!**************************************!*\
  !*** ./src/components/UI/modal-1.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/UI/modal-1.js";





const Modal1 = ({
  active,
  setActive
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      name: '',
      mail: '',
      phone: '',
      view: 'Подтяжка лица',
      acceptTerms: false
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Напишите свое имя'),
      phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Введите свой номер'),
      mail: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Напишите свою почту'),
      acceptTerms: yup__WEBPACK_IMPORTED_MODULE_3__["bool"]().oneOf([true], 'Поставьте галочку')
    }),
    onSubmit: fields => {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/form', {
        name: fields.name,
        phone: fields.phone,
        mail: fields.mail,
        view: fields.view
      }).then(res => {
        console.log('res', res);
      });
    },
    children: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: active ? 'modal active' : 'modal',
      onClick: () => setActive(false),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: active ? 'content active' : 'content',
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "title",
          children: "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "C \u0432\u0430\u043C\u0438 c\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0432\u0440\u0435\u043C\u044F \u0438 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0442!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          className: "loginForm",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "label",
            children: "\u0418\u043C\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            type: "text",
            name: "name",
            className: "input"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
            name: "name",
            component: "div",
            className: "error"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "label",
            children: "Mail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            type: "text",
            name: "mail",
            className: "input"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
            name: "mail",
            component: "div",
            className: "error"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "label",
            children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            type: "text",
            name: "phone",
            className: "input"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
            name: "phone",
            component: "div",
            className: "error"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "label",
            children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0438\u0434 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            as: "select",
            name: "view",
            className: "input",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043E\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u0438\u0446\u0430",
              children: "\u041F\u043E\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0435\u043A",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0435\u043A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430\u044F \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0443\u0431",
              children: "\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430\u044F \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0443\u0431"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041B\u0438\u043F\u043E\u0441\u0430\u043A\u0446\u0438\u044F",
              children: "\u041B\u0438\u043F\u043E\u0441\u0430\u043A\u0446\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u0430",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0440\u0443\u0434\u0438",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0440\u0443\u0434\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u043E\u0433\u043D\u0435\u0441\u0442\u0440\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u043D\u0435\u043D\u0438\u0439",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u043E\u0433\u043D\u0435\u0441\u0442\u0440\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u043D\u0435\u043D\u0438\u0439"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0447\u044C\u0435\u0439 \u0433\u0443\u0431\u044B",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0447\u044C\u0435\u0439 \u0433\u0443\u0431\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0443\u0431\u0446\u043E\u0432",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0443\u0431\u0446\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u0436\u043E\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443\u0440",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u0436\u043E\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0443\u0441\u0442\u0430\u0432\u043E\u0432",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0443\u0441\u0442\u0430\u0432\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u0435\u0439",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u0435\u0439"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u042D\u043D\u0434\u043E\u043F\u0440\u043E\u0442\u0435\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0434\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u043C\u0438 \u0438\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u043C\u0438",
              children: "\u042D\u043D\u0434\u043E\u043F\u0440\u043E\u0442\u0435\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0434\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u043C\u0438 \u0438\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u043C\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438",
              children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u0441\u0443\u0445\u043E\u0436\u0438\u043B\u0438\u0439 \u043A\u0438\u0441\u0442\u0438",
              children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u0441\u0443\u0445\u043E\u0436\u0438\u043B\u0438\u0439 \u043A\u0438\u0441\u0442\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0439 \u0432  \u043A\u0438\u0441\u0442\u0438",
              children: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0439 \u0432  \u043A\u0438\u0441\u0442\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u0414\u0426\u041F \u0434\u0435\u0442\u0435\u0439",
              children: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u0414\u0426\u041F \u0434\u0435\u0442\u0435\u0439"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "check-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
              type: "checkbox",
              name: "acceptTerms",
              className: "check-input"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "acceptTerms",
              className: "check",
              children: "\u042F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
            name: "acceptTerms",
            component: "div",
            className: "error"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "btn",
            children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

_c = Modal1;
/* harmony default export */ __webpack_exports__["default"] = (Modal1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Modal1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/UI/modal-2.js":
/*!**************************************!*\
  !*** ./src/components/UI/modal-2.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/UI/modal-2.js";





const Modal1 = ({
  active,
  setActive,
  setClose,
  close
}) => {
  const closeModal = () => {
    setActive(false);
    setClose(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      name: '',
      mail: '',
      phone: '',
      view: 'Подтяжка лица',
      acceptTerms: false
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Напишите свое имя'),
      phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Введите свой номер'),
      mail: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Напишите свою почту'),
      acceptTerms: yup__WEBPACK_IMPORTED_MODULE_3__["bool"]().oneOf([true], 'Поставьте галочку')
    }),
    onSubmit: fields => {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/form', {
        name: fields.name,
        phone: fields.phone,
        mail: fields.mail,
        view: fields.view
      }).then(res => {
        console.log('res', res);
      });
    },
    children: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: active ? 'modal-wrapper show' : 'modal-wrapper',
      onClick: closeModal,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: `modal2 ${active ? 'up' : close ? 'down' : ''}`,
        onClick: e => e.stopPropagation(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "title",
            onClick: closeModal,
            children: "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "C \u0432\u0430\u043C\u0438 c\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0432\u0440\u0435\u043C\u044F \u0438 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0442!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            className: "loginForm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "label",
              children: "\u0418\u043C\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
              type: "text",
              name: "name",
              className: "input"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
              name: "name",
              component: "div",
              className: "error"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "label",
              children: "Mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
              type: "text",
              name: "mail",
              className: "input"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
              name: "mail",
              component: "div",
              className: "error"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "label",
              children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
              type: "text",
              name: "phone",
              className: "input"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
              name: "phone",
              component: "div",
              className: "error"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "label",
              children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0438\u0434 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
              as: "select",
              name: "view",
              className: "input",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043E\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u0438\u0446\u0430",
                children: "\u041F\u043E\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u0438\u0446\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0435\u043A",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0435\u043A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430\u044F \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0443\u0431",
                children: "\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430\u044F \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0443\u0431"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041B\u0438\u043F\u043E\u0441\u0430\u043A\u0446\u0438\u044F",
                children: "\u041B\u0438\u043F\u043E\u0441\u0430\u043A\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u0430",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0440\u0443\u0434\u0438",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0440\u0443\u0434\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u043E\u0433\u043D\u0435\u0441\u0442\u0440\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u043D\u0435\u043D\u0438\u0439",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u043E\u0433\u043D\u0435\u0441\u0442\u0440\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u043D\u0435\u043D\u0438\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0447\u044C\u0435\u0439 \u0433\u0443\u0431\u044B",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0447\u044C\u0435\u0439 \u0433\u0443\u0431\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0443\u0431\u0446\u043E\u0432",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0443\u0431\u0446\u043E\u0432"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u0436\u043E\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443\u0440",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u0436\u043E\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443\u0440"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0443\u0441\u0442\u0430\u0432\u043E\u0432",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0443\u0441\u0442\u0430\u0432\u043E\u0432"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u0435\u0439",
                children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u042D\u043D\u0434\u043E\u043F\u0440\u043E\u0442\u0435\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0434\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u043C\u0438 \u0438\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u043C\u0438",
                children: "\u042D\u043D\u0434\u043E\u043F\u0440\u043E\u0442\u0435\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0434\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u043C\u0438 \u0438\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u043C\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438",
                children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u0441\u0443\u0445\u043E\u0436\u0438\u043B\u0438\u0439 \u043A\u0438\u0441\u0442\u0438",
                children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u0441\u0443\u0445\u043E\u0436\u0438\u043B\u0438\u0439 \u043A\u0438\u0441\u0442\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0439 \u0432  \u043A\u0438\u0441\u0442\u0438",
                children: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0439 \u0432  \u043A\u0438\u0441\u0442\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u0414\u0426\u041F \u0434\u0435\u0442\u0435\u0439",
                children: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u0414\u0426\u041F \u0434\u0435\u0442\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "check-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
                type: "checkbox",
                name: "acceptTerms",
                className: "check-input"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "acceptTerms",
                className: "check",
                children: "\u042F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
              name: "acceptTerms",
              component: "div",
              className: "error"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "btn",
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

_c = Modal1;
/* harmony default export */ __webpack_exports__["default"] = (Modal1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Modal1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/ExamplePage/Section.js":
/*!*********************************************************!*\
  !*** ./src/components/WorksPage/ExamplePage/Section.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/mateev-5.jpg */ "./src/assets/img/mateev-5.jpg");
/* harmony import */ var _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/mateev-6.jpg */ "./src/assets/img/mateev-6.jpg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/ExamplePage/Section.js";




const Section = () => {
  const views = [{
    id: 1,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 2,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 3,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 4,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 5,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 6,
    title: 'Подтяжка лица',
    photo1: _assets_img_mateev_5_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    photo2: _assets_img_mateev_6_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "example",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0420\u0430\u0431\u043E\u0442\u044B \u201C\u0414\u043E - \u041F\u043E\u0441\u043B\u0435\u201D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "main-text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "examples",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item-block",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.photo1,
              alt: "example",
              className: "photo photo--left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.photo2,
              alt: "example",
              className: "photo photo--right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "name",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

_c = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/PlasticPage/Section-1.js":
/*!***********************************************************!*\
  !*** ./src/components/WorksPage/PlasticPage/Section-1.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_lift_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/lift.svg */ "./src/assets/icons/lift.svg");
/* harmony import */ var _assets_icons_belly_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/belly.svg */ "./src/assets/icons/belly.svg");
/* harmony import */ var _assets_icons_medical_mask_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/medical-mask.svg */ "./src/assets/icons/medical-mask.svg");
/* harmony import */ var _assets_icons_surgery_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/surgery.svg */ "./src/assets/icons/surgery.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/PlasticPage/Section-1.js";






const Section1 = () => {
  const views = [{
    id: 1,
    title1: 'Подтяжка лица',
    title2: 'Пластика век',
    title3: 'Контурная пластика губ',
    title4: 'Пластика заячьей губы',
    icon: _assets_icons_lift_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    id: 2,
    title1: 'Липосакция',
    title2: 'Пластика живота',
    title3: 'Пластика груди',
    title4: 'Эндопротезирование груди силиконовыми имплантами',
    icon: _assets_icons_belly_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 3,
    title1: 'Пластика дефектов после огнестрельных ранений',
    title2: 'Пластика послеоперационных рубцов',
    title3: 'Пластика послеожоговых контрактур',
    title4: '',
    icon: _assets_icons_medical_mask_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    id: 4,
    title1: 'Пластика травматических дефектов',
    title2: 'Пластика врожденных ложных суставов',
    title3: 'Пластика дефектов после удаления опухолей',
    title4: '',
    icon: _assets_icons_surgery_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "main-text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "view",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.icon,
            alt: "photo",
            className: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: item.title1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: item.title2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: item.title3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: item.title4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

_c = Section1;
/* harmony default export */ __webpack_exports__["default"] = (Section1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/PlasticPage/Section-2.js":
/*!***********************************************************!*\
  !*** ./src/components/WorksPage/PlasticPage/Section-2.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/write.svg */ "./src/assets/icons/write.svg");
/* harmony import */ var _assets_icons_customer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/customer.svg */ "./src/assets/icons/customer.svg");
/* harmony import */ var _assets_icons_consulting_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/consulting.svg */ "./src/assets/icons/consulting.svg");
/* harmony import */ var _assets_icons_handshake_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/handshake.svg */ "./src/assets/icons/handshake.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/PlasticPage/Section-2.js";






const Section2 = () => {
  const views = [{
    id: 1,
    title: 'Подтяжка лица',
    icon: _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    id: 2,
    title: 'Пластика век',
    icon: _assets_icons_customer_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 3,
    title: 'Контурная пластика губ',
    icon: _assets_icons_consulting_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    id: 4,
    title: 'Липосакция',
    icon: _assets_icons_handshake_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0426\u0435\u043D\u044B \u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "main-text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "view",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.icon,
            alt: "photo",
            className: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, leo sagittis mauris sed. Vitae sem nunc, dignissim tellus. Accumsan vitae etiam aliquam cursus. Et malesuada."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_c = Section2;
/* harmony default export */ __webpack_exports__["default"] = (Section2);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/ReconstructionPage/Section-1.js":
/*!******************************************************************!*\
  !*** ./src/components/WorksPage/ReconstructionPage/Section-1.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/write.svg */ "./src/assets/icons/write.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/ReconstructionPage/Section-1.js";



const Section1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0420\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "main-text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views views-rec",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "view-rec",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
            alt: "photo",
            className: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "item",
            children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = Section1;
/* harmony default export */ __webpack_exports__["default"] = (Section1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/ReconstructionPage/Section-2.js":
/*!******************************************************************!*\
  !*** ./src/components/WorksPage/ReconstructionPage/Section-2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/write.svg */ "./src/assets/icons/write.svg");
/* harmony import */ var _assets_icons_customer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/customer.svg */ "./src/assets/icons/customer.svg");
/* harmony import */ var _assets_icons_consulting_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/consulting.svg */ "./src/assets/icons/consulting.svg");
/* harmony import */ var _assets_icons_handshake_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/handshake.svg */ "./src/assets/icons/handshake.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/ReconstructionPage/Section-2.js";






const Section2 = () => {
  const views = [{
    id: 1,
    title: 'Подтяжка лица',
    icon: _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    id: 2,
    title: 'Пластика век',
    icon: _assets_icons_customer_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 3,
    title: 'Контурная пластика губ',
    icon: _assets_icons_consulting_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    id: 4,
    title: 'Липосакция',
    icon: _assets_icons_handshake_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0426\u0435\u043D\u044B \u043D\u0430 \u0440\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "main-text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "view",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.icon,
            alt: "photo",
            className: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, leo sagittis mauris sed. Vitae sem nunc, dignissim tellus. Accumsan vitae etiam aliquam cursus. Et malesuada."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_c = Section2;
/* harmony default export */ __webpack_exports__["default"] = (Section2);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/Section-1.js":
/*!***********************************************!*\
  !*** ./src/components/WorksPage/Section-1.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/Section-1.js";


const Section1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "title",
        children: "\u0412\u0438\u0434\u044B \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. Suspendisse congue nullam bibendum nibh sit pellentesque. Scelerisque libero imperdiet molestie et, cras pellentesque leo, mauris scelerisque."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "view-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "view-title",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043E\u0434\u0442\u044F\u0436\u043A\u0430 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0435\u043A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041A\u043E\u043D\u0442\u0443\u0440\u043D\u0430\u044F \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0443\u0431"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041B\u0438\u043F\u043E\u0441\u0430\u043A\u0446\u0438\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0436\u0438\u0432\u043E\u0442\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0433\u0440\u0443\u0434\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u043E\u0433\u043D\u0435\u0441\u0442\u0440\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u043D\u0435\u043D\u0438\u0439"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u044F\u0447\u044C\u0435\u0439 \u0433\u0443\u0431\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0443\u0431\u0446\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0435\u0444\u0435\u043A\u0442\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u043B\u0435\u043E\u0436\u043E\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0443\u0441\u0442\u0430\u0432\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0432\u0440\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u0445 \u043B\u043E\u0436\u043D\u044B\u0445 \u0441\u0443\u0441\u0442\u0430\u0432\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u042D\u043D\u0434\u043E\u043F\u0440\u043E\u0442\u0435\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u0434\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u043C\u0438 \u0438\u043C\u043F\u043B\u0430\u043D\u0442\u0430\u043C\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            to: "/works/plastic",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn",
              children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "view-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "view-title",
              children: "\u0420\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043D\u0435\u0440\u0432\u043E\u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u041C\u0438\u043A\u0440\u043E\u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u043E\u0432 \u0441\u0443\u0445\u043E\u0436\u0438\u043B\u0438\u0439 \u043A\u0438\u0441\u0442\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0439 \u0432 \u043A\u0438\u0441\u0442\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "view",
              children: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u0414\u0426\u041F \u0434\u0435\u0442\u0435\u0439"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            to: "/works/reconstruction",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn",
              children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

_c = Section1;
/* harmony default export */ __webpack_exports__["default"] = (Section1);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section1");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/Section-2.js":
/*!***********************************************!*\
  !*** ./src/components/WorksPage/Section-2.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/write.svg */ "./src/assets/icons/write.svg");
/* harmony import */ var _assets_icons_customer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/customer.svg */ "./src/assets/icons/customer.svg");
/* harmony import */ var _assets_icons_consulting_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/consulting.svg */ "./src/assets/icons/consulting.svg");
/* harmony import */ var _assets_icons_handshake_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/handshake.svg */ "./src/assets/icons/handshake.svg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/Section-2.js";






const Section2 = () => {
  const views = [{
    id: 1,
    title: 'Подтяжка лица',
    icon: _assets_icons_write_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    id: 2,
    title: 'Пластика век',
    icon: _assets_icons_customer_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 3,
    title: 'Контурная пластика губ',
    icon: _assets_icons_consulting_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    id: 4,
    title: 'Липосакция',
    icon: _assets_icons_handshake_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u041F\u0440\u0438\u043D\u0446\u0438\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "views",
        children: views.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "view",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.icon,
            alt: "photo",
            className: "icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, leo sagittis mauris sed. Vitae sem nunc, dignissim tellus. Accumsan vitae etiam aliquam cursus. Et malesuada."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_c = Section2;
/* harmony default export */ __webpack_exports__["default"] = (Section2);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section2");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/Section-3.js":
/*!***********************************************!*\
  !*** ./src/components/WorksPage/Section-3.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/Section-3.js";

const Section3 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0435\u0439"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "left",
          children: "\u0410\u043D\u0430\u043B\u0438\u0437\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit dui aliquam elementum tristique libero pretium lobortis. Aenean facilisi eu a nulla ornare. Tristique justo, vel hendrerit non pulvinar feugiat amet. Sapien sem molestie phasellus in sed arcu. Elit amet aliquam senectus sagittis. Sociis nisi cras aenean risus donec eget cursus facilisi. Gravida egestas a, sociis eu dictum aliquam. Sed vivamus faucibus dignissim condimentum. Elementum eu nunc nulla mattis duis pellentesque cras id. Tristique cursus ullamcorper nec accumsan. Egestas congue tortor, cras habitant mattis duis erat. Est lacus, velit, tempor at. Amet phasellus dictum aliquam ligula amet. Et, congue ac risus nulla massa egestas rhoncus. Pharetra massa felis justo tempus suspendisse risus."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ipsum nulla consectetur sagittis, sit. At vel ornare pharetra eu mi curabitur. Libero, amet vitae justo, cursus augue. Suspendisse tortor augue velit condimentum. Amet sapien egestas est, at massa, viverra fames est neque. Sit nunc, elementum tincidunt lacinia. Scelerisque imperdiet mattis nam lacus diam nulla. Ante."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content content--2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "left",
          children: "\u041F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit dui aliquam elementum tristique libero pretium lobortis. Aenean facilisi eu a nulla ornare. Tristique justo, vel hendrerit non pulvinar feugiat amet. Sapien sem molestie phasellus in sed arcu. Elit amet aliquam senectus sagittis. Sociis nisi cras aenean risus donec eget cursus facilisi. Gravida egestas a, sociis eu dictum aliquam. Sed vivamus faucibus dignissim condimentum. Elementum eu nunc nulla mattis duis pellentesque cras id. Tristique cursus ullamcorper nec accumsan. Egestas congue tortor, cras habitant mattis duis erat. Est lacus, velit, tempor at. Amet phasellus dictum aliquam ligula amet. Et, congue ac risus nulla massa egestas rhoncus. Pharetra massa felis justo tempus suspendisse risus."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ipsum nulla consectetur sagittis, sit. At vel ornare pharetra eu mi curabitur. Libero, amet vitae justo, cursus augue. Suspendisse tortor augue velit condimentum. Amet sapien egestas est, at massa, viverra fames est neque. Sit nunc, elementum tincidunt lacinia. Scelerisque imperdiet mattis nam lacus diam nulla. Ante."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

_c = Section3;
/* harmony default export */ __webpack_exports__["default"] = (Section3);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section3");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/WorksPage/Section-4.js":
/*!***********************************************!*\
  !*** ./src/components/WorksPage/Section-4.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/components/WorksPage/Section-4.js";

const Section4 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "title",
        children: "\u0422\u0440\u0430\u043D\u0441\u0444\u0435\u0440"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi, morbi etiam in lobortis faucibus massa. Accumsan sagittis lacus et sollicitudin varius montes, pretium. Turpis rutrum pulvinar nulla ultricies velit. Tellus ultrices risus, consequat etiam fermentum lacinia purus in. Elementum dictum lacus, lectus id risus. Ac dolor at in eleifend sit elit pellentesque dictumst."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

_c = Section4;
/* harmony default export */ __webpack_exports__["default"] = (Section4);

var _c;

__webpack_require__.$Refresh$.register(_c, "Section4");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/AboutPage.js":
/*!********************************!*\
  !*** ./src/pages/AboutPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template/PageTemplate2 */ "./src/components/Template/PageTemplate2.js");
/* harmony import */ var _components_AboutPage_About_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutPage/About-1 */ "./src/components/AboutPage/About-1.js");
/* harmony import */ var _components_AboutPage_About_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutPage/About-2 */ "./src/components/AboutPage/About-2.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/pages/AboutPage.js",
    _s = __webpack_require__.$Refresh$.signature();






const AboutPage = () => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "aboutPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutPage_About_1__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutPage_About_2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, undefined);
};

_s(AboutPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = AboutPage;
/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "AboutPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/GalleryPage.js":
/*!**********************************!*\
  !*** ./src/pages/GalleryPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template/PageTemplate2 */ "./src/components/Template/PageTemplate2.js");
/* harmony import */ var _components_GalleryPage_Gallery_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GalleryPage/Gallery-1 */ "./src/components/GalleryPage/Gallery-1.js");
/* harmony import */ var _components_GalleryPage_Gallery_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GalleryPage/Gallery-2 */ "./src/components/GalleryPage/Gallery-2.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/pages/GalleryPage.js",
    _s = __webpack_require__.$Refresh$.signature();






const GalleryPage = () => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "galleryPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GalleryPage_Gallery_1__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GalleryPage_Gallery_2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, undefined);
};

_s(GalleryPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = GalleryPage;
/* harmony default export */ __webpack_exports__["default"] = (GalleryPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "GalleryPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/MainPage.js":
/*!*******************************!*\
  !*** ./src/pages/MainPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_PageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template/PageTemplate */ "./src/components/Template/PageTemplate.js");
/* harmony import */ var _components_MainPage_Section_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainPage/Section-1 */ "./src/components/MainPage/Section-1.js");
/* harmony import */ var _components_MainPage_Section_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainPage/Section-2 */ "./src/components/MainPage/Section-2.js");
/* harmony import */ var _components_MainPage_Section_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainPage/Section-3 */ "./src/components/MainPage/Section-3.js");
/* harmony import */ var _components_MainPage_Section_4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainPage/Section-4 */ "./src/components/MainPage/Section-4.js");
/* harmony import */ var _components_MainPage_Section_5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MainPage/Section-5 */ "./src/components/MainPage/Section-5.js");
/* harmony import */ var _components_MainPage_Section_6__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MainPage/Section-6 */ "./src/components/MainPage/Section-6.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/pages/MainPage.js",
    _s = __webpack_require__.$Refresh$.signature();








 // import Section7 from '../components/MainPage/Section-7'

 // const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// ));

const MainPage = () => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_PageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mainPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainPage_Section_1__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainPage_Section_2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainPage_Section_3__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainPage_Section_4__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainPage_Section_5__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainPage_Section_6__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

_s(MainPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MainPage;
/* harmony default export */ __webpack_exports__["default"] = (MainPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "MainPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/WorksExamplePage.js":
/*!***************************************!*\
  !*** ./src/pages/WorksExamplePage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template/PageTemplate2 */ "./src/components/Template/PageTemplate2.js");
/* harmony import */ var _components_WorksPage_ExamplePage_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WorksPage/ExamplePage/Section */ "./src/components/WorksPage/ExamplePage/Section.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/pages/WorksExamplePage.js",
    _s = __webpack_require__.$Refresh$.signature();





const WorksPage = () => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "worksPage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_ExamplePage_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

_s(WorksPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = WorksPage;
/* harmony default export */ __webpack_exports__["default"] = (WorksPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "WorksPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/WorksPage.js":
/*!********************************!*\
  !*** ./src/pages/WorksPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template/PageTemplate2 */ "./src/components/Template/PageTemplate2.js");
/* harmony import */ var _components_WorksPage_Section_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WorksPage/Section-1 */ "./src/components/WorksPage/Section-1.js");
/* harmony import */ var _components_WorksPage_Section_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorksPage/Section-2 */ "./src/components/WorksPage/Section-2.js");
/* harmony import */ var _components_WorksPage_Section_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WorksPage/Section-3 */ "./src/components/WorksPage/Section-3.js");
/* harmony import */ var _components_WorksPage_Section_4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WorksPage/Section-4 */ "./src/components/WorksPage/Section-4.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/pages/WorksPage.js",
    _s = __webpack_require__.$Refresh$.signature();








const WorksPage = () => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "worksPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_Section_1__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_Section_2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_Section_3__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_Section_4__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_s(WorksPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = WorksPage;
/* harmony default export */ __webpack_exports__["default"] = (WorksPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "WorksPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/WorksPlacticPage.js":
/*!***************************************!*\
  !*** ./src/pages/WorksPlacticPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template/PageTemplate2 */ "./src/components/Template/PageTemplate2.js");
/* harmony import */ var _components_WorksPage_PlasticPage_Section_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WorksPage/PlasticPage/Section-1 */ "./src/components/WorksPage/PlasticPage/Section-1.js");
/* harmony import */ var _components_WorksPage_PlasticPage_Section_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorksPage/PlasticPage/Section-2 */ "./src/components/WorksPage/PlasticPage/Section-2.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/pages/WorksPlacticPage.js",
    _s = __webpack_require__.$Refresh$.signature();






const WorksPage = () => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "worksPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_PlasticPage_Section_1__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_PlasticPage_Section_2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

_s(WorksPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = WorksPage;
/* harmony default export */ __webpack_exports__["default"] = (WorksPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "WorksPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/WorksReconstruction.js":
/*!******************************************!*\
  !*** ./src/pages/WorksReconstruction.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template/PageTemplate2 */ "./src/components/Template/PageTemplate2.js");
/* harmony import */ var _components_WorksPage_ReconstructionPage_Section_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WorksPage/ReconstructionPage/Section-1 */ "./src/components/WorksPage/ReconstructionPage/Section-1.js");
/* harmony import */ var _components_WorksPage_ReconstructionPage_Section_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorksPage/ReconstructionPage/Section-2 */ "./src/components/WorksPage/ReconstructionPage/Section-2.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/user/Desktop/myprojects/clinic-app/client/src/pages/WorksReconstruction.js",
    _s = __webpack_require__.$Refresh$.signature();






const WorksPage = () => {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Template_PageTemplate2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "worksPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_ReconstructionPage_Section_1__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WorksPage_ReconstructionPage_Section_2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

_s(WorksPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = WorksPage;
/* harmony default export */ __webpack_exports__["default"] = (WorksPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "WorksPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/user/Desktop/myprojects/clinic-app/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/user/Desktop/myprojects/clinic-app/client/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/user/Desktop/myprojects/clinic-app/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/user/Desktop/myprojects/clinic-app/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map