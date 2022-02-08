import styled from "styled-components";

export const AboutText = styled.div`
    flex-shrink: 0;
    height: 216px;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    overflow: visible;
    font-weight: 400;
    font-style: normal;
    font-family: "Montserrat", serif;
    font-size: 25px;
    letter-spacing: 0px;
    line-height: 1.3;
    text-align: center;
    width: 80%;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 50%;
        font-size: 30px;
    }
  `;

  export const Name = styled.div`
    font-weight: 700;
    font-size: 20px;
  `;
  export const AboutWrapper = styled.div`
    margin-top: -150px;
    color: #FFFFFF;
  `;