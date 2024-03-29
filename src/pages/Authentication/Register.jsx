import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { registerUserAction } from '../../Redux/Auth/auth.action';
import { Navigate } from 'react-router-dom';

const initialValues = {firstName:"",lastName:"", email: "", password: "",gender:"" };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is Required!"),
  password: Yup.string().min(6,"Password must be at least 6 characters").required("Password is Required!")
})
const Register = () => {
  const [gender,setGender] = useState('');

  const dispatch=useDispatch();

  const handleSubmit = (values) => {
    values.gender=gender
    console.log("handle submit", values);
    dispatch(registerUserAction({data:values}))
  };

  const handleChange=(event)=>{
    setGender(event.target.value);
  }

  return (
    <div>
      <Formik 
        onSubmit={handleSubmit} 
        validationSchema={validationSchema} 
        initialValues={initialValues}
      >
        <Form className='space-y-5'>
          <div className='space-y-5'>
          <div>
              <Field
                as={TextField} 
                name="firstName" 
                placeholder="First Name" 
                type="text" 
              />
              <ErrorMessage name="firstName" component={"div"} className='text-red-500'/>
            </div>
            <div>
              <Field
                as={TextField} 
                name="lastName" 
                placeholder="Last Name" 
                type="text" 
              />
              <ErrorMessage name="lastName" component={"div"} className='text-red-500'/>
            </div>
            <div>
              <Field
                as={TextField} 
                name="email" 
                placeholder="Email" 
                type="email" 
              />
              <ErrorMessage name="email" component={"div"} className='text-red-500'/>
            </div>
            <div>
              <Field
                as={TextField} 
                name="password" 
                placeholder="Password" 
                type="password" 
              />
              <ErrorMessage name="password" component={"div"} className='text-red-500'/>
            </div>
      <RadioGroup
        row
        aria-labelledby="gender"
        name="gender"
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <ErrorMessage name="gender" component={"div"} className='text-red-500'/>
      </RadioGroup>
          </div>
          <Button sx={{padding: ".8rem 0rem"}} fullWidth type="submit" variant="contained" color='primary'>Register</Button>
        </Form>
      </Formik>
      <div className='flex gap-2 item-center justfy-center'>
        <p>If you don't have account ?</p>
        <Button onClick={()=>Navigate('/register')}>Register</Button>
      </div>
    </div>
  );
};

export default Register;
