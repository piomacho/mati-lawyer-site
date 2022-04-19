import styled from "styled-components";

interface SectionTitle {
    themeDark: boolean;
}

export const InfoScreenContainer = styled.div`
    background-color: #fff;
    position: relative;
    min-height: 100vh;
`;

export const InfoScreenWrapper = styled.div`  
    background-color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
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


export const SectionTitleInfo = styled.div`
    padding-top: 20px;
    margin-left: 30px;
    /* position: absolute; */
    font-size: 22px;
    text-decoration: underline;
    color: #111;
    text-align: left;

   
`;