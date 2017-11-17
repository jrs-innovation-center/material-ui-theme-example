import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Index from './pages/index'
import WidgetForm from './pages/form'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/new" component={WidgetForm} />
      </div>
    </BrowserRouter>
  )
}

export default App
