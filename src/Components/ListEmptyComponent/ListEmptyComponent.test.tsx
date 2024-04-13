
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import ListEmptyComponent from '.'


afterEach(cleanup)


describe('ListEmptyComponent', () => {
  it('should render', () => {
    render(<ListEmptyComponent />)
    const children = screen.queryAllByTestId('list-empty-component')
    expect(children.length).toBeGreaterThan(0)
  })
})

