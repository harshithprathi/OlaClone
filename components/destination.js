// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';

// const DestinationSearch = () => {
//   const [searchText, setSearchText] = useState('');
//   const [recentSearches, setRecentSearches] = useState([]);

//   const handleSearch = () => {
//     if (searchText.trim() === '') {
//       return;
//     }

//     // Add the search text to recent searches
//     setRecentSearches([searchText, ...recentSearches]);
//     // Clear the search input
//     setSearchText('');
//     // Implement your search functionality here
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.searchContainer}>
//         <Icon name="search" size={20} style={styles.searchIcon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Search Destination"
//           value={searchText}
//           onChangeText={(text) => setSearchText(text)}
//           onSubmitEditing={handleSearch}
//         />
//       </View>
//       <Text style={styles.recentSearchesTitle}>Recent Searches</Text>
//       <FlatList
//         data={recentSearches}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => console.log('Pressed:', item)}>
//             <View style={styles.recentSearchItem}>
//               <Text style={styles.recentSearchText}>{item}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     // shadowColor: 'black',
//     // shadowOpacity: 0.75,
//     // shadowOffset: { width: 30, height: 50 },
//     // shadowRadius: 18,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     // marginVertical: 16,
//   },
//   searchIcon: {
//     marginRight: 10,
//     color: '#777',
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 12,
//     color: '#333',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   recentSearchesTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//   },
//   recentSearchItem: {
//     backgroundColor: '#e0e0e0',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 12,
//   },
//   recentSearchText: {
//     fontSize: 16,
//     color: '#333',
//   },
// });

// export default DestinationSearch;



import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Platform, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function DestinationSearch({lat, lng, address, address2}) {
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const navigation=useNavigation();

  const handleSearch = () => {
    if (searchText.trim() === '') {
      return;
    }

    // Add the search text to recent searches
    setRecentSearches([searchText, ...recentSearches]);
    // Clear the search input
    setSearchText('');
    // Implement your search functionality here
  };

  // const containerStyle = Platform.OS === 'ios'
  //   ? { ...styles.container2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 }
  //   : { ...styles.container2, elevation: 5 };
  function handlepress(){
    console.log('address1',address);
    navigation.navigate('Destination_Screen',{lat:lat, lng:lng, addr:address, addr2:address2});
  }

  return (
    <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={handlepress}
      >
    <View style={styles.container2}>
    <View style={styles.card}>
        {/* Search Bar */}
        <View style={styles.cardSearch}>
          <Icon name="search" size={20} style={styles.cardSearchIcon} />
          <TextInput
            style={styles.cardSearchInput}
            placeholder={address2 || "Search Destination"}
            placeholderTextColor="#777"
            onPressIn={handlepress}
          />
        </View>

        {/* Recent Search */}
        <View style={styles.recentSearch}>
          <Icon name="clock-o" size={20} style={styles.clockIcon} />
          <Text style={styles.recentSearchText}>{address2 || 'Your Recent Search'}</Text>
        </View>
      </View>
      </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   paddingHorizontal: 40,
  //   width: '100%', // Take the whole width of the screen
  //   marginVertical: 0,
  //   borderRadius: 10,
  //   marginTop: 190,
  // },
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    width: '100%', // Take the whole width of the screen
    borderRadius: 10,
    marginBottom: 10,
  },
  // searchContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#f0f0f0',
  //   borderRadius: 8,
  //   paddingHorizontal: 46,
  //   marginVertical: 16,
  // },
  // searchIcon: {
  //   marginRight: 20,
  //   color: '#777',
  // },
  // input: {
  //   paddingVertical: 12,
  //   color: '#333',
  //   fontSize: 26,
  //   fontWeight: 'bold',
  //   // marginRight: 70,
  // },
  // recentSearchesTitle: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginBottom: 12,
  //   color: '#333',
  // },
  // recentSearchItem: {
  //   backgroundColor: '#e0e0e0',
  //   // padding: 12,
  //   borderRadius: 8,
  //   marginBottom: 12,
  // },
  // recentSearchText: {
  //   fontSize: 12,
  //   color: '#333',
  // },
  // leng: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  card: {
    // flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    padding: 16,
    margin: 0,
  },
  cardSearch: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal:20,
    // marginHorizontal: 20,
  },
  cardSearchIcon: {
    marginRight: 10,
    color: '#249c0c',
  },
  cardSearchInput: {
    // flex: 1,
    paddingVertical: 12,
    color: '#141313',
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 70,
  },
  recentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  clockIcon: {
    marginRight: 10,
    marginTop: 12,
  },
  recentSearchText: {
    fontSize: 16,
    color: '#333',
    marginTop: 12,
    marginRight: 10,
  },
});

export default DestinationSearch;
{/* <View style={containerStyle} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
        <View style={styles.leng}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search Destination"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View>
      <Text style={styles.recentSearchesTitle}>Recent Searches</Text>
      <FlatList
        data={recentSearches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log('Pressed:', item)}>
            <View style={styles.recentSearchItem}>
              <Text style={styles.recentSearchText}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
      </View>
    </View> */}