import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;

    @media (min-width: 950px) {
        padding: 0;
        top: 20%;
        left: 20%;
        transform: translate(0%, 20%);
    }
`;

export const SuccessMessage = styled.div`
    background-color: rgb(75,181,67);
    color: #fff;
    font-weight: bold;
    padding: 5px;
`;