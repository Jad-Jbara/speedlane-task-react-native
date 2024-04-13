
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import Input from '.'


afterEach(cleanup)


describe('Input', () => {
  it('should render', () => {
    render(<Input />)
    const children = screen.queryAllByTestId('Input')
    expect(children.length).toBeGreaterThan(0)
  })
})

