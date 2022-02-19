import React,{useState,useRef,useEffect}  from 'react'
import "./navbar.scss"

import  accImg from "../../assets/acc-img.png";
import Options from '../user-options-component/Options';

import {Link} from "react-router-dom"
import Mobile from '../mobileNav/Mobile';

  export const navData =[
    

    {
    name:"  Home",
    path:"/"
  },

  {
    name:"Blog",
    path:"/"
  },
  {
    name:"recents",
    path:"/"
  },
  {
    name:"collections",
    path:"/"
  },
  {
    name:"Books",
    path:"/"
  },
  
  
]
const Navbar = () => {
  
  

 //close option  user   clicks out
 
 function useOutsideAlerter(ref){
  useEffect(()=>{
      function handleClickOutside(event){
          if(ref.current && !ref.current.contains(event.target)){     
              setIsOpen(false)
          }
      }
      document.addEventListener("mousedown",handleClickOutside)
return ()=>{
document.removeEventListener("mousedown",handleClickOutside)
}
  },[ref])
}
 
const wrapperRef =useRef(null)
useOutsideAlerter(wrapperRef)
  
  const[isOpen,setIsOpen] = useState(false)
    let userName = "Patrick";
  return (
    <>
      <nav ref={wrapperRef}>
        <div className='nav-header'>
        <div className='user-circle'  onClick={()=>{
            
            if(!isOpen){
              setIsOpen(true)
            }
            else{
              setIsOpen(false)
            }
            
          } }>
              {userName ?<span>{userName.charAt(0)}</span> : <span><img src={accImg} height='30px' width="30px" alt='account-icon'/></span> }
              
              
          
              <Options isOpen={isOpen}/>
          
          
          </div>
      
            
         <Mobile/>
        </div>
        
          <div className='menu'>
          {navData.map((data,index) => {
            const { name, Path } = data;
            return (
              <li key={index}>
       <Link
                  to={Path}
                 
                  >
                  {name}
                </Link>{" "}
          
    
              </li>
            );
          })}
          </div>
       
         
          </nav>  
    </>
  )
}

export default Navbar