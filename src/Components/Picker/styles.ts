import ConstantStyleValues from 'Constants/ConstantStyleValues'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  container: {

  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    paddingVertical: 10,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
  },
  listRowTitle: {
    ...Typography.body3,
  },
  doneButton: {
    marginHorizontal: ConstantStyleValues.horizontalPadding,
    marginBottom: 40,
  },
  icon: {
    fontSize: 24,
    color: Colors.white,
  }
})
