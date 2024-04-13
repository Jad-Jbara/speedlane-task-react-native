import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import Colors from 'Theme/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'

const SquareCheckedIconComponent: React.FC<
  SvgProps & {
    size?: number
  }
> = ({ size = 24, ...props }) => (
  <Svg
    fill='none'
    color={Colors.primaryColor}
    {...props}
    width={DimensionHelper.normalize(size)}
    height={DimensionHelper.normalize(size)}>
    <Path
      fill='currentColor'
      fillRule='evenodd'
      d='M4 0a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm13.98 9.505a1.133 1.133 0 0 0-1.525-1.677l-6.571 5.974-2.362-2.545a1.133 1.133 0 0 0-1.524 1.677l3.123 3.238a1.133 1.133 0 0 0 1.525 0l7.334-6.667Z'
      clipRule='evenodd'
    />
  </Svg>
)
const SquareCheckedIcon = React.memo(SquareCheckedIconComponent)
export default SquareCheckedIcon
