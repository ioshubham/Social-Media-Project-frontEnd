import { Grid } from '@mui/material'
import React from 'react'
import SideBar from '../../Components/SideBar'
import { Route, Routes} from 'react-router-dom'
import MiddlePart from '../../Components/MiddlePart'
import Reels from '../../Components/Reels'
import Profile from '../../Components/Profile'
import CreateRealForm from '../../Components/CreateReelsForm'
import HomeRight from '../../Components/HomeRight'

const HomePage = () => {
  //const location=useLocation();
  return (
    <div className='px-20'>
        <Grid container spacing={0}>
          <Grid item xs={0} lg={4}>
                <div className='sticky top-0'>
                  <SideBar/>
                </div>
          </Grid>
          <Grid lg={4} item className='px-5 flex justify-center' xs={12}>
              <Routes>
                <Route  path="/" element={<MiddlePart/>}/>
                <Route  path="/reels" element={<Reels/>}/>
                <Route  path="/create-reels" element={<CreateRealForm/>}/>
                <Route  path="/profile/:id" element={<Profile/>}/>
              </Routes>
          </Grid>
          <Grid item lg={4} className='relative'>
              <div className='sticky top-0 w-full'>
                <HomeRight/>
              </div>
          </Grid>
        </Grid>
    </div>
  )
}

export default HomePage