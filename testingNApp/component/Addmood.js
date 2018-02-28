import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class addMood extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.mood}>
                <Text style={styles.moodText}>{this.props.val.Mood}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.moodDelete}>
                    <Text style={styles.moodDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
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