import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>EVENTIFY</h1>
          <p>events and wedding</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>sign up for news and updates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
