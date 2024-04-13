import { format, parse } from 'date-fns'

const getTimeFromHours = (hours: string, dayToUse = 0) => {
  const [hour, minute] = hours.split(':')
  const date = new Date()
  date.setDate(date.getDate() + dayToUse)
  date.setHours(parseInt(hour), parseInt(minute), 0, 0)
  return date
}

const formatTimeInHours = (date?: string) => {
  if (!date) {
    return null
  }

  const formattedDate = format(new Date(getTimeFromHours(date)), 'hh:mm a')

  return formattedDate
}

const formatTimerFromSeconds = (timer: number) => {
  const date = new Date(timer * 1000)
  return format(date, 'mm:ss')
}

export { getTimeFromHours, formatTimeInHours, formatTimerFromSeconds }
