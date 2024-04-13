import DimensionHelper from 'Helpers/DimensionHelper'
import Typography from 'Theme/Typography'
import Colors from 'Theme/Colors'

export default DimensionHelper.createStyleSheet({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 99,
    height: 24,
    paddingHorizontal: 10,
    backgroundColor: Colors.primaryColor,
  },
  label: {
    ...Typography.body3,
    color: Colors.white,
    textTransform: 'capitalize',
  },
})
