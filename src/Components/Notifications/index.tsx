import React from 'react'
import { observer } from 'mobx-react'

import NotificationBar from './NotificationBar'

import NotificationBarStore from 'Stores/NotificationBarStore'

const Notifications: React.FC = () => {
  const hideNotification = () => {
    NotificationBarStore.hideNotification()
  }

  if (NotificationBarStore.isVisible) {
    return <NotificationBar
      hideNotification={hideNotification}
      title={NotificationBarStore.title}
      message={NotificationBarStore.message}
      type={NotificationBarStore.notificationType}
    />
  }
  return null
}

export default observer(Notifications)
