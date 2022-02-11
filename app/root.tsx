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
