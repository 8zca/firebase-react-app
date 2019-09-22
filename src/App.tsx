import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ProvideAuth } from './auth'
import Index from './components/index'

const App: React.FC = () => {
  return (
    <ProvideAuth>
      <Router>
        <Route path='/' exact component={Index} />
      </Router>
    </ProvideAuth>
  )
}

export default App
