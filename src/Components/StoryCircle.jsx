import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const StoryCircle = () => {
  return (
    <div>
        <div className='flex flex-col item-center mr-4 cursor-pointer' >
            <Avatar sx={{width:"5rem",height:"5rem"}}
            src="https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            > 
            <AddIcon sx={{fontSize:"3rem"}}/>
            </Avatar>
            <p>DummyNames</p>
        </div>
    </div>
  )
}

export default StoryCircle