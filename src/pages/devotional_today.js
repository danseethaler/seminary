import React from 'react'
import schedule from '../data/schedule'
import { mapOb } from '@danseethaler/ut'
import { DateDiv } from '../components/bits'

export default class DevotionalToday extends React.Component {
  getTodaysData() {
    let todaysKey, nextDaysKey
    let date = new Date()
    let dateString = `${date.getMonth() +
      1}/${date.getDate()}/${date.getFullYear()}`

    mapOb(schedule, function(item, key) {
      if (todaysKey && !nextDaysKey) {
        nextDaysKey = key
      }
      if (dateString === key) {
        todaysKey = key
      }
    })

    return {
      today: schedule[todaysKey] || null,
      nextDay: schedule[nextDaysKey] || null,
    }
  }

  render() {
    let today, nextDay
    var devotional = this.getTodaysData()

    if (devotional.today) {
      today = (
        <div key={devotional.today.date}>
          <h4>Today</h4>
          <DateDiv {...devotional.today} />
        </div>
      )
    }

    if (devotional.nextDay) {
      nextDay = (
        <div key={devotional.nextDay.date}>
          <h4>Next Devotional</h4>
          <DateDiv {...devotional.nextDay} />
        </div>
      )
    }

    return <div>{[today, nextDay]}</div>
  }
}
