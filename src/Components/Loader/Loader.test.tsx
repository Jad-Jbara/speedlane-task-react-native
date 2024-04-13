
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import Loader from '.'


afterEach(cleanup)


describe('Loader', () => {
  it('should render', () => {
    render(<Loader />)
    const children = screen.queryAllByTestId('loader')
    expect(children.length).toBeGreaterThan(0)
  })
})

