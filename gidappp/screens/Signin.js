import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

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

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('/home/joseph/Desktop/gigstar/gidappp/assets/logo-black - Copy.png')} style={styles.image} />
      <Text style={styles.text}>Gigstar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Button
      title="Login"
      style={styles.Button}
      onPress={()=>{

      }}
      />

      
    </View>
  );
};

export default Signin;
