import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  button: {
    paddingHorizontal: 10,
    minWidth: '40%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.primaryColor,
  },
  selectText: {
    ...Typography.subtitle2,
    color: Colors.white,
    height: 'auto',
  },
  disabledText: {
    color: Colors.black,
  },
  disabled: {
    backgroundColor: Colors.grey,
  },
})
