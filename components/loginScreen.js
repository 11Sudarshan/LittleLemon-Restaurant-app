import { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet, Pressable, View  } from "react-native";

export default function LoginScreen ({ navigation }){
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [login , setLogin] = useState(false);


    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
          {login && (
            <Text style={styles.regularText}>You're are successfully logged-in!</Text>
          )}
            {!login && (
                <View>
             <Text style={styles.regularText}>Login to Continue</Text>
            <TextInput 
            value={email}
            onChangeText={onChangeEmail}
            placeholder='Email Address'
            keyboardType= 'email-address'
            style={styles.email}
            />
             <TextInput 
             secureTextEntry={true}
             placeholder= 'Password'
            value={password}
            onChangeText={onChangePassword}
            style={styles.password}
            /> 

            <Pressable 
            style={styles.button}
            onPress={()=>{
               navigation.navigate('Menu')

            }}>
                <Text style={styles.buttonText}>login</Text>
            </Pressable>
            </View>
)}

        </ScrollView>


    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText:{
        padding: 40,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    regularText:{
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: 'white',
        textAlign: 'center',
    },
    email:{
        height: 50, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderRadius: 15,
        borderColor: '#333333', 
        backgroundColor: 'white', 
    },
    password:{
        height: 50, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: '#333333', 
        backgroundColor: 'white', 
        borderRadius: 15,
    },
    button: {
        fontSize: 25,
        padding: 5,
        marginVertical: 8,
        margin: 40,
        backgroundColor: 'white',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 20,
        
      },
      buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 32,
      },


})