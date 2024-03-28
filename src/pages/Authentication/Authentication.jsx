import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'
import Register from './Register'


const Authentication = () => {
  return (
    <div>
        <Grid container>
        <Grid className='image-container' item xs={7}>
        <img
          style={{
            height: '100vh', // Set height to 100% of viewport height
            width: 'auto', // Maintain aspect ratio
            display: 'block', // Remove extra space below image
            margin: '0 auto' // Center horizontally
          }}
          src="https://www.goodfreephotos.com/albums/vector-images/people-connected-in-a-web-vector-clipart.png"
          alt=""
        />
      </Grid>

      <Grid item xs={5}>

          <div className='px-20 flex flex-col justify-center h-full'>
            <Card className='card p-8 center'>
                <div className='flex flex-col items-center mb-5 space-y-1'>
                <h1 className='logo text-center'>Pixa Gram</h1>
                <p className='text-center text-sm w-[70%]'>Connecting lives, Sharing Stories: Your World Your Way</p>
                </div>

                {/*<Login></Login>*/}
                <Register></Register>
            </Card>
          </div>

      </Grid>
    </Grid>

    </div>
  )
}

export default Authentication