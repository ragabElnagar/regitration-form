import React,{Component} from "react";
import Form from "./form";
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );   
class Formfunction extends Component{
  state={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    mobile:"",
    Gender:"mail",
    formErrors:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      mobile:"",
    }

}

  //function of Gender
  handlechangee=(e)=>{
    this.setState({
      Gender:e.target.value
    })
  }
  //show feild of mopile
  mobile=(e)=>{
    e.preventDefault();
    document.querySelector(".email").style.display="none" 
    document.querySelector(".mobile").style.display="block" 
    document.querySelector(".mobile input").style.width="100%" 

  }
  //show field of email
  email=(e)=>{
    e.preventDefault();
    document.querySelector(".email").style.display="block" 
    document.querySelector(".mobile").style.display="none" 
    document.querySelector(".email input").style.width="95%" 

  }
  //submit function
  handlesubmit=(e)=>{
    e.preventDefault();
      if((this.state.firstName==="")||(this.state.firstName.length<3)){
       document.querySelector(".firstName input").classList.add("error")

       
    }else if((this.state.lastName==="")||(this.state.lastName.length<3)){
      document.querySelector(".lastName input").classList.add("error")

    }
    else if((this.state.email==="")&&((this.state.mobile.length<11)||(this.state.mobile.length>11))){
      document.querySelector(".email input").classList.add("error")
      document.querySelector(".mobile input").classList.add("error")
    }
    else if((this.state.password==="")||(this.state.password.length<8)){
      document.querySelector(".password input").classList.add("error")
   
    }
    else{
      alert(`
  firstName : ${this.state.firstName}
  lastName : ${this.state.lastName}
  email : ${this.state.email}
  mobile : ${this.state.mobile}
  password : ${this.state.password}
  Gender: ${this.state.Gender}      
  `)
    }
     
  }
//change function
  handlechange=(e)=>{
    e.preventDefault();
    let{name ,value}=e.target;
    let formErrors=this.state.formErrors;
    switch(name){
      case "firstName":
        formErrors.firstName=
        value.length<3
        ? "minumim 3 character required"
        :"";
          break;
        case "lastName":
        formErrors.lastName=
        value.length<3
        ? "minumim 3 character required"
        :"";
        break;
      case "email":
        formErrors.email=
        emailRegex.test(value)&& value.length>0
        ? ""
        :"invalid email address";
        break;
      case "password":
        formErrors.password=
        value.length<8
        ? "Choose password contine at least 8 charchter"
        :"";
        let a1=value.includes("$")
        let a2=value.includes("!")
        let a3=value.includes("#")
        let a4=value.includes("%")
        let a5=value.includes("^")
        let a6=value.includes("&")
        let a7=value.includes("*")
        let a8=value.includes("(")
        let a9=value.includes(")")
        let a10=value.includes("?")
        let a11=value.includes("/")
        let a12=value.includes("+")
        let a13=value.includes("@")

        if((a1<1)&&(a2<1)&&(a3<1)&&(a4<1)&&(a5<1)&&(a6<1)&&(a7<1)
        &&(a8<1)&&(a9<1)&&(a10<1)&&(a11<1)&&(a12<1)&&(a13<1)){
        formErrors.password="choose stronge password conatins symbole"
        }
        break;
        case "mobile":
        formErrors.mobile=
        value.length<11
        ? " 11 number required"
        :"";
        break;
      default:
        break;
    }
    this.setState({formErrors,[name]:value},()=>console.log(this.state))
  }
  //show and hide password
   showpass=(e)=>{
    let boton=document.querySelector(".show i");
    let x=document.querySelector(".password input")
    boton.onclick=function(){
        if(boton.className==="fa fa-eye"){
        x.setAttribute("type","text");
        this.classList="fas fa-eye-slash"
        }
        else{
            x.setAttribute("type","password");
            this.classList="fa fa-eye"
        }
    }   }

    handelmobile=()=>{
      let s= document.querySelector(".mobile input")
      if(s.value.length>10){
        s.classList.add("errorMessage")
        s.classList.add("error")
      }else if(s.value.length==11){
        s.classList.remove("errorMessage")
        s.classList.remove("error")
      }
    }
  render(){
  return (
    //form

    <div className="wrapper">

      <Form handlechange={this.handlechange} handlechangee={this.handlechangee}
      handlesubmit={this.handlesubmit} showpass={this.showpass} mobile={this.mobile} email={this.email}
      formErrors={this.state.formErrors} handelmobile={this.handelmobile}
      
      />
          </div>
  )
}}

       export default Formfunction
