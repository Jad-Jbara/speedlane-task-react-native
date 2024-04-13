import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.primaryColor,
  },
  headerTitle: {
    ...Typography.heading2,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.white,
  },
})
