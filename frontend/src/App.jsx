import React, { useState } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Display from './components/Display';
import NavBar from './components/NavBar';
import Sidebar from './components/sideBar'
import Footer from './components/footer';
import HOF from './pages/HOF';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import { AuthProvider } from './authContext';
import Leaderboard from './pages/topTypers';
import Advance from './pages/advance';
import CustomWords from './pages/customWords';



function App() {
  const router = createBrowserRouter([
    {
      path: "/normal-mode",
      element: <><NavBar /><Sidebar /><Display /></>
    },
    {
      path: '/',
      element: <><NavBar /><Sidebar /><Home /></>
    },
    {
      path: '/hall-of-fame',
      element: <><NavBar /><Sidebar /><HOF /></>
    },
    {
      path: '/login',
      element: <> <NavBar /> <Login /></>
    },
    {
      path: '/signup',
      element: <> <NavBar /> <Signup /></>
    },
    {
      path: '/top-typers',
      element: <><NavBar /> <Sidebar /> <Leaderboard /></>
    },
    {
      path: '/advance-type',
      element: <><NavBar /> <Sidebar /> <Advance /></>
    },
    {
      path: "/top-200-words",
      element: <><NavBar /><Sidebar /><Display /></>
    },
    {
      path: "/custom-words",
      element: <><NavBar /><Sidebar /> <CustomWords/></>
    }
  ])
  return (

    <AuthProvider>
      <div>
        <RouterProvider router={router} />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
