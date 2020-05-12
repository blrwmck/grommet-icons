"use strict";

exports.__esModule = true;
exports.Zoom = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Zoom = function Zoom(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Zoom"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z",
    fill: "#3984FD"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 9C5 8.44772 5.44772 8 6 8H12C13.6569 8 15 9.34315 15 11V15C15 15.5523 14.5523 16 14 16H8C6.34315 16 5 14.6569 5 13V9Z",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.5 11.7515C15.5 11.2671 15.6758 10.7991 15.9948 10.4345L17.6856 8.50226C18.1416 7.98108 19 8.30361 19 8.99613V15.004C19 15.6965 18.1416 16.019 17.6856 15.4978L15.9948 13.5656C15.6758 13.201 15.5 12.733 15.5 12.2486V11.7515Z",
    fill: "white"
  }));
};

exports.Zoom = Zoom;