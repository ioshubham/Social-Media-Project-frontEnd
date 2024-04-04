import { Avatar, Card, CardHeader } from '@mui/material'
import React, { useState } from 'react'

const SearchUser = () => {
  const [username,setUsername] = useState("");

  const handleSearchUser=(e)=>{
    setUsername(e.target.value)
    console.log("search User...........")
  }
  const handleClick=(id)=>{
    console.log(id)
  }
  return (
    <div>
      <div className='py-5 relative'>

        <input 
        className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full' 
        placeholder='Search User' 
        type="text" 
        onChange={handleSearchUser}/>
         {
        username && <Card className='absolute w-full z-10 top-[4.5rem] cursor-pointer'>
          <CardHeader onClick={()=>{
            handleClick()
            setUsername("")
          }}
          avatar={<Avatar src='https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_1280.png' />}
          title='dummyTitle'
          subheader='dummysubheader'
          />
        </Card>
      }
      </div>
     
    </div>
  )
}

export default SearchUser