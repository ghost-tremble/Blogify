import React from 'react'
import { CustomButton } from '../styledComponents/Components'
import "./options.scss"
import { Link } from 'react-router-dom'
const Options = ({isOpen}) => {
    return (
        <div className={`options ${isOpen ? 'open':''}`}>
           <CustomButton background=" #bdbfce">
               <Link to="/login"> Login </Link>
               </CustomButton>
                <CustomButton background="#fff">
                <Link to="/signup"> Sign Up </Link>
               </CustomButton>
        </div>
    )
}

export default Options
