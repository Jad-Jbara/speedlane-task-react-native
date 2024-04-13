
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react-native'
import RefreshControl from '.'
import { RefreshControlProps } from 'react-native'


afterEach(cleanup)

const props: RefreshControlProps = {
  refreshing: false,
}

describe('RefreshControl', () => {
  it('should render', () => {
    render(<RefreshControl {...props} />)
    const children = screen.queryAllByTestId('refresh-control')
    expect(children.length).toBeGreaterThan(0)
  })
})

