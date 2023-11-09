import React, { useState } from 'react'; 
import { ScrollView, StyleSheet, Text, TextInput, Platform, KeyboardAvoidingView} from 'react-native'; 

const Feedback = () => { 
  // declare the variables 
  const [firstName, onChangeFirstName] = useState(''); 
  const [lastName, onChangeLastName] = useState(''); 
  const [message, onChangeMessage] = useState(''); 
  const [phoneNumber, onChangePhoneNumber] = useState(''); 

  return ( 
    <KeyboardAvoidingView style={styles.container}
    behavior= {Platform.OS === 'android'? 'padding': 'height'} >
    <ScrollView keyboardDismissMode='on-drag'> 

        <Text style={styles.headingSection}> 
          <Text>
            How was your visit to Little Lemon? 
          </Text>
        </Text> 
       
        <Text style={styles.infoSection}> 
          <Text>
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. We would love 
            to hear your experience with us!
          </Text>
        </Text> 
        <TextInput 
          style={styles.input} 
          value={firstName} 
          onChangeText={onChangeFirstName} 
          placeholder='First Name'
        /> 
        <TextInput 
          style={styles.input} 
          value={lastName} 
          onChangeText={onChangeLastName} 
          placeholder='Last Name'
        /> 
        <TextInput 
          style={styles.input} 
          value={phoneNumber} 
          keyboardType='numeric'
          onChangeText={onChangePhoneNumber} 
          placeholder= 'Phone Number'
        /> 
        <TextInput 
          style={styles.messageInput} 
          value={message} 
          onChangeText={onChangeMessage} 
          placeholder= 'leave a feedback'
          multiline={true}
          maxLength={250}
        /> 

    </ScrollView> 
    </KeyboardAvoidingView>
  ); 
}; 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
  }, 
  input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: '#EDEFEE', 
    backgroundColor: '#F4CE14', 
  }, 
  messageInput: { 
    height: 100, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    backgroundColor: '#F4CE14', 
  }, 
  infoSection: { 
    fontSize: 24, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center', 
    backgroundColor: '#495E57', 
  }, 
  headingSection: { 
    fontSize: 28, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center', 
    backgroundColor: '#495E57', 
  }, 
}); 

export default Feedback; 
