import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is Required!"),
  password: Yup.string().min(6,"Password must be at least 6 characters").required("Password is Required!")
});

const Login = () => {
  // const [formValues,setFormValue] = useState();
  const handleSubmit = (values) => {
    console.log("handle submit", values);
  };

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
          </div>
          <Button sx={{padding: ".8rem 0rem"}} fullWidth type="submit" variant="contained" color='primary'>Login</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
