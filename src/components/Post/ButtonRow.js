import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostRow from './PostRow'
import IconButton from '../common/IconButton'

class ButtonRow extends Component {
  renderButtons() {
    const { buttons } = this.props
    return buttons.map(button => (
      <IconButton
        key={button.name}
        iconName={button.name}
        iconSize={button.size || 25}
        iconColor={button.color}
        onPress={button.onPress}
      >
        {button.text}
      </IconButton>
    ))
  }

  render() {
    return <PostRow>{this.renderButtons()}</PostRow>
  }
}

ButtonRow.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      size: PropTypes.number,
      onPress: PropTypes.func
    })
  ).isRequired
}

export default ButtonRow
