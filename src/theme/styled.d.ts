import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      darkPurple: string;
      purple: string;
      pink: string;
      peach: string;
    };
    font: {
      family: string;
      size: string;
      weight: string;
    };
  }
}
