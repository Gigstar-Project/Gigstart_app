
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity

} from 'react-native';

import { useState } from 'react';

export default function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [errors, setErrors] = useState({});

  const validatForm = () => {
    let errors = {}

    if (!firstName) errors.firstName = "first name is required"
    if (!lastName) errors.lastName = "last name is required"
    if (!username) errors.username = "username is required"
    if (!password) errors.password = "password is required"

    setErrors(errors)
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () =>{
    if(validatForm()){
      alert("Submitted",firstName, lastName, username, password);

      setfirstName("");
      setlastName("");
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" 
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        {/* <Image style={styles.picture} source={require("./assets/logo-black.copy.png")} /> */}
        
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input}
          placeholder='enter your first name'
          value={firstName} onChangeText={setfirstName} />
          {
            errors.firstName ? <Text style = { styles.errorText }>{errors.firstName}</Text> : null
          }

            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input}
              placeholder='enter your Last Name'
              value={lastName} onChangeText={setlastName} />
            {
              errors.lastName ? <Text style = { styles.errorText }>{errors.lastName}</Text> : null
            }

            <Text style={styles.label}>User Name</Text>
            <TextInput style={styles.input}
              placeholder='enter your User Name'
              value={username} onChangeText={setUsername} />
            {
              errors.username ? <Text style = { styles.errorText }>{errors.username}</Text> : null
            }

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input}
          placeholder='enter your password'
          secureTextEntry value={password}
          onChangeText={setPassword} />

{
            errors.password ? <Text style = { styles.errorText }>{errors.password}</Text> : null
          }

        {/* <Button title="Sign Up" onPress={handleSubmit} /> */}
        <TouchableOpacity style={styles.SignUpBtn} >
              <Text style={styles.buttonText}  onPress={handleSubmit} >Sign Up</Text>
            </TouchableOpacity>
      </View>


    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,

    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white"


  },
  picture: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,

  },
  SignUpBtn: {
    backgroundColor: 'black',
    borderRadius: 7,
    width: 150,
    height: 50,
    alignItems: 'center',
    left: 70,
   
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginTop: 13,
  }
});
