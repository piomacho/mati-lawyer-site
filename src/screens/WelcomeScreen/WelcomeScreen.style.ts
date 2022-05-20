import styled, { keyframes } from "styled-components";
import MainImage from "../../assets/hero.jpeg"
import LogoImage from "../../assets/logo.png";
import ScrollIcon from "../../assets/scroll.png";

interface MainScreenWrapperType {
   isActive: boolean;
}

const opacityBackgroundAnimation = keyframes`
   0% { opacity: 0;}
   30% {  opacity: 0.2; }
   40% {  opacity: 0.3; }
   70% {  opacity: 0.5; }
   100% { opacity: 0.7; }
`

const opacityLogoAnimation = keyframes`
   0% { opacity: 0;}
   30% {  opacity: 0.3; }
   40% {  opacity: 0.6; }
   70% {  opacity: 0.8; }
   100% { opacity: 1; }
`

export const MainScreenWrapper = styled.div`
   min-height: 100vh;

   background-image: url(${MainImage});
  

   background-size: cover;
  
    
`;

export const WrapperMain = styled.div`
padding-top: 70px;
    height: 100vh;
    @media (min-width: 768px) {
      padding-top:0;
    }
}`;

export const BackgroundOpacity = styled.div`
   min-height: 100vh;
   width: 100%;
   z-index: 1;
   position: absolute;
   background: #000;
   animation-name: ${opacityBackgroundAnimation};
   animation-duration: 1.5s;
   animation-fill-mode: forwards; 
   @media (min-width: 768px) {
      min-height: 100vh;
    }

`;

export const PersonDescription = styled.div`
   width: 50%;
`;

export const Wrapper = styled.div`

      position: relative;
      display: flex;
    justify-content: center;

    width: 90%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      width: 80%;
    }
`;

export const InnerWrapper = styled.div`
   align-self: center;
   width: 100%;
   z-index: 2;
   padding: 100px 10px 20px 10px;
    width: 95%;
    max-width: 800px;

    @media (min-width: 390px) {
      padding: 150px 10px;
      }

   @media (min-width: 768px) {
      padding: 100px 20px 50px 20px;
      width: 80%;
   }


`;

export const Buttons = styled.div`
   display: flex;
   z-index: 2;
   margin-top: 70px;
   align-items: center;
   justify-content: space-between;
   max-width: 400px;
   width: 100%;
   /* width: 350px; */
   margin: 180px auto 0 auto;
   flex-direction: column;

   height: 130px;

   
   @media (min-width: 768px) {
      width: 80%;
      /* justify-content: */
      flex-direction: row;
      height: auto;
   }

   animation-name: ${opacityLogoAnimation};
   animation-duration: 1s;
   animation-fill-mode: forwards; 

`;

export const ScrollWrapper = styled.div`
   background-image: url(${ScrollIcon});
   background-repeat: no-repeat;
   background-size: contain;
   width: 60px;
   height: 60px;
   cursor: pointer;
   align-self: center;
   margin-top: 20px;

   @media (min-width: 390px) {
      margin-top: 30px;
      }

      @media (min-width: 768px) {
      margin-top: 50px;
      }
`;

export const LogoBackgroud = styled.div`
   background-image: url(${LogoImage});
   height: 192px;

   background-repeat: no-repeat;
   background-size: contain;
   margin: 0 auto;
   width: 100%;
    max-width: 606px;
    z-index: 2;

   animation-name: ${opacityLogoAnimation};
   animation-duration: 1s;
   animation-fill-mode: forwards; 

   @media (min-width: 768px) {
      width: 70%;
   }
`;



export const ImageWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 15px;
   @media (min-width: 768px) {
      margin-bottom: 50px;

   }
`
   ;

export const NavigationWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

export const PlatformPagesWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-direction: column;

      @media (min-width: 390px) {
      flex-direction: row;
      }
}
`;

// export const ImageWithDescriptionWrapper = styled.div`
//    width: 50%;
//    z-index: 1;
//    height: 100vh;
//    margin-top: -50px;
//    background-size: cover;
//    background: linear-gradient(
//           rgba(0, 0, 0, 0.7), 
//           rgba(0, 0, 0, 0.7)
//         ),
//         url(${MainImage});
// `;

// export const Wrapper = styled.div`
//    display: flex;
// `;