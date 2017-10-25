import React from 'react'
import Picker from '../components/picker'
import { Button } from '../components/bits'
import { roster } from '../config'
import schedule from '../services/schedule'

export default () => {
  let skipItems

  if (schedule.today) {
    skipItems = schedule.today.devotional.reduce((skips, assignment) => {
      skips.push(assignment.assignee)
      return skips
    }, [])
  }
  return (
    <Picker items={roster} skipInitial={skipItems}>
      {({ item, getPickerProps }) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '2em',
              margin: 30,
              fontWeight: 300,
            }}
          >
            {item}
          </h3>
          <Button noshadow primary {...getPickerProps()}>
            Pick a Student
          </Button>
        </div>
      )}
    </Picker>
  )
}
