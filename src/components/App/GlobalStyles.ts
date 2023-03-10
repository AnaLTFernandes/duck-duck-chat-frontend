import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    /* My styles */
    body {
      height: 100vh;
      background-color: var(--light-yellow);
      font-family: 'Roboto', sans-serif;
    }

    * {
      box-sizing: border-box;
      --light-yellow: rgb(244, 247, 167);
      --medium-yellow: rgb(241, 247, 88);
      --dark-yellow: rgb(130, 110, 4);;
      --light-gray: #ddddd9;
      --medium-gray: #bfbcbc;
      --dark-gray: #6a6a6a;
      --white: whitesmoke;
      --black: #121212;
    }

    #root {
      height: 100%
    }

    b {
      font-weight: 700;
    }

    u {
      text-decoration: underline;
    }

    h1 {
      font-weight: 500;
      font-size: 24px;
		  font-family: "Oswald", sans-serif;
    }

    h2 {
      font-weight: 500;
      font-size: 20px;
    }
    
    a {
    	text-decoration: none;
    }
`;

export default GlobalStyle;
