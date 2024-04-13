import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const useUpdateHeaderTitle = (headerTitle: string) => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle })
  }, [])
}

export default useUpdateHeaderTitle
