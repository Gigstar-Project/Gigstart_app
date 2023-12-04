import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import InputEmail from "./screens/InputEmailPage";


import Login from "./screens/Login";

import OtpPage from "./screens/OtpPage";
import HomePageScreen from "./screens/HomePageScreen";





const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Home Page" component={HomePageScreen}/> */}
     

         <Stack.Screen name = "Home"  component={HomeScreen}/>
         <Stack.Screen name = "Confirmation"  component={InputEmail}/>
         <Stack.Screen name = "Login"  component={Login }/>
        <Stack.Screen name = "Sign up"  component={SignUpScreen }/>
        <Stack.Screen name = "Otp Request"  component={OtpPage }/>
      {/* <Stack.Screen name = "Verify" component={VerifyPage} options={{title: "Verification"}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}