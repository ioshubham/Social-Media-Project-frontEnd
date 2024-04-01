import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard'
import UserReelCard from './UserReelCard'
import { useSelector } from 'react-redux'


const tabs=[
  {values:"post",name:"Post"},
  {values:"reels",name:"Reels"},
  {values:"saved",name:"Saved"},
  {values:"repost",name:"Repost"}
]

const posts =[1,1,1,1,1]
const reels =[1,1,1,1]
const savedPost = [1,1,1,1]

const Profile = () => {
  const [value, setValue] = React.useState('post');

const handleChange = (event, newValue) => {
  setValue(newValue);
};
const {auth}= useSelector(store=>store);
  return (
    <Card className='py-10 w-[70%]'>

    <div className='rounded-md'>

      <div className='h-[15rem]'>

        <img  className='w-full h-full rounded-t-md' 
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

      </div>
      <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>

        <Avatar className='transform -translate-y-24' sx={{width:"10rem",height:"10rem"}} 
        src="https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg" />

        {true?
        <Button sx={{borderRadius:"20px"}} variant="outlined">Edit Profile</Button>:
        <Button sx={{borderRadius:"20px"}} variant="outlined">Follow</Button>}

      </div>

      <div className='p-5'>
          <div>
            <h1 className='py-1 font-bold text-xl'>{auth.user.firstName+" "+auth.user.lastName}</h1>
            <p>@{auth.user.firstName.toLowerCase()+"_"+auth.user.lastName.toLowerCase()}</p>
          </div>
          <div className='flex gap-5 item-center py-3'>

            <span>41 post</span>
            <span>35 followers</span>
            <span>5 Followings</span>

          </div>

          <div>
            <p>Bio Line of user </p>
          </div>
      </div>

      <section>
      <Box sx={{ width: '100%' ,borderBottom:1, borderColor:"divider"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {tabs.map((item)=><Tab value={item.values} label={item.name} />)}
      </Tabs>
      </Box>

      <div className='flex justify-center'>

        {value==="post"? <div className='space-y-5 w-[70%] my-10'>
          {posts.map((item)=> <div className='border border-slate-100 rounded-md'>
            <PostCard/>
          </div>)}
        </div>: 
        value==="reels" ? <div className='flex justify-center flex-wrap gap-2 my-10'> 
          {reels.map((item)=><UserReelCard/>)}
        </div>: 
        value==="saved" ? <div className='space-y-5 w-[70%] my-10'> 
          {savedPost.map((item)=> <div className='border border-slate-100 rounded-md'>
            <PostCard/>
          </div>)}</div>: <div>REPOST</div>}

      </div>
      </section>

    </div>
    
    
    </Card>
  )
}

export default Profile