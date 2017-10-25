const fs = require('fs')

const students = [
  {
    name: 'Leana Barbosa',
    ClassEnrollId: 10288199,
    Mark: 'PRSNT',
  },
  {
    name: 'Cooper Bohannan',
    ClassEnrollId: 10035540,
    Mark: 'PRSNT',
  },
  {
    name: 'Mallory Cieutat',
    ClassEnrollId: 10288082,
    Mark: 'PRSNT',
  },
  {
    name: 'Kimberly Jarvis',
    ClassEnrollId: 10035544,
    Mark: 'PRSNT',
  },
  {
    name: 'Lauren Jarvis',
    ClassEnrollId: 10035545,
    Mark: 'PRSNT',
  },
  {
    name: 'Dylan Newburn',
    ClassEnrollId: 10035547,
    Mark: 'PRSNT',
  },
  {
    name: 'Caleb Ricks',
    ClassEnrollId: 10035548,
    Mark: 'ABSNT',
  },
  {
    name: 'Emily Rudy',
    ClassEnrollId: 10035549,
    Mark: 'PRSNT',
  },
  {
    name: 'Alyssa Serre',
    ClassEnrollId: 10035551,
    Mark: 'PRSNT',
  },
  {
    name: 'Rachel Serre',
    ClassEnrollId: 10035552,
    Mark: 'PRSNT',
  },
  {
    name: 'Sarah Smith',
    ClassEnrollId: 10035553,
    Mark: 'ABSNT',
  },
  {
    name: 'Grant Stewart',
    ClassEnrollId: 10288108,
    Mark: 'PRSNT',
  },
  {
    name: 'Eliza Stewart',
    ClassEnrollId: 10288093,
    Mark: 'PRSNT',
  },
  {
    name: 'Julia Vaughan',
    ClassEnrollId: 10035556,
    Mark: 'PRSNT',
  },
  {
    name: 'Madison Vaughan',
    ClassEnrollId: 10035557,
    Mark: 'PRSNT',
  },
]

const ClassSessionId = 27670406
const postPath = __dirname + '/post.http'

let post = fs.readFileSync(postPath, 'utf8')

students.forEach((student, i) => {
  let studentPost = post
    .replace(/"Mark":"[^"]*"/g, `"Mark":"${student.Mark}"`)
    .replace(
      /"ClassEnrollId":"\d*"/g,
      `"ClassEnrollId":"${student.ClassEnrollId}"`
    )
    .replace(/"ClassSessionId":"\d*"/g, `"ClassSessionId":"${ClassSessionId}"`)
  setTimeout(function() {
    console.log('student', student)
    fs.writeFileSync(postPath, studentPost)
  }, (i + 1) * 2000)
})
