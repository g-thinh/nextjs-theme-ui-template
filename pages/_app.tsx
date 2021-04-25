import type { AppProps } from 'next/app';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'theme-ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
