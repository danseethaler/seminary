import moment from 'moment'
import { mapOb } from '@danseethaler/ut'
import schedule from '../data/schedule'

const today = moment().format('YYYY-MM-DD')

function setupSchedule(config, date) {

  if (date.date > today && !config.next) {
    date.id = 'next'
    config.next = date
  }

  if (date.date === today) {
    date.id = 'today'
    config.today = date
  }

  config.dates.push(date)

  return config
}

export default schedule.reduce(setupSchedule, {
  today: null,
  next: null,
  dates: [],
})

export function removeOldDates(date) {
  return date.date >= moment().format('YYYY-MM-DD')
}
