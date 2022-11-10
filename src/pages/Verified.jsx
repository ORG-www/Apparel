import React from 'react'
import {Container,Title, Desc,Caption, InputContainer,Button, StyledPhoneInput,Image, Logo, ElementBox,Elements, Verify, Title2, Button2} from '../components/Phonestyle'
import mountains from '../pages/Image/mountains.png'
import verifylogo from "../pages/Image/verify.png"
import logo from "../pages/Image/ohhum.png";


const Verified = () => {
  return (
    <Container>
        <ElementBox>
     <Logo src={logo}/>
     <Elements>
        <Verify src={verifylogo}/>
      <Title2>Mobile Number Verified Successfully</Title2>
      <Button2>Go back to Home Page</Button2>
      </Elements>
    </ElementBox>
      <Image src={mountains}/>
    </Container>
  )
}

export default Verified;