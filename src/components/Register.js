import React from 'react'
import {useFormik} from 'formik';

function Register() {
    const initialValues = {
        username: '',
        password: '',
        confirmPassword:'',
        email: ''
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
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
            UserName:
            <input 
              type='text'
              name='username'
              onChange={formik.handleChange}
              value={formik.values.username} 
              placeholder='Input Username'></input>
            Email:
            <input 
              type='text'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email} 
              placeholder='Input Email'></input>
            Password:
            <input 
              type={'text'}
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder='Input Password'></input>
            Confirm Password:
            <input 
              type={'text'}
              name='confirmPassword'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              placeholder='Input Password'></input>
            <button type='submit' disabled={!formik.isValid}>Register</button>
        </form>
    </div>
  )
}

export default Register