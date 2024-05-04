import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import LoginPage from './auth/loginPage';
import Register from './auth/register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
           <Route path='/login' element={<LoginPage/>}/>
           <Route path='/register' element={<Register/>}/>
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
