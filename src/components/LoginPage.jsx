import React from 'react';
import { useNavigate } from 'react-router-dom';  
import '../css/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate(); 
  const handleSignIn = (event) => {
    event.preventDefault();
    navigate('/team-details');
  };

  return (
    <div className="page-container">
      <h1 className="title">Scavenger Hunt</h1>
      <div className="image-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTK-HTPwFF4pNhjWnUVd0NoQEaFxpDRjocA&s" 
          alt="Scavenger Hunt" 
          className="top-right-image"
        />
      </div>
      <div className="login-container">
        <div className="login-box">
          <h2 style={{ color: "white" }}>LOGIN</h2>
          <form onSubmit={handleSignIn}>
            <div className="textbox">
              <input type="email" placeholder="Enter team leader's email" required/>
            </div>
            <div className="textbox">
              <input type="password" placeholder="Password" required/>
            </div>
            <button type="submit" className="btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
