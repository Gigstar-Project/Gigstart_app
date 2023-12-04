// import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';
// import React, { useLayoutEffect } from 'react'
// import { useNavigation, useRoute } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons';
// import HeaderTab from '../components/HeaderTab';
// import { Feather } from '@expo/vector-icons';


// import DatePicker from 'react-native-date-ranges';
// import { useState } from 'react';
// // import ImageResizer from 'react-native-image-resizer';



// const HomePageScreen = () => {
//   const navigation = useNavigation()
//   const [selectedDates, setSelectedDate] = useState()
//   // console.log(selectedDate);
//   const route = useRoute()  

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       title: "Geegstar.com",
//       headerTitleStyle: {
//         fontSize: 20,
//         fontWeight: "bold",
//         color: "black"
//       },
//       headerStyle: {
//         backgroundColor: "#B6BBC4",
//         height: 70,
//         borderBottomColor: "transparent",
//         shadowColor: "transparent",
//       },
//       headerRight: () => (
//         <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 12 }} />
//       ),
//     })
//   }, [navigation]);

//   const customButton = (onConfirm) =>{
//     return (
//       <Button
//       onPress = { onConfirm }
//       style = { {
//         container: {width: "80%", marginHorizontal:"3%"},
//         text: {fontSize: 20},
        
//        } }
//        primary
//        title="Submit"
//        />
//     )
//   };

//   const searchTalents = (name) => {
//     if(!route.params || !selectedDates){
//       Alert.alert('Invalid Details', 'Please enter the complete search details', [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {text: 'OK', onPress: () => console.log('OK Pressed')},
//       ]);
  
//     }
//     if (route.params && selectedDates) {      
//       navigation.navigate("Talents", {
//         selectedDates: selectedDates,
//         name: route.params,
//       });
//     }
//   } 
//   return (
//     <View>
//       <HeaderTab />
//       <ScrollView>
//         <View style={{ 
//           margin: 20, 
//           borderColor: "black", 
//           borderWidth: 3, 
//           borderRadius: 6,
        
//           }}>
//           <Pressable
//           onPress={() => navigation.navigate("Search")} style={{
//             flexDirection: "row",
//              alignItems: "center",
//              gap: 10,
//              paddingHorizontal: 10,
//              borderColor: "black",
//              borderWidth: 2,
//              paddingVertical: 15,
             
//              }}>
//             <Feather name="search" size={24} color="black" />
//             <TextInput placeholderTextColor="black" placeholder={route?.params?  route.params.input :  "Enter Talent Name"} />
//           </Pressable>

//           <Pressable style={{ 
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 10,
//           paddingHorizontal: 10,
//           borderColor: "black",
//           borderWidth: 2,
//           paddingVertical: 15,
//           }} >

//             {/* DATe PICKER */}
//           <Feather name="calendar" size={24} color="black" />
//           <DatePicker
//           style={{width: 350, height: 30, borderRadius: 0, borderWidth: 0, borderColor: "transparent"}}
//           customStyles = { {
//             placeholderText: {fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto"},
//             headerStyle:{
//               backgroundColor:"grey",
//             },
//             contentText: {fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto" }
//           }}
//           selectedBgcolor="#0047AB"
//           customButton={(onConfirm) => customButton(onConfirm)}
//             onConfirm={(date) => setSelectedDate(date)}
//             // centerAlign
//             allowFontScaling={false}
//             placeholder = {"Select Your Date" }
            
//             mode={"single"}
//           />
//           </Pressable>

//           {/* <Pressable style={{ 
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 10,
//           paddingHorizontal: 10,
//           borderColor: "black",
//           borderWidth: 2,
//           paddingVertical: 15,
//           }}>
//           <Ionicons name="person-outline" size={24} color="black" />
//           <TextInput placeholder=''/>
//           </Pressable> */}

//           {/* SEARCH BUTTON */}
          
//           <Pressable onPress={() => searchTalents(route?.params.input)} style={{ 
//           paddingHorizontal: 10,
//           borderColor: "black",
//           borderWidth: 2,
//           paddingVertical: 15,
//           backgroundColor: "black"
//           }}>
//             <Text style = { { textAlign: "center",fontSize:15, fontWeight: "500", color: "white"} }>
//               Search
//             </Text>
//           </Pressable>
//         </View>

//         <Text style={{marginHorizontal: 20, fontSize: 15, fontWeight: "500"}}>Connect With your Fav Seamlessly!!</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>

//           <Pressable style = { { width: 200, 
//             height: 150, 
//             marginTop:10, 
//             backgroundColor: "black", 
//             borderRadius:15, 
//             padding: 20,
//             marginHorizontal: 20
//             } }>
//             <Text style={{color:"white", fontSize: 15, fontWeight: "bold", marginVertical: 7}}>Brainiac</Text>
//             <Text style={{color:"white", fontSize: 15, fontWeight: "500", marginVertical: 7}}>Your desires are known to us</Text>
//           </Pressable>

//           <Pressable style = { { width: 200, 
//             height: 150, 
//             marginTop:10, 
//             borderColor: "black",
//             borderWidth: 2,
//             borderRadius:15, 
//             padding: 20,
//             marginHorizontal: 1
//             } }>
//             <Text style={{fontSize: 15, fontWeight: "bold", marginVertical: 7}}>Brainiac</Text>
//             <Text style={{ fontSize: 15, fontWeight: "500", marginVertical: 7}}>Your desires are known to us</Text>
//           </Pressable>

//           <Pressable style = { { width: 200, 
//             height: 150, 
//             marginTop:10, 
//             borderColor: "black",
//             borderWidth: 2,
//             borderRadius:15, 
//             padding: 20,
//             marginHorizontal: 20
//             } }>
//             <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 7}}>Brainiac</Text>
//             <Text style={{ fontSize: 15, fontWeight: "500", marginVertical: 7}}>Your desires are known to us</Text>
//           </Pressable>
//         </ScrollView>

//         <Pressable style={{marginTop: 20,
//           justifyContent: "center",
//           alignItems: "center",
//           }}>
//           <Image
//           style={{width: 350, height: 50, resizeMode: "contain"}}
//           source={require("../assets/Geegstar.png")}/>
//         </Pressable>
//       </ScrollView>
//     </View>
//   )
// }

// export default HomePageScreen

// const styles = StyleSheet.create({})