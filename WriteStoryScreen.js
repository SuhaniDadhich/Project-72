import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import React from 'react';
import db from '../config'
import firebase from 'firebase'

 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);

        submitStory = ()=>{
            console.log(db.collection("stories"))
              db.collection("stories").add({
                  title: this.state.title,
                  author: this.state.author,
                  storyText: this.state.storyText,
                  
              })
              this.setState({
                  title: '',
                  author: '',
                  storyText: ''
              })
              ToastAndroid.show('Your story has been sumitted', ToastAndroid.SHORT)
          }
       
          
render(){
    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

        
        <View style={styles.container}>

<Header 
 backgroundColor = {'pink'}
centerComponent = {{text : 'Story Hub',
   style : { color: 'black', fontSize: 30} }}/>

   
<TextInput 
placeholder="Story Title"
onChangeText= {(text)=>{
this.setState({
 title: text}) }}
value={this.state.title}
style={styles.title}
 placeholderTextColor='black'/>


 <TextInput
 placeholder="Author"
onChangeText= {(text)=>{
this.setState({ author: text})}}
placeholderTextColor='black'
value={this.state.author}
 style={styles.author} />


 <TextInput 
placeholder="Write your story"
 onChangeText= {(text)=>{
this.setState({storyText: text})}}
 placeholderTextColor='black'
value={this.state.storyText}
 style={styles.storyText}
multiline={true}/>
                
<TouchableOpacity
    style={styles.submitButton}
    onPress={this.submitStory}>
      
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
         
            </View>
            </KeyboardAvoidingView>
        );
    }
}}





const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor:'#ff4538'},

  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  }
});