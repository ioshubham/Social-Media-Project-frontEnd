import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { updateUserAction } from '../Redux/Auth/auth.action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: "none",
  overFlow: "scroll-y",
  borderRadius: 3
};

export default function ProfileModal({open, handleClose}) {
  const dispatch=useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handelSubmit=(values)=>{
//     console.log("values from profile model",values)
//   }
  const formik=useFormik({
    initialValues: {
        firstName:"",
        lastName:""
    },
    onSubmit:(values,)=>{
        console.log("values",values)
        dispatch(updateUserAction(values))
    }
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                        <p>Edit Profile</p>
                    </div>
                    <Button type="submit">Save</Button>
                </div>
                <div className='h-[15rem]'>
                    <img className='w-full h-full rounded-t-md'
                    src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="" />
                </div>
                <div className='pl-5'>
                    <Avatar
                    className='transform -translate-y-24'
                    sx={{width: "10rem", height: "10rem"}}
                    src="https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg" />
                </div>
                <div className='space-y-3'>
                    <TextField 
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                   />
                   <TextField 
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                   />
                </div>
            </form>
        </Box>
      </Modal>
    </div>
  );
}