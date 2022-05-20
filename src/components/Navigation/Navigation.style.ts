import styled from "styled-components";
import LogoImage from "../../assets/black-logo.png";

interface NavigationType {
    isDown: boolean;
    isMobile: boolean;
}

export const NavigationPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    height: 70px;
    background-color: #fff;
    z-index: 30;
    color: #111;

    @media (min-width: 1000px) {
        height: 100px;
    }
`;

export const LogoImageWrapper = styled.div`
   background-image: url(${LogoImage});
    height: 70px;
    width: 230px;
   background-repeat: no-repeat;
   background-size: contain;
`;
export const Links = styled.div`
    
    padding-right: 20px;
    margin-right: 20px;
    /* padding-bottom: 7px; */
    color: #111;
    display: none;

    
    @media (min-width: 1000px){
        display: flex;
        font-size: 14px;

        text-transform: uppercase;
}

    @media (min-width: 1130px) {
        font-size: 19px;

    }


`
export const HamburgerWrapper = styled.div`
    position: absolute;
    right: 0%;
    margin-top: 24px;
    @media (min-width: 1000px) {
        display: none;
    }
`;

export const Link = styled.div`
    margin-left: 20px;
    color: #111;
    cursor: pointer;
    &:hover {
        font-weight: 700;
    }

`
export const EmailWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
   
    color: #111;
    display: none;
    @media (min-width: 1000px) {
        display: flex;
        

    }
`
export const EmailTxt = styled.div`
    font-size: 14px;
    margin-left: 5px;

    @media (min-width: 960px) {
        font-size: 22px;
        margin-left: 10px;    
    }
`

export const RightSideWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Wrapper = styled.div<NavigationType>`
    position: fixed;
    width: 100%;
    z-index: 3;
    ${({ isDown, isMobile }) => isDown && !isMobile ? 'visibility: hidden; transition: all 0.5s; transform: translateY(-100%);' : ' visibility: visible; transition: all 0.5s;'};
`;

