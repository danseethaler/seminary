import React from 'react'
import Link from 'gatsby-link'
import { DateDiv } from '../components/bits'
import { dates, assignments, roster } from '../data'

import { mapOb } from '@danseethaler/ut'
// import divvyUp from 'divvy-up';

// const schedule = divvyUp(dates, assignments, roster);
import schedule from '../data/schedule'

const DevotionalPage = () => {
  const datesRender = mapOb(schedule, date => (
    <DateDiv key={date.date} {...date} />
  ))

  return (
    <div>
      <h1>Devotional Schedule</h1>
      {datesRender}
    </div>
  )
}

export default DevotionalPage
