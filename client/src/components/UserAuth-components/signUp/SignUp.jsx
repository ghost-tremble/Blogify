import React from "react"
import { CustomButton } from "../../styledComponents/Components";
import FormInput from "../form-input-component/FormInput";

import "../login-component/login.scss"
class SignUp extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'' 
        }
    }
    // handleSubmit = async (e)=>{
    //     e.preventDefault();
    //     const {email,password} = this.state
    //     try{
    //         await auth.signInWithEmailAndPassword(email,password);
    //         this.setState({email:'',password:''})
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
        
        
    // }
    
    handleChange = (e) =>{
        const  {value,name} = e.target;
        
        this.setState ({[name]:value})
        
    }
    
    render(){
        return(
            <div className="login">
                 <div className="sign-in">
                <span>Sign Up</span>
                <form autofill="false" onSubmit={this.handleSubmit} autoComplete="new-password">
                    <FormInput name="email"
                     type="email"
                      value={this.state.email} 
                      required
                      label="Email"
                      onChange={this.handleChange}
                      
                      />
                  
                    <FormInput name="password" type="password"
                    value={this.state.password} 
                    required 
                    label="password" 
                    onChange={this.handleChange}/>
                    
                     <FormInput name="passwordAgain" type="password"
                    value={this.state.password} 
                    required 
                    label="confirm password" 
                    onChange={this.handleChange}/>
                    
                    
                

 <div className="buttons">

<CustomButton background="rgb(206, 73, 240)" >create account</CustomButton>
 </div>
            </form>
            </div>
            </div>
           
        )
    }
}

export default SignUp;