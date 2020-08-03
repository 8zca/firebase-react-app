import React, { useEffect, useState } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import firebase from 'services/firebase'

const Top = (props: RouteComponentProps) => {
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      currentUser.getIdToken(true).then(token => {
        setToken(token)
      }).catch(err => console.log(err))
    }
  }, [])

  const logout = () => {
    firebase.auth().signOut()
    props.history.push('/login')
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Welcom to Top page!</h1>
      <pre style={{ width: '400px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{token}</pre>
      <Link to='/currentUser'>currentUser</Link>
      <br />
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Top
