import React from "react";
import Logo from '../../Images/ITEXPERTS_LOGO.png'
import './Loader.css';

const Loader = () => {
  return (
    <>
      <div class="Container loader">
        <div class="glitch">
          <img src={Logo} alt="Company Logo" />
        </div>
      </div>
    </>
  );
};

export default Loader;
