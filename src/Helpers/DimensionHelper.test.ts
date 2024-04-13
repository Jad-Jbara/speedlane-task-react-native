import DimensionHelper from './DimensionHelper'

const TEST_DIMENSION = 20

describe('when getDimension is called', () => {
  it('should return new dimensions as number', () => {
    const newDimesnion = DimensionHelper.getDimension(TEST_DIMENSION, 'width')
    expect(typeof newDimesnion).toBe('number')
  })
  describe('when normalize is called with a number argument', () => {
    it('should return new normalized value as number', () => {
      const newDimesnion = DimensionHelper.normalize(TEST_DIMENSION)
      expect(typeof newDimesnion).toBe('number')
    })
  })

  describe('when normalize is called with an NAN argument', () => {
    it('should return same value if input is not number', () => {
      const FALSE_VALUE = 'TEST_DIMENSION'
      const newDimesnion = DimensionHelper.normalize(FALSE_VALUE)
      expect(newDimesnion).toBe(FALSE_VALUE)
    })
  })
})
