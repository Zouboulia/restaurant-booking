import React from "react";

// Create a footer component that displays the current year using the Date object in JavaScript
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer max-w-5xl mx-auto p-4 bg-slate-50">
      <p> Copyright {currentYear}, all rights reserved</p>
    </div>
  );
};

export default Footer;
