
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import KeyboardAvoidingBase from '.'


afterEach(cleanup)


describe('KeyboardAvoidingBase', () => {
  it('should render', () => {
    render(<KeyboardAvoidingBase />)
    const children = screen.queryAllByTestId('keyboard-avoiding-base')
    expect(children.length).toBeGreaterThan(0)
  })
})

