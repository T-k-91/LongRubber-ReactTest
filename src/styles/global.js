import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  // *,
  // *::after,
  // *::before {
  //   box-sizing: border-box;
  // }

  body {
  
    // align-items: center;
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text};
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    header {
      background-color: ${({theme}) => theme.body};
    }
    .card {
      background-color: ${({theme}) => theme.body};
    }

    .card-body {
      background: ${({theme}) => theme.body};
      color: ${({theme}) => theme.text};
    }
    button.primary {
        background: ${({theme}) => theme.primaryBackground};
        border: none;
        height: 58px;
        border-radius: 29px;
        color: ${({theme}) => theme.primaryText};
    }
    input {
      background: ${({theme}) => theme.body};
      color: ${({theme}) => theme.text};
    }
    .vertical-center {
      min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
      min-height: 100vh; /* These two lines are counted as one :-)       */
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }

  ::-webkit-input-placeholder {
    color: ${({theme}) => theme.text};
    opacity: 0.5;
  }

  ::-moz-placeholder {
    color: ${({theme}) => theme.text};
    opacity: 0.5;
  }

  :-ms-input-placeholder {
    color: ${({theme}) => theme.text};
    opacity: 0.5;
  }

  :-moz-placeholder {
    color: ${({theme}) => theme.text};
    opacity: 0.5;
  }

  body::-webkit-scrollbar {
    width: 0.8em;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({theme}) => theme.hover};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.hover};
    outline: 1px solid ${({theme}) => theme.body};
    border-radius: 12px;
  }`;
