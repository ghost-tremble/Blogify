import React from 'react'
import { CustomButton } from '../styledComponents/Components'
import "./options.scss"
const Options = ({isOpen}) => {
    return (
        <div className={`options ${isOpen ? 'open':''}`}>
           <CustomButton background=" #bdbfce">
               Log in
               </CustomButton>
                <CustomButton background="#fff">
               SignUp
               </CustomButton>
        </div>
    )
}

export default Options
