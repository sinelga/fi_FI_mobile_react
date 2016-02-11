import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'


const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Details'), 
    ]
  } ]
}

render(
  <Router history={browserHistory} routes={rootRoute}  />, document.getElementById('content')
)

