import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AppContextProvider } from '../context/app.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  )
}

export default MyApp