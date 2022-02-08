import styled from "styled-components";
import Contact from "../../assets/Contact.jpeg"


export const ContactScreenWrapper = styled.div`
    height: 100vh;
    background-image: url(${Contact});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Row = styled.div`
   display: flex;
   padding: 20px auto;

`;
