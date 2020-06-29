import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from 'components/Auth'
import Top from 'components/Top'
import Login from 'components/Login'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Auth>
          <Route path='/' exact component={Top} />
        </Auth>
      </Switch>
    </Router>
  )
}

export default App
