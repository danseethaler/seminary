import React from 'react'
import Link from 'gatsby-link'
import { Button } from '../components/bits'
import './index.css'

const links = [
  {
    url: 'https://wise.ldschurch.org/Students.aspx/Index',
    name: 'WISE',
    launch: true,
  },
  {
    url:
      'https://docs.google.com/spreadsheets/d/1pjSxDGQLaWN1cUQp31PZZz3NBPskfhey1n1QN-ZkNaw/edit#gid=1481232726',
    name: 'Schedule',
    launch: false,
  },
  {
    url:
      'https://www.lds.org/manual/doctrinal-mastery-book-of-mormon-teacher-material?lang=eng',
    name: 'Doctrinal Mastery',
    launch: false,
  },
  {
    url:
      'https://www.lds.org/manual/book-of-mormon-seminary-teacher-manual-2017?lang=eng',
    name: 'BoM Manual',
    launch: true,
  },
]

export default () => (
  <div>
        <h3 style={{ marginTop: 30, borderBottom: '1px solid #ddd' }}>Links</h3>
        <ul>
      {links.map(link => (
        <li key={link.url}>
          <a target="_blank" className="app-link-regular" href={link.url}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>

    <Button
      border
      primary
      mini
      onClick={() => {
        links.map(link => (link.launch ? window.open(link.url) : null))
      }}
    >
      Launch
    </Button>
  </div>
)
