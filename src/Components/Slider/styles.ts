import DimensionHelper from 'Helpers/DimensionHelper'
import Typography from 'Theme/Typography'

export default DimensionHelper.createStyleSheet({
  container: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    ...Typography.body3,
  },
  center: {
    alignSelf: 'center',
  },
})
