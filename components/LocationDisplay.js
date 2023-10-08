// import { useEffect, useState, useLayoutEffect } from 'react';
// import { Alert, View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
// import {
//   getCurrentPositionAsync,
//   useForegroundPermissions,
//   PermissionStatus,
// } from 'expo-location';
// import {
//   useNavigation,
//   useRoute,
//   useIsFocused,
// } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { HeaderButton } from 'react-navigation-header-buttons';

// import { getAddress, getMapPreview } from '../util/location';

// function LocationDisplay({ onPickLocation }) {
//     const [pickedLocation, setPickedLocation] = useState();
//     const isFocused = useIsFocused();
  
//     const navigation = useNavigation();
//     const route = useRoute();
  
//     const [locationPermissionInformation, requestPermission] =
//       useForegroundPermissions();
//     const [searchText, setSearchText] = useState('');
//     const handleSearch = () => {
//     onSearch(searchText);
//     };
  
//     // useEffect(() => {
//     //   if (isFocused && route.params) {
//     //     const mapPickedLocation = {
//     //       lat: route.params.pickedLat,
//     //       lng: route.params.pickedLng,
//     //     };
//     //     setPickedLocation(mapPickedLocation);
//     //   }
//     // }, [route, isFocused]);
  
    


//     useEffect(() => {
//         async function getLocationHandler() {
//             const hasPermission = await verifyPermissions();
        
//             if (!hasPermission) {
//               return;
//             }
        
//             const location = await getCurrentPositionAsync();
//             setPickedLocation({
//               lat: location.coords.latitude,
//               lng: location.coords.longitude,
//             });
//           }
//         getLocationHandler();
//     },[pickedLocation]);

//     // useEffect(() => {
//     //   async function handleLocation() {
//     //     if (pickedLocation) {
//     //       const address = await getAddress(
//     //         pickedLocation.lat,
//     //         pickedLocation.lng
//     //       );
//     //       setSearchText({address});
//     //     }
//     //   }
  
//     //   handleLocation();
//     // }, [pickedLocation]);
  
//     async function verifyPermissions() {
//       if (
//         locationPermissionInformation.status === PermissionStatus.UNDETERMINED
//       ) {
//         const permissionResponse = await requestPermission();
  
//         return permissionResponse.granted;
//       }
  
//       if (locationPermissionInformation.status === PermissionStatus.DENIED) {
//         Alert.alert(
//           'Insufficient Permissions!',
//           'You need to grant location permissions to use this app.'
//         );
//         return false;
//       }
  
//       return true;
//     }


//     console.log('pickedLocation',pickedLocation);
  
//     if (pickedLocation) {
//         locationPreview = (
//           <Image
//             source={{
//               uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
//             }}
//             resizeMode="cover"
//             style={styles.customImageStyle}
//           />
//         );
//     }
//     else{
//         locationPreview=(<Text>Map not found</Text>)
//     }

  
//     return (
//         <ImageBackground
//         source={{
//             uri: pickedLocation ? getMapPreview(pickedLocation.lat, pickedLocation.lng): '',
//           }}
//         resizeMode="cover"
//         style={styles.customImageStyle}
//         >
//             <View style={styles.container}>
//             <View style={styles.inputContainer}>
//             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//             <Ionicons name="menu" color={'#5e5c5c'} size={26} />
//             </TouchableOpacity>
//                 <View style={styles.dot} />
//                 <TextInput
//                 style={styles.input}
//                 placeholder="Your Current Location"
//                 placeholderTextColor="black"
//                 onChangeText={(text) => setSearchText(text)}
//                 value={searchText}
//                 />
//             </View>
//             <FontAwesome name="heart-o" size={20} color="black" style={styles.heartIcon} />
//             </View>
//         </ImageBackground>
//     );
//   }
  
//   export default LocationDisplay;
  
//   const styles = StyleSheet.create({
//     button: {
//       flex: 1,
//     },
//     buttonPressed: {
//       opacity: 0.5,
//     },
//   //   container: {
//   //     // flexDirection: 'row',
//   //     alignItems: 'center',
//   //     borderWidth: 1,
//   //     borderColor: '#ccc',
//   //     borderRadius:100,
//   //     paddingHorizontal: 10,
//   //     margin: 10,
//   //     shadowColor: 'black',
//   //     shadowOpacity: 0.25,
//   //     shadowOffset: { width: 3, height: 5 },
//   //     shadowRadius: 18,
//   //     marginBottom: 10,
//   //     marginTop: 40,
//   //     backgroundColor: 'white',
//   //   },
//   //   input: {
//   //     flex: 1,
//   //     // paddingVertical: 8,
//   //     color: 'black',
//   //     shadowColor: 'black',
//   //     shadowOpacity: 0.25,
//   //     shadowOffset: { width: 0, height: 2 },
//   //     shadowRadius: 8,
//   //   },
//   //   searchButton: {
//   //     padding: 10,
//   //     borderRadius: 8,
//   //     // marginLeft: 300,
      
//   //   },
//   //   customImageStyle: {
//   //     height: 525,
//   //     width: 385,
//   //     flex: 1,
//   //     resizeMode: 'cover',
//   //     alignItems: 'center',
//   //     justifyContent: 'center',
//   //     },
//   //     full: {
//   //         flex: 1,
//   //         flexDirection: 'column',
  
//   //     },
//   container: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: 'white',
//       borderRadius: 10,
//       paddingVertical: 8,
//       paddingHorizontal: 10,
//       margin: 10,
//       marginTop: 45,
//     },
//     inputContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       flex: 1,
//       backgroundColor: 'white',
//     },
//     dot: {
//       width: 10,
//       height: 10,
//       backgroundColor: 'green', // Green dot
//       borderRadius: 5, // Make it a circle
//       marginRight: 10,
//       marginLeft: 10,
//     },
//     input: {
//       flex: 1,
//       color: 'black',
//     },
//     heartIcon: {
//       marginRight: 10,
//       fontWeight: 'bold', // Bold icon
//     },
//     customImageStyle: {
//       height: 325,
//       width: 380,
//       flex: 1,
//       resizeMode: 'cover',
//       alignItems: 'center',
//       // justifyContent: 'center',
//       margin: 0,
//       padding: 0,
//       },
//       full: {
//           flex: 1,
//           flexDirection: 'column',
//       },
//   });
  
  

// import React, { useEffect, useState, useLayoutEffect } from 'react';
// import {
//   Alert,
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   ImageBackground,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import {
//   getCurrentPositionAsync,
//   useForegroundPermissions,
//   PermissionStatus,
// } from 'expo-location';
// import {
//   useNavigation,
//   useRoute,
//   useIsFocused,
// } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { HeaderButton } from 'react-navigation-header-buttons';

// import { getAddress, getMapPreview } from '../util/location';

// function LocationDisplay({ onPickLocation }) {
//   const [pickedLocation, setPickedLocation] = useState();
//   const [searchText, setSearchText] = useState(''); // Use searchText for the address
//   const isFocused = useIsFocused();

//   const navigation = useNavigation();
//   const route = useRoute();

//   const [locationPermissionInformation, requestPermission] =
//     useForegroundPermissions();

//   useLayoutEffect(() => {
//     async function getLocationHandler() {
//       const hasPermission = await verifyPermissions();

//       if (!hasPermission) {
//         return;
//       }

//       const location = await getCurrentPositionAsync();
//       setPickedLocation({
//         lat: location.coords.latitude,
//         lng: location.coords.longitude,
//       });
//     }

//     getLocationHandler();
//   }, [pickedLocation]);

//   useEffect(() => {
//     async function handleLocation() {
//       if (pickedLocation) {
//         const address = await getAddress(
//           pickedLocation.lat,
//           pickedLocation.lng
//         );
//         setSearchText(address); // Set the address in the searchText state
//       }
//     }

//     handleLocation();
//   }, [pickedLocation]);

//   async function verifyPermissions() {
//     if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
//       const permissionResponse = await requestPermission();

//       return permissionResponse.granted;
//     }

//     if (locationPermissionInformation.status === PermissionStatus.DENIED) {
//       Alert.alert(
//         'Insufficient Permissions!',
//         'You need to grant location permissions to use this app.'
//       );
//       return false;
//     }

//     return true;
//   }

//   let locationPreview;

//   if (pickedLocation) {
//     locationPreview = (
//       <Image
//         source={{
//           uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
//         }}
//         resizeMode="cover"
//         style={styles.customImageStyle}
//       />
//     );
//   } else {
//     locationPreview = <Text>Map not found</Text>;
//   }

//   return (
//     <ImageBackground
//       source={{
//         uri: pickedLocation
//           ? getMapPreview(pickedLocation.lat, pickedLocation.lng)
//           : '',
//       }}
//       resizeMode="cover"
//       style={styles.customImageStyle}
//     >
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//             <Ionicons name="menu" color={'#5e5c5c'} size={26} />
//           </TouchableOpacity>
//           <View style={styles.dot} />
//           <TextInput
//             style={styles.input}
//             placeholder="Your Current Location"
//             placeholderTextColor="black"
//             onChangeText={(text) => setSearchText(text)}
//             value={searchText} // Use the searchText state for the address
//           />
//         </View>
//         <FontAwesome name="heart-o" size={20} color="black" style={styles.heartIcon} />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     margin: 10,
//     marginTop: 45,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     backgroundColor: 'green', // Green dot
//     borderRadius: 5, // Make it a circle
//     marginRight: 10,
//     marginLeft: 10,
//   },
//   input: {
//     flex: 1,
//     color: 'black',
//   },
//   heartIcon: {
//     marginRight: 10,
//     fontWeight: 'bold', // Bold icon
//   },
//   customImageStyle: {
//     height: 325,
//     width: 380,
//     flex: 1,
//     resizeMode: 'cover',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     margin: 0,
//     padding: 0,
//   },
//   full: {
//     flex: 1,
//     flexDirection: 'column',
//   },
// });

// export default LocationDisplay;


import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

import { getAddress, getMapPreview } from '../util/location';


function LocationDisplay({lat,lng,address}) {
  const [pickedLocation, setPickedLocation] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [uri, setUri] = useState(null); // Store image URI
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {
    onSearch(searchText);
  };


  useEffect(() => {
    async function getLocationHandler() {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }

      const location = await getCurrentPositionAsync();
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      setIsLoading(false);

    console.log('load',isLoading);
    }
    console.log('focus',isFocused);
    if (isFocused && !lat && !lng) {
        setPickedLocation({
            lat: 17.504742,
            lng: 78.286068
        });
    }
    else{
        setPickedLocation({
            lat: lat,
            lng: lng
        });
    }
    // if(lat && lng){
    //     setPickedLocation({
    //         lat: lat,
    //         lng:lng
    //     });
    // }

    // if(address){
    //     setSearchText(address);
    // }
  }, [isFocused]);


  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        setSearchText(address);
      }
    }

    handleLocation();
  }, [pickedLocation]);

  useEffect(() => {
    if (pickedLocation) {
      setUri(getMapPreview(pickedLocation.lat,pickedLocation.lng));
    }
    console.log('useEffect',lat,lng)
    // if(lat && lng){
    //     setPickedLocation({ lat: lat, lng: lng });
    //     setUri(getMapPreview(pickedLocation.lat, pickedLocation.lng));
    // }
    // if(address){
    //     setSearchText(address);
    // }
  }, [pickedLocation]);



  const handleImageLoad = () => {
    setIsLoading(false);
  };

  async function verifyPermissions() {
    if (!locationPermissionInformation) {
        // Handle the case where locationPermissionInformation is null, possibly show an error
        return true;
      }
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED 
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app.'
      );
      return false;
    }

    return true;
  };


  return (
    <>
    {isLoading ? ( // Display loading UI when isLoading is true
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="green" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <ImageBackground
          source={{ uri: uri || '' }}
          resizeMode="cover"
          style={styles.customImageStyle}
          onLoadEnd={handleImageLoad}
        >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="menu" color={'#5e5c5c'} size={26} />
          </TouchableOpacity>
          <View style={styles.dot} />
          <TextInput
            style={styles.input}
            placeholder={searchText || 'Your Current Location'}
            placeholderTextColor="black"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            onPressIn={() => navigation.navigate('PickUp',{address:searchText})}
          />
        </View>
        <FontAwesome name="heart-o" size={20} color="black" style={styles.heartIcon} />
      </View>
    </ImageBackground>
      )}
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    margin: 10,
    marginTop: 45,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'green', // Green dot
    borderRadius: 5, // Make it a circle
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  heartIcon: {
    marginLeft: 10,
    fontWeight: 'bold', // Bold icon
  },
  customImageStyle: {
    height: 325,
    width: 380,
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    // justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  full: {
    flex: 1,
    flexDirection: 'column',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationDisplay;
