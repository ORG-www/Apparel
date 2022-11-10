

import React from 'react'
import {Container,Title, Desc,Caption, InputContainer, Button, StyledPhoneInput, StyledOTPInput,Image, StyledInput, ElementBox,Elements,Logo, Caption2} from '../components/Phonestyle'
import { Link } from 'react-router-dom';

import { useState } from "react";
import OtpInput from 'react-otp-input';
import mountains from '../pages/Image/mountains.png'
import logo from "../pages/Image/ohhum.png";
import { useNavigate } from "react-router-dom";

const OTP=()=> {

 const navigate = useNavigate()
 const [otp] = useState("12345")
 const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  const handleOnClick = () => {
    if (code === otp ) {
      navigate("/verified")
    } else {
      alert("Wrong OTP")
    }
  }
  return (
    <Container>
     <ElementBox>
     <Logo src={logo}/>
     <Elements>
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
    {/* </Link> */}
    </Elements>
    </ElementBox>
    <Image src={mountains}/>
    
    </Container>
  );
}

export default OTP;