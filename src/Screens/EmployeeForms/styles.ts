import ConstantStyleValues from 'Constants/ConstantStyleValues'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: ConstantStyleValues.horizontalPadding,
  },
  employeeDetails: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: Colors.primaryColor,
  },
  smallText: {
    ...Typography.body3,
  },
  editButton: {
    backgroundColor: 'transparent',
  },
  imageFieldContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  section: {
    alignItems: 'flex-start',
    gap: 10,
  },
  sectionTitle: {
    ...Typography.titlesSmall,
    textTransform: 'capitalize',
  },
})
