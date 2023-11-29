import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Signin from "./screens/Signin"



const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home"  component={HomeScreen}/>
        {/* // <Stack.Screen name = "Verify"  component={VerificationPage}/> */}
        <Stack.Screen name = "Sign up"  component={SignUpScreen }/>
        <Stack.Screen name = "Login"  component={Signin }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}