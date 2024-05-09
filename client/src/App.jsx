import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import LoginPage from './auth/loginPage';
import Register from './auth/register';
import Department from './pages/Department';
import DepartmentView from './pages/DepartmentView';
import Upload from './Admin/Upload';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/departments" element={<Department />} />
            <Route path="/:name" element={<DepartmentView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
