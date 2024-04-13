const ENGLISH = 'en'
const DEFAULT_LOCALE = ENGLISH
const LANGUAGE_KEY = 'Locale_Key'


class LocaleKeys {
  getDefaultLocale() {
    return DEFAULT_LOCALE
  }

  get supportedLanguages() {
    return [
      { title: 'English', value: ENGLISH },
    ]
  }

  get english() {
    return ENGLISH
  }

  get languageKey() {
    return LANGUAGE_KEY
  }
}

export default new LocaleKeys()
