

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import isValid from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
// import 'react-phone-input-2/lib/style.css';
// import 'react-phone-input-2/lib/material.css';
import {
  Container,
  Title,
  Desc,
  Caption,
  Caption2,
  InputContainer,
  Button,
  StyledPhoneInput,
  Image,
  Logo,
  ElementBox,
  Elements,
  Form,
  Wrap,
  StyledOTPInput,
  Verify,
  Button2,
  Title2
} from "../components/Phonestyle";
import { Link } from "react-router-dom";
import mountains from "../pages/Image/mountains.png";
import logo from "../pages/Image/ohhum.png";
import verifylogo from "../pages/Image/verify.png"
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import { isValidPhoneNumber } from 'react-phone-number-input'

const SignIN = () => {
  const navigate = useNavigate()
  const [otp] = useState("12345")
  const [code, setCode] = useState("");
  
  const [phone, setPhone] = useState("");
  const [page, setPage]= useState('state1');


  const handleGetOtp = () => {
    console.log(phone.length);

    if(phone.length === 0) 
    alert("enter a number")
    else if (isValidPhoneNumber("+" + phone) === true) {
      setPage('state2');
    } else {
      alert("Phone number is not valid");
      console.log(phone);
    }
   }
 
   const handleChange = (code) => setCode(code);
 
   const handleOnClick = () => {
     if (code === otp ) {
       setPage('state3')
     } else {
       alert("Wrong OTP")
     }
   }
  
   const Phone = () => {

  return (
    <>
      <Title>Signup with Mobile Number</Title>
      <Desc>
        A one time password will be sent to your mobile number for verification
      </Desc>
      <Form> 
      <StyledPhoneInput
        country={"in"}
        placeholder="Mobile Number"
        enableSearch={true}
        value={phone} 
        onChange={value => setPhone(value)}
        disableSearchIcon={true}
      />
      <Caption>Sign up with other means</Caption>
        <Button onClick={handleGetOtp}>Get OTP</Button>
      <Wrap/>
      </Form>

    </>
  );
 };

 const OTP=()=> {

   return (
    <>
       <Title>Enter the OTP</Title>
      <Desc>Please enter the OTP sent to your registered mobile number +9176XXXXXX88</Desc>
      <StyledOTPInput
        containerStyle={{justifyContent:"center"}}
        value={code}
        onChange={handleChange}
        numInputs={5}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid #D9D9D",
          borderRadius: "10px",
          background: "#383838",
          width: "54px",
          height: "54px",
          fontSize: "20px",
          fontWeight: "400",
          color: "#FFFFFF"
        }}
        />
    <Caption2>Resend OTP</Caption2>
    {/* <Link to= "/verified" style={{textDecoration: 'none'}}> */}
    <Button onClick = {handleOnClick}>Verify</Button>
    </>
   );
 };

 const Verified = () => {
  return (
    <>
      
      <Verify src={verifylogo}/>
      <Title2>Mobile Number Verified Successfully</Title2>
      <Button2 onClick>Go back to Home Page</Button2>
      
      </>
  )
 }

return(
<Container>
<ElementBox>
  <Logo src={logo}/>
 <Elements>
{page === 'state1' && Phone()}
{page === 'state2' && OTP()}
{page === 'state3' && Verified()}
</Elements>
</ElementBox>
<Image src={mountains}/>
</Container>
)
}
export default SignIN;





