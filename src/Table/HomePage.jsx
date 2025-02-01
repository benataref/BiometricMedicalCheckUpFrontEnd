import React from 'react';


const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(./public/assets/microscop.jpg)',
    
    backgroundSize: 'cover', // Makes the image cover the entire component
    backgroundPosition: 'center', // Centers the image
    height: '900px', // Example height
    width: '100%', // Full width
    color: 'white', // Text color for contrast
    display: 'flex', // Flexbox for centering content if needed
    alignItems: 'center', 
    justifyContent: 'center'
  };

  return (
    <div style={backgroundImageStyle}>
     
    </div>
  );
};

export default HomePage;