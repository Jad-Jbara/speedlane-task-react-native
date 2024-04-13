import React, { PropsWithChildren } from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

type Props = PropsWithChildren

const BottomSheetProvider: React.FC<Props> = ({
  children,
}) => {
  return (
    <BottomSheetModalProvider>
      {children}
    </BottomSheetModalProvider>
  )
}

export default BottomSheetProvider 
