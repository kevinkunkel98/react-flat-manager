import React from "react";

export const Home = () => {
  return (
  <>
    <div className="navbar-images">
      <a href="/about">
        <img src="/grocery.png" alt="About" />
      </a>
      <a href="/features">
        <img src="/house.png" alt="Features" />
      </a>
      <a href="/more">
        <img src="/calender.png" alt="More" />
      </a>
    </div>
    </>
  );
};
