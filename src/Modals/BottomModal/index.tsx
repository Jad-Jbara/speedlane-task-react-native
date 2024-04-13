import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetBackdropProps,
  BottomSheetFooterProps,
  BottomSheetModalProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import React, {
  ComponentProps,
  Fragment,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { BackHandler } from 'react-native'

import ModalHeader from './ModalHeader'
import styles from './styles'

type BottomModalProps = {
  close?: () => void | null
  customSnapPoints?: string[]
  swipeToCloseEnabled?: boolean
  footerComponent?: React.FC<BottomSheetFooterProps>
  onClose?: () => void
  isVisible?: boolean
  withBackDrop?: boolean
  onChange?: (index: number) => void
  withCloseButton?: boolean
  title?: string
  extraScrollViewProps?: Omit<
    ComponentProps<typeof BottomSheetScrollView>,
    'children'
  >
} & BottomSheetModalProps

const BottomModal = React.forwardRef<BottomSheetModal, BottomModalProps>(
  (
    {
      children,
      close = null,
      customSnapPoints,
      swipeToCloseEnabled = true,
      footerComponent,
      onClose,
      isVisible,
      withBackDrop = true,
      onChange,
      withCloseButton,
      title,
      enableDynamicSizing,
      extraScrollViewProps,
      ...props
    },
    ref
  ) => {
    // ref
    const bottomSheetRef = useRef<BottomSheetModal>(null)

    // variables
    const snapPoints = useMemo(
      () => (!enableDynamicSizing ? customSnapPoints || ['50%'] : undefined),
      [enableDynamicSizing, customSnapPoints]
    )

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
      onChange && onChange(index)
      if (index < 0) {
        close && close()
      }
    }, [])

    useEffect(() => {
      if (!ref) {
        bottomSheetRef.current?.present()
      }
    }, [])

    useEffect(() => {
      const backHandlerListener = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (!swipeToCloseEnabled) {
            return true
          }
          if (!ref) {
            bottomSheetRef.current?.close()
          } else {
            close && close()
          }
          return true
        }
      )

      if (!isVisible) {
        backHandlerListener.remove()
      }

      return () => {
        backHandlerListener.remove()
      }
    }, [isVisible])

    const renderBackdrop = useCallback(
      (bottomSheetProps: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...bottomSheetProps}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          enableTouchThrough={false}
          pressBehavior={close ? 'close' : 'none'}
          opacity={0.4}
        />
      ),
      []
    )

    const closeModal = () => {
      bottomSheetRef.current?.close()
      close && close()
      onClose && onClose()
    }

    const BodyToRender: React.FC<PropsWithChildren> = () => {
      const Wrapper = enableDynamicSizing ? BottomSheetScrollView : Fragment
      const wrapperProps = (
        enableDynamicSizing ? {
          showsVerticalScrollIndicator: false,
        } : {}
      )

      return (
        <Wrapper {...wrapperProps} {...extraScrollViewProps}>
          <ModalHeader
            handleCloseModal={closeModal}
            modalTitle={title}
            withCloseButton={withCloseButton}
          />
          {typeof children === 'function' ? null : children}
        </Wrapper>
      )
    }

    return (
      <BottomSheetModal
        ref={ref || bottomSheetRef}
        index={0}
        handleIndicatorStyle={styles.handle}
        onDismiss={onClose}
        style={styles.bottomSheet}
        backgroundStyle={styles.background}
        enablePanDownToClose={swipeToCloseEnabled}
        snapPoints={snapPoints}
        backdropComponent={withBackDrop ? renderBackdrop : null}
        footerComponent={footerComponent}
        onChange={handleSheetChanges}
        enableDynamicSizing={enableDynamicSizing}
        {...props}>
        <BodyToRender />
      </BottomSheetModal>
    )
  }
)

export default BottomModal
