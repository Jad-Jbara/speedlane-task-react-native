import Colors from 'Theme/Colors'
import ConstantStyleValues from 'Constants/ConstantStyleValues'
import Typography from 'Theme/Typography'
import DimensionHelper from 'Helpers/DimensionHelper'

export default DimensionHelper.createStyleSheet({
  row: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    borderRadius: 13,
    backgroundColor: Colors.white,
  },
  shadow: {
    backgroundColor: Colors.white,
    borderRadius: 13,
  },
  selectedCheckBox: {
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.veryLightMainColor,
  },
  disabledCheckBox: {
    backgroundColor: `${Colors.darkGrey}40`,
  },
  checkBoxLabel: {
    ...Typography.body3,
  },
  dateSelectorListContainer: {
    paddingHorizontal: ConstantStyleValues.horizontalPadding,
    paddingVertical: 10,
    gap: 10,
  },
  checkBoxIcon: {
    fontSize: 24,
    color: Colors.darkGrey,
  },
  selectedCheckBoxIcon: {
    color: Colors.primaryColor,
  },
  icon: {
    fontSize: 28,
    color: Colors.black,
  },
  image: {
    width: 28,
    aspectRatio: 1,
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  selected: {
    color: Colors.primaryColor,
  },
  selectedImage: {
    tintColor: Colors.primaryColor,
  },
  dateSelectorFooterLabel: {
    ...Typography.body2,
    color: Colors.darkGrey,
  },
  dateSelectorFooterValue: {
    ...Typography.subtitle1,
  },

})
