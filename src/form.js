
  import React,{Component} from "react";
  import "./App.css"
  class Form extends Component{
  
  
    render(){
        
        const {formErrors}=this.props
      return(<div>
 <div className="form-wrapper">
        <h1>create account</h1>
        <form onSubmit={this.props.handlesubmit} >
          <div className="firstName">
            <input
            type="text"
            className={formErrors.firstName.length>0? "error":null}
            placeholder="First Name"
            name="firstName"
            
            onChange={this.props.handlechange}
            />
            {formErrors.firstName.length>0 &&(
              <span className="errorMessage">{formErrors.firstName}</span>
              
            )} 
          </div>
          <div className="lastName">
            <input
            type="text"
            className={formErrors.lastName.length>0? "error":null}
            placeholder="Last Name"
            name="lastName"
            
            onChange={this.props.handlechange}
            />
            {formErrors.lastName.length>0 &&(
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
          <button onClick={this.props.email} className="buttonemail">Email</button>
          <button onClick={this.props.mobile} className="buttonmobile">Mobile</button>
          <div className="email">
            <input
            type="email"
            className={formErrors.email.length>0? "error":null}
            placeholder="Email"
            name="email"
            
            onChange={this.props.handlechange}
            />
            {formErrors.email.length>0 &&(
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          
          <div className="mobile">
            <input
            type="number"
            className={formErrors.mobile.length>0? "error":null}
            placeholder=" mobile"
            name="mobile"
            
            onChange={this.props.handlechange}
            onKeyPress={this.props.handelmobile}
            />
            
            {formErrors.mobile.length>0 &&(
              <span className="errorMessage">{formErrors.mobile}</span>
            )}
          </div>
          
        
          <div className="password">
            <input
            type="password"
            className={formErrors.password.length>0? "error":null}
            placeholder=" Password"
            name="password"
            
            onChange={this.props.handlechange}
            onClick={this.props.showpass}
            />
            <div className=" show"><i className="fa fa-eye"></i></div>


            {formErrors.password.length>0 &&(
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div> 
          <div className="Gender">
          <label htmlFor="Gender">Gender : </label>
            <select onChange={this.props.handlechangee} name="Gender">
                <option value="mail">mail</option>
              <option value="femaile">femaile</option>
            </select>
          </div>
          <div className="createAccount">
            <button type="submit">create Account</button>
            <small>Already Have an Account</small>
          </div>
        </form>
      </div>
      </div>)
    }
  }
  export default Form

