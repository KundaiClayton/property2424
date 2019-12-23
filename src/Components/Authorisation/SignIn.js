import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import './signin.css'
 class SignIn extends Component {
     constructor(props){
         super(props)
         this.state={
            email:'',
            password:'',
            loggedin: false
         };
         this.change=this.change.bind(this);
         
         this.submit=this.submit.bind(this)
     }
    
    submit=(e)=>{
        console.log(e)
        e.preventDefault()
        axios.post(`https://hosting-property-clone.herokuapp.com/Customers/authentication`, {
            email: this.state.email,
            password: this.state.password
          }).then(res=>{
            //localStorage.setItem('cool-jwt',res.data);
            this.props.history.push('/propView');
            this.setState({
                loggedin:true
            })
          }).catch(error=>{
              console.log(error);
              
              this.props.history.push('/registration');
              alert("'Incorrect password/email, or \n Account doesn't exists!, Please sign up'")
          });
          
        
    }
    change=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
        
    
    render() {
        console.log(this.state);
        return (
            <div>
          <div className="contain"><h5 className="txt">Login</h5> </div>  
            <div className="container card">
                <form onSubmit={this.submit} className='Blue' >
                   
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type='email' id='email' value={this.state.email} onChange={this.change}/>
                   </div>
                   <div className="input-field">
                    
                       <label htmlFor="password" >Password</label>
                       <input type='password'  id='password' value={this.state.password} onChange={this.change}/>
                   </div>
                   <div className="input-field">
                       <button className="btn login  blue darken-4" >Login</button>
                      
                   </div>
                   <div className="input-field">
                       <Link to={'/registration'} className="red btn red darken-3 register">Register</Link>
                      
                   </div>
                </form> 
            </div>
            </div>
        )
    }
}
export default SignIn