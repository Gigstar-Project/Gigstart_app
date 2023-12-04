

// import React from 'react';
// import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native'

// const SearchResults = ({ data, input, setInput }) => {
//   const navigation = useNavigation();
//   return (
//     <View style={{ padding: 10 }}>
//       <Text>SearchResults</Text>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => {
//           if (item.name.toLowerCase().includes(input.toLowerCase())) {
//             if (input === "") {
//               return null;
//             }
//             return (
//               <Pressable onPress={() => {
//                 setInput(item.placeImage);
//                 navigation.navigate("Home",{
//                     input:item.placeImage
//                 })
//               }} 
//               style = { { flexDirection: "row", alignItems: "center" , marginVertical: 10} }>
//                 <View>
//                   <Image style={{ width: 70, height: 70 }} source={{ uri: item.placeImage }} />
//                 </View>
//                 <View style = { {marginLeft: 10 } }>
//                   <Text style = { {fontSize:15, fontWeight: "500" } } >{item.name}</Text>
//                   <Text style = { {marginVertical: 4 } }>{item.country}</Text>
//                   {/* <Text></Text> */}
//                 </View>
//               </Pressable>
//             );
//           }
//         }}
//       />
//     </View>
//   );
// }

// export default SearchResults;

// const styles = StyleSheet.create({});