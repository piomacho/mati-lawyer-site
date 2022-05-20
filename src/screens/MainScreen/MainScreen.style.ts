import styled from "styled-components";
import Contact from "../../assets/Contact.jpeg"

export const MainScreenWrapper = styled.div`
   min-height: 100vh;
   background: linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ),
        url(${Contact});
        
   background-size: cover;
   
`;

export const PersonDescription = styled.div`
   width: 50%;
   /* padding-top: 20px; */
`;

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: calc(100% - 70px);
   align-items: center;
   padding: 0 10px;
   @media (min-width: 768px) {
      padding: 0 60px;
   }
   @media (min-width: 1000px) {
      height: calc(100% - 100px);
      padding: 0 100px;
      flex-direction: row;
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