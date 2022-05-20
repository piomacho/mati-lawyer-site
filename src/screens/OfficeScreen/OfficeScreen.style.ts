import styled from "styled-components";

interface SectionTitle {
    themeDark: boolean;
}

export const InfoScreenContainer = styled.div`
    background-color: #bebebe;
    position: relative;

    min-height: 100vh;
`;

export const InfoScreenWrapper = styled.div`  
    background-color: #bebebe;
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 10px;
`;
export const Title = styled.div`
    font-size: 36px;
    margin-bottom:20px;

`;

export const ColorfullBar = styled.div`
    height: 5px;
    margin-bottom: 50px;
    width: 100px;
    background-color: #ff8bb1;
`;

export const ListItem = styled.li`
    text-align: left;
    font-size: 24px;
    padding-bottom: 16px;
`;

export const ListTitle = styled.div`
   font-size: 24px;
   text-align: left;
   padding-left:20px;
`;

export const ListWrapper = styled.div`

`;

export const Row = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

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
    color: ${({ themeDark }) => themeDark ? '#fff' : '#000'};

   
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