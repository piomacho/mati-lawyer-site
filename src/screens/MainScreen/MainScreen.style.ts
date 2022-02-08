import styled from "styled-components";
import MainImage from "../../assets/hero.jpeg"

export const MainScreenWrapper = styled.div`
   height: 100vh;
   background: linear-gradient(
          rgba(0, 0, 0, 0.8), 
          rgba(0, 0, 0, 0.8)
        ),
        url(${MainImage});
        
   background-size: cover;
   
`;

export const PersonDescription = styled.div`
   width: 50%;
   /* padding-top: 20px; */
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