import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Backdrop, CircularProgress, Grid, IconButton } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SearchUser from '../../Components/SearchUser';
import Userchatcard from './Userchatcard';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, getAllChat } from '../../Redux/message/message.action';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { uploadToCloudinary } from '../../utils/UploadToCloudniry';

const Message = () => {
  const dispatch = useDispatch();
  const { message, auth } = useSelector(store => store);
  const [currentChat, setCurrentChat] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages,setMessages] = useState([]);

  useEffect(() => {
    dispatch(getAllChat());
  },[]);

  console.log("chat-------------", message.chats);

  const handleSelectImage = async (e) => {
    setLoading(true);
    const imgUrl = await uploadToCloudinary(e.target.files[0], "image");
    setSelectedImage(imgUrl);
    setLoading(false);
  };

  const handleCreateMessage = (value) => {
    const newMessage = {
      chatId: currentChat?.id,
      content: value,
      image: selectedImage
    };
    dispatch(createMessage(newMessage));
  };

  useEffect(()=>{
    setMessages([...messages,message.message])
  },[message.message])
  return (
    <div>
      <Grid container className='h-screen'>

        <Grid className='px-5' item xs={3}>
          <div className='flex h-full justify-between space-x-2'>
            <div className='w-full'>
              <div className='flex space-x-4 items-center py-4'>
                <ArrowBackIcon />
                <h1 className='text-xl font-bold'>Home</h1>
              </div>
              <div className='h-[83vh]'>
                <div className=''>
                  <SearchUser />
                </div>
                <div className='h-full space-y-4 mt-5 overflow-y-auto hideScrollbar'>
                  {message.chats.map((item) => (
                    <div onClick={() => { setCurrentChat(item) ;setMessages(item.message); }}>
                      <Userchatcard chat={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className='h-full' item xs={9}>
          {currentChat ? (
            <div>
              <div className='flex justify-between items-center border-l p-5'>
                <div className='flex item-center space-x-3'>
                  <Avatar src="https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg" />
                  <p>{auth.user.id === currentChat.users[0].id ? currentChat.users[1].firstName + " " + currentChat.users[1].lastName :
                    currentChat.users[0].firstName + " " + currentChat.users[0].lastName}</p>
                </div>
                <div className='flex space-x-3'>
                  <IconButton>
                    <AddIcCallIcon />
                  </IconButton>
                  <IconButton>
                    <VideoCallIcon />
                  </IconButton>
                </div>
              </div>
              <div className='hideScrollbar overflow-y-auto h-[82vh] px-2 space-y-5 py-5'>
                {messages.map((item)=> <ChatMessage item={item} />)}
              </div>
              <div className='sticky bottom-0 border-l'>
                {selectedImage && <img className='w-[5rem] h-[5rem] object-cover px-2' src={selectedImage} alt="" />}
                <div className='py-5 flex items-center justify-center space-x-5'>
                  
                  <input
                    className='bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5'
                    placeholder='type message'
                    type="text"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && e.target.value) {
                        handleCreateMessage(e.target.value);
                        setSelectedImage("")
                      }
                    }}
                  />
                  <div>
                    <input
                      type="file"
                      accept='image/*'
                      onChange={handleSelectImage}
                      className='hidden'
                      id="image-input"
                    />
                    <label htmlFor="image-input">
                      <AddPhotoAlternateIcon />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='h-full space-y-5 flex flex-col justify-center items-center'>
              <ChatBubbleOutlineIcon sx={{ fontSize: "15rem" }} />
              <p className='text-xl font-semibold'>No chat Selected</p>
            </div>
          )}

        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
       
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Message;
