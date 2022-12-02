import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>This is the place where people can get introduced</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/users">Users</Link>
        <Link to='/posts'>Posts</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;