import styled from "styled-components";
import Contact from "../../assets/Contact.jpeg"


export const ContactScreenWrapper = styled.div`
    background-image: url(${Contact});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
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