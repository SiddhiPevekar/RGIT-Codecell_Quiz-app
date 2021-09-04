import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

const Navbar = () => {
    return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={logo}></img> </NavLink>
                  </div>
                </nav>
              </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;