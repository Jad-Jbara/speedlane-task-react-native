import Colors from 'Theme/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
import Typography from 'Theme/Typography'
import ConstantStyleValues from 'Constants/ConstantStyleValues'

export default DimensionHelper.createStyleSheet({
  container: {
    width: 150,
    height: 190,
  },
  nameContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    ...ConstantStyleValues.shadow,
  },
  thumbnail: {
    borderRadius: 10,
    backgroundColor: Colors.lightBlue,
  },
  name: {
    // aspectRatio: 1,
    // borderRadius: 99,
    ...Typography.body1,
    color: Colors.white,
  },
})
