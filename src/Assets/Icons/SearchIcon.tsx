import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

import Colors from 'Theme/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'

const SearchIconComponent: React.FC<
  SvgProps & {
    size?: number
  }
> = ({ size = 20, ...props }) => (
  <Svg
    viewBox='0 0 20 20'
    fill='none'
    color={Colors.grey}
    {...props}
    width={DimensionHelper.normalize(size)}
    height={DimensionHelper.normalize(size)}>
    <Path
      fill='currentColor'
      fillRule='evenodd'
      d='M9.25 4a5.25 5.25 0 1 0 3.642 9.031.76.76 0 0 1 .139-.139A5.25 5.25 0 0 0 9.25 4Zm5.274 9.463a6.75 6.75 0 1 0-1.06 1.06l2.756 2.757a.75.75 0 1 0 1.06-1.06l-2.756-2.757Z'
      clipRule='evenodd'
    />
  </Svg>
)
const SearchIcon = React.memo(SearchIconComponent)
export default SearchIcon
