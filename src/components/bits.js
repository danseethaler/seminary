;('use strict')

import React from 'react'
import { render } from 'react-dom'
import glamorous from 'glamorous'
import { bind } from 'styled-props'

import { color } from '../config'

const size = {
  mini: '1px 12px',
  small: '5px 20px',
  medium: '8px 20px',
  big: '20px 40px',
}

const styles = bind({ color, size })

const Button = glamorous.button(
  {
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    fontFamily: 'Lato, sans-serif',
    borderRadius: 4,
    color: '#fff',
    ':hover': {
      opacity: 0.7,
      transform: 'translateY(-1px)',
    },
    ':focus': { outline: 0 },
    ':active': {
      transform: 'translateY(1px)',
    },
  },
  ({ noshadow, ...props }) => ({
    boxShadow: noshadow
      ? 'none'
      : '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    backgroundColor: styles.color(props),
    padding: styles.size(props),
    ':hover': {
      boxShadow: noshadow
        ? 'none'
        : '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
    },
  }),
  props => {
    if (props.border) {
      return {
        backgroundColor: 'white',
        border: `2px solid ${styles.color(props)}`,
        color: styles.color(props),
      }
    }
  },
)

Button.defaultProps = {
  size: 'small',
}

const DateDiv = props => (
  <div>
    <h5>{props.date}</h5>
    {props.assignments.map(assignment => (
      <span style={{ display: 'block' }} key={assignment.name}>
        {assignment.name}: {assignment.assignee}
      </span>
    ))}
    <hr />
  </div>
)

export { Button, DateDiv }
