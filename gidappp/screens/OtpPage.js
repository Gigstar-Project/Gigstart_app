
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const OtpPage = ({navigation}) => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    
    if (code === '1234') {

      
      alert('Your OTP is been verified');
      navigation.navigate('Sign up')


    } else {
     
      alert('Wrong code. Try Again');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your verification code"
        value={code}
        onChangeText={(text) => setCode(text)}
      />
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});

export default OtpPage;

