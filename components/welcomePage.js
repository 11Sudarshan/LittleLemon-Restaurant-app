import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, useColorScheme } from "react-native";

const WelcomePage = () => {

  const colorScheme = useColorScheme();

    return(
        <ScrollView style={[styles.container,
        colorScheme === 'light'
        ? {backgroundColor: '#fff'}
        :{backgroundColor: '#333333'}
        ]}>
 
            <Image 
            resizeMode="contain"
            style={styles.logo}
            source={require('./imgComponent/lemon.png')}
            accessible={true}
            accessibilityLabel={'little lemon logo'} />
            <Text style={styles.title}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Text style={styles.title}> color Scheme: {colorScheme}</Text>
            <Image 
            style={styles.image}
            source={require('./imgComponent/pic1.png')}
            resizeMode='contain'
            accessible={true}
            accessibilityLabel={'pic 1'} />
            <Image 
            style={styles.image}
            source={require('./imgComponent/pic2.png')}
            resizeMode='cover'
            accessible={true}
            accessibilityLabel={'pic 2'} />
            <Image 
            style={styles.image}
            source={require('./imgComponent/pic3.png')}
            resizeMode='contain'
            accessible={true}
            accessibilityLabel={'pic 3'} />
            <Image 
            style={styles.image}
            source={require('./imgComponent/pic4.png')}
            resizeMode='contain'
            accessible={true}
            accessibilityLabel={'pic 4'} />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 300,
    },
    image: {
      width: 350,
      height: 250,
      borderRadius: 10,
      borderColor: 'black',
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff',
    },
  
    title: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#333333',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  

export default WelcomePage;