import {Theme} from '@emotion/react';

export const theme: Theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
      mobile: 576,
      tablet: 992,
      desktop: 1400,
    },
    up(key) {
      const value = this.values[key];
      return `@media (min-width:${value}px)`;
    },
    down(key) {
      const value = this.values[key];
      return `@media (max-width:${value - 5 / 100}px)`;
    },
  },
 
 
};

