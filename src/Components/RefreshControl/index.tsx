import Colors from 'Theme/Colors'
import React from 'react'
import { RefreshControlProps, RefreshControl as RNRefreshControl } from 'react-native'

const RefreshControl: React.FC<RefreshControlProps> = ({
  ...props
}) => {
  return (
    <RNRefreshControl
      testID='refresh-control'
      tintColor={Colors.primaryColor}
      colors={[Colors.primaryColor]}
      {...props}
    />
  )
}
export default RefreshControl
