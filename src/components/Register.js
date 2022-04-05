import React, {useContext} from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {LoginContext} from '../App'

function Register() {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);

    let navigate = useNavigate();
    const initialValues = {
        username: '',
        password: '',
        confirmPassword:'',
        email: ''
      }
    
      const onSubmit = (values) => {
        axios.post('http://localhost:4000/register', values)
        .then((res) => {
          console.log(res.data)
          localStorage.setItem('username', res.data[0][0].username)
          localStorage.setItem('id', res.data[0][0].id)
          setLoggedIn(true);
          navigate('/combat-tracker')
        })
        .catch(err=>console.log(err.response.data))
      }



    
      const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
          username: Yup.string().max(75, 'Must be less than 75 Characters').required('Required'),
          password: Yup.string().min(10, 'must be at least 10 Characters').required('Required'),
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
        }),
        onSubmit
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
              onBlur={formik.handleBlur}
              placeholder='Input Username'></input>
              {formik.touched.username && formik.errors.username ? (<div className='formErr'>{formik.errors.username}</div>) : null}
            Email:
            <input 
              type='text'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email} 
              onBlur={formik.handleBlur}
              placeholder='Input Email'></input>
              {formik.touched.email && formik.errors.email ? (<div className='formErr'>{formik.errors.email}</div>) : null}
            Password:
            <input 
              type='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder='Input Password'></input>
              {formik.touched.password && formik.errors.password ? (<div className='formErr'>{formik.errors.password}</div>) : null}
            Confirm Password:
            <input 
              type='password'
              name='confirmPassword'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              placeholder='Confirm Password'></input>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className='formErr'>{formik.errors.confirmPassword}</div>) : null}
            <button type='submit' disabled={!formik.isValid}>Register</button>
        </form>
    </div>
  )
}

export default Register