import React, { useRef } from 'react'
import { TextInput, View } from 'react-native'

import SearchIcon from 'Assets/Icons/SearchIcon'

import Input from 'Components/Input'

import styles from './styles'

type Props = {
  onClear?: () => void
} & React.ComponentProps<typeof Input>

const SearchInput: React.FC<Props> = ({
  onClear,
  ...props
}) => {
  const innerInput = useRef<TextInput>(null)

  return (
    <View style={styles.inputContainer}>
      <Input
        ref={innerInput}
        returnKeyType='search'
        autoFocus
        LeftAccessory={() => (
          <SearchIcon />
        )}
        {...props}
        style={[styles.input, props.style]}
        inputWrapperStyle={[styles.inputWrapper, props.inputWrapperStyle]}
      />
    </View>
  )
}

export default SearchInput
