/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Details'), 
//      require('./routes/Sale'),
//      require('./routes/Apartment'),
////      require('./routes/Course'),
//      require('./routes/Grades'),
//      require('./routes/Messages')
//      require('./routes/Profile')
    ]
  } ]
}

render(
  <Router history={browserHistory} routes={rootRoute}  />, document.getElementById('content')
)

