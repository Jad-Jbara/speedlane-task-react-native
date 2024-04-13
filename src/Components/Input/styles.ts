import Colors from 'Theme/Colors'
import Typography from 'Theme/Typography'
import DimensionHelper from 'Helpers/DimensionHelper'

export default DimensionHelper.createStyleSheet({
  container: {
    gap: 8,
  },

  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // label
  label: {
    ...Typography.titlesSmall,
    textTransform: 'capitalize',
  },
  labelDisabled: {
    color: Colors.grey,
  },

  // helper
  helper: {
    ...Typography.paragraphSmall,
    color: Colors.secondaryColor,
  },
  helperDisabled: {
    color: Colors.grey,
  },

  // input wrapper
  inputWrapper: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: Colors.grey,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputWrapperError: {
    borderColor: Colors.primaryColor,
  },
  inputWrapperMultiline: {
    minHeight: 118,
    alignItems: 'flex-start',
  },
  inputWrapperFocused: {
    borderColor: Colors.primaryColor,
  },

  // input
  input: {
    ...Typography.paragraphExtraLarge,
    flex: 1,
    lineHeight: undefined,
    textAlignVertical: 'center',
    padding: 0,
    paddingVertical: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  inputDisabled: {
    color: Colors.grey,
  },
  inputMultiline: {
    textAlignVertical: 'top',
    height: 'auto',
  },

  // accessory
  accessory: {
    width: 24,
    height: 24,
    color: Colors.black,
    tintColor: Colors.black,
  },
  accessoryDisabled: {
    color: Colors.grey,
    tintColor: Colors.grey,
  },
  accessoryError: {
    color: Colors.primaryColor,
    tintColor: Colors.primaryColor,
  },
})
