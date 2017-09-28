import React from 'react'
import Link from 'gatsby-link'
import { links } from '../data'

export default () => (
  <div>
    <h1>Links</h1>
    <ul>
      {links.map(link => (
        <li key={link.url}>
          <a target="_blank" href={link.url}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)
