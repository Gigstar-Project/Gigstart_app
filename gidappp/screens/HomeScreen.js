
// import { Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';


export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.container}>
          <Text style = { styles.logo }>Geegstar</Text>
          {/* <Image style={styles.picture} source={require("./assets/logo-black.copy.png")} /> */}
        
            <View style = { styles.parkUp }>
            <TouchableOpacity style={styles.getStartedBtn} onPress = {() => navigation.navigate('Verify') }>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>


            {/* <TouchableOpacity style={styles.getStartedBtn} onPress = {() => navigation.navigate('Verify') }>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity> */}



            

            {/* <TouchableOpacity style={styles.loginBtn} >
              <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.loginBtn} onPress = {() => navigation.navigate('Login') }>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
           

            </View>
            </View> 

            </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  parkUp: {
    flexDirection: "column",
    gap: 24,
    justifyContent: 'center',
    marginTop: 300,
   },
   getStartedBtn: {
    backgroundColor: 'black',
    borderRadius: 7,
    width: 250,
    height: 50,
    alignItems: 'center',
    
    
   },

   loginBtn: {
    backgroundColor: 'black',
    borderRadius: 7,
    width: 250,
    height: 50,
    alignItems: 'center',
  
   },

   buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginTop: 13,
   },

   logo:{
    fontSize: 50,
    alignItems: "center",
    fontWeight: 'bold',
    marginBottom: 30,
    


   },

   picture: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: -200,
    borderRadius: 10,
  },

});
