import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
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
        style={styles.iconButton}
      >
        {button.text}
      </IconButton>
    ))
  }

  render() {
    return <View style={styles.buttonRow}>{this.renderButtons()}</View>
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

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row'
  },
  iconButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ButtonRow
