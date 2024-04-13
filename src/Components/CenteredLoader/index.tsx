import React, { PropsWithChildren } from 'react'
import { View, ActivityIndicator } from 'react-native'

import Colors from 'Theme/Colors'
import styles from './styles'

type Props = PropsWithChildren<{
  positionAbsolute?: boolean
  testID?: string
}>

const Wrapper: React.FC<Props> = ({
  positionAbsolute,
  children,
  ...props
}) => {
  if (positionAbsolute) {
    return (
      <View testID='absolute-container' style={styles.containerForAbsolute}>
        <View style={styles.viewForAbsolute}>
          {children}
        </View>
      </View>
    )
  }

  return (
    <View {...props} style={styles.container}>
      {children}
    </View>
  )
}

const CenteredLoader: React.FC<Props> = (props) => {
  return (
    <Wrapper
      testID='centered-loader'
      {...props}>
      <ActivityIndicator
        size='large'
        color={Colors.primaryColor}
      />
    </Wrapper>
  )
}

export default CenteredLoader
