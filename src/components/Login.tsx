import React, { useState, useRef } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import firebase from 'services/firebase'

const Login = (props: RouteComponentProps) => {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const loginHandler = () => {
    const email = emailRef.current ? emailRef.current.value : ''
    const password = passwordRef.current ? passwordRef.current.value : ''

    setLoading(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res)
        setLoading(false)
        props.history.push('/')
      })
      .catch((err) => {
        setLoading(false)
        if (err.code === 'auth/invalid-email') {
          setMessage('メールアドレスを正しく入力してください。')
        } else if (err.code === 'auth/wrong-password') {
          setMessage('パスワードを正しく入力してください。')
        } else {
          setMessage('ログインに失敗しました。')
        }
      })
  }

  if (loading) return <div>...</div>

  return (
    <div style={{ padding: '40px' }}>
      <h1>Login form</h1>
      <form>
        <div>
          <input type='email' placeholder='user@example.com' value='test@example.com' ref={emailRef} />
        </div>
        <div>
          <input type='password' placeholder='******' ref={passwordRef} />
        </div>
        <div>
          <p>{message}</p>
        </div>
        <div>
          <button type='button' onClick={loginHandler}>ログイン</button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(Login)
