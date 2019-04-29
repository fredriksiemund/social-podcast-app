import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from '../common/Icon'
import { PRIMARY_COLOR } from '../../styles/common'

class FiveStarRating extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderStarRow = () => {
    const { rating } = this.props
    let counter = rating
    const starRow = []
    for (let i = 0; i < 5; i += 1) {
      if (counter < 1) {
        counter = Math.round(counter * 2) / 2
        if (counter === 0) {
          starRow.push(<Icon key={i} name="star-outline" color={PRIMARY_COLOR} size={20} />)
          break
        }
        if (counter === 0.5) {
          starRow.push(<Icon key={i} name="star-half" color={PRIMARY_COLOR} size={20} />)
          counter -= 0.5
          break
        }
      }
      starRow.push(<Icon key={i} name="star" color={PRIMARY_COLOR} size={20} />)
      counter -= 1
    }
    return starRow
  }

  render() {
    return <View style={styles.starRow}>{this.renderStarRow()}</View>
  }
}

FiveStarRating.propTypes = {
  rating: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  starRow: {
    flexDirection: 'row'
  }
})

export default FiveStarRating
