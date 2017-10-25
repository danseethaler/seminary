import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { shuffle } from '../utils'

class Picker extends Component {
  constructor(props) {
    super(props)

    const { items, skipInitial } = props

    this.shuffledItems = items.slice()
    shuffle(this.shuffledItems)

    this.currentItems = this.shuffledItems.slice()
    if (skipInitial) {
      this.currentItems = this.currentItems.filter(
        item => !skipInitial.includes(item)
      )
    }
  }
  state = {
    item: 'Click to begin',
  }
  pick = () => {
    this.setState({ item: this.getNextRandomItem() })
    // console.log(this.state.item);
  }
  getNextRandomItem = () => {
    if (!this.currentItems.length) {
      this.currentItems = this.shuffledItems.slice()
    }
    return this.currentItems.shift()
  }

  getPickerProps = (props = {}) => ({
    ...props,
    onClick: this.pick,
  })

  getPickerStateAndHelpers() {
    return {
      item: this.state.item,
      getPickerProps: this.getPickerProps,
      pick: this.pick,
    }
  }

  render = () => this.props.children(this.getPickerStateAndHelpers())
}

export default Picker
