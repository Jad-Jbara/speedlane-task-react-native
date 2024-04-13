
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import CenteredLoader from '.'


afterEach(cleanup)


describe('CenteredLoader', () => {
  it('should render', () => {
    render(<CenteredLoader />)
    const children = screen.queryAllByTestId('centered-loader')
    expect(children.length).toBeGreaterThan(0)
  })

  it('should render when positionAbsolute is true', () => {
    render(<CenteredLoader positionAbsolute />)
    const children = screen.queryAllByTestId('absolute-container')
    expect(children.length).toBeGreaterThan(0)
  })
})

