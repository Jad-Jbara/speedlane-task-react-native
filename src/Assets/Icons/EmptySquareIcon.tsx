import Colors from 'Theme/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
import * as React from 'react'
import Svg, { SvgProps, Rect } from 'react-native-svg'

const EmptySquareIconComponent: React.FC<
  SvgProps & {
    size?: number
  }
> = ({ size = 24, ...props }) => (
  <Svg
    fill='none'
    color={Colors.grey}
    {...props}
    width={DimensionHelper.normalize(size)}
    height={DimensionHelper.normalize(size)}>
    <Rect
      width={22}
      height={22}
      x={1}
      y={1}
      stroke='currentColor'
      strokeWidth={2}
      rx={3}
    />
  </Svg>
)
const EmptySquareIcon = React.memo(EmptySquareIconComponent)
export default EmptySquareIcon
