import styled from "styled-components";

interface SectionTitle {
    themeDark: boolean;
}

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

export const SectionTitle = styled.div<SectionTitle>`
    padding-top: 20px;
    margin-left: 30px;
    position: absolute;
    font-size: 22px;
    text-decoration: underline;
    color: ${({themeDark}) => themeDark  ? '#fff' : '#000'};
`;