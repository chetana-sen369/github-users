import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
const Contact = () => {
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    phone:"",
    githubProfile:"",
    password:"",
    confirmPassword:"",
  })

  //holding errors
  const [errors,setErrors]=useState({});

 //handleChange for each input field
  const handleChange=(e)=>{
    setFormData({...formData,
      [e.target.name] : e.target.value})
  }

  //form validation
   const validateForm=()=>{
    const newErrors={};
     if(formData.name.trim()==="" || formData.name.length<=3){
      newErrors.name="Your name should have atleast 4 characters";
     }
     if(formData.email.trim()===""|| !/\S+@\S+\.\S+/.test(formData.email)){
      newErrors.email="Please enter a valid email";
     }
     if(formData.phone.trim()===""|| !/^\d{10}$/.test(formData.phone)){
      newErrors.phone="Phone number must be 10 digits";
     }
     if (formData.githubProfile.trim() !== "" && !/^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/.test(formData.githubProfile)) {
      newErrors.githubProfile = "Please enter a valid GitHub profile URL";
     }
     if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(formData.password)) {
        newErrors.password = "Password must have at least 6 characters, including uppercase, lowercase, number, and special character";
      }
    if(formData.confirmPassword.trim()===""){
      newErrors.confirmPassword="Please confirm you passoword";
    }else if(formData.confirmPassword !== formData.password){
      newErrors.confirmPassword="Please confirm your password "
    }
    return newErrors;
   }
  //prevent form submission on  Enter key
  const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); 
  }
};

  //handleSubmit form
  const handleSubmit=(e)=>{
     e.preventDefault();
     const errors=validateForm();
     setErrors(errors);
     if (Object.keys(errors).length === 0) {
     // No errors
     alert("Form submitted successfully!");
    //reset form
    setFormData({
    name: "",
    email: "",
    phone: "",
    githubProfile: "",
    password: "",
    confirmPassword: "",
  });
  } 
 }
  return (
      <div>
       <h2>User Registration Form</h2>
       <form className="form-container" onSubmit={handleSubmit} onKeyDown={handleKeyDown} >
        <label>Name:</label>
        <input type="text" 
               placeholder="Enter Your Name"
               value={formData.name}
               name="name"
               className="input-field"
               onChange={handleChange}/>
        {errors.name && <p className="error">{errors.name}</p>}
        <label>Email:</label>
        <input type="email" 
               placeholder="Enter Your Email"
               value={formData.email}
               name="email"
               className="input-field"
               onChange={handleChange}/>
        {errors.email && <p className="error">{errors.email}</p>}
        <label>PhoneNo</label>
        <input type="text"  
               placeholder='Enter your phone number'
               value={formData.phone}
               name="phone"
               className="input-field"
               onChange={handleChange}/>
        {errors.phone && <p className="error">{errors.phone}</p>}
        <label>GitHub Profile:</label>
        <input type="text" 
               placeholder="Enter Your Github Profile"
               value={formData.githubProfile}
               name="githubProfile"
               className="input-field"
               onChange={handleChange}/>
        {errors.githubProfile && <p className="error">{errors.githubProfile}</p>}
        <label>Password:</label>
        <input type="password" 
               placeholder="Password" 
               value={formData.password}
               name="password"
               className="input-field"
               onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}
        <label>Confirm Password:</label>
        <input type="password" 
               placeholder="Confirm Your Password" 
               value={formData.confirmPassword}
               name="confirmPassword"
               className="input-field"
               onChange={handleChange}/>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <button className="register"type="submit">Register</button>
       </form>
    </div>
  )
}

export default Contact
