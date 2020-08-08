import React, { useState, useEffect } from 'react'
import firebase from 'services/firebase'
import { Link } from 'react-router-dom'

const CurrentUser: React.FC<{}> = ({ children }): any => {
  const [user, setUser] = useState<firebase.User>()

  useEffect(() => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      setUser(currentUser)
      currentUser.getIdToken(true).then(token => {
        console.log(token)
      }).catch(err => console.log(err))
    }
  }, [])

  return <div>{user ? user.email : 'empty'}<br /><Link to='/'>戻る</Link></div>
}

export default CurrentUser
