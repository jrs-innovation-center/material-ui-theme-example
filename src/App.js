import React, { Component } from 'react'
import history from './history'
import { Router, Route } from 'react-router-dom'

import Index from './pages/index'
import NewWidgetForm from './pages/new-widget-form'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/new" component={NewWidgetForm} />
      </div>
    </Router>
  )
}

export default App
