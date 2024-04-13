import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import { Employee, MainParamsList } from 'Types'
import NativeButton from 'Components/Buttons/NativeButton'
import Text from 'Components/Text'
import Thumbnail from 'Components/Thumbnail'
import { translate } from 'Helpers/translate'
import { observer } from 'mobx-react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

type Props = {
  item: Employee
}

const AnimatedNativeButton = Animated.createAnimatedComponent(NativeButton)

const EmployeeCard: React.FC<Props> = ({
  item,
}) => {
  const { id, image_url, name, location, phone, salary, position, department } = item || {}
  const { employeeCard } = translate()
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('EmployeeDetailsScreen', { id })
  }

  return (
    <AnimatedNativeButton
      onPress={onPress}
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.container}>
      <Thumbnail
        size={48}
        imageSource={{ uri: image_url }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={[styles.smallText, styles.position]}>
          ({position})
        </Text>
        <Text style={styles.smallText}>
          {employeeCard.location}: {location || 'N/A'}
        </Text>
        <Text style={styles.smallText}>
          {employeeCard.phoneNumber}: {phone}
        </Text>
        <Text style={styles.smallText}>
          {employeeCard.salary}: ${salary}
        </Text>
        <Text style={styles.smallText}>
          {employeeCard.department}: {department?.name || 'N/A'}
        </Text>
      </View>

    </AnimatedNativeButton>
  )
}

export default observer(EmployeeCard)
