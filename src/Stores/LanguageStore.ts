import { makeAutoObservable } from 'mobx'
import { setDefaultOptions } from 'date-fns'
import { enUS, pt } from 'date-fns/locale'
import StorageHelper from 'Helpers/StorageHelper'

import NetworkStore from './NetworkStore'

import english from 'Constants/Locale/english'

import Constants from 'Constants/LocaleKeys'

const DEFAULT_LOCALE = Constants.getDefaultLocale()

const LOCALES = {
  en: enUS,
  pt: pt,
}

class LanguageStore {
  emptyStorage: boolean | null = null
  locale: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setValue(key: keyof this, value: any) {
    this[key] = value
  }

  async setLocale(locale: string) {
    if (this.locale !== locale) {
      this.locale = locale
      NetworkStore.setValue('selectedLanguage', locale)
      this.persist()
    }
  }


  persist() {
    StorageHelper.set(Constants.languageKey, this.locale || DEFAULT_LOCALE)
  }

  loadFromStorage() {
    const locale = StorageHelper.getString(Constants.languageKey) || DEFAULT_LOCALE
    this.setValue('locale', locale)
    NetworkStore.setValue('selectedLanguage', locale)
    setDefaultOptions({ locale: this.dateLocale })
  }


  get hasLanguage() {
    return Boolean(this.locale)
  }

  get languageName() {
    const selectedLanguage = Constants.supportedLanguages.filter(language => language.value === this.locale)
    return selectedLanguage[0].title
  }

  get textLocal() {
    switch (this.locale) {
      case 'en':
      default:
        return english
    }
  }

  get dateLocale() {
    return LOCALES[this.locale as keyof typeof LOCALES]
  }
}

export default new LanguageStore()
