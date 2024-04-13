import { stores } from 'Stores/StoreFactory'

import { Locale } from './Utilities'
import { NotificationType } from 'Components/Notifications/NotificationBar'
import React from 'react'

export type Stores = typeof stores

export type NotificationParams = {
  title: string
  message?: string
  type?: keyof typeof NotificationType
}

export type Employee = {
  id: number
  name: string
  email: string
  department_id: number
  phone: number
  salary: number
  position: string
  location: string
  date_of_joining: string
  date_of_birth: string
  image_url: string
  department: Department
}

export type Department = {
  id: number
  name: string
}
