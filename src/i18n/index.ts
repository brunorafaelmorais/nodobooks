import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/common.json'
import ptBR from './locales/pt-BR/common.json'

const resources = {
  en: {
    translation: en
  },
  'pt-BR': {
    translation: ptBR
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',

  keySeparator: false,

  interpolation: {
    escapeValue: false
  }
})

export default i18n
