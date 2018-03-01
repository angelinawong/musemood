import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import AddMood from './musemood/components/addMoods.js';

export default class myMoods extends Component {

  state = {
    moodArray: [ {'mood': 'testmood 1'} ],
    moodText: '',
  }

  render() {

    let moods = this.state.moodArray.map((val, key) => {
      return <Mood key={key} keyval={key} val={val} deleteMethod={ ()=>this.deleteMood(key) } />
    });

    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>My Moods</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {moods}
        </ScrollView>

        <View style={styles.footer}>
            <TouchableOpacity onPress={this.addMood.bind(this)} style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>

            <TextInput style={styles.textInput}
              onChangeText={(moodText) => this.setState({moodText})} value={this.state.moodText}
              placeholder='Happy, Sad, Cheerful, etc.' placeholderTextColor='white'>
            </TextInput>

        </View>

      </View>
    );
  }

  addMood() {

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: 'E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  }
});

export default myMoods;
