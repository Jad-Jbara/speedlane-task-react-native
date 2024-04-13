import { StyleSheet } from 'react-native'
import Colors from 'Theme/Colors'
import FontFamily from 'Theme/FontFamily'
import DimensionHelper from 'Helpers/DimensionHelper'
import ConstantStyleValues from 'Constants/ConstantStyleValues'

export default StyleSheet.create({
  list: {
    // minHeight: 250,
    // flex: 1
  },

  loadMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadMoreButton: {
    paddingVertical: 10,
  },
  loadMoreText: {
    fontFamily: FontFamily.medium,
    color: Colors.primaryColor,
    fontSize: DimensionHelper.normalize(16),
    textAlign: 'center',
    marginVertical: 10,
  },
  noMoreRequestsText: {
    fontFamily: FontFamily.medium,
    color: Colors.grey,
    fontSize: DimensionHelper.normalize(16),
    textAlign: 'center',
    marginVertical: 10,
  },
  loaderContainer: {
    flex: 1,
    gap: 10,
    // justifyContent: 'space-around',
  },
  contentContainer: {
    padding: ConstantStyleValues.horizontalPadding,
  },
  separator: {
    height: 20,
  },
})
