webpackJsonp([3],{

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(220);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reactBootstrap = __webpack_require__(221);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import { Link } from 'react-router'

	var Chat = function (_React$Component) {
		_inherits(Chat, _React$Component);

		function Chat() {
			_classCallCheck(this, Chat);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).apply(this, arguments));
		}

		_createClass(Chat, [{
			key: 'render',

			//	constructor() {
			//	    this.state = { currentComponent: React.Component };
			//	  }

			value: function render() {

				console.log("renderCHat");

				return _react2.default.createElement(
					'div',
					null,
					'Chat'
				);
			}
		}]);

		return Chat;
	}(_react2.default.Component);

	module.exports = Chat;

/***/ }

});