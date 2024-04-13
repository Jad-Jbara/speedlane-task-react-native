import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'

export default {
  paddingBottom: 10,
  borderRadius: 10,
  shadow: {
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  noShadow: {
    shadowColor: undefined,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  roundedListContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 10,
    paddingTop: 20,
  },
  hitSlop: {
    top: DimensionHelper.getHeight(20),
    right: DimensionHelper.getWidth(20),
    left: DimensionHelper.getWidth(20),
    bottom: DimensionHelper.getHeight(20),
  },
  noSpacing: {
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  horizontalPadding: 16,
}
