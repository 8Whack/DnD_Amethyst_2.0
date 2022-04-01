import React from 'react'

function SignIn() {
  return (
    <div>
        <h2>Sign In</h2>
        <form>
            UserName:
            <input type='text' placeholder='Input Username'></input>
            Password:
            <input type={'text'} placeholder='Input Password'></input>
            <button>Sign In</button>
        </form>
    </div>
  )
}

export default SignIn