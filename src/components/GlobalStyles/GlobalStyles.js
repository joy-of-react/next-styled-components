'use client';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,
body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

/* Minimal styles */
body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  min-height: 100%;
  font-family: sans-serif;
  background: hsl(0deg 100% 95%);
  color: hsl(0deg 0% 10%);
}
footer {
  width: 100%;
  font-size: 0.875rem;
  color: hsl(0deg 0% 30%);
  text-align: center;
  padding: 32px 0px;
}
h1 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}
h2 {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: 400;
}
hr {
  margin-bottom: 2rem;
}

p {
  margin-bottom: 1rem;
  text-indent: 3rem;
}

figure {
  max-width: 600px;
  padding: 16px;
  margin: 32px auto;
  border: 1px solid hsl(0deg 0% 80%);
  border-radius: 4px;
}
figcaption {
  text-align: center;
  margin-top: 8px;
  font-size: 1rem;
  color: hsl(0deg 0% 30%);
}
`;

export default React.memo(GlobalStyles);
