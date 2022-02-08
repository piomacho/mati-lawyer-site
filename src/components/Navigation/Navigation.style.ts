import styled from "styled-components";


export const NavigationPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    z-index: 30;
`;

export const Links = styled.div`
    display: flex;
    border-bottom: 1px solid #fff;
    padding-right: 20px;
    margin-right: 20px;
    padding-bottom: 10px;
    margin-top: 20px;

`
export const Link = styled.div`
    margin-left: 20px;
    color: #fff;
    cursor: pointer;
    &:hover {
        font-weight: 700;
    }

`
export const EmailWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20%;
    color: #fff;
`
export const EmailTxt = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: block;
        margin-left: 5px;
        

    }

`

export const RightSideWrapper = styled.div`
    display: flex;
    align-items: center;
`;

