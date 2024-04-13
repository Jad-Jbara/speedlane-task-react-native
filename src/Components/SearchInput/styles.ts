import Typography from 'Theme/Typography'
import DimensionHelper from 'Helpers/DimensionHelper'
import ConstantStyleValues from 'Constants/ConstantStyleValues'
import Colors from 'Theme/Colors'

const INPUT_HEIGHT = 46

export default DimensionHelper.createStyleSheet({
  inputContainer: {
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
    backgroundColor: Colors.primaryColor,
    paddingBottom: 10,
  },
  inputWrapper: {
    height: INPUT_HEIGHT,
    backgroundColor: Colors.white,
    borderColor: Colors.primaryColor,
  },
  input: {
    ...Typography.paragraphLarge,
    lineHeight: undefined,
    paddingTop: 0,
    paddingBottom: 0,
    height: INPUT_HEIGHT,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
})
