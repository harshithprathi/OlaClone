import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Map from '../components/Map';
import { getAddress,  } from '../util/location';

function DestinationScreen({route}) {
    const address=route?.params?.addr || '';
  const [searchText, setSearchText] = useState(address);
//   const [searchText, setSearchText] = useState();
  const [destText, setdestText] = useState();
  const [pickedLocation,setPickedLocation]=useState();
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Myself');
  const [chosenlocation,setChosenLocation] = useState();
  const [isSheetVisible, setSheetVisible] = useState(true);
  const navigation = useNavigation();


  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const toggleSheet = () => {
    setSheetVisible(!isSheetVisible);
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };
  function handleConfirm(){
    console.log('chosed',chosenlocation);
  };

  useEffect(() => {
    async function getLocationHandler() {

      //   const location = await getCurrentPositionAsync();
    //   setPickedLocation({
    //     lat: location.coords.latitude,
    //     lng: location.coords.longitude,
    //   });
    setPickedLocation({
        lat: 17.504742,
        lng: 78.286068
    });
    //   setIsLoading(false);

    }
    if (!searchText) {
      getLocationHandler();
    }
    else{
        setPickedLocation({
            lat:route?.params?.lat,
            lng:route?.params?.lng
        });
    }
  }, [searchText]);


  useEffect(() => {
    async function handleLocation() {
      if (!address) {
        const address2 = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        setSearchText(address2);
      }
    }

    handleLocation();
  }, [pickedLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Destination</Text>
        <Pressable
        android_ripple={{ color: '#ccc' }}
        style={styles.iconBox}
        onPress={toggleBottomSheet}
        >
          <Ionicons name="person" size={18} color="black" />
          <Text style={styles.myselfContainer}>{selectedOption}</Text>
          <Ionicons name="chevron-down" size={18} color="black" onPress={toggleBottomSheet} />
        </Pressable>
      </View>

      {/* Bottom Sheet */}
      <Modal isVisible={isBottomSheetVisible} style={{justifyContent: 'flex-end',margin:0}} onBackdropPress={toggleBottomSheet} >
      <View style={styles.bottomSheetContent}>
          <Text style={styles.title}>Someone else taking this ride?</Text>
          <Text style={styles.subtitle}>Choose a contact so that they also get driver number, vehicle details and ride OTP via SMS.</Text>
        <TouchableOpacity onPress={() => handleRadioChange('Myself')}>
          <View style={styles.option}>
            <RadioButton
              value="Myself"
              status={selectedOption === 'Myself' ? 'checked' : 'unchecked'}
              onPress={() => {handleRadioChange('Myself')}}
              color="black"
            />
            <Text style={styles.optionText}>Myself</Text>
          </View>
          </TouchableOpacity>

          <View style={styles.horizontalLine} />
          <TouchableOpacity onPress={() => handleRadioChange('Others')}>
          <View style={styles.option}>
            <RadioButton
              value="Others"
              status={selectedOption === 'Others' ? 'checked' : 'unchecked'}
              onPress={() => handleRadioChange('Others')}
              color="black"
            />
            <Text style={[styles.optionText,{color:'#046abd'}] }>Choose another contact</Text>
            {/* <Ionicons name="arrow-forward" size={16} color="black"/> */}
          </View>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleBottomSheet} style={styles.button1}>
              <Text style={styles.buttonText1}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleBottomSheet} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome
            name="circle"
            size={14}
            color="green"
            style={styles.icon}
          />
          <Ionicons name="play" size={12} color="green" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={searchText || "Pickup location"}
            placeholderTextColor="black"
            value={searchText}
          />
        </View>
        <View style={styles.horizontalLine} />
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome
            name="circle"
            size={12}
            color="#b50707"
            style={styles.icon}
          />
          <Ionicons name="play" size={10} color="#b50707" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={destText || "Destination"}
            placeholderTextColor="gray"
            value={destText}
            onChangeText={(text) => setdestText(text)}
          />
        </View>
      </View>
      <Map handleaddress={setdestText} 
      handleLoc={setChosenLocation}
    />
      <TouchableOpacity style={styles.mapButton}
       onPress={() => 
        {
            console.log('locate',pickedLocation);
            navigation.navigate('Home',{lat:pickedLocation?.lat,lng:pickedLocation?.lng,address: searchText, address2:destText})}}
    // onPress={handleConfirm}
       >
        <Ionicons
          name="pin"
          size={18}
          color="green"
          style={styles.icon}
        />
        <Text style={styles.mapButtonText}>Confirm Dropping Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: 'white',
//     // borderBottomWidth: 1,
//     // borderBottomColor: 'lightgray',
//     // elevation: 4,
//     marginTop:0,
//     paddingTop: 45,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     marginRight: 120,
//   },
//   bottomSheet: {
//     justifyContent: 'flex-end',
//     margin: 0,
//   },
//   bottomSheetContent: {
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#797d7b',
//     marginBottom: 20,
//   },
//   option: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   optionText: {
//     fontSize: 18,
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
//   option2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderTopWidth: 1,
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   optionText2: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   horizontalLine: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#e3e6e3',
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   button: {
//     flex: 1,
//     backgroundColor: 'black',
//     borderRadius: 10,
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 5,
//   },
//   button1: {
//     flex: 1,
//     backgroundColor: '#dcdedc',
//     borderRadius: 10,
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     padding: 5,
//     fontSize: 16,
//   },
//   buttonText1: {
//     color: 'black',
//     fontWeight: 'bold',
//     padding: 5,
//     fontSize: 16,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     margin: 5,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 4,
//     paddingVertical: 12,
//   },
//   icon: {
//     marginHorizontal: 2,
//   },
//   iconBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 50,
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 5,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: 'black',
//   },
//   clearButton: {
//     marginLeft: 5,
//   },
//   myselfContainer:{
//     marginHorizontal: 10,
//   },
//   // Modal styles
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 36,
//     borderRadius: 3,
//     margin: 0,
//   },
//   modalHeading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalImage: {
//     width: 50,
//     height: 50,
//     marginLeft: 50,
//   },
//   modalText: {
//     marginTop: 10,
//   },
//   modalListItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//   },
//   modalTick: {
//     fontSize: 16,
//     marginRight: 10,
//     color: 'green',
//   },
//   closeModalButton: {
//     backgroundColor: 'black',
//     borderRadius: 8,
//     padding: 10,
//     marginTop: 10,
//     marginBottom: -30,
//   },
//   closeModalText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 5,
//   },
//   confirmButton: {
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     margin: 5,
//     borderRadius:10,
//   },
//   confirmButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginTop: 0,
    paddingTop: 45,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 120,
  },
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheetContent: {
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#797d7b',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  option2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderTopWidth: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  optionText2: {
    fontSize: 16,
    marginLeft: 10,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#e3e6e3',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  button1: {
    flex: 1,
    backgroundColor: '#dcdedc',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 16,
  },
  buttonText1: {
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 16,
  },
  searchBar: {
    // flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
    paddingVertical: 12,
  },
  icon: {
    marginHorizontal: 2,
    marginTop: 12,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    padding: 5,
  },
  clearButton: {
    marginLeft: 5,
  },
  myselfContainer: {
    marginHorizontal: 10,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 16,
    marginHorizontal: 6,
    borderRadius: 10,
    // marginTop: 20,
    marginBottom:2,
  },
  mapButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // Custom Map Modal styles
  mapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  mapContainer: {
    backgroundColor: 'white',
    padding: 16,
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  closeMapButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  closeMapText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default DestinationScreen;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Pressable } from 'react-native';
// import { Ionicons, FontAwesome } from '@expo/vector-icons';
// import Modal from 'react-native-modal';
// import { RadioButton } from 'react-native-paper';

// // Create a custom Map component
// function MapModal({ isVisible, onClose }) {
//   return (
//     <Modal isVisible={isVisible} style={styles.mapModal}>
//       <View style={styles.mapContainer}>
//         {/* Your map content goes here */}
//         <Text style={styles.mapText}>Location on Map</Text>
//         {/* Add your map component here */}
//       </View>
//       {/* <TouchableOpacity style={styles.closeMapButton} onPress={onClose}>
//         <Text style={styles.closeMapText}>Close Map</Text>
//       </TouchableOpacity> */}
//     </Modal>
//   );
// }

// function Pickup() {
//   const [searchText, setSearchText] = useState('');
//   const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('Myself');
//   const [isSheetVisible, setSheetVisible] = useState(true);
//   const [isMapModalVisible, setMapModalVisible] = useState(false);
//   const [destText, setdestText] = useState();
//   const [chosenlocation,setChosenLocation] = useState();

//   const toggleBottomSheet = () => {
//     setBottomSheetVisible(!isBottomSheetVisible);
//   };

//   const toggleSheet = () => {
//     setSheetVisible(!isSheetVisible);
//   };

//   const toggleMapModal = () => {
//     setMapModalVisible(!isMapModalVisible);
//   };

//   const handleRadioChange = (value) => {
//     setSelectedOption(value);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Destination</Text>
//         <Pressable
//           android_ripple={{ color: '#ccc' }}
//           style={styles.iconBox}
//           onPress={toggleBottomSheet}
//         >
//           <Ionicons name="person" size={18} color="black" />
//           <Text style={styles.myselfContainer}>{selectedOption}</Text>
//           <Ionicons
//             name="chevron-down"
//             size={18}
//             color="black"
//             onPress={toggleBottomSheet}
//           />
//         </Pressable>
//       </View>

//       {/* Bottom Sheet */}
//       <Modal
//         isVisible={isBottomSheetVisible}
//         style={{ justifyContent: 'flex-end', margin: 0 }}
//         onBackdropPress={toggleBottomSheet}
//       >
//         <View style={styles.bottomSheetContent}>
//           <Text style={styles.title}>Someone else taking this ride?</Text>
//           <Text style={styles.subtitle}>
//             Choose a contact so that they also get driver number, vehicle
//             details, and ride OTP via SMS.
//           </Text>
//           <TouchableOpacity onPress={() => handleRadioChange('Myself')}>
//             <View style={styles.option}>
//               <RadioButton
//                 value="Myself"
//                 status={
//                   selectedOption === 'Myself' ? 'checked' : 'unchecked'
//                 }
//                 onPress={() => {
//                   handleRadioChange('Myself');
//                 }}
//                 color="black"
//               />
//               <Text style={styles.optionText}>Myself</Text>
//             </View>
//           </TouchableOpacity>

//           <View style={styles.horizontalLine} />
//           <TouchableOpacity onPress={() => handleRadioChange('Others')}>
//             <View style={styles.option}>
//               <RadioButton
//                 value="Others"
//                 status={
//                   selectedOption === 'Others' ? 'checked' : 'unchecked'
//                 }
//                 onPress={() => handleRadioChange('Others')}
//                 color="black"
//               />
//               <Text
//                 style={[
//                   styles.optionText,
//                   { color: '#046abd' },
//                 ]}
//               >
//                 Choose another contact
//               </Text>
//               {/* <Ionicons name="arrow-forward" size={16} color="black"/> */}
//             </View>
//           </TouchableOpacity>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               onPress={toggleBottomSheet}
//               style={styles.button1}
//             >
//               <Text style={styles.buttonText1}>Skip</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={toggleBottomSheet}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>Continue</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Search Bar */}
//       <View style={styles.searchBar}>
//         <View style={{ flexDirection: 'row' }}>
//           <FontAwesome
//             name="circle"
//             size={14}
//             color="green"
//             style={styles.icon}
//           />
//           <Ionicons name="play" size={12} color="green" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Pickup location"
//             placeholderTextColor="black"
//             value={searchText}
//             onChangeText={(text) => setSearchText(text)}
//           />
//         </View>
//         <View style={styles.horizontalLine} />
//         <View style={{ flexDirection: 'row' }}>
//           <FontAwesome
//             name="circle"
//             size={12}
//             color="#b50707"
//             style={styles.icon}
//           />
//           <Ionicons name="play" size={10} color="#b50707" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Destination"
//             placeholderTextColor="gray"
//             value={destText}
//             onChangeText={(text) => setdestText(text)}
//           />
//         </View>
//       </View>
//       <Map handleaddress={setSearchText} 
//       handleLoc={setChosenLocation}
//     />
//       <TouchableOpacity style={styles.confirmButton}
//        onPress={() => 
//         {
//             console.log('locate',chosenlocation);
//             navigation.navigate('Home')}}
//     // onPress={handleConfirm}
//        >
//         <Text style={styles.confirmButtonText}>Confirm Location</Text>
//       </TouchableOpacity>

//       {/* Locate on Map */}
//       {/* <TouchableOpacity
//         style={styles.mapButton}
//         onPress={toggleMapModal}
//       >
//         <Ionicons
//           name="pin"
//           size={18}
//           color="green"
//           style={styles.icon}
//         />
//         <Text style={styles.mapButtonText}>Locate on Map</Text>
//       </TouchableOpacity> */}

//       {/* Custom Map Modal */}
//       <MapModal
//         isVisible={isMapModalVisible}
//         onClose={toggleMapModal}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: 'white',
//     marginTop: 0,
//     paddingTop: 45,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     marginRight: 120,
//   },
//   bottomSheet: {
//     justifyContent: 'flex-end',
//     margin: 0,
//   },
//   bottomSheetContent: {
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#797d7b',
//     marginBottom: 20,
//   },
//   option: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   optionText: {
//     fontSize: 18,
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
//   option2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderTopWidth: 1,
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   optionText2: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   horizontalLine: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#e3e6e3',
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   button: {
//     flex: 1,
//     backgroundColor: 'black',
//     borderRadius: 10,
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 5,
//   },
//   button1: {
//     flex: 1,
//     backgroundColor: '#dcdedc',
//     borderRadius: 10,
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     padding: 5,
//     fontSize: 16,
//   },
//   buttonText1: {
//     color: 'black',
//     fontWeight: 'bold',
//     padding: 5,
//     fontSize: 16,
//   },
//   searchBar: {
//     // flexDirection: 'row',
//     alignItems: 'center',
//     margin: 5,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 4,
//     paddingVertical: 12,
//   },
//   icon: {
//     marginHorizontal: 2,
//     marginTop: 12,
//   },
//   iconBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 50,
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 5,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: 'black',
//     padding: 5,
//   },
//   clearButton: {
//     marginLeft: 5,
//   },
//   myselfContainer: {
//     marginHorizontal: 10,
//   },
//   mapButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//     padding: 16,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   mapButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   // Custom Map Modal styles
//   mapModal: {
//     justifyContent: 'flex-end',
//     margin: 0,
//   },
//   mapContainer: {
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   mapText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 10,
//   },
//   closeMapButton: {
//     backgroundColor: 'black',
//     borderRadius: 8,
//     padding: 10,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   closeMapText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//   },
// });

// export default Pickup;
