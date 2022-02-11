import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Template from './components/Template';

export const meta: MetaFunction = () => ({ title: 'New Remix App' });

const App = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      <Meta />
      <Links />
    </head>
    <body>
      <ChakraProvider theme={theme}>
        <Template>
          <Outlet />
        </Template>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </ChakraProvider>
    </body>
  </html>
);

export default App;
