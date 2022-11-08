import React from "react";
import img from "./image/Star 1.png";

const Header = () => {
  return (
    <div className="nav">
      <div className="norm">
        <img className="img" src={img} />
        <p className="travel">My Travel Journal</p>
      </div>
    </div>
  );
};

export default Header;
