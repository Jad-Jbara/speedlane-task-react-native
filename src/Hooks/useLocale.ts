import { languageStore } from 'Stores/StoreFactory'

export const useLocale = () => {
  return languageStore.textLocal
}
