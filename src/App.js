import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import Message from './pages/Message/Message';
import HomePage from './pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Redux/Auth/auth.action';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);
  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  },[jwt])
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={auth.user? <HomePage/>:<Authentication/>} />
        <Route path='/message' element={<Message/>} />
        <Route path='/*' element={<Authentication/>} />
      </Routes>
      
      

    </div>
  );
}

export default App;
