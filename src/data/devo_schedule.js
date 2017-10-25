const divvyUp = require('divvy-up')
const { mapOb } = require('@danseethaler/ut')
const { roster } = require('../config')
const schedule = require('./schedule_draft')

const assignments = ['Opening Prayer', 'Spiritual Thought', 'Closing Prayer']

let schedge = divvyUp(
  schedule.map(date => date.date).filter(date => date >= '2017-09-25'),
  assignments,
  roster
)

module.exports = mapOb(schedge, date => date)
