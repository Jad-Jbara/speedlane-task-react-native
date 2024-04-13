import { ParamListBase, Route } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import React, { PropsWithChildren } from 'react'
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native'

import { MainParamsList } from './Navigation'

export type ScreenRoute<RouteParams extends object = object> = Route<string, RouteParams>

type ScreenProps<
  RouteParams extends {},
  RouteName extends keyof RouteParams = keyof RouteParams
> = {
  navigation: NavigationType<RouteParams, RouteName>
  route: ScreenRoute<RouteParams>
}

export type ScreenComponent<
  RouteParams extends ParamListBase = MainParamsList,
  RouteName extends keyof RouteParams = keyof RouteParams,
  T = object,
> = (
  props: StackScreenProps<RouteParams, RouteName, string> & PropsWithChildren<T>
) => React.JSX.Element

export type NavigationType<
  T extends ParamListBase = MainParamsList,
  RouteName extends keyof T = keyof T,
> = StackNavigationProp<T, RouteName>

export type Locale = 'en'

export type StyleType = StyleProp<ViewStyle | TextStyle | ImageStyle>
