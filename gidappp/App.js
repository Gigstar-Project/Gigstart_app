import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import InputEmail from "./screens/InputEmailPage";

import VerificationPage from "./screens/VerifyPage"
import Login from "./screens/Login";
import VerifyPage from "./screens/VerifyPage";



const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home"  component={HomeScreen}/>
         <Stack.Screen name = "Verify"  component={InputEmail}/>
         <Stack.Screen name = "Login"  component={Login }/>
        <Stack.Screen name = "Sign up"  component={SignUpScreen }/>
        <Stack.Screen name = "VerifyPage"  component={VerifyPage }/>
      {/* <Stack.Screen name = "Verify" component={VerifyPage} options={{title: "Verification"}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}