import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'

class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>My Moods</Text>
      <Text style={styles.textStyle}>Discover Music</Text>
      <Text style={styles.textStyle}>Add Songs</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 12,
  }
})

export default header;
