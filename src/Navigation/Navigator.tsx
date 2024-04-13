import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { observer } from 'mobx-react'

import EmployeeListingScreen from 'Screens/EmployeeListing'
import EmployeeDetailsScreen from 'Screens/EmployeeDetails'
import EmployeeFormsScreen from 'Screens/EmployeeForms'

import Colors from 'Theme/Colors'
import styles from './styles'

import { MainParamsList } from 'Types'

const defaultHeaderOptions = {
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.headerTitle,
  headerTitleAlign: 'center',
  headerTintColor: Colors.white,
  headerBackTitleVisible: false,
} as StackNavigationOptions

const MainStack = createStackNavigator<MainParamsList>()


const MainStackNavigation = observer(() => {
  return (
    <MainStack.Navigator
      initialRouteName={'EmployeeListingScreen'}
      screenOptions={defaultHeaderOptions}>
      <MainStack.Screen
        name='EmployeeListingScreen'
        component={EmployeeListingScreen}
      />
      <MainStack.Screen
        name='EmployeeDetailsScreen'
        component={EmployeeDetailsScreen}
      />
      <MainStack.Screen
        name='EmployeeFormsScreen'
        component={EmployeeFormsScreen}
      />
    </MainStack.Navigator>
  )
})

export { MainStackNavigation }
