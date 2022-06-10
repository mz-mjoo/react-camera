import '@emotion/react';

declare module '@emotion/react' {
  export type Breakpoint =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'mobile'
    | 'tablet'
    | 'desktop';
  export interface Theme {
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        mobile: number;
        tablet: number;
        desktop: number;
      };
      up: (key: Breakpoint) => string;
      down: (key: Breakpoint) => string;
    };
  }
}
