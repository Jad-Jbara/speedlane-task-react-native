import * as React from 'react'
import Svg, { SvgProps, Circle, Path } from 'react-native-svg'
import { memo } from 'react'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Theme/Colors'
const CircleCheckedIconComponent: React.FC<SvgProps & { size?: number }> = ({
  size = 24,
  ...props
}) => (
  <Svg
    viewBox='0 0 22 23'
    fill='none'
    color={Colors.primaryColor}
    {...props}
    width={DimensionHelper.normalize(size)}
    height={DimensionHelper.normalize(size)}>
    <Circle cx={11} cy={11.5} r={11} fill='currentColor' />
    <Path
      stroke='#F2F4F7'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16.333 7.5 9 14.833 5.667 11.5'
    />
  </Svg>
)
const CircleCheckedIcon = memo(CircleCheckedIconComponent)
export default CircleCheckedIcon
