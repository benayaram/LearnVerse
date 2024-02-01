import React, { useState } from 'react';
import SocialIconsDropdown from './SocialIconsDropdown';
import title from "../../Assects/Images/border-secondary.svg";
import './CommunityButton.css'; // Import your CSS file for additional styling

const CommunityButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="community-button">
      <button className="community-button-toggle" onClick={toggleDropdown}>
        <img src={title} alt="Community Logo" />
        <span className="button-text">Community</span>
      </button>
      {dropdownOpen && <SocialIconsDropdown />}
    </div>
  );
};

export default CommunityButton;
