import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from '../common'
import { COLOR1, COLOR2 } from '../../styles/common'

class Rate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderStarRow = () => {
    const { size, userRating, onRateStarPress } = this.props
    const starRow = []
    let counter = 0
    if (userRating) counter = userRating
    for (let i = 0; i < 5; i += 1) {
      starRow.push(
        <TouchableOpacity key={i} onPress={() => onRateStarPress(i + 1)}>
          <Icon
            name={counter > 0 ? 'star' : 'star-outline'}
            size={size}
            color={counter > 0 ? COLOR2 : COLOR1}
          />
        </TouchableOpacity>
      )
      counter -= 1
    }
    return starRow
  }

  render() {
    return <View style={styles.starRow}>{this.renderStarRow()}</View>
  }
}

Rate.propTypes = {
  size: PropTypes.number.isRequired,
  onRateStarPress: PropTypes.func.isRequired,
  userRating: PropTypes.number
}

Rate.defaultProps = {
  userRating: null
}

const styles = StyleSheet.create({
  starRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Rate
