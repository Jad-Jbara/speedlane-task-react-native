import { NotificationType } from 'Components/Notifications/NotificationBar'
import { makeAutoObservable } from 'mobx'
import type { NotificationParams } from 'Types'

class NotificationBarStore {
  message = ''
  title = ''
  isVisible = false
  messagesBadge = 0
  notificationType: keyof typeof NotificationType = 'disconnected'

  constructor() {
    makeAutoObservable(this)
  }

  setMessagesBadge(value: number) {
    this.messagesBadge = value
  }

  showNotification(notification: NotificationParams) {
    this.title = notification.title
    this.message = notification.message || ''
    this.isVisible = true
    this.notificationType = notification.type || 'disconnected'
  }

  hideNotification() {
    this.isVisible = false
    this.title = ''
    this.message = ''
  }

  warning(title = '') {
    this.showNotification({
      title,
      type: 'warning',
    })
  }

  error(title = '') {
    this.showNotification({
      title,
      type: 'error',
    })
  }

  success(title = '') {
    this.showNotification({
      title,
      type: 'success',
    })
  }


  get hasMessages() {
    return this.messagesBadge > 0
  }
}

export default new NotificationBarStore()
