import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import {
  StatusBar,
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import BottomSheetProvider from 'Providers/BottomSheetProvider'
import { MainStackNavigation } from 'Navigation/Navigator'
import Colors from 'Theme/Colors'
import ConfirmationModal from 'Modals/ConfirmationModal'
import Notifications from 'Components/Notifications'
import { departmentsStore } from 'Stores/StoreFactory'

const App = () => {
  const safeAreaViewStyle = {
    flex: 1,
    backgroundColor: Colors.background,
  }

  const gestureHandlerRootStyle = {
    flex: 1,
  }

  useEffect(() => {
    departmentsStore.getDepartments({})
  }, [])

  return (
    <SafeAreaProvider style={safeAreaViewStyle}>
      <GestureHandlerRootView style={gestureHandlerRootStyle}>
        <NavigationContainer>
          <BottomSheetProvider>
            <StatusBar
              backgroundColor={Colors.primaryColor}
              barStyle={'light-content'}
              hidden={false}
            />
            <MainStackNavigation />
            <ConfirmationModal />
            <Notifications />
          </BottomSheetProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}


export default observer(App)
