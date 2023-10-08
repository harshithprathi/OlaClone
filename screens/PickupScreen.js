// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
// import { Ionicons, FontAwesome } from '@expo/vector-icons';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { IconButton } from 'react-native-paper';

// function Pickup() {
//   const [searchText, setSearchText] = useState('');
//   const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

//   const clearSearchText = () => {
//     setSearchText('');
//   };

//   const toggleBottomSheet = () => {
//     setBottomSheetVisible(!bottomSheetVisible);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Pick-up</Text>
//         <Ionicons name="md-arrow-dropdown" size={24} color="black" onPress={toggleBottomSheet} />
//         <Ionicons name="person" size={24} color="black" />
//         <IconButton
//           icon="dots-vertical"
//           size={24}
//           color="black"
//           onPress={toggleBottomSheet}
//           style={{ marginRight: 5 }}
//         />
//       </View>

//       {/* Bottom Sheet */}
//       <BottomSheet
//         isVisible={bottomSheetVisible}
//         containerStyle={styles.bottomSheetContainer}
//       >
//         {/* Content for the bottom sheet */}
//         <View style={styles.bottomSheetContent}>
//           {/* Add your content here */}
//           <Text>Bottom Sheet Content</Text>
//         </View>
//       </BottomSheet>

//       {/* Search Bar */}
//       <View style={styles.searchBar}>
//         <Ionicons name="md-alert" size={16} color="green" style={styles.icon} />
//         <FontAwesome name="circle" size={16} color="green" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Search"
//           placeholderTextColor="gray"
//           value={searchText}
//           onChangeText={(text) => setSearchText(text)}
//         />
//         {searchText.length > 0 && (
//           <TouchableOpacity onPress={clearSearchText} style={styles.clearButton}>
//             <Ionicons name="close-circle" size={16} color="black" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// }


// export default Pickup;

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
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgray',
//     elevation: 4, // Add elevation for shadow effect
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   bottomSheetContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   bottomSheetContent: {
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     margin: 16,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 4,
//   },
//   icon: {
//     marginHorizontal: 5,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: 'black',
//   },
//   clearButton: {
//     marginLeft: 5,
//   },
// });


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Map from '../components/Map';

function Pickup({route}) {
    const address=route.params.address;
  const [searchText, setSearchText] = useState(address);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Myself');
  const [chosenlocation,setChosenLocation] = useState();
  const navigation = useNavigation();

  const clearSearchText = () => {
    setSearchText('');
  };

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };
  function handleConfirm(){
    console.log('chosed',chosenlocation);
  };
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pick-up</Text>
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
        <FontAwesome name="circle" size={16} color="green" style={styles.icon} />
        <Ionicons name="play" size={12} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={clearSearchText} style={styles.clearButton}>
            <Ionicons name="close-circle" size={16} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <Map handleaddress={setSearchText} 
      handleLoc={setChosenLocation}
    />
      <TouchableOpacity style={styles.confirmButton}
       onPress={() => 
        {
            console.log('locate',chosenlocation);
            navigation.navigate('Home',{lat:chosenlocation.lat,lng:chosenlocation.lng,address:searchText})}}
    // onPress={handleConfirm}
       >
        <Text style={styles.confirmButtonText}>Confirm Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    // borderBottomWidth: 1,
    // borderBottomColor: 'lightgray',
    // elevation: 4,
    marginTop:0,
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
    flexDirection: 'row',
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
  },
  clearButton: {
    marginLeft: 5,
  },
  myselfContainer:{
    marginHorizontal: 10,
  },
  // Modal styles
  modalContainer: {
    backgroundColor: 'white',
    padding: 36,
    borderRadius: 3,
    margin: 0,
  },
  modalHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalImage: {
    width: 50,
    height: 50,
    marginLeft: 50,
  },
  modalText: {
    marginTop: 10,
  },
  modalListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  modalTick: {
    fontSize: 16,
    marginRight: 10,
    color: 'green',
  },
  closeModalButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginBottom: -30,
  },
  closeModalText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
  },
  confirmButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 5,
    borderRadius:10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Pickup;
