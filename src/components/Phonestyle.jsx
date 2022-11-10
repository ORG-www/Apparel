// import styled from "styled-components";
// import PhoneInput from "react-phone-input-2";
// import OtpInput from 'react-otp-input';
// import mountains from '../pages/Image/mountains.png'

// export const StyledOTPInput= styled(OtpInput)`
//  justify-Content: center;
//  margin-top: 4em;
// `;

          


// export const StyledPhoneInput= styled(PhoneInput)`
// .form-control{
//      background: #383838;
//      border: 1px solid #D9D9D9;
//      border-radius: 10px;
//      color: white;
//  }
//  width:300px;
//  margin:auto;
//  margin-top: 3em;
//   border: 1px solid #D9D9D9;
//   border-radius: 10px;

//   .country-list{
//     background-color: #383838;
// }
// .country-list .search {
//   background-color: #383838;
// }
// .dial-code{
// color:grey;
// }
// .country-name{
//   color:grey;
// }

// .form-control:focus{
//   background-color:#383838; 
// }
// `;

// export const Container= styled.div`
//   position: absolute;
//   font-family: heroregular;
//   top: 0;
//   left: 0;
//   bottom:0;
//   right: 0;
//   background: #1E1F23;
//   justify-content: center;
//   flex-direction: column;
//   `;

// export const Title = styled.div`
//     text-align: center;
//     font-weight: 700;
//     font-size: 54px;
//     color: #FFFFFF;
//     margin-top: 150px;
//     `;

// export const Desc = styled.div`
//   color: #FFFFFF;
//   font-size: 24px;
//   font-weight: 300;
//   text-align: center;
//   margin-top: .5em;
//   `;

// export const Image = styled.img`
//  width: 100%;
// `;

// export const Caption= styled(Desc)`
//   font-size: 15px;
//   margin-left: 140px;
//   margin-top: 1.0em;
//   `;

// export const InputContainer = styled.div`
//   width: 500px;
//   height: 50px;
//   margin-top:50px;
//   margin-left:500px;
//   flex-direction: column;
//   background: #383838;
//   border: 1px solid #D9D9D9;
//   border-radius: 10px;
//   `;

//  export  const Button=styled.button`
//   background: #624DE3;
//   border-radius: 40px;
//   border: 2px solid rgba(103, 119, 224, 1);
//   width: 300px;
//   height: 50px;
//   display:flex;
//   justify-Content: center;
//   margin-left: 619px;
//   margin-top: 5em;
//   font-size: 18px; 
//   cursor: pointer;
//   padding: 0.6em .5em;
//   color: #FFFFFF;
//   font-weight: 800;
//   `;

//  export const honeInput =styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
//   `; 

import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import OtpInput from 'react-otp-input';
import { Search } from "@material-ui/icons";
import logo from "../pages/Image/ohhum.png";

export const StyledOTPInput= styled(OtpInput)`
 justify-Content: center;
 margin-top: 4em;
`;
        
export const StyledPhoneInput= styled(PhoneInput)`
.form-control{
     background: #383838;
     border: 1px solid #D9D9D9;
     border-radius: 10px;
     color: white;
 }
width: 300px;
margin: auto;
margin-top: 3em;
border-radius: 10px;

  .country-list{
    background-color: #383838;
}
 .country{
  display: flex;
 }
.country-list .search {
  background-color: #383838;
}
 .country-name {
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  /* justify-content: flex-start; */
  text-align: left;
 }

 .search-box {
  border: 1px solid #cacaca;
  border-radius: 3px;
  font-size: 15px;
  line-height: 15px;
  margin-left: 3px;
  padding: 3px 8px 5px;
  outline: none;
  width: 255px;
  /* left: 60px; */
  display: flex;
 
 }
//  .search-emoji{
//   background-image: url(${logo});
//   background-repeat: no-repeat;
//   width: 3px;
//   height: 4px;
  
 }

  .dial-code{
    flex: 1;
    text-align: end;
    color:grey;
}
.country-name{
  color:grey;
}

.form-control:focus{
  background-color:#383838; 
}
`;

export const Container= styled.div`
  // position: absolute;
  // font-family: heroregular;
  // top: 0;
  // left: 0;
  // bottom:0;
  // right: 0;
  display: flex;
  background: #1E1F23;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  `;

 export const ElementBox= styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem;
  text-align: center!important;
 `; 

 export const Elements= styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  // gap: 2.5rem;
  padding: 1.2rem;
  text-align: center!important;
 `; 

 export const Form= styled.div`
  width: 100%;
  `;



export const Title = styled.div`
    // text-align: center;
    font-weight: 900;
    // font-size: 54px;
    color: #FFFFFF;
    // margin-top: 150px;
    font-size: 3.75rem;
    line-height: 1;
    margin-bottom: 20px;
 `;
 export const Title2 = styled(Title)`
    // text-align: center;
    font-weight: 900;
    // font-size: 54px;
    color: #FFFFFF;
    // margin-top: 150px;
    font-size: 3.75rem;
    line-height: 1;
    margin-bottom: 20px;
    margin-top: 20px;
 `;

export const Desc = styled.div`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 300;
  // text-align: center;
  // margin-top: .5em;
  width: 100%;
  // margin-left: auto!important;
  margin-right: auto!important;
  `;

export const Image = styled.img`
 width: 100%;
 height: max-content;
`;
export const Logo= styled.img`
 height: 5rem;
`;
export const Verify= styled.img`
 height: 10rem;
`;


export const Caption= styled(Desc)`
  font-size: 15px;
  margin-left: 140px;
  margin-top: .3em;
  margin-bottom:3em;
  `;
  export const Caption2= styled(Desc)`
  font-size: 17px;
  margin-left: 128px;
  margin-top: 0.5em;
  margin-bottom: 2em;
  color: rgba(142, 142, 142, 1);
  `;

  export const  Wrap=styled.div`
   position: relative;
  `;


 export  const Button=styled.button`
  background: #624DE3;
  border-radius: 40px;
  border: 2px solid rgba(103, 119, 224, 1);
  width: 20%;
  height: 50px;
  display:flex;
  justify-Content: center;
  margin: auto;
  font-size: 18px; 
  cursor: pointer;
  padding: 0.6em .5em;
  color: #FFFFFF;
  font-weight: 800;
  `;

  export const Button2= styled(Button)`
  margin-top: 30px;
  `;

