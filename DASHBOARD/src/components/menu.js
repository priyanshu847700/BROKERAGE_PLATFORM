import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);       //react hook
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // const [showProfile, setShowProfile] = useState(false);
  // const handleProfileClick = () => {
  //   setShowProfile((prev) => !prev);
  // };
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)} >
            <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Orders" onClick={()=>handleMenuClick(1)} >
            <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Holdings" onClick={()=>handleMenuClick(2)} >
            <p>Holdings</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Positions" onClick={()=>handleMenuClick(3)} >
            <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Funds" onClick={()=>handleMenuClick(4)} >
            <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/Apps" onClick={()=>handleMenuClick(5)} >
            <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>

   );
};

export default Menu;
