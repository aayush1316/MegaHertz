import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import CreateAccount from './register';
import ForgotPassword from './forgotpassword';
import ResetPassword from './ResetPassword';
import Profile from './profile';
import MacBookAir1 from './Login';
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/registration' element={<CreateAccount/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<MacBookAir1/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App