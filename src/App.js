import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserDetail from './pages/UserDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/user/:id" component={UserDetail} />
      </Switch>
    </Router>
  )
}

export default App
