import React from 'react'
import { Text } from 'react-native'
import { render, screen, cleanup, fireEvent } from '@testing-library/react-native'
import Button from '.'

const CUSTOM_LABEL = 'Hello'

const Label = () => {
  return (
    <Text testID='custom-label'>{CUSTOM_LABEL}</Text>
  )
}

afterEach(cleanup)


describe('Button', () => {
  it('should render', () => {
    render(<Button />)
    const children = screen.queryAllByTestId('button')
    expect(children.length).toBeGreaterThan(0)
  })

  it('should render text', () => {
    render(<Button text='test' />)
    const text = screen.queryAllByTestId('button-label')
    const renderedText = screen.queryAllByText('test')
    const falseValue = screen.queryAllByText('not found text')
    // Check if Text component is rendered
    expect(text.length).toBeGreaterThan(0)
    // Check if the value of text 'test' is equal to test
    expect(renderedText[0].children[0]).toBe('test')
    // Assert with a different text value
    expect(falseValue.length).toBe(0)
  })

  it('should render loader', () => {
    render(<Button text='test' loading loaderColor={'red'} />)
    const text = screen.queryAllByTestId('button-label')
    const loader = screen.queryAllByTestId('button-loader')
    // Check if Text component is not rendered
    expect(text.length).toBe(0)
    // Check if Loader component is rendered
    expect(loader.length).toBeGreaterThan(0)
  })

  it('should render custom children', () => {
    render(
      <Button>
        <Label />
      </Button>
    )
    const label = screen.queryAllByTestId('custom-label')
    const labelText = screen.queryAllByText(CUSTOM_LABEL)
    // Check if Text component is not rendered
    expect(label.length).toBeGreaterThan(0)
    // Check if string matches label
    expect(labelText[0].children[0]).toBe(CUSTOM_LABEL)
  })

  it('should render custom TextChildren', () => {
    render(
      <Button TextChildren={<Label />} />
    )
    const label = screen.queryAllByTestId('custom-label')
    const labelText = screen.queryAllByText(CUSTOM_LABEL)
    // Check if Text component is not rendered
    expect(label.length).toBeGreaterThan(0)
    // Check if Loader component is rendered
    expect(labelText[0].children[0]).toBe(CUSTOM_LABEL)
  })

  describe('When onPress is fired', () => {
    it('should not trigger', () => {
      const onPress = jest.fn()
      render(<Button disabled loading onPress={onPress} />)

      fireEvent(screen.getByTestId('button'), 'onPress')
      expect(onPress).toHaveBeenCalledTimes(0)
    })

    it('should trigger onPress', () => {
      const onPress = jest.fn()
      render(<Button onPress={onPress} />)

      fireEvent(screen.getByTestId('button'), 'onPress')
      expect(onPress).toHaveBeenCalledTimes(1)
    })
  })
})
