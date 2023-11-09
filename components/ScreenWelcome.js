import react from "react";
import {View, ScrollView, Text, Pressable, Image, StyleSheet} from 'react-native';

const WelcomeScr = ({ navigation }) => {
    // Add welcome screen code here.
    return (
     <ScrollView>
      <Image 
        style={styles.img} 
        source={require('./imgComponent/lemon.png')}
        resizeMode= 'contain' 
        accessible={true} 
        accessibilityLabel={'little lemon logo'}   />
      <Text style={styles.regularText}>
          Little Lemon , your local Mediterranean Bistro
      </Text>
      <Pressable 
      style={styles.button}
      onPress = {() => {
          navigation.navigate('Login')
      }}>
          <Text style={styles.buttonText}>
            Newsletter
          </Text>
      </Pressable>
  
      
    </ScrollView>
  )};
  
  export default WelcomeScr;
  
  const styles = StyleSheet.create({

    img :{
        height: 400,
        width: 300,
        alignContent: 'center',
        alignSelf: 'center',
        
    },
    regularText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    button : {
        height: 40,
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: '#495E57',
        borderRadius: 15,
    },
    buttonText : {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    }
  })