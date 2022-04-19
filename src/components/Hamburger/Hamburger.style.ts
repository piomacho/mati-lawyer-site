import styled from "styled-components";
import { keyframes } from 'styled-components'

interface LinksWrapperType {
    showLinks: boolean;
}
const showAnimation = keyframes`
  0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`

const hideAnimation = keyframes`
  0% {
        display: block;
        opacity: 1;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: none;
        opacity: 0;
    }
`

export const TopNav = styled.div`
    overflow: hidden;
    /* background-color: #333; */
    position: relative;
`;

export const LinksWrapper = styled.div<LinksWrapperType>`
    opacity: 1;
    transition: opacity 0.5s linear;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    visibility: ${({showLinks}) => showLinks === false  ? 'hidden' : 'visible'};
    animation: ${({showLinks}) => showLinks === false  ? hideAnimation :showAnimation} 1s linear;
    transition: visibility 1s linear;
    ${({showLinks}) => showLinks === false  ? 'pointer-events: none' : ''};
`;

export const Link = styled.div`
    color: #111;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
`;

