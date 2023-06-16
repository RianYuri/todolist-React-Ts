import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
  }

  /* Adicione outras regras de reset de CSS conforme necessário */
`;

export const Container = styled.main`
    background-color:#17181F;
    color: #797A81;
    min-height: 100vh;
`;
export const Section = styled.section`
margin: auto;
max-width: 980px;
padding: 10px;
`;

export const Header = styled.h1`
    color: #FFF;
    text-align: center;
    border-bottom:1px solid #444 ;
    padding-bottom: 20px;
`;