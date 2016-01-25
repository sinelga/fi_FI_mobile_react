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
	    component: __webpack_require__(218)
	  }]
	}; /*eslint-disable no-unused-vars */

	//    childRoutes: [
	//      require('./routes/Rent'),
	//      require('./routes/Sale'),
	//      require('./routes/Apartment'),
	////      require('./routes/Course'),
	//      require('./routes/Grades'),
	//      require('./routes/Messages')
	//      require('./routes/Profile')
	//    ]
	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: rootRoute }), document.getElementById('content'));

	// I've unrolled the recursive directory loop that is happening above to get a
	// better idea of just what this huge-apps Router looks like, or just look at the
	// file system :)
	//
	// import { Route } from 'react-router'

	// import App from './components/App'
	// import Course from './routes/Course/components/Course'
	// import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
	// import Announcements from './routes/Course/routes/Announcements/components/Announcements'
	// import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
	// import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
	// import Assignments from './routes/Course/routes/Assignments/components/Assignments'
	// import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
	// import CourseGrades from './routes/Course/routes/Grades/components/Grades'
	// import Calendar from './routes/Calendar/components/Calendar'
	// import Grades from './routes/Grades/components/Grades'
	// import Messages from './routes/Messages/components/Messages'

	// render(
	//   <Router>
	//     <Route path="/" component={App}>
	//       <Route path="calendar" component={Calendar} />
	//       <Route path="course/:courseId" component={Course}>
	//         <Route path="announcements" components={{
	//           sidebar: AnnouncementsSidebar,
	//           main: Announcements
	//         }}>
	//           <Route path=":announcementId" component={Announcement} />
	//         </Route>
	//         <Route path="assignments" components={{
	//           sidebar: AssignmentsSidebar,
	//           main: Assignments
	//         }}>
	//           <Route path=":assignmentId" component={Assignment} />
	//         </Route>
	//         <Route path="grades" component={CourseGrades} />
	//       </Route>
	//       <Route path="grades" component={Grades} />
	//       <Route path="messages" component={Messages} />
	//       <Route path="profile" component={Calendar} />
	//     </Route>
	//   </Router>,
	//   document.getElementById('example')
	// )

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4);


/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*globals COURSES:true */

	//import Dashboard from './Dashboard'
	//import GlobalNav from './GlobalNav'

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null);
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ }

});