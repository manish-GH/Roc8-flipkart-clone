import React from "react";

export const Navbar = () => {
  return (
    <div className="nav">
      <h1>Flipkart</h1>
      <div className="nav-search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <button>Login</button>
      <p>More</p>
      <p>Cart</p>
    </div>
  );
};
