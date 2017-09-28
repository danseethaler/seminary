import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Picker extends Component {
    state = {
        item: 'Click to begin'
    };
    pick = () => {
        this.setState({ item: this.getRandomItem() });
    };
    getRandomItem = () =>
        this.props.items[Math.floor(Math.random() * this.props.items.length)];

    getPickerProps = (props = {}) => ({
        ...props,
        onClick: this.pick
    });

    getPickerStateAndHelpers() {
        return {
            item: this.state.item,
            getPickerProps: this.getPickerProps,
            pick: this.pick
        };
    }

    render = () => this.props.children(this.getPickerStateAndHelpers());
}

export default Picker;
