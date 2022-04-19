import styled from "styled-components";
import MateuszPhoto from "../../assets/mateusz_kozlowski.jpeg"


export const ProfilePhotoElement = styled.div`
    width: 150px;
    height: 150px;
    overflow: visible;
    aspect-ratio: 1 / 1;
    background-image: url(${MateuszPhoto});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
`;

export const ProfilePhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
 
  margin-bottom: 30px;
  margin-top: 40px;



  @media (min-width: 1000px) {
        margin-top: 0;
   }


`;