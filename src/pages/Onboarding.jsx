// import React from 'react'
// import { useState } from 'react';
// import styled from "styled-components";
// import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   `;
//   const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: grey;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;
// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 50px;
// `;

// const Title = styled.h1`
//   font-size: 70px;
// `;

// const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;

// const ImgContainer = styled.div`
//   height: 100%;
//   flex: 1;
// `;

// const Image = styled.img` 
//   height: 80%;
// `;

// export const sliderItems = [
//     {
//       id: 1,
//       img: "https://photos.google.com/search/_cAF1QipPY0Z1sxRk13ndkZveu-txdH~uts6kbOQDk_/photo/AF1QipPy3LuXDzzmxgYs2yE2fnsOOV0DevRwZu0IiRRe",
//       title: "SUMMER SALE",
//       desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//       bg: "f5fafd",
//       pagecount:1,
//     },
//     {
//       id: 2,
//       img: "https://i.ibb.co/DG69bQ4/2.png",
//       title: "AUTUMN COLLECTION",
//       desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//       bg: "fcf1ed",
//       pagecount:2,
//     },
//     {
//       id: 3,
//       img: "https://i.ibb.co/cXFnLLV/3.png",
//       title: "LOUNGEWEAR LOVE",
//       desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//       bg: "fbf0f4",
//       pagecount:3,

//     },
//   ];

// const Onboarding = () => {
  
//     const[PageNumber, SetPageNumber]= useState(0);
    
//     const handleClick = (direction) => {
//         if (direction === "left") {
//           SetPageNumber(PageNumber > 0 ? PageNumber - 1 : 2);
//         } else {
//           SetPageNumber(PageNumber < 2 ? PageNumber + 1 : 0);
//         }
//       };

  
//     return (
//     <Container>
//     <Arrow direction="left" onClick={() => handleClick("left")}>
//          KeyboardArrowRight />
//       </Arrow>
//       <Wrapper PageNumber={PageNumber}>
//         {sliderItems.map((item) => (
//           <Slide bg={item.bg} key={item.id}>
//             <ImgContainer>
//               <Image src={item.img} />
//             </ImgContainer>

//             <InfoContainer>
//               <Title>{item.title}</Title>
//               <Desc>{item.desc}</Desc>
//             </InfoContainer>
//           </Slide>
//         ))}
//       </Wrapper>
//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <KeyboardArrowLeft />
//       </Arrow>
//     </Container>
    
//   )
// }

// export default Onboarding;


import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import leftarrow from '../pages/Image/Vector.png';
import rightarrow from '../pages/Image/Vector 2.png'
// import ProgressBar from 'react-percent-bar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import logo from "../pages/Image/ohhum.png";
import user from "../pages/Image/user.png"


const Container = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color:#160729;
  ${mobile({ display: "none" })}
`;
const Menu = styled.div`
  align-items: center;
  background-color: #323232;
  display: flex;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  // top: 0;
  // bottom: 0;
  top: 550px;
  bottom: 50px;
  // right: 200px;
  left: ${(props) => props.direction === "left" && "200px"};
  right: ${(props) => props.direction === "right" && "200px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Vector = styled.img`
  width: 20px;
  height: 20px;
  // background-color: #fff7f7;
  // border-radius: 50%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  position: absolute;
  // top: 0;
  // bottom: 0;
  top: 550px;
  bottom: 50px;
  // right: 200px;
  left: ${(props) => props.direction === "left" && "250px"};
  right: ${(props) => props.direction === "right" && "200px"};

  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
    // position: relative;
    // top: 160px; 
    // bottom: -250px;
`;

const Button =styled.button`
background: rgba(105,116,220,1);
border-radius: 47px;
cursor: pointer;
height: 50px;
width: 120px;
position: absolute;
top: 550px;
bottom: 50px;
left: ${(props) => props.direction === "left" && "250px"};
right: ${(props) => props.direction === "right" && "200px"};
margin: auto;
color: white;
font-weight: 700;
font-size: 20px;
z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height:  80vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img` 
  height: 80%;
`;

const InfoContainer = styled.div`
-webkit-flex: 1;
-ms-flex: 1;
/* flex: 1; */
display: flex;
// flex-wrap: wrap;
// align-content: center;
flex-direction: column;
align-items: center;
justify-content: space-between;
//  margin-top:-100px;
  // padding:50px;
`;

const Title = styled.h1`
  font-size: 50px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color:white;
`;
const Cap = styled(Title)`
 font-size: 20px;
 color:white;
`;

const Desc = styled.p`
  margin: 8px 0px 100px;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

const Number = styled.div`
    // width: 20px;
    // height: 20px;
    // position: absolute;
    // top: 550px;
    // bottom: 60px;
    // left: 520px;
    // margin: auto;
    // cursor: pointer;
    // opacity: 0.5;
    // z-index: 2;
    // font-size: 20px;
    // font-weight: 500;
    // color: white;
    width: 20px;
    height: 20px;
    position: absolute;
    /* top: 550px; */
    bottom: 65px;
    /* left: 520px; */
    margin: auto;
    cursor: pointer;
    /* opacity: 0.5; */
    z-index: 2;
    font-size: 20px;
    font-weight: 600;
    color: white;
`;
// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;
const Container1 = styled.div`
height: 60px;
background-color: #140445;
${mobile({ height: "50px" })}
`;

const Wrapper1 = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;

const Left1 = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Center1 = styled.div`
  flex: 5;
  text-align: center;
  display: flex;
`;
const Center2 = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
`;
const Center3 = styled.div`
  flex: 0;
  text-align: center;
  display: flex;
`;

const Right1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem1 = styled.div`
  font-size: 14px; font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color:#160729 ;
  display: flex;
  justify-content: space-between;
  // border: 3px solid rgba(61, 173, 184, 1);
  border: 2px solid rgba(61, 173, 184, 1);
  border-radius: 20px;

`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  `;
  
const Input = styled.input`
  width: 50%;
  height: 40px;
  background-color:#160729 ;
  display: flex;
  justify-content: space-between;
  // border: 3px solid rgba(61, 173, 184, 1);
  border: 2px solid rgba(61, 173, 184, 1);
  border-radius: 20px;
  color: white;
  text-align: center;
  margin-top: 40px;
`;

const OptionContainer = styled.option`
  width: 25%;
  height: 40px;
  background-color:#160729 ;
  display: flex;
  justify-content: space-between;
  // border: 3px solid rgba(61, 173, 184, 1);
  border: 2px solid rgba(61, 173, 184, 1);
  border-radius: 20px;
  color:white;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  margin-bottom: 20px;
  /* gap: 2.5px; */
  justify-content: center;
  cursor:pointer;

`;

const SelectorDrawerList = styled.div`
    // padding-top: 68px;
    overflow-y: auto; /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
export const StyledDrawerItemContainer = styled.div`   
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // grid-row-gap: 5px;
}
`;

export const StyledDrawerItemWrapper = styled.div`
    position: relative;
    &:hover {
        cursor: pointer;
    }
`;

export const StyledDrawerItem = styled.div`
    width: 210px;
    height: 100px;
    background: #FFFFFF;
    border: ${(props) => props.isSelected ? '4px solid #32ba7c' : 'none'};
    border-radius: 15px;
    padding-top: 40px;
    padding-left: 16px;
    display: flex;
    overflow: hidden;
    margin-right: 43px;
    margin-bottom: 36px;
`;

export const DrawerItemName = styled.div`
    width: 90px;
    padding: 4px;
    font-family: 'heroregular';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #6b5c5e;
`;

export const DrawerCheckedImage = styled.img`
    position: absolute;
    top: -22.5px;
    right: 22.5px;
`;

export const DrawerItemImageWrapper = styled.div`
    // padding-top: 20px;
`;

export const DrawerItemImageContainer = styled.div`
    // width: 160px;
    // height: 160px;
    width: 180px;
    height: 135px;
    transform: rotate(42deg);
    border-radius: 29px;
    overflow: hidden;
    box-shadow: 0px 3px 29px 0px #929292, 3px 0px 29px 0px #929292;
`;

export const DrawerItemImage = styled.div`
    // width: 180px;
    // height: 172px;
    width: 140px;
    height: 140px;
    background-image: url(${(props)=>props.icon});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: rotate(-42deg) scale(1.4) ;
`;

export const Logo = styled.img`
 heigth: 45px;
 width: 45px;
`;

export const Text = styled.h4`
  Color: white;
  font-weight:250;
`;

const Onboarding = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [filters, setFilters] = useState({});
  const [pageState, SetPageState]= useState("name");
  const [name, setName]= useState("");
  const [age, SetAge]= useState("");
  const mediaURL = 'https://media.aumhum.xyz/images/prod/';
  const [percent, updatePercent] = useState(25);

  // const onClickupdate= () => {
  // //   // update the progress bar percentage
  //   updatePercent(percent === 100 ? 25 : percent + 25);
  // };
  
  const ProgressBar = ({
    percent,
    height = '3px',
    // width = '350px',
    radius = '50px',
    // borderColor = '#eee',
    fillColor = 'lime',
    colorShift = false,
    Color ='#140445'
  }) => {
    return (
      <div
        style={{
          height,
          // width,
          borderRadius: radius,
          backgroundColor: Color ,
          // border: `1px solid ${borderColor}`
        }}>
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            borderRadius: 'inherit',
            backgroundColor: fillColor,
            transition: 'all .2s ease',
            [colorShift ? 'filter' : null]: `hue-rotate(-${percent}deg)`
          }}
        />
      </div>
    );
  };

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ 
      ...filters,
      [e.target.name]: value,
    });
  };

 const renderDrawerItems = (drawerItems, id) => {
    if(id ==="language")
    return (
   <SelectorDrawerList>
      <StyledDrawerItemContainer>
        {drawerItems?.map((item) => {
            // const isSelected = selectedDrawerItems.includes(item.id);
            return (
                
                <StyledDrawerItemWrapper key={item?.id}>
                    <StyledDrawerItem>
                        <div>
                            {item?.title && <DrawerItemName>
                                {item?.title}
                            </DrawerItemName>}
                            {/* {item?.subtitle && <DrawerItemName>
                                {item?.subtitle}
                            </DrawerItemName>} */}
                            {/* {isSelected && <DrawerCheckedImage
                            src={checked}
                        />} */}
                        </div>
                        {item?.icon && <DrawerItemImageWrapper>
                            <DrawerItemImageContainer>
                                <DrawerItemImage icon={item?.icon}/>
                            </DrawerItemImageContainer>
                        </DrawerItemImageWrapper>}
                    </StyledDrawerItem>
                </StyledDrawerItemWrapper>
            );
    })}
    </StyledDrawerItemContainer>
  </SelectorDrawerList>);
}

// const SelectorDrawer = (props) => {
//     const {isDrawerOpen, handleOnBackClick, drawerItems, drawerInfo, selectedDrawerItems, handleOnClick, handleOnSave} = props;

//     return <StyledSelectorDrawer anchor='bottom' open={isDrawerOpen}>
//         <SelectorDrawerHeader>
//             <StyledBackButton>
//                 <ArrowBackIosNewIcon onClick={handleOnBackClick}/>
//             </StyledBackButton>
//             <SelectedHeaderContent>
//                 {drawerInfo?.title}
//             </SelectedHeaderContent>
//             <SelectorDrawerSave onClick={()=> { handleOnSave(selectedDrawerItems, drawerInfo.id); handleOnBackClick();}}>
//                 Save
//             </SelectorDrawerSave>
//         </SelectorDrawerHeader>
//         <SelectorDrawerList>
//             {renderDrawerItems(drawerItems, selectedDrawerItems, handleOnClick)}
//         </SelectorDrawerList>
//     </StyledSelectorDrawer>
// }
   
const handleInputName = () =>{
 if(name === "")
 alert("enter");
 else{ 
 console.log(name);
 SetPageState("Age");
 setSlideIndex(slideIndex+1);
 updatePercent(percent+25);
//  handleInputAge(); 
 }
};

const handleInputAge = () =>{
  if(age === "")
  alert("enter");
  else{ 
  console.log(age);
  setSlideIndex(slideIndex+1);
  updatePercent(percent+25);
  }
}
 
//  };
 

  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     // pageState[sliderItems.completed] = direction.target.value
  //     // SetPageState(sliderItems.completed)
  //     updatePercent(percent > 25 ? percent - 25 : 25);


  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);

  //   } else {
  //     updatePercent(percent === 100 ? 100 : percent + 25);
  //     setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 3);
  //   }
  // };

  const handleClick = (direction) => {
    if (direction === "right") 
    {
      // pageState[sliderItems.completed] = direction.target.value
      // SetPageState(sliderItems.completed)
      handleInputName();
      handleInputAge();

      // updatePercent(percent > 25 ? percent - 25 : 25);
      // setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
      // setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 3);
    } 
    else 
    {
      
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
      // updatePercent(percent === 100 ? 100 : percent + 25);
      // setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 3);
    }
  };


  // if(direction === "right"){
  //   if(pageState ==="name" && name!=="")
  //   setSlideIndex(slideIndex +1);
  // }
  // }


//   const handleSelectDrawer = (id, title, openDrawer, getItemsFunction, selectedObj ) => {
//     setDrawerOpen(openDrawer);
//     setDrawerList(getItemsFunction(setupData));
//     setDrawerInfo({title: "Select " + title, id});
//     setSelectedDrawerItems(selectedObj.value);
//  };


 const handleChangeName=(e)=> {
  setName(e.target.value);
 };

 const handleChangeAge=(e)=> {
  SetAge(e.target.value);
 };

  const container=()=>
  {
    // if(id === "name" || id === "age" )
    return(
      // <InputContainer>
      <Input 
      value={name}
      onChange={handleChangeName}
      />
      // {/* </InputContainer> */}
    )
  };

  const container1=()=>
  {
    return(
      <Input
      value={age}
      onChange={handleChangeAge}
      />
    )
  }

   const optionFields=(id, array)=>
   {
    console.log(array);
    if(id === "gender")
    return (
      <>
      {array.map((item) => {return (
        <OptionContainer>{item}
          </OptionContainer>
        );
        
        })}
      </>
      );
    };
    
    // {/* <OptionContainer>{option}</OptionContainer> 
    // <OptionContainer>{option}</OptionContainer> */}
  
    
      // <Select  onChange={handleFilters}> 
            // <OptionContainer>{options}</OptionContainer>
            // <OptionContainer>{options}</OptionContainer> 
            // <OptionContainer>{options}</OptionContainer>
          // </Select>
    
   
  return (
    <>
    <Container1>
      <Wrapper1>
      <Left1>
        <Logo src={logo}/>
      </Left1> 
      <Center1>
        <Text>{percent-25} % Complete</Text>
      </Center1>
      <Center2>
        <Text>English</Text>
      </Center2>
      <Center3>
        <Text>Logout</Text> 
      </Center3>
      <Right1>
        <Logo src={user}/>
      </Right1> 
      </Wrapper1>
      </Container1>
      <ProgressBar 
        colorShift={false} 
        fillColor="rgba(61,173,184,1)"
        percent={percent}/>
        {/* // onClick={handleClick("left")}/> */}
       {/* <div onClick={updatePercent}></div> */}
     <Container>
      <Vector src={leftarrow} direction="left" onClick={() => handleClick("left")}/>

      {/* </Arrow> */}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            {/* <ImgContainer>
              <Image src={item.img} />
            </ImgContainer> */}
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Cap>{item.cap}</Cap>

              {/* <Button>SHOW NOW</Button> */} 
              {/* <InputContainer/> */}
              
              {pageState === 'name' && container()}
              {pageState === 'Age' && container1()}
              {optionFields(item.id, item.Optionsarray)} 
              {renderDrawerItems(item.LanguageArray,item.id)}
            {/* //   {slideIndex === '0' && container()}
            //   {slideIndex === '1' && container()}
            //   {slideIndex === '2' && container()} */}
            <Number>{slideIndex+1}/7</Number>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* {sliderItems.id}/7 */}
      {/* <Desc>{slideIndex+1}/7</Desc> */}
      <Button direction="right" onClick={() => handleClick("right")}>NEXT
      <img src={rightarrow}/>
      </Button>
        {/* <Button/>
      </Arrow> */}
    </Container>
    </>
  );
};

export default Onboarding;