import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from 'services/firebase'

const Auth: React.FC<{}> = ({ children }): any => {
  const [login, setLogin] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogin(true)
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (!login) {
    return <Redirect to='/login' />
  }

  return children
}

export default Auth
