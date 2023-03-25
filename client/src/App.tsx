import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { logo } from "./assets";
import Home from "./views/Home";
import CreatePost from "./components/CreatePost/CreatePost";

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px8 px-4 py-2 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img className='w-28 object-contain' src={logo} alt='logo' />
        </Link>
        <div>
          <Link
            to='/create-post'
            className='font-roboto font-medium bg-[#f30675] text-white px-4 py-3 rounded-md mx-1'
          >
            Create
          </Link>
          <Link
            to='/create-post'
            className='font-roboto font-medium bg-[#2d65ff] text-white px-4 py-3 rounded-md'
          >
            Login
          </Link>
        </div>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#e1e9ff] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
