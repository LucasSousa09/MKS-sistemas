import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query'

import { CartContextProvider } from '../contexts/CartContextProvider'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme/default'
import { GlobalStyle } from '../styles/global'

const queryClient = new QueryClient

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartContextProvider>
    </QueryClientProvider>
  )
}
