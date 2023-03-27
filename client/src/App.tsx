import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { logo } from "./assets";
import Home from "./views/Home";
import CreatePost from "./components/CreatePost/CreatePost";
import Header from "./components/Header/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full h-full min-h-screen bg-gradient-to-r from-[#E4DCCF] to-[#F3F1FF]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
