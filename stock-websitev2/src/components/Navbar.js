import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiRocketThruster className="navbar-icon" />
              Skye
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div> */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <NavLink
                  to="/#"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <span className="bolded">Edu Crypto</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <span className="bolded">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <span class="bolded">News</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/learning"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <span className="bolded">Learning Resources</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/graphs"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <span className="bolded">Graphs</span>
                </NavLink>
              </li>
              </ul>

              <a className="cta">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <span className="bolded-a">Sign Up</span>
                </NavLink>
              </a>
            {/* </ul> */}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
