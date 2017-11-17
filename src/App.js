import React from 'react'
import history from './history'

import { Router, Route } from 'react-router-dom'

import Index from './pages/index'
import WidgetForm from './pages/form'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/new" component={WidgetForm} />
      </div>
    </Router>
  )
}

export default App
