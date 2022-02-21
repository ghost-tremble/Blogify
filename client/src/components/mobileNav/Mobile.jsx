import React from 'react'
import "./mobile.css"
import { Link } from "react-router-dom";
import { navData } from '../nav-bar/Navbar'
const Mobile = () => {
    
    return (
        <nav role="navigation">
        <div id="menuToggle">
       
          <input type="checkbox" />
          
        
          <span></span>
          <span></span>
          <span></span>
          
        
          <ul id="menu">
          {navData.map((data,index) => {
            const { name, path } = data;
            return (
              <li key={index}>
       <Link
                  to={path}
                 
                  >
                  {name}
                </Link>{" "}
          
    
              </li>
            );
          })}
          </ul>
        </div>
      </nav>
    )
}

export default Mobile
