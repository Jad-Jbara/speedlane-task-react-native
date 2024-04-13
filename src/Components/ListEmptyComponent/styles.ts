import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  emptyView: {
    flex: 1,
    alignItems: 'center',
  },
  infoContainer: {
    // flex: 1,
    width: '100%',
    paddingTop: '20%',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    ...Typography.heading2,
    width: '100%',
    textAlign: 'center',
  },
  subTitle: {
    ...Typography.body3,
    fontSize: 15,
    color: Colors.grey,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    paddingTop: '10%',
    width: '100%',
  },
  button: {
    minWidth: '50%',
    maxWidth: '100%',
    width: undefined,
  },
  buttonText: {
    // fontFamily: FontFamily.bold,
  },
  image: {
    alignSelf: 'center',
    aspectRatio: 1,
    height: 300,
    resizeMode: 'contain',
  },
})
