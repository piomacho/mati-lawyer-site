import styled from "styled-components";
import Image from "../../assets/warsaw.jpeg"

export const ContactScreenWrapper = styled.div`
      min-height: 100vh;
         background: linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ),
        url(${Image});
        
   background-size: cover;
`;

export const Row = styled.div`
   display: flex;
   padding: 20px auto;

`;

export const ContactInfo = styled.div`
    color: #fff;
`;

export const InfoWrapper = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media (min-width: 960px) {
        margin-bottom: 20px;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding-top: 70px;

    @media (min-width: 960px) {
        flex-direction: row;
        padding: 0 10%;

    }
`;