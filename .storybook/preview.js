import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import theme from '../src/styles/theme'
import i18n from '../src/i18n'
import store from '../src/store'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

export const decorators = [
  Story => (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  )
]
