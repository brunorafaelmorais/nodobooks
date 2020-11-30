import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider, useTranslation } from 'react-i18next'

import GlobalStyle from '@/styles/global'
import theme from '@/styles/theme'
import store from '@/store'

import i18n from '@/i18n'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  const { locale } = router

  const { i18n: i18next } = useTranslation()

  useEffect(() => {
    i18next.changeLanguage(locale)
  }, [locale, i18next])

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  )
}

export default MyApp
