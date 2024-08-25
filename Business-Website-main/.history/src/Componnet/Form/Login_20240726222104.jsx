import React from 'react';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = () => {
  return (
    <div className="wrapper">
      <div className="card-container">
        <div className="card-switch">
          <label className="switch">
            <input className="toggle" type="checkbox" />
            <span className="slider"></span>
            <span className="card-side"></span>
          </label>
        </div>
        <div className="flip-card__inner">
          <div className="flip-card__front">
            <div className="title">Log in</div>
            <form className="flip-card__form">
              <input type="email" placeholder="Email" name="email" className="flip-card__input" />
              <input type="password" placeholder="Password" name="password" className="flip-card__input" />
              <button type="submit" className="flip-card__btn">Let's go!</button>
            </form>
          </div>
          <div className="flip-card__back">
            <div className="title">Sign up</div>
            <form className="flip-card__form">
              <input type="text" placeholder="Name" name="name" className="flip-card__input" />
              <input type="email" placeholder="Email" name="email" className="flip-card__input" />
              <input type="password" placeholder="Password" name="password" className="flip-card__input" />
              <button type="submit" className="flip-card__btn">Confirm!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
