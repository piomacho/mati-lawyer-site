import styled from "styled-components";

export const AboutText = styled.div`
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    overflow: visible;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 1.3;
    text-align: center;
    margin: 0px;
    border: 1px solid #fff;
    float: right;
    padding: 20px;
    text-align: left;

    @media (min-width: 1000px) {
        width: 80%;
        font-size: 20px;
        text-align: left;
    
        padding: 40px;
        margin-top: 60px;

    }

    @media (min-width: 1420px) {
        width: 70%;
        font-size: 22px;
        text-align: left;
       
    }
  `;

export const Name = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: #fff;
  `;
export const AboutWrapper = styled.div`
    color: #FFFFFF;
    margin-bottom: 35px;
    @media (min-width: 1000px) {
      margin-bottom: 100px;
    }
  `;