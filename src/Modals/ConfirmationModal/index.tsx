import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import {
  Text,
  View,
} from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import Button from 'Components/Buttons/Button'

import { useLocale } from 'Hooks'

import BottomModal from 'Modals/BottomModal'

import ConfirmationModalStore from 'Stores/ConfirmationModalStore'

import styles from './styles'

const ConfirmationModal: React.FC = () => {
  const {
    title,
    show,
    onCancel,
    description,
    hideCancel,
    confirmTitle,
    cancelTitle,
    close,
    action,
  } = ConfirmationModalStore
  const { general } = useLocale()
  const confirmTitleToUse = confirmTitle || (hideCancel ? general.okay : general.yes)
  const cancelTitleToUse = cancelTitle ? cancelTitle : general.no
  const bottomModalRef = React.useRef<BottomSheetModal>(null)

  const onCancelPress = async () => {
    setTimeout(async () => {
      onCancel && await onCancel()
      close()
    }, 0)
  }

  useEffect(() => {
    if (show) {
      bottomModalRef.current?.present()
    } else {
      bottomModalRef.current?.dismiss()
    }
  }, [show])

  const Footer = () => (
    <View style={styles.footer}>
      <Button
        testID='confirmation-modal-on-confirm-button'
        onPress={action}
        text={confirmTitleToUse}
        buttonTextStyle={styles.buttonText}
        buttonStyle={styles.confirmButton}
      />
      {!hideCancel && (
        <Button
          testID='confirmation-modal-on-cancel-button'
          onPress={onCancelPress}
          buttonStyle={styles.cancelButton}
          buttonTextStyle={styles.cancelText}
          text={cancelTitleToUse}
        />
      )}
    </View>
  )

  return (
    <BottomModal
      ref={bottomModalRef}
      swipeToCloseEnabled={false}
      enablePanDownToClose={false}
      snapPoints={['40%']}
      footerComponent={Footer}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {description ? <Text style={styles.description}>{description}</Text> : null}
        </View>
      </View>
    </BottomModal>
  )
}

export default observer(ConfirmationModal)
