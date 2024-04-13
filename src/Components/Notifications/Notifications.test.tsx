
import React from 'react'
import { render, screen, cleanup, waitFor } from '@testing-library/react-native'
import Notifications from '.'
import NotificationBarStore from 'Stores/NotificationBarStore'

afterEach(() => {
  cleanup()
  NotificationBarStore.hideNotification()
  NotificationBarStore.setMessagesBadge(0)
})


describe('Notifications', () => {
  it('should render notification', async () => {
    const spy = jest.spyOn(NotificationBarStore, 'showNotification')
    const spyOnHideNotification = jest.spyOn(NotificationBarStore, 'hideNotification')
    const notification = {
      message: 'message',
      title: 'title',
    }

    render(<Notifications />)


    await waitFor(() => {
      NotificationBarStore.showNotification(notification)
      expect(screen.getByText('message').children.length).toBeGreaterThan(0)
    })
    expect(spy).toHaveBeenCalled()
    expect(spyOnHideNotification).toHaveBeenCalled()
  })
})
