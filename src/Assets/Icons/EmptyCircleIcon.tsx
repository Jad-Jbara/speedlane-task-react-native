import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'

const EmptyCircleIcon: React.FC<SvgProps & { size?: number }> = ({
  size = 24,
  ...props
}) => (
  <Svg
    viewBox='0 0 22 23'
    fill='none'
    color={Colors.grey}
    {...props}
    width={DimensionHelper.normalize(size)}
    height={DimensionHelper.normalize(size)}>
    <Circle cx={11} cy={11.5} r={10} stroke='currentColor' strokeWidth={2} />
  </Svg>
)

export default React.memo(EmptyCircleIcon)
