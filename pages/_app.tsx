import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default App;
