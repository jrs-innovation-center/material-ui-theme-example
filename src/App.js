import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Index from './pages/index'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Index} />
      </div>
    </BrowserRouter>
  )
}

export default App
