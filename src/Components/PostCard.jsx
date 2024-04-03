import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostCard = ({ item }) => {
  const [showComments,setShowComment] = useState(false);

  const handleShowComment=()=>{
    setShowComment(!showComments);
  }
  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName + " " + item.user.lastName}
        subheader={"@" + item.user.firstName.toLowerCase() + "_" + item.user.lastName.toLowerCase()}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Two child"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between' disableSpacing>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            {<ShareIcon />}
          </IconButton>
          <IconButton onClick={handleShowComment}>
            {<ChatIcon />}
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>

        </div>
      </CardActions>
      {showComments &&<section>
        <div className='flex items-center space-x-5 mx-3 my-5'>
          <Avatar sx={{}} />
          <input onKeyPress={(e)=>{
            if(e.key==="Enter"){
              console.log("enter is pressed-------------",e.target.value)
            }
          }}
          className='w-full outline-none bg-transparent border border-[#3b4050] rounded-full px-5 py-2 ' type="text" placeholder='write your comment....' />
        </div>
        <Divider/>
        <div className='mx-3 space-y-2 my-5 text-xs'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-5'>
              <Avatar sx={{height:"2rem",width:"2rem",fontSize:".8rem"}}>  
                dummyName 
              </Avatar>
              <p>dummyComment</p>
            </div>

          </div>

        </div>
      </section>}
    </Card>
  )
}

export default PostCard