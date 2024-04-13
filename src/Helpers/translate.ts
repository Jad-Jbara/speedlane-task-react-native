import { languageStore } from 'Stores/StoreFactory'

export const translate = () => {
  return languageStore.textLocal
}
