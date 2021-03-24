import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LineIcon from "react-lineicons";

function Header() {
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };


  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image" >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Link to="/" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={require("../assests/logo.png")} alt="" style={{}}/>
          </Link>
          </div>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink exact to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/software">
              <span>SOFTWARE</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/seo">
              <span>SEO</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blockchain">
              <span>BLOCKCHAIN</span>
            </NavLink>
          </li>
          {/* <li><NavLink to="/blogs"><span>Blogs</span></NavLink></li> */}
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; 2016 - {new Date().getFullYear()} Sertic</p>
        
      </div>
    </nav>
  );
}

export default Header;
