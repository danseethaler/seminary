const schedule = require('./schedule_draft')
const moment = require('moment')
const fs = require('fs')
const devoSchedule = require('./devo_schedule')
const lessons = require('./lessons')

const weeks = []
const teachers = ['Jesse', 'Dan']
const toggleWeeks = [2, 14]
const subs = [
  {
    date: '2017-10-24',
    teacher: 'Dan',
  },
  {
    date: '2017-10-25',
    teacher: 'Dan',
  },
]

const newSchedule = schedule
  .filter(lesson => lesson.date >= '2017-09-25')
  .map(lesson => {
    // Set the week index
    let dateWeekYear = `${moment(lesson.date).week()}_${moment(
      lesson.date
    ).year()}`
    if (!weeks.includes(dateWeekYear)) {
      weeks.push(dateWeekYear)

      // Switch the order of teachers
      teachers.reverse()

      if (toggleWeeks.includes(weeks.length)) {
        teachers.reverse()
      }
    }
    lesson.week = weeks.length

    // Set the teacher
    lesson.teacher = teachers[0]

    let sub = subs.find(sub => sub.date === lesson.date)
    if (sub) lesson.teacher = sub.teacher

    // Set the lesson info if we have it
    if (lesson.type === 'flex') {
      lesson.lesson = {
        title: 'Flexible Day',
        url:
          'https://www.lds.org/manual/book-of-mormon-seminary-teacher-manual-2017/appendix/suggestions-for-flexible-days.p1?lang=eng',
      }
    } else if (lesson.type === 'doctrinal_mastery') {
      lesson.lesson = {
        title: 'Doctrinal Mastery',
        url:
          'https://www.lds.org/manual/doctrinal-mastery-book-of-mormon-teacher-material?lang=eng',
      }
    } else {
      lesson.lesson = lessons.find(baseLesson => {
        return baseLesson.lesson === 'Lesson ' + lesson.lesson_id
      })
    }

    // Set the devotional info
    lesson.devotional = devoSchedule.find(devo => {
      return devo.date === lesson.date
    }).assignments

    delete lesson.week_teacher

    return lesson
  })

const counter = {
  Jesse: 0,
  Dan: 0,
}

newSchedule.forEach(date => {
  counter[date.teacher]++
})
console.log('counter', counter)

fs.writeFileSync(
  __dirname + '/schedule.js',
  'module.exports = ' + JSON.stringify(newSchedule, null, 2)
)

module.exports = newSchedule
