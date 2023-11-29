import React, { useState } from "react";
import { TextInput, View } from "react-native";



const VerificationPage = () => {
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
        style={{
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
    </View>
  );
};

export default VerificationPage;
