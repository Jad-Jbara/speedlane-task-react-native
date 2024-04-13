
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import Text from '.'
import { I18nManager } from 'react-native'


afterEach(cleanup)

const props = {
  style: {
    fontSize: 10,
  },
}


describe('Text', () => {
  it('should render', () => {
    render(<Text />)
    const children = screen.queryAllByTestId('text')
    expect(children.length).toBeGreaterThan(0)
  })

  it('should render with style prop', () => {
    render(<Text {...props} />)
    const children = screen.queryAllByTestId('text')
    expect(children.length).toBeGreaterThan(0)
  })

  it('should render with rtl', () => {
    I18nManager.isRTL = true
    render(<Text {...props} />)
    const children = screen.queryAllByTestId('text')
    expect(children.length).toBeGreaterThan(0)
  })
})

