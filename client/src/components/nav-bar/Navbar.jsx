import React,{useState,useRef,useEffect}  from 'react'
import "./navbar.scss"

import  accImg from "../../assets/acc-img.png";
import Options from '../user-options-component/Options';


  
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
          <div className='user-circle'  onClick={()=>{
            
            if(!isOpen){
              setIsOpen(true)
            }
            else{
              setIsOpen(false)
            }
            
          } }>
              {userName ?<span>{userName.charAt(0)}</span> : <span><img src={accImg} height='30px' width="30px" alt='account-icon'/></span> }
              
              
          </div>
          <Options isOpen={isOpen}/>
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