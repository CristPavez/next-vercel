import { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css'

/*type son inventados*/ 

type NextPageWithLayout = NextPage &{
  getLayout?: ( page: JSX.Element )=> JSX.Element;
}
type AppPropsWithLayout = AppProps & {
  Component : NextPageWithLayout
}

 

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
