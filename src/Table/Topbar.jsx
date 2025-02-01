import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutAndNavigate = () => {
    handleLogout(); // Perform the logout actions
    navigate('/login'); // Navigate to login page
  };

  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
        <a href="/HomePage" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img src='/assets/logo.jpg' alt="Atlas Speciality Clinic" style={{ width: '50%', height: 'auto' }} />
           
          </a>
      <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
    
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Atlas Speciality Clinic
        </a>
        <div className="align-items-center d-none d-md-flex">
          <i className="bi bi-clock"></i>24 hours service
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-phone"></i> Call us now +251911239975
        </div>
        <button onClick={handleLogoutAndNavigate} className="appointment-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
