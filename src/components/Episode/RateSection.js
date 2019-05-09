import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { numberToString } from '../../../assets/functions'
import { Text } from '../common'
import StarRating from './StarRating'
import Rate from './Rate'

const RateSection = ({ rating, onRateStarPress }) => (
  <View style={{ flexDirection: 'row' }}>
    <View style={styles.rating}>
      <Text style={styles.totalRating}>{rating.totalRating}</Text>
      <View style={styles.starContainer}>
        <StarRating rating={rating.totalRating} />
        <Text>{`${numberToString(rating.nbrOfRatings)} ratings`}</Text>
      </View>
    </View>
    <View style={styles.rate}>
      <Text style={styles.descriptionText}>Rate:</Text>
      <Rate size={30} userRating={rating.userRating} onRateStarPress={onRateStarPress} />
    </View>
  </View>
)

RateSection.propTypes = {
  rating: PropTypes.shape({
    totalRating: PropTypes.number.isRequired,
    nbrOfRatings: PropTypes.number.isRequired,
    userRating: PropTypes.number
  }).isRequired,
  onRateStarPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  totalRating: {
    fontSize: 25,
    fontWeight: '300',
    marginRight: 6
  },
  starContainer: {
    alignItems: 'center'
  },
  rate: {
    flex: 1,
    paddingHorizontal: 10,
    marginLeft: 3
  },
  descriptionText: {
    fontWeight: '700',
    fontSize: 16
  }
})

export default RateSection
