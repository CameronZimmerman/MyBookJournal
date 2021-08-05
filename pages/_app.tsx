import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthWrapper } from '../auth/useAuth'
import {NextPage} from 'next'

function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  } : {Component: NextPage | any ; pageProps: any} = props
  const component = Component.requireAuth ? (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  ) : (
    // public page
    <Component {...pageProps} />
  )

  return component
}
export default MyApp
