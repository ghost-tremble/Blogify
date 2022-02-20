import React from "react"
import { CustomButton } from "../../styledComponents/Components";
import FormInput from "../form-input-component/FormInput";

import "./login.scss"
class Login extends React.Component{
    
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
                <span>Sign in</span>
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
                
 <div>
     <p>forgot password</p>
 </div>
 <div className="buttons">
 <div>
     <p>create account</p>
 </div>
<CustomButton background="rgb(206, 73, 240)" >Login</CustomButton>
 </div>
            </form>
            </div>
            </div>
           
        )
    }
}

export default Login;