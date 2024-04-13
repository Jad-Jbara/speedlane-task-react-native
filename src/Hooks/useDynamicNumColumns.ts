import { useMemo } from 'react'
import { Dimensions } from 'react-native'


const useDynamicNumColumns = (itemWidth: number, padding = 0) => {
  const numColumns = useMemo(() => {
    const screenWidth = Dimensions.get('window').width
    const newNumColumns = Math.floor(screenWidth / (itemWidth + padding))
    return newNumColumns
  }, [itemWidth])

  return numColumns
}

export default useDynamicNumColumns
