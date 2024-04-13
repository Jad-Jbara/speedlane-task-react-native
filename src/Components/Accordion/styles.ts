import DimensionHelper from 'Helpers/DimensionHelper'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  container: {

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    ...Typography.titlesSmall,
  }
})
