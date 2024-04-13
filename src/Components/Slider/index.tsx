import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import Slider from '@react-native-community/slider'
import { observer } from 'mobx-react'

import Text from 'Components/Text'

import ConstantStyleValues from 'Constants/ConstantStyleValues'

import DimensionHelper from 'Helpers/DimensionHelper'

import Colors from 'Theme/Colors'

import styles from './styles'


type Props = {
  value: number
  onChangeValue: (value: number) => void
}

const MINIMUM_VALUE = 1
const MAXIMUM_VALUE = 100000
const PADDING = DimensionHelper.getWidth(ConstantStyleValues.horizontalPadding * 2)

const SliderComponent: React.FC<Props> = ({
  onChangeValue,
}) => {
  const { width } = Dimensions.get('window')
  const [value, setValue] = useState(MINIMUM_VALUE)

  const onValueChange = (value: number) => {
    setValue(value)
    onChangeValue && onChangeValue(value)
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.center]}>
        Salary: {value}
      </Text>

      <Slider
        style={{ width: width - PADDING, height: 40 }}
        minimumValue={MINIMUM_VALUE}
        maximumValue={MAXIMUM_VALUE}
        step={1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={Colors.primaryColor}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.primaryColor}

      />
      <View style={styles.row}>
        <Text style={styles.label}>
          {MINIMUM_VALUE}
        </Text>
        <Text style={styles.label}>
          {MAXIMUM_VALUE}
        </Text>
      </View>
    </View>
  )
}
export default observer(SliderComponent)

