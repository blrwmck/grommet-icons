'use strict';

exports.__esModule = true;
exports.FormPreviousLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormPreviousLink = exports.FormPreviousLink = function FormPreviousLink(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FormPreviousLink' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8', transform: 'matrix(-1 0 0 1 24 0)' })
  );
};