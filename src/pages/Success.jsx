import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";
import verifylogo from "../pages/Image/verify.png";
import { useState, useEffect } from "react";
import { userRequest } from '../requestMethods';



const Container= styled.div`
    display: flex;
    background: #28292d;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    // height: 100vh;
    position: relative;
    align-items: center;
`;
const ElementBox= styled.div`
    display: flex;
    
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 1.2rem;
    text-align: center!important;
`;

const Elements= styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  // gap: 2.5rem;
  padding: 1.2rem;
  text-align: center!important;
 `; 

const Verify= styled.img`
 height: 10rem;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
color: white`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Title = styled.div`
    // text-align: center;
    font-weight: 600;
    // font-size: 54px;
    color: #FFFFFF;
    // margin-top: 150px;
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 20px;
 `;
 const Title2 = styled(Title)`
    // text-align: center;
    font-weight: 500;
    // font-size: 40px;
    color: #FFFFFF;
    // margin-top: 150px;
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 20px;
    margin-top: 20px;
 `;

const Success= () => {
 
  const location= useLocation();
  console.log(location)


const [orderId, setOrderId] = useState(null);
const cart = useSelector((state) => state.cart);
const currentUser = useSelector((state) => state.user.currentUser);
console.log(currentUser);
console.log(currentUser.accessToken);
console.log(cart);
const paymentid = cart.paymentId;
console.log(paymentid);

useEffect(() => {

    const createOrder = async() => {
    
    try {
      const res = await userRequest.post("/orders", {
        
        userId: currentUser._id,
        products: cart.products.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        amount: cart.total,
        address: 'India',
        status: 'Pending'
      },
     
     
      );
      
      setOrderId(res.data._id);
      
    } catch(err) {
      console.log("error");
    }
  };

  paymentid && createOrder();

}, 
[cart, paymentid, currentUser]);

return (
  <div>
   
  <Container>
  <ElementBox>
  <Elements>
 <Title> Payment Successful</Title>
  <Verify src={verifylogo}/>
 <Title2>Your order is placed. Thanks for Shopping!</Title2>
 {/* <Summary>
 <Info>
            
    {cart.products.map((product) => (
      <Product>
        <ProductDetail>
          <Details>
              <ProductName>
                  <b>Product:</b> {product.title}, <b>Price:</b> {product.price * product.quantity}
              </ProductName>
          </Details>
        </ProductDetail>
      </Product>
            ))} 
           
                 
  </Info>
</Summary> */}
        
</Elements>
</ElementBox>
</Container> 
<Footer />

</div>
)
};

export default Success;

