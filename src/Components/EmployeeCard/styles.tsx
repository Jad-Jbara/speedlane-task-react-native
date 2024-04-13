import ConstantStyleValues from 'Constants/ConstantStyleValues'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    ...ConstantStyleValues.shadow,
  },
  infoContainer: {
  },
  name: {
    ...Typography.body1,
  },
  smallText: {
    ...Typography.body4,
  },
  position: {
    ...Typography.subtitle3,
    color: Colors.primaryColor,
  },
})

