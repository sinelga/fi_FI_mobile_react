webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactRouter = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'

	var rootRoute = {
	  component: 'div',
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(218),
	    childRoutes: [__webpack_require__(463)]
	  }]
	}; /*eslint-disable no-unused-vars */

	//      require('./routes/Sale'),
	//      require('./routes/Apartment'),
	////      require('./routes/Course'),
	//      require('./routes/Grades'),
	//      require('./routes/Messages')
	//      require('./routes/Profile')
	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: rootRoute }), document.getElementById('content'));

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ObjList = __webpack_require__(219);

	var _ObjList2 = _interopRequireDefault(_ObjList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import $ from 'jquery'

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

			_this.state = {
				data: []

			};

			return _this;
		}

		_createClass(App, [{
			key: 'componentWillUpdate',
			value: function componentWillUpdate() {

				console.log("componentWillUpdate App ");
				//		global.OPERATORS_OBJS =this.state.data;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				console.log("mount App ");

				//		this.loadajax()
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				console.log("App  receive props");
				console.log(this.props);
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					null,
					this.props.children || _react2.default.createElement(_ObjList2.default, null)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(220);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reactRouter = __webpack_require__(160);

	var _reactBootstrap = __webpack_require__(221);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ObjList = function (_React$Component) {
		_inherits(ObjList, _React$Component);

		function ObjList(props) {
			_classCallCheck(this, ObjList);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjList).call(this, props));

			_this.state = {
				data: []

			};

			return _this;
		}

		_createClass(ObjList, [{
			key: 'loadajax',
			value: function loadajax() {
				_jquery2.default.ajax({
					url: 'http://www.paljaat.fi:8000/api',
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
			key: 'componentDidMount',
			value: function componentDidMount() {

				this.loadajax();
			}
		}, {
			key: 'render',
			value: function render() {

				var rentobjs = this.state.data;
				//		 global.OPERATORS_OBJS =this.state.data;
				var images = [];

				for (var i = 0; i < rentobjs.length; i++) {

					var space = ' ';
					var arrayOfStrings = rentobjs[i].Moto.split(space);
					var permlink = "/" + rentobjs[i].Id + "/" + arrayOfStrings[0] + '_' + arrayOfStrings[1] + '.html';

					//			 images.push(<li className="media" key={`${i}`}><Link  to={`/${rentobjs[i].Id}/${permlink}`}><div className="media-left"><img src={`http://www.paljaat.fi:8000/img/${rentobjs[i].ImgId}/${rentobjs[i].Img_file_name}/100/150`} /></div></Link><div className="media-body">lssls</div></li>);
					images.push(_react2.default.createElement(
						_reactRouter.Link,
						{ key: '' + i, to: permlink },
						_react2.default.createElement(
							_reactBootstrap.Grid,
							{ fluid: true },
							_react2.default.createElement(
								_reactBootstrap.Image,
								{ className: 'boxImageSmall', src: 'http://www.paljaat.fi:8000/img/' + rentobjs[i].ImgId + '/' + rentobjs[i].Img_file_name + '/100/150', thumbnail: true },
								_react2.default.createElement(
									'p',
									{ className: 'phone' },
									rentobjs[i].Phone
								),
								_react2.default.createElement(
									'p',
									null,
									rentobjs[i].Name
								),
								_react2.default.createElement(
									'p',
									null,
									rentobjs[i].City
								)
							)
						)
					));
				}

				return _react2.default.createElement(
					'div',
					null,
					images
				);
			}
		}]);

		return ObjList;
	}(_react2.default.Component);

	module.exports = ObjList;

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
			path: ':id/:moto',

			//		  getChildRoutes(location, cb) {
			//		    require.ensure([], (require) => {
			//		      cb(null, [
			//		        require('./routes/Details')
			//	
			//		      ])
			//		    })
			//		  },

			getComponents: function getComponents(location, cb) {
					__webpack_require__.e/* nsure */(1, function (require) {
							cb(null, __webpack_require__(464));
							//		        cb(null,{
							//		        	chat: require('./components/Chat'),
							//		        	main: require('./components/Details'),
							//		        	objlist: require('./components/ObjList')
							//		        })
					});
			}
	};

/***/ }

});