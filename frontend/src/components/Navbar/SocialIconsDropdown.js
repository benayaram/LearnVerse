import React from 'react';

const SocialIconsDropdown = () => {
  const socialMediaIcons = [
    { icon: 'facebook', link: 'https://www.facebook.com/' },
    { icon: 'twitter', link: 'https://twitter.com/' },
    { icon: 'instagram', link: 'https://www.instagram.com/' },
    // Add more social media icons as needed
  ];

  return (
    <div className="social-icons-dropdown">
      {socialMediaIcons.map((item) => (
        <a key={item.icon} href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={`path/to/${item.icon}-icon.svg`} alt={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialIconsDropdown;
