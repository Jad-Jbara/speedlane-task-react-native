import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import ConstantStyleValues from 'Constants/ConstantStyleValues'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.grey,
  },
  modalHeader: {
    flex: 1,
  },
  staticSize: {
    flex: 1,
  },
  closeModalButtonContainer: {
    borderRadius: 99,
    backgroundColor: Colors.coolGrey,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    aspectRatio: 1,
    height: 32,
  },
  modalTitle: {
    flex: 4,
    ...Typography.heading1,
    textAlign: 'center',
  },
  modalHeaderIcon: {
    fontSize: 22,
    color: Colors.black,
  },
  modalRightTitle: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  handle: {
    // width: '40%',
    backgroundColor: Colors.stepsGrey,
  },
  bottomSheet: {
    ...ConstantStyleValues.shadow,
    backgroundColor: Colors.white,
    borderRadius: 24,
  },
  background: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
})
