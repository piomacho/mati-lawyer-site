import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 25% 5%;

    @media (min-width: 768px) {
        padding: 0;
        top: 20%;
        left: 20%;
        transform: translate(-20%, 20%);
    }
`;

export const SuccessMessage = styled.div`
    background-color: rgb(75,181,67);
    color: #fff;
    font-weight: bold;
    padding: 5px;
`;