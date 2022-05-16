import styled, { createGlobalStyle } from "styled-components";

import img from "./img/anime2.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${img});
        background-size: 1600px;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Fascinate Inline", cursive;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    backdrop-filter: drop-shadow(2px 2px 10px black);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .btn--start,
  .btn--next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .btn-start {
    max-width: 200px;
  }
`;
