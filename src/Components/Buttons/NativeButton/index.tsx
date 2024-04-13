import {
  useBottomSheetInternal,
  TouchableOpacity as BottomSheetTouchableOpacity,
} from '@gorhom/bottom-sheet'

import React from 'react'
import {
  TouchableOpacity as DefaultTouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

const NativeButton: React.FC<TouchableOpacityProps> = React.forwardRef(({ ...props }, ref) => {
  const isInBottomSheet = Boolean(useBottomSheetInternal(true))
  const TouchableOpacityToUse = isInBottomSheet
    ? BottomSheetTouchableOpacity
    : DefaultTouchableOpacity

  return (
    <TouchableOpacityToUse
      ref={ref}
      testID='native-button'
      activeOpacity={0.65}
      {...props}>
      {props.children}
    </TouchableOpacityToUse>
  )
})

export default NativeButton
