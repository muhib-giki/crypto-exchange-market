import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="aFao8efDCOW5unR3vuxpnTU9MOPTPBLb3hqlRp2L"
      serverUrl="https://wrerjnljplvc.usemoralis.com:2053/server"
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
