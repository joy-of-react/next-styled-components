import React from 'react';

import StyledComponentsRegistry from '../components/StyledComponentsRegistry';
import GlobalStyles from '../components/GlobalStyles';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>

        <footer>Copyright Whatever Inc.</footer>
      </body>
    </html>
  );
}

export default RootLayout;
