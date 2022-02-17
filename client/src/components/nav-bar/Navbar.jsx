import React  from 'react'
import "./navbar.scss"

import  accImg from "../../assets/acc-img.png";


  
const Navbar = () => {
    let userName = "Patrick";
  return (
    <>
      <nav>
          <div className='user-circle'>
              {userName ?<span>{userName.charAt(0)}</span> : <span><img src={accImg} height='30px' width="30px" alt='account-icon'/></span> }
              
          </div>
          <div className='menu'>
          <ul>
              <li><a> Home</a></li>
              <li><a> Blog</a></li>
              <li><a> Recents</a></li>
              <li><a> Collections</a></li>
              <li><a> Books</a></li>
          </ul>
          </div>
         
          </nav>  
    </>
  )
}

export default Navbar