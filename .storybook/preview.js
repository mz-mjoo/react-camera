import * as nextImage from 'next/image';
import '../styles/globals.css';
import {ThemeProvider} from '@emotion/react';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import {theme} from '../components/theme';

/*
 * Fix next/image component issue.
 * */
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} alt="" />,
});

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story, context) => (
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
  ),
];
