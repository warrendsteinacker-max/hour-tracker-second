
import { useState } from 'react'
import CreateAccount from './CreateAccount'
import SignIn from './SignIn'

function FirstRoute() {
  const [create, setCreate] = useState(false)

  function handleCreateAccount() {
    setCreate(true)
  }

  function handleSignIn() {
    setCreate(false)
  }

  return (
    <>
      {create ? <CreateAccount /> : <SignIn />}
      <button onClick={handleCreateAccount}>Create Account</button>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  )
}

export default FirstRoute