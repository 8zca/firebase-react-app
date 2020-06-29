import React, { useState } from 'react'
import axios from 'axios'
import firebase from 'firebase'

const Top = () => {
  const [token, setToken] = useState<string>('')

  const currentUser = firebase.auth().currentUser
  if (currentUser) {
    currentUser.getIdToken(true).then(token => setToken(token)).catch(err => console.log(err))
  }

  axios.get(process.env.REACT_APP_API_URL as string, {
    headers: {
      'X-FIREBASE-TOKEN': token
    },
    data: {}
  })
  .catch(res => {
    console.log(res)
  })

  return (
    <div>
      <h1>Welcom to Top page!</h1>
    </div>
  )
}

export default Top
