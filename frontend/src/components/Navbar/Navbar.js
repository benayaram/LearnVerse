import React from 'react';
import CommunityButton from './CommunityButton';
import BrandTitle from './BrandTitle';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="navbar-container">
        <BrandTitle />
        <div className="navbar-right">
          <nav>
            <ul>
              <li><a href="#roadmaps">Roadmaps</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
          <CommunityButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
