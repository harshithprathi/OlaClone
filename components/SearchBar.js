import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import { useNavigation } from '@react-navigation/native';

const SearchBarr = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    // <View style={styles.full}>
        // {/* <View> */}
      <ImageBackground
      source={require('../assets/Map.jpeg')}
      resizeMode="cover"
      style={styles.customImageStyle}
    >
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Ionicons name="menu" color={'#5e5c5c'} size={26} />
      </TouchableOpacity>
        <View style={styles.dot} />
        <TextInput
          style={styles.input}
          placeholder="Your Current Location"
          placeholderTextColor="black"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
      <FontAwesome name="heart-o" size={20} color="black" style={styles.heartIcon} />
    </View>
    </ImageBackground>
    // {/* </View> */}
    
      
    // </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
//   container: {
//     // flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius:100,
//     paddingHorizontal: 10,
//     margin: 10,
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 3, height: 5 },
//     shadowRadius: 18,
//     marginBottom: 10,
//     marginTop: 40,
//     backgroundColor: 'white',
//   },
//   input: {
//     flex: 1,
//     // paddingVertical: 8,
//     color: 'black',
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//   },
//   searchButton: {
//     padding: 10,
//     borderRadius: 8,
//     // marginLeft: 300,
    
//   },
//   customImageStyle: {
//     height: 525,
//     width: 385,
//     flex: 1,
//     resizeMode: 'cover',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
//     full: {
//         flex: 1,
//         flexDirection: 'column',

//     },
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
    marginRight: 10,
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
});

export default SearchBarr;
