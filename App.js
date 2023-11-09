import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/header';
import LittleLemonFooter from './components/footer';
import WelcomeScreen from './components/Welcome';
import LoginScreen from './components/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuItems from './components/menuItems';
import Welcome from './components/Welcome';
import WelcomePage from './components/welcomePage';
import Feedback from './components/feedback';
import WelcomeScr from './components/ScreenWelcome';
import SubscribeScreen from './components/Subscribe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        
          
          <Stack.Navigator initialRouteName="WelcomeScr">
          {/* <Stack.Screen name="subscribe" component={SubscribeScreen} /> */}
            <Stack.Screen name="Welcome" component={WelcomeScr} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={MenuItems} />
            
          </Stack.Navigator>
   
       
      </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
