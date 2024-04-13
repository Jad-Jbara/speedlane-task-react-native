
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import List from '.'


afterEach(cleanup)


describe('List', () => {
  it('should render', () => {
    render(<List />)
    const children = screen.queryAllByTestId('List')
    expect(children.length).toBeGreaterThan(0)
  })
})

