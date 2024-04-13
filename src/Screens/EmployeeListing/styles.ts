import ConstantStyleValues from 'Constants/ConstantStyleValues'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
  },
  filterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ConstantStyleValues.horizontalPadding,
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  headerLogo: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1,
    padding: 10,
    marginHorizontal: ConstantStyleValues.horizontalPadding,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  listRowTitle: {
    ...Typography.body3,
  },
  filterContentContainer: {
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
    gap: 10,
    paddingVertical: 10,
  },
  filterButtonOff: {
    backgroundColor: Colors.grey,
  },
  clearButton: {
    backgroundColor: Colors.lightBlue,
  },
  paddingBottom: {
    paddingBottom: 10,
  }
})
