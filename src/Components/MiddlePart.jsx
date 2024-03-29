import { Avatar, Card, IconButton} from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
const story=[1,1,1,1,1]

const handOpenCreatePostModel=()=>{
  console.log("open post model ........")
}

const MiddlePart = () => {
  return (
    <div className='px-20'>
      <section className='flex items-center p-5 rounded-b-md'>
        <div className='flex flex-col item-center mr-4 cursor-pointer' >
        <Avatar sx={{width:"5rem",height:"5rem"}}> 
        <AddIcon sx={{fontSize:"3rem"}}/>
        </Avatar>
        <p>New</p>
        </div>
        {story.map((item)=><StoryCircle/>)}
      </section>

      <Card className='p-5 mt-5'>
        <div className='flex justify-between'>
          <Avatar/>
          <input readOnly type="text" className='outline-rounded w-[90%] rounded-full px-5 border-[#3b4054] border'/>
        </div>
        <div className='flex justify-center space-x-9 mt-5'>
          <div className='flex items-center'>
            <IconButton color="primary" onClick={handOpenCreatePostModel}>
              <ImageIcon/>
            </IconButton>

            <span>media</span>
          </div>
          <div className='flex items-center'>
            <IconButton color="primary" onClick={handOpenCreatePostModel}>
              <VideocamIcon/>

            </IconButton>

            <span>video</span>
          </div>
          <div className='flex items-center'>
            <IconButton color="primary" onClick={handOpenCreatePostModel}>
              <ArticleIcon/>

            </IconButton>

            <span>Article</span>
          </div>
        </div>
      </Card>

    </div>
  )
}

export default MiddlePart