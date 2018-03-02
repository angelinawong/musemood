import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class addMood extends Component {

  constructor(props) {
    super(props)
    this.state = { textdesc: 0 }
  }

    render() {
        return (
            <View key={this.props.keyval} style={styles.mood}>

                <TouchableOpacity style={styles.moodText}
                  onPress={this.onPress}>
                  <Text>{this.props.val.Mood}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.moodDelete}>
                    <Text style={styles.moodDeleteText}>Delete</Text>
                </TouchableOpacity>

                <View><Text>{this.state.textdesc}</Text></View>
            </View>
        );
    }

    onPress = () => {
      this.setState({
        textdesc: this.state.textdesc+1
      })
    }
}

const styles = StyleSheet.create({
    mood: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    moodText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    moodDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    moodDeleteText: {
        color: 'white'
    }
});
