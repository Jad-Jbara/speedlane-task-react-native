
import ConstantStyleValues from 'Constants/ConstantStyleValues'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'
export default DimensionHelper.createStyleSheet({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: ConstantStyleValues.borderRadius,
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
  },
  spinIcon: {
    color: Colors.white,
    fontSize: 24,
  },
  label: {
    // ...Typography.button,
    ...Typography.subtitle4,
    color: Colors.white,
  },
  wheel: {
    resizeMode: 'contain',
  },
  spinButtonContainer: {
    borderRadius: 99,
    position: 'absolute',
    zIndex: 100,
  },
  spinButton: {
    resizeMode: 'contain',
  },
  wheelBackground: {
    resizeMode: 'contain',
    position: 'absolute'
  },
  arrow: {
    resizeMode: 'contain',
    position: 'absolute',
    top: -30,
    zIndex: 999,
  }
})