webpackJsonp([2],{

/***/ 464:
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

	var _Chat = __webpack_require__(465);

	var _Chat2 = _interopRequireDefault(_Chat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import { Link } from 'react-router'

	var Details = function (_React$Component) {
		_inherits(Details, _React$Component);

		function Details(props) {
			_classCallCheck(this, Details);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this, props));

			_this.state = {
				data: [],
				timerHandler: ''
				//	    	currentComponent: React.Component

			};
			//	    this.handleStartChat=this.handleStartChat.bind(this)
			_this.handleToggleDetailsChat = _this.handleToggleDetailsChat.bind(_this);
			return _this;
		}

		_createClass(Details, [{
			key: 'loadajax',
			value: function loadajax(id) {
				_jquery2.default.ajax({
					url: 'http://www.paljaat.fi:8000/api/' + id,
					dataType: 'json',
					cache: false,
					success: function (data) {
						this.setState({ data: data });
					}.bind(this),
					error: function (xhr, status, err) {
						console.error(this.props.url, status, err.toString());
					}.bind(this)
				});
			}
		}, {
			key: 'handleToggleDetailsChat',
			value: function handleToggleDetailsChat() {

				var dnode = _reactDom2.default.findDOMNode(this.refs.chat).style.display;

				//		this.setState({currentComponent: "Chat"});

				if (dnode === 'none') {

					this.setState({ timerHandler: 'on' });
					_reactDom2.default.findDOMNode(this.refs.chat).style.display = '';
					_reactDom2.default.findDOMNode(this.refs.details).style.display = 'none';
				} else {
					this.setState({ timerHandler: 'off' });
					_reactDom2.default.findDOMNode(this.refs.chat).style.display = 'none';
					_reactDom2.default.findDOMNode(this.refs.details).style.display = '';
				}
			}
		}, {
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				//		console.log("Willmount Details",this.props.params.id)

				this.loadajax(this.props.params.id);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//		console.log("mount Details")
				_reactDom2.default.findDOMNode(this.refs.chat).style.display = 'none';
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details")

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("componentDidUpdate")

			}
		}, {
			key: 'render',
			value: function render() {

				var id = this.props.params.id;

				var data = this.state.data;
				var imglink = "http://www.paljaat.fi:8000/img/" + data.ImgId + "/" + data.Img_file_name + "/200/250";

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ ref: 'details' },
						_react2.default.createElement(
							'button',
							{ onClick: this.handleReturn, type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },
							_react2.default.createElement(
								'span',
								{ 'aria-hidden': 'true', className: 'bigclose' },
								'×'
							)
						),
						_react2.default.createElement(
							'a',
							{ className: 'mbigphone', href: 'tel:{data.Phone}' },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-earphone', 'aria-hidden': 'true' }),
							' ',
							data.Phone
						),
						_react2.default.createElement(
							_reactBootstrap.Grid,
							null,
							_react2.default.createElement(_reactBootstrap.Image, { src: imglink, thumbnail: true }),
							_react2.default.createElement(
								'p',
								null,
								data.Name,
								' ',
								this.state.data.Age,
								'v ',
								data.City
							),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ onClick: this.handleToggleDetailsChat, bsStyle: 'primary', bsSize: 'large', active: true },
								'Chatti'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ ref: 'chat' },
						_react2.default.createElement(
							'button',
							{ onClick: this.handleToggleDetailsChat, type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },
							_react2.default.createElement(
								'span',
								{ 'aria-hidden': 'true', className: 'bigclose' },
								'×'
							)
						),
						_react2.default.createElement(_Chat2.default, { data: data, timerHandler: this.state.timerHandler })
					)
				);
			}
		}]);

		return Details;
	}(_react2.default.Component);

	module.exports = Details;

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactTimer = __webpack_require__(466);

	var _reactTimer2 = _interopRequireDefault(_reactTimer);

	var _reactBootstrap = __webpack_require__(221);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import $ from 'jquery'
	//import { Link } from 'react-router'

	//import { browserHistory } from 'react-router'
	//import ReactDOM from 'react-dom'

	//const FADE_DURATION = 200;
	var t;

	var Chat = function (_React$Component) {
		_inherits(Chat, _React$Component);

		function Chat(props) {
			_classCallCheck(this, Chat);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).call(this, props));

			_this.state = {
				count: 0

			};

			_this.toggle = _this.toggle.bind(_this);
			_this.timerOn = _this.timerOn.bind(_this);
			_this.timerOff = _this.timerOff.bind(_this);

			return _this;
		}

		_createClass(Chat, [{
			key: 'handleAlertDismiss',
			value: function handleAlertDismiss() {
				this.setState({ alertVisible: false });
			}
		}, {
			key: 'handleAlertShow',
			value: function handleAlertShow() {
				this.setState({ alertVisible: true });
			}
		}, {
			key: 'timerOff',
			value: function timerOff() {
				clearInterval(t);
				t = 0;
				this.setState({ count: 0 });
			}
		}, {
			key: 'timerOn',
			value: function timerOn() {

				var self = this;
				t = setInterval(function () {

					console.log("timer", t);
					self.setState({ count: self.state.count + 1 });
				}, 3500);
			}
		}, {
			key: 'toggle',
			value: function toggle() {

				var elem = _reactDom2.default.findDOMNode(this.refs.label_typing);
				if (elem.style.visibility === 'hidden') {

					elem.style.visibility = '';
				} else {
					elem.style.visibility = 'hidden';
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				console.log("Chat componentWillReceiveProps", nextProps);
				if (nextProps.timerHandler === 'on') {

					console.log("start timet");
					this.timerOn();
				} else {
					console.log("STOP timet");
					this.timerOff();
				}
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				console.log("Chat componentWillUpdate");
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {

				console.log("Chat componentDidUpdate", prevState);
				this.toggle();
				//			setInterval(this.toggle(), 1000);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log("didmount Chat");
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.data;
				var status = 'odotta';

				if (this.state.count > 3) {

					status = 'delivered';
				}

				if (this.state.count > 6) {

					status = 'seen';
				}

				if (this.state.count > 8) {

					status = 'typing';
				}
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'a',
							{ className: 'mbigphone', href: 'tel:{data.Phone}' },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-earphone', 'aria-hidden': 'true' }),
							' ',
							data.Phone
						)
					),
					'Chat ',
					data.Name,
					' ',
					data.Age,
					'v',
					_react2.default.createElement(
						_reactBootstrap.Badges,
						{ ref: 'label_typing' },
						status
					),
					_react2.default.createElement(
						'p',
						null,
						'Hei ',
						data.Name,
						'!'
					)
				);
			}
		}]);

		return Chat;
	}(_react2.default.Component);

	module.exports = Chat;

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SecondsTohhmmss = __webpack_require__(467);

	var _SecondsTohhmmss2 = _interopRequireDefault(_SecondsTohhmmss);

	/**
	 * Timer module
	 * A simple timer component.
	**/

	var Timer = _react2['default'].createClass({
	  displayName: 'Timer',

	  getInitialState: function getInitialState() {
	    return {
	      clock: 0,
	      time: ''
	    };
	  },
	  /**
	   * Pause the timer.
	  **/
	  pause: function pause() {
	    if (this.interval) {
	      clearInterval(this.interval);
	      this.interval = null;
	    }
	  },
	  /** 
	   * Play the timer.
	  **/
	  play: function play() {
	    if (!this.interval) {
	      this.offset = Date.now();
	      this.interval = setInterval(this.update, this.props.options.delay); // 100 is delay
	    }
	  },
	  /** 
	   * Reset the timer.
	  **/
	  reset: function reset() {
	    var clockReset = 0;
	    this.setState({ clock: clockReset });
	    var time = (0, _SecondsTohhmmss2['default'])(clockReset / 1000);
	    this.setState({ time: time });
	  },
	  /** 
	   * Increment the timer.
	  **/
	  update: function update() {
	    var clock = this.state.clock;
	    clock += this.calculateOffset();
	    this.setState({ clock: clock });
	    var time = (0, _SecondsTohhmmss2['default'])(clock / 1000);
	    this.setState({ time: time });
	  },
	  /** 
	   * Calculate the offset time.
	  **/
	  calculateOffset: function calculateOffset() {
	    var now = Date.now(),
	        o = now - this.offset;
	    this.offset = now;
	    return o;
	  },
	  componentDidMount: function componentDidMount() {
	    this.play();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.pause();
	  },
	  render: function render() {

	    var timerStyle = {
	      margin: '0',
	      padding: '2em'
	    };

	    var buttonStyle = {
	      background: '#fff',
	      color: '#666',
	      border: '1px solid #ddd',
	      margin: '0.25em',
	      padding: '0.75em',
	      fontWeight: '200'
	    };

	    var secondsStyles = {
	      fontSize: '200%',
	      fontWeight: '200',
	      lineHeight: '1.5',
	      margin: '0',
	      color: '#666'
	    };

	    return _react2['default'].createElement(
	      'div',
	      { style: timerStyle, className: 'react-timer' },
	      _react2['default'].createElement(
	        'h3',
	        { style: secondsStyles, className: 'seconds' },
	        ' ',
	        this.state.time,
	        ' ',
	        this.props.prefix
	      ),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.reset, style: buttonStyle },
	        'reset'
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.play, style: buttonStyle },
	        'play'
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.pause, style: buttonStyle },
	        'pause'
	      )
	    );
	  }
	});

	module.exports = Timer;

/***/ },

/***/ 467:
/***/ function(module, exports) {

	"use strict";

	var SecondsTohhmmss = function SecondsTohhmmss(totalSeconds) {
	  var hours = Math.floor(totalSeconds / 3600);
	  var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
	  var seconds = totalSeconds - hours * 3600 - minutes * 60;

	  // round seconds
	  seconds = Math.round(seconds * 100) / 100;

	  var result = hours < 10 ? "0" + hours : hours;
	  result += ":" + (minutes < 10 ? "0" + minutes : minutes);
	  result += ":" + (seconds < 10 ? "0" + seconds : seconds);
	  return result;
	};

	module.exports = SecondsTohhmmss;

/***/ }

});