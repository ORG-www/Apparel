import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;  

const Register = () => {
  // const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log('test');
    setError(false);
    try {
      const res = await register({
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      console.log(res);
      toast.success('Account Created');
      // Registration successful, redirect or show a success message
      // For example, you can redirect to the login page:
    } catch (err) {
      setError(true);
      toast.error('Something Went Wrong');
    }
    };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser((prevUser) => ({ ...prevUser, [name]: value }));
  // };

  return (
    <div>
    <Toaster
      position="top-center"
      reverseOrder={false}
      />
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {/* <Input placeholder="name" />
          <Input placeholder="last name" /> */}
          <Input 
                 placeholder="username"  
                 onChange={(e) => setUsername(e.target.value)} />
          <Input 
                 placeholder="email" 
                 onChange={(e) => setEmail(e.target.value)} />
          <Input 
                 placeholder="password" 
                 onChange={(e) => setPassword(e.target.value)}/>
          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Register;