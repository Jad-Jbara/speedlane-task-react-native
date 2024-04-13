import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react-native"
import NativeButton from "."

const props = {

}

describe('LifeStyle Button ', () => {
  it('should render', () => {
    render(<NativeButton {...props} />)
  })
  it('should press', () => {
    render(<NativeButton {...props} />)
    fireEvent.press(screen.getByTestId('native-button'))
  })
})