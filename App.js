import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import addMood from './components/addMood.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            moodArray: [],
            moodText: '',
        };
    }
    render() {
        let moods = this.state.moodArray.map((val, key)=>{
            return <Addmood key={key} keyval={key} val={val}
                         deleteMethod={()=>this.deleteMood(key)}/>
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Mood</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {moods}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='How are you feeling?'
                        onChangeText={(moodText)=> this.setState({moodText})}
                        value={this.state.moodText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={ this.addMood.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addMood(){
        if(this.state.moodText){
            var d = new Date();
            this.state.moodArray.push({
                'Mood': this.state.moodText
            });
            this.setState({ moodArray: this.state.moodArray });
            this.setState({moodText:''});
        }
    }

    deleteMood(key){
        this.state.moodArray.splice(key, 1);
        this.setState({moodArray: this.state.moodArray});
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#FF601B',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#FF601B',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#1BBCFF',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});
