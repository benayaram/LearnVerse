import React from 'react';
import Logo from "../../Assects/Images/logo.png";
import './BrandTitle.css'; // Import your CSS file for additional styling

const BrandTitle = () => {
  return (
    <div className="brand-title">
      <img src={Logo} alt="Brand Logo" className="logo-image" />
    </div>
  );
};

export default BrandTitle;
