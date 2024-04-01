import React from 'react'
import { navigationMenu } from './SideBarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };
  const {auth} = useSelector(store=>store);
  const navigate=useNavigate();

  const handleNavigate=(item)=>{
    if(item.title==="Profile") {
      navigate(`/profile/${auth.user.id}`)
    }
  }
  return (
    <Card className='card h-screen flex flex-col justify-between py-5 '>
        <div className='space-y-8 pl-5'>
          <div>
            <span className='logo font-bold text-xl'>MintGram</span>
            <div className='mt-9 space-y-8'>
              {navigationMenu.map((item)=> 
              <div onClick={()=>handleNavigate(item)} className='cursor-pointer flex space-x-3 items-center'>
                {item.icon}
                <p className='text-xl'>{item.title}</p>
              </div>
              
              )}

            </div>
          </div>

        </div>
        <div>
          <Divider/>
          <div className='pl-5 flex items-center justify-between pt-5'>
            <div className='flex item-center space-x-3'>
              <Avatar src="https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" />
                <div>
                  <p className='font-bold'>{auth.user.firstName+" "+auth.user.lastName}</p>
                  <p className='opacity-70'>@{auth.user.firstName.toLowerCase()+"_"+auth.user.lastName.toLowerCase()}</p>
                </div>
            </div>
            <Button
               id="basic-button"
               aria-controls={open ? 'basic-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}
             >
             <MoreHorizIcon/>
          </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          </div>
        </div>
    </Card>
  )
}

export default SideBar