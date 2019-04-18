import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import PostRow from './PostRow'
import IconButton from '../common/IconButton'

class ButtonRow extends Component {
  renderButtons() {
    const { buttons } = this.props
    return buttons.map(button => (
      <IconButton
        key={button.name}
        style={styles.postButton}
        iconName={button.name}
        iconSize={25}
        iconColor={button.color}
        onPress={button.onPress}
      >
        {button.text}
      </IconButton>
    ))
  }

  render() {
    return <PostRow style={styles.buttons}>{this.renderButtons()}</PostRow>
  }
}

const styles = StyleSheet.create({
  postButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

ButtonRow.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      onPress: PropTypes.func
    })
  ).isRequired
}

export default ButtonRow
