import React from 'react'
import { View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from 'Components/Text'

import styles from './styles'
import NativeButton from 'Components/Buttons/NativeButton'

type HeaderProps = {
  handleCloseModal?: () => void
  modalTitle?: string
  withCloseButton?: boolean
}

const ModalHeader: React.FC<HeaderProps> = ({
  handleCloseModal,
  modalTitle,
  withCloseButton,
}) => {
  if (!modalTitle && !withCloseButton) {
    return null
  }
  return (
    <View style={styles.row}>
      <View style={styles.buttonWrapper}>
        {withCloseButton && <NativeButton
          onPress={handleCloseModal}>
          <MaterialCommunityIcons
            name='close'
            size={24}
            color="#000"
          />
        </NativeButton>}
      </View>
      <Text style={styles.modalTitle}>{modalTitle}</Text>
      <View style={styles.modalRightTitle} />
    </View>
  )
}

export default ModalHeader
