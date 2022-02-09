import styled from "styled-components";


export const InfoScreenWrapper = styled.div`
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Row = styled.div`
   display: flex;
   padding: 20px auto;
   flex-direction: column;

   @media (min-width: 768px) {
        flex-direction: row;
   }

`;
