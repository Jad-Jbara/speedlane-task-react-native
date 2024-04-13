import CircleCheckedIcon from 'Assets/Icons/CircleCheckedIcon'
import EmptyCircleIcon from 'Assets/Icons/EmptyCircleIcon'
import EmptySquareIcon from 'Assets/Icons/EmptySquareIcon'
import SquareCheckedIcon from 'Assets/Icons/SquareCheckedIcon'
import AnimatedFadingView from 'Components/AnimatedFadingView'
import NativeButton from 'Components/Buttons/NativeButton'
import Colors from 'Theme/Colors'
import React from 'react'
import Animated, { Layout } from 'react-native-reanimated'

type Props = {
  onPress?: () => void
  selected?: boolean
  rounded?: boolean
  color?: string
}

const AnimatedCheckbox: React.FC<Props> = ({
  selected,
  rounded,
  onPress,
  color = Colors.primaryColor,
}) => {
  return (
    <NativeButton disabled={!onPress} onPress={onPress}>
      <Animated.View layout={Layout}>
        {selected && (
          <AnimatedFadingView>
            {rounded ? (
              <CircleCheckedIcon color={color} />
            ) : (
              <SquareCheckedIcon color={color} />
            )}
          </AnimatedFadingView>
        )}
        {!selected && (
          <AnimatedFadingView>
            {rounded ? <EmptyCircleIcon /> : <EmptySquareIcon />}
          </AnimatedFadingView>
        )}
      </Animated.View>
    </NativeButton>
  )
}

export default AnimatedCheckbox
