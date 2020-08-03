import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from 'components/Auth'
import Top from 'components/Top'
import Login from 'components/Login'
import CurrentUser from 'components/CurrentUser'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Auth>
          <Route path='/' exact component={Top} />
          <Route path='/currentUser' exact component={CurrentUser} />
        </Auth>
      </Switch>
    </Router>
  )
}

export default App
