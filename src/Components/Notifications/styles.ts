import Colors from 'Theme/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
import Typography from 'Theme/Typography'
import ConstantStyleValues from 'Constants/ConstantStyleValues'

export default DimensionHelper.createStyleSheet({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    marginHorizontal: ConstantStyleValues.horizontalPadding,
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
    paddingVertical: 10,
    backgroundColor: Colors.notificationBlack,
    borderRadius: ConstantStyleValues.borderRadius,
    alignItems: 'center',
    ...ConstantStyleValues.shadow,
  },
  iconContainer: {
    width: '8%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
    color: Colors.white,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // marginVertical: 5,
  },
  notificationTitle: {
    ...Typography.subtitle3,
    color: Colors.white,
  },
  notificationText: {
    ...Typography.body4,
    color: Colors.white,
    // color: Colors.notificationText,
    // top: -3
  },
  textView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  separator: {
    width: 1,
    backgroundColor: Colors.darkGrey,
    height: '100%',
    marginHorizontal: 10,
    // height: 20
  },
  closeIcon: {
    fontSize: 24,
    color: Colors.white,
  },
})
