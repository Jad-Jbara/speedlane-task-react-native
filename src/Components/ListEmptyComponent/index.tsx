import Button from 'Components/Buttons/Button'
import Text from 'Components/Text'
import React from 'react'
import { ImageSourcePropType, View, Image, ImageStyle } from 'react-native'
import { StyleType } from 'Types'
import styles from './styles'

type Props = {
  image?: ImageSourcePropType
  title?: string
  subTitle?: string
  withButton?: boolean
  buttonText?: string
  extraButtonStyle?: StyleType
  extraButtonTextStyle?: StyleType
  onButtonPress?: () => void | Promise<void>
  extraImageStyle?: ImageStyle
  extaContainerStyle?: StyleType
}

const ListEmptyComponent: React.FC<Props> = ({
  subTitle,
  image,
  title,
  buttonText,
  extraButtonStyle,
  withButton = Boolean(buttonText),
  onButtonPress,
  extraButtonTextStyle,
  extraImageStyle,
  extaContainerStyle,
}) => {
  return (
    <View testID='list-empty-component' style={styles.emptyView}>
      <View style={[styles.infoContainer, extaContainerStyle]}>

        {image && <Image
          source={image}
          style={[styles.image, extraImageStyle]}
        />}
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
      {withButton && <View style={styles.buttonContainer}>
        <Button
          text={buttonText}
          onPress={onButtonPress}
          buttonStyle={[styles.button, extraButtonStyle]}
          buttonTextStyle={[styles.buttonText, extraButtonTextStyle]}
        />
      </View>}
    </View>
  )
}

export default ListEmptyComponent
