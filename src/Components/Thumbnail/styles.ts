import Colors from 'Theme/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'

export default DimensionHelper.createStyleSheet({
  container: {
    aspectRatio: 1,
    backgroundColor: Colors.grey,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    aspectRatio: 1,
    borderRadius: 99,
    resizeMode: 'contain',
  },
})
