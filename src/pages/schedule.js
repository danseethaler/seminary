import React, { Component } from 'react'
import Link from 'gatsby-link'
import { FadeIn } from '../components/bits'
import schedule, { removeOldDates } from '../services/schedule'
import './index.css'

const LessonSummary = props => {
  return (
    <div
      id={props.id}
      style={{
        // opacity: props.id === 'today' ? 1 : 0.7,
      }}
    >
      <h5 style={{ marginBottom: 5 }}>{props.date} - {props.teacher}</h5>
      <LessonLink lesson={props.lesson} />
      <DevotionalSummary assignments={props.devotional} />
      <hr />
    </div>
  )
}

const LessonLink = ({ lesson }) => {
  if (!lesson) return null

  return <a className="app-link-regular" target="_blank" href={lesson.url}>{lesson.title}</a>
}

const DevotionalSummary = ({ assignments }) => {
  if (!assignments) return null

  return assignments.map(assignment => (
    <span style={{ display: 'block' }} key={assignment.name}>
      {assignment.name}: {assignment.assignee}
    </span>
  ))
}

export default class Schedule extends Component {
  render() {
    const datesRender = schedule.dates
      .filter(removeOldDates)
      .map(date => <LessonSummary key={date.date} {...date} />)

    return (
      <div>
        <h3 style={{ marginTop: 30, borderBottom: '1px solid #ddd' }}>
          Schedule
        </h3>
        <div>{datesRender}</div>
      </div>
    )
  }
}
