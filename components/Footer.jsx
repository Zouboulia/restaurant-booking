import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer max-w-5xl mx-auto p-4 bg-slate-50">
      <p> Copyright {currentYear}, all rights reserved</p>
    </div>
  );
};

export default Footer;
