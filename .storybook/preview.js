import { ThemeProvider } from 'styled-components'
import { I18nextProvider, useTranslation } from 'react-i18next'

import theme from '../src/styles/theme'
import i18n from '../src/i18n'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

export const decorators = [
  Story => (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </I18nextProvider>
  )
]
