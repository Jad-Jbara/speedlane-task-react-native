import Keys from 'Constants/Keys'

class NetworkStore {
  private static instance: NetworkStore | null = null
  selectedLanguage: string | null = null
  serverUrl: string | null = null
  apiEndPoint: string = Keys.SERVER_URL

  setValue(key: keyof this, value: any) {
    this[key] = value
  }

  static getInstance(): NetworkStore {
    if (!NetworkStore.instance) {
      NetworkStore.instance = new NetworkStore()
    }
    return NetworkStore.instance
  }
}

export default NetworkStore.getInstance()
