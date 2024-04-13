import { ViewStyle } from 'react-native'
import Colors from 'Theme/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
import Typography from 'Theme/Typography'
import ConstantStyleValues from 'Constants/ConstantStyleValues'

const defaultButtonStyle: ViewStyle = {
  borderWidth: 2,
  borderColor: Colors.primaryColor,
}

export default DimensionHelper.createStyleSheet({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
    // minHeight: 200,
  },
  textContainer: {
    gap: 8,
  },
  title: {
    ...Typography.heading1,
    color: Colors.primaryColor,
    textAlign: 'center',
    // paddingVertical: 20,
  },
  description: {
    ...Typography.subtitle3,
    textAlign: 'center',
    maxWidth: '90%',
  },
  footer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
    paddingBottom: 20,
    gap: 20,
    justifyContent: 'flex-end',
  },
  cancelButton: {
    ...defaultButtonStyle,
    borderColor: Colors.lightBlue,
    backgroundColor: Colors.lightBlue,
  },
  confirmButton: {
    ...defaultButtonStyle,
    backgroundColor: Colors.primaryColor,
  },
  buttonText: {
    color: Colors.white,
  },
  cancelText: {
    color: Colors.white,
  },
})
