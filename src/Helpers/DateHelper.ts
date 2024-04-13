import { addMinutes, format } from 'date-fns'

export const formatDateAsWeekdayAndHour = (input?: string) => {
  if (!input) {
    return null
  }
  const date = new Date(input)
  // Adjusting for local timezone before formatting
  const formattedDate = format(addMinutes(date, date.getTimezoneOffset()), 'eeee HH:mm a')
  return formattedDate
}