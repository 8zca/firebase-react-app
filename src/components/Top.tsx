import React, { useEffect } from 'react'
import axios from 'axios'
import firebase from 'services/firebase'

const Top = () => {

  useEffect(() => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      currentUser.getIdToken(true).then(token => {
        axios.get(process.env.REACT_APP_API_URL as string, {
          headers: {
            'X-Firebase-Token': token,
            'Content-Type': 'application/json;charset=utf-8'
          },
          data: {}
        })
        .catch(res => {
          console.log(res)
        })
  
      }).catch(err => console.log(err))
    }
  }, [])


  return (
    <div>
      <h1>Welcom to Top page!</h1>
    </div>
  )
}

export default Top
