import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});



const VerificationPage = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChangeEmail = (text) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(text)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    setEmail(text);
  };

  const handleChangeVerificationCode = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "");
    setVerificationCode(filteredText);
  };

  return (
   

    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        const style={{
          width: 300,
          height: 50,
          borderColor: isValidEmail ? "blue" : "red",
          borderWidth: 1,
          borderRadius: 60,
        }}
        placeholder="Enter your email"
        value={email}
        onChangeText={handleChangeEmail}
      />

      <TextInput
        style={{
          width: 200,
          height: 50,
          borderColor: "blue",
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 100,
        }}
        placeholder="Enter verification code"
        keyboardType="numeric"
        value={verificationCode}
        onChangeText={handleChangeVerificationCode}
      />

    <Button
      title="Verify"
      style={styles.Button}
      onPress={()=>navigation.navigate('Sign up')}
      />


            {/* <TouchableOpacity style={styles.Button} onPress = {() => navigation.navigate('Sign up') }>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity> */}


    </View>


  );
};

export default VerificationPage;
