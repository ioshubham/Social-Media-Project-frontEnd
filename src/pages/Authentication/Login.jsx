import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { loginUserAction } from '../../Redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is Required!"),
  password: Yup.string().min(6,"Password must be at least 6 characters").required("Password is Required!")
});

const Login = () => {
  // const [formValues,setFormValue] = useState();
  const navigate = useNavigate(); 
  const dispatch=useDispatch();

  const handleSubmit = (values) => {
    console.log("handle submit", values);
    dispatch(loginUserAction({data:values}))
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
      <div className='flex gap-2 item-center justfy-center'>
        <p>If you don't have account ?</p>
        <Button onClick={()=>navigate('/register')}>Register</Button>
      </div>
    </div>
  );
};

export default Login;
