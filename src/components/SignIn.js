import React from 'react'
import Navigation from './Navigation.js'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function SignIn() {
  let navigate = useNavigate();
  const initialValues = {
    username: '',
    password: ''
  }

  const onSubmit = (values) => {
    axios.post('http://localhost:4000/login', values)
    .then((res) =>{
      console.log(res.data)
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('id', res.data.id)

      navigate('/combat-tracker')
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().max(75, 'Must be less than 75 Characters').required('Required'),
      password: Yup.string().min(10, 'must be at least 10 Characters').required('Required')
    }),
    onSubmit
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
              onBlur={formik.handleBlur}
              placeholder='Input Username'></input>
              {formik.touched.username && formik.errors.username ? (<div className='formErr'>{formik.errors.username}</div>) : null}
            Password:
            <input 
              type='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder='Input Password'></input>
              {formik.touched.password && formik.errors.password ? (<div className='formErr'>{formik.errors.password}</div>) : null}
            <button type='submit' disabled={!formik.isValid}>Sign In</button>
        </form>
        <h3>Create an Account</h3>
        <button><Link to="/register">Register Here</Link></button>
    </div>
  )
}

export default SignIn