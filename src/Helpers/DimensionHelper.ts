import {
  PixelRatio,
  Dimensions,
  Platform,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native'

const { width } = Dimensions.get('window')

// These measurements should be taken from the device size
// used in the design file (ex: Zeplin or Adobe XD...)
const BASE_HEIGHT = 812
const BASE_WIDTH = 375

const scale = Platform.select({
  android: width / BASE_WIDTH,
  ios: width / BASE_WIDTH,
}) || 1

const isNumber = (value: number) => {
  return typeof value === 'number'
}

class DimensionHelper {
  getDimension(side: number, type: 'width' | 'height') {
    if (!isNumber(side)) { return side }
    const baseDimension = type === 'width' ? BASE_WIDTH : BASE_HEIGHT
    const elementPercentage = side / baseDimension * 100
    return Math.round((Dimensions.get('window')[type] * elementPercentage / 100))
  }

  getHeight(elementHeight: number) {
    return this.getDimension(elementHeight, 'height')
  }

  getWidth(elementWidth: number) {
    return this.getDimension(elementWidth, 'width')
  }
  normalize(size: number) {
    if (typeof size !== 'number') { return size }
    const newSize = size * scale
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }

  isKeyFound(keys: string[], key: string) {
    return keys.findIndex(item => key.toLowerCase().includes(item)) !== -1
  }

  // TODO: Fix type errors
  createStyleSheet<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(styles: T | StyleSheet.NamedStyles<T>): T {
    const heightKeys = ['height', 'top', 'bottom', 'vertical']
    const widthKeys = ['width', 'left', 'right', 'horizontal', 'flexBasis', 'gap']
    const normalizeKeys = ['radius', 'fontsize', 'lineheight']
    Object.keys(styles).forEach((style: keyof typeof styles) => {
      Object.keys(styles[style]).forEach((key: keyof (ViewStyle | ImageStyle | TextStyle)) => {
        const value = styles[style][key] as number
        if (this.isKeyFound(normalizeKeys, key)) {
          styles[style][key] = this.normalize(value) as any
          return
        }
        if (this.isKeyFound(widthKeys, key)) {
          styles[style][key] = this.getWidth(value) as any
          return
        }
        if (this.isKeyFound(heightKeys, key)) {
          styles[style][key] = this.getHeight(value) as any
          return
        }
      })
    })
    return StyleSheet.create(styles)
  }
}

export default new DimensionHelper()
