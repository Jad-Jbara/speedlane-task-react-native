type FontType = (
  'Black'
  | 'BlackItalic'
  | 'Bold'
  | 'BoldItalic'
  | 'ExtraBold'
  | 'ExtraLight'
  | 'ExtraLightItalic'
  | 'Italic'
  | 'Light'
  | 'LightItalic'
  | 'Regular'
  | 'SemiBold'
  | 'SemiBoldItalic'
  | 'Medium'
)
class FontFamily {
  get fontBase() {
    return 'Roboto-'
  }

  getFontName(type: FontType) {
    return `${this.fontBase}${type}`
  }

  get black() {
    return this.getFontName('Black')
  }

  get bold() {
    return this.getFontName('Bold')
  }

  get regular() {
    return this.getFontName('Regular')
  }

  get light() {
    return this.getFontName('Light')
  }

  get semiBold() {
    return this.getFontName('SemiBold')
  }

  get medium() {
    return this.getFontName('Medium')
  }

  get extraBold() {
    return this.getFontName('ExtraBold')
  }
}

export default new FontFamily()
