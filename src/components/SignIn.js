import React from 'react'
import Navigation from './Navigation.js'
import {useFormik} from 'formik';
import { Link } from 'react-router-dom'

function SignIn() {
  const initialValues = {
    username: '',
    password: ''
  }

  const onSubmit = (values) => {
    console.log(values)
  }

  const validate = (values) => {
    console.log('validation')
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });






  return (
    <div>
      <Navigation />
        <h2>Sign In</h2>
        <form onSubmit={formik.handleSubmit}>
            UserName:
            <input 
              type='text'
              name='username'
              onChange={formik.handleChange}
              value={formik.values.username} 
              placeholder='Input Username'></input>
            Password:
            <input 
              type={'text'}
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder='Input Password'></input>
            <button type='submit' disabled={!formik.isValid}>Sign In</button>
        </form>
        <h3>Create an Account</h3>
        <button><Link to="/register">Register Here</Link></button>
    </div>
  )
}

export default SignIn