import React, { useState } from "react";
import logo from '../../assets/logo_blue.png';
import "./navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav className='app__navbar' id='home'>
      {" "}
      <div className='app__navbar-logo'>
        {" "}
        <img src={logo} alt='app logo' />{" "}
      </div>{" "}
      <ul className='app__navbar-links'>
        {" "}
        <li className='p__opensans'>
          {" "}
          <a href='#about'>About us</a>{" "}
        </li>{" "}
        <li className='p__opensans'>
          {" "}
          <a href='#services'>Services</a>{" "}
        </li>{" "}
        <li className='p__opensans'>
          {" "}
          <a href='#events'>Events</a>{" "}
        </li>{" "}
        <li
          className='dropdown p__opensans'
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href='#more'>
            More{" "}&nbsp;
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-chevron-down'
              viewBox='0 0 16 16'
              style={{ cursor: "pointer" }}
            >
              <path
                fillRule='evenodd'
                d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
              />
            </svg>
          </a>
          {showDropdown && (
            <ul className='dropdown-menu'>
              <li>
                <a href='#news'>News</a>
              </li>
              <li>
                <a href='#blog'>Blog</a>
              </li>
              <li>
                <a href='#faq'>FAQ</a>
              </li>
              <li>
                <a href='#contact'>Contact us</a>
              </li>
            </ul>
          )}
        </li>
      </ul>{" "}
      <div className='app__navbar-login'>
        {" "}
        <button className='custom__button'> Contact us </button> <div />{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
