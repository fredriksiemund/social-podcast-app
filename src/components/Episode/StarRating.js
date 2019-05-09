import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from '../common'
import { COLOR1 } from '../../styles/common'

class StarRating extends Component {
  renderStarRow = () => {
    const { rating, color } = this.props
    let counter = rating
    const starRow = []
    for (let i = 0; i < 5; i += 1) {
      if (counter < 1) {
        counter = Math.round(counter * 2) / 2
        if (counter === 0) {
          starRow.push(<Icon key={i} name="star-outline" color={color} size={20} />)
          break
        }
        if (counter === 0.5) {
          starRow.push(<Icon key={i} name="star-half" color={color} size={20} />)
          counter -= 0.5
          break
        }
      }
      starRow.push(<Icon key={i} name="star" color={color} size={20} />)
      counter -= 1
    }
    return starRow
  }

  render() {
    return <View style={styles.starRow}>{this.renderStarRow()}</View>
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  color: PropTypes.string
}

StarRating.defaultProps = {
  color: COLOR1
}

const styles = StyleSheet.create({
  starRow: {
    flexDirection: 'row'
  }
})

export default StarRating
