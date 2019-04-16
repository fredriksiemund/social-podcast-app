import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { BACKGROUND } from '../../styles/common'
import TextPost from '../../components/Post/TextPost'
import PodPost from '../../components/Post/PodPost'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderItem = ({ item }) => {
    const { id, type, ...otherProps } = item
    let jsx
    switch (type) {
      case 'text-post':
        jsx = <TextPost {...otherProps} />
        break
      case 'pod-post':
        jsx = <PodPost {...otherProps} />
        break
      default:
        break
    }
    return jsx
  }

  render() {
    const { feed } = this.props
    return (
      <View style={styles.screenContainer}>
        <FlatList
          data={feed}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: BACKGROUND,
    paddingHorizontal: 10
  }
})

const mapStateToProps = state => ({
  feed: state.feed
})

export default connect(
  mapStateToProps,
  null
)(Feed)
