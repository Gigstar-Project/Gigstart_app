
import React, { useState } from "react";
import axios from "axios";
import { TextInput, View, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView } from "react-native";



const InputEmail = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIssubmitted] = useState(false);

  const handleChangeEmail = (text) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(text)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setEmail(text);

    let errors = {}

    if (!email) errors.email = "Email is required"


    setErrors(errors)
    return Object.keys(errors).length === 0;


  };


  const sendOtpRequest = async (email) => {

    try {
      const url = `http://localhost:8080/api/v1/user/confirmation-code/${email}`;
      const response = await axios.post(url);
      if (response.status === 200) {
        alert( response.data);
      }else{
        alert( response.data)
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleFormSubmit = async () => {
    if(handleChangeEmail(email)){
      setIssubmitted(true);

      await sendOtpRequest(email);
        alert("Email Submitted", email);
        setEmail("");
        navigation.navigate("Otp Request", {email});

        setErrors({});

    }else{
     
    }
    
  };

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <TextInput
        style={{
          width: 300,
          height: 50,
          borderColor: isEmailValid ? "blue" : "red",
          borderWidth: 1,
          borderRadius: 60,
        }}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
       {
            errors.email ? <Text style = { styles.errorText }>{errors.email}</Text> : null
          }

            <TouchableOpacity style={styles.verifyEmailBtn} >
              <Text style={styles.buttonText}  onPress={handleFormSubmit} >Verify Email</Text>
            </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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
    verifyEmailBtn: {
    //   backgroundColor: 'black',
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
      marginTop: 10,
      backgroundColor: "#007bff",
        padding: 10,
        //   borderRadius: 200,
        
    }
  });
  

export default InputEmail;
