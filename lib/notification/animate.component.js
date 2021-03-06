'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animate = function (_Component) {
  _inherits(Animate, _Component);

  function Animate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Animate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Animate.__proto__ || Object.getPrototypeOf(Animate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fadeinenter: false,
      fadeoutenter: false
    }, _this.onEnter = function () {
      _this.setState({ fadeinenter: true });
    }, _this.onEntered = function () {
      _this.setState({ fadeinenter: false });
    }, _this.onExit = function () {
      _this.setState({ fadeoutenter: true });
    }, _this.onExited = function () {
      _this.props.onExited();
      _this.setState({ fadeoutenter: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Animate, [{
    key: 'render',
    value: function render() {
      var prefixCls = this.props.className;
      var componentClass = prefixCls + '-fade';
      var fadeinenter = this.state.fadeinenter ? componentClass + '-bouncein-enter' : '';
      var fadeoutenter = this.state.fadeoutenter ? componentClass + '-fadeout' : '';
      return _react2.default.createElement(
        _reactstrap.Fade,
        {
          'in': this.props.fadein,
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExited: this.onExited,
          className: componentClass + '  ' + fadeinenter + ' ' + fadeoutenter
        },
        this.props.children
      );
    }
  }]);

  return Animate;
}(_react.Component);

exports.default = Animate;