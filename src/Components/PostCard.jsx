import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostCard = () => {
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
        title="DummyTitle"
        subheader="dummytitle"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_1280.jpg"
        alt="Two child"
      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          Dummy summary
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between' disableSpacing>
       <div>
        <IconButton>
        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
        </IconButton>
        <IconButton>
            {<ShareIcon/>}
        </IconButton>
        <IconButton>
            {<ChatIcon/>}
        </IconButton>
       </div>
       <div>
        <IconButton>
        {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
        </IconButton>
        
       </div>
      </CardActions>

    </Card>
  )
}

export default PostCard