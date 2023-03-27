import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full h-fit flex justify-between items-center bg-opacity-40 backdrop-filter backdrop-blur-sm bg-gray-50 sm:px-8 px-4 border-b border-gray-300 fixed top-0 left-0 right-0 z-10">
      <Link to="/">
        <img className="w-28 object-contain" src={logo} alt="logo" />
      </Link>
      {location.pathname === "/" ? (
        <div>
          <Link
            to="/create-post"
            className="font-roboto font-medium bg-[#EA5455] text-white px-4 py-3 rounded-md shadow-2xl shadow-gray-500 hover:bg-[#ff7f7f] mx-1"
          >
            Create
          </Link>
        </div>
      ) : (
        <div>
          <Link
            to="/"
            className="font-roboto font-medium bg-[#002B5B] text-white shadow-2xl shadow-gray-500 hover:bg-[#3f5a78] px-4 py-3 rounded-md mx-1"
          >
            Home
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
