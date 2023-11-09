import { useState,  } from 'react';
import { View, ScrollView, Text, TextInput, Image, Pressable, StyleSheet, Alert } from 'react-native';

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleClick = () => {
    setIsAlertVisible(true);
  };

  return(
    <ScrollView style={styles.container}>
      <Image 
        style={styles.img}
        source={require('./imgComponent/little.png')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel='little lemon logo'
      />

      <TextInput 
        style={styles.Text}
        value={email}
        onChangeText={onChangeEmail}
        placeholder='Email Address'
        keyboardType='email-address'
      />

      <Pressable
        title="Show Alert"
        style={styles.button}
        onPress={handleClick}
      >
        <Text style={styles.buttonText}> Subscribe </Text>
      </Pressable>

      {isAlertVisible && (
        <Alert
          title="My Alert"
          message="Thanks for subscribing, stay tuned."
          onPress={() => setIsAlertVisible(false)}
        />  
      )}
    </ScrollView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  button: {
    height: 40,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#495E57',
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  Text: {
    height: 50, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderRadius: 15,
    borderColor: '#333333', 
    backgroundColor: 'white', 
  },
});
