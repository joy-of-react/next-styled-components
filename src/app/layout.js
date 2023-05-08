import React from 'react';

import StyledComponentsRegistry from '../components/StyledComponentsRegistry';
import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>

        <footer>Copyright Whatever Inc.</footer>
      </body>
    </html>
  );
}

export default RootLayout;
