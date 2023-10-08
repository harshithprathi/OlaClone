// import React, { useState } from 'react';
// import { View, Text, Image, Pressable, TextInput, FlatList, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';

// const InviteScreenTopBar = () => {
//     function handlepress(){

//     }
//   return (
//     // <Pressable
//     //     android_ripple={{ color: '#ccc' }}
//     //     style={({ pressed }) => [
//     //       styles.button,
//     //       pressed ? styles.buttonPressed : null,
//     //     ]}
//     //     onPress={handlepress}
//     //   >
//     <View style={styles.container2}>
//     <View style={styles.card}>
//         {/* Search Bar */}
//         <View style={styles.recentSearchText}>
//           <Text style={{fontSize: 26, marginRight: 70, fontWeight: "bold", marginTop: 40}}>Invite your friends to Ola</Text>
//         </View>
//         <Pressable
//         android_ripple={{ color: '#ccc' }}
//         style={({ pressed }) => [
//           styles.button,
//           pressed ? styles.buttonPressed : null,
//         ]}
//         onPress={handlepress}
//         >
//         <View style={{flexDirection:'row'}}>
//         <View style={styles.recentSearch}>
//           <Text style={styles.CodeLink}>Know More</Text>
//         </View>
//         <Image source={require('../assets/hifi.jpeg')} style={styles.imageStyle} />
//         </View>
//         </Pressable>
//       </View>
//       </View>
//     //   </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   container2:{
//     flex: 1,
//     backgroundColor: '#c8fcc7',
//     paddingHorizontal: 10,
//     width: '100%', // Take the whole width of the screen
//     borderRadius: 10,
//     marginBottom: 10,
//     marginTop: 0,
//   },
//   button: {
//     flex: 1,
//   },
//   buttonPressed: {
//     opacity: 0.5,
//   },
  
//   card: {
//     // flex: 1,
//     backgroundColor: '#c8fcc7',
//     // borderRadius: 10,
//     padding: 16,
//     margin: 0,
//   },
//   cardSearch: {
//     // flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     padding:10,
//     fontSize: 20,
//     // marginHorizontal: 20,
//   },
//   cardSearchIcon: {
//     marginRight: 10,
//     color: '#249c0c',
//   },
//   cardSearchInput: {
//     // flex: 1,
//     paddingVertical: 12,
//     color: '#141313',
//     fontSize: 24,
//     fontWeight: 'bold',
//     // paddingRight: 70,
//   },
//   recentSearch: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 6,
//   },
//   clockIcon: {
//     marginRight: 10,
//     marginTop: 12,
//   },
//   recentSearchText: {
//     fontSize: 26,
//     color: '#333',
//     // marginTop: 12,
//     // padding: 20,
//   },
//   imageStyle:{
//     // flex: 1,
//     marginLeft:130,
//     width: 160,
//     height: 120,
//     margin: 0,
//     padding: 0,
//     marginBottom:-15
//   },
//   CodeLink:{
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#007AFF',

//   },
// });

// export default InviteScreenTopBar;

// 

import React, { useState } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const InviteScreenTopBar = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container2}>
      <View style={styles.card}>
        {/* Search Bar */}
        <View style={styles.recentSearchText}>
          <Text style={{ fontSize: 26, marginRight: 70, fontWeight: 'bold', marginTop: 50 }}>
            Invite your friends to Ola
          </Text>
        </View>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
          onPress={toggleModal}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.recentSearch}>
              <Text style={styles.CodeLink}>Know More</Text>
            </View>
            <Image source={require('../assets/hifi.jpeg')} style={styles.imageStyle} />
          </View>
        </Pressable>
      </View>

      {/* Modal */}
      <Modal isVisible={isModalVisible} style={{justifyContent: 'flex-end',margin:0}}>
        <View style={styles.modalContainer}>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.modalHeading}>Here's how to invite and earn</Text>
          <Image source={require('../assets/smallimage.jpeg')} style={styles.modalImage} />
          </View>
          <View style={styles.modalText}>
            <View style={styles.modalListItem}>
              <Text style={styles.modalTick}>✔</Text>
              <Text>Share the code below or ask them to enter it after they signup. Your coupon will appear after their first ride</Text>
            </View>
            <View style={styles.modalListItem}>
              <Text style={styles.modalTick}>✔</Text>
              <Text>For your friend to recieve their coupon, ensure that they use referral before their first ride & within 10 days of signup </Text>
            </View>
          </View>
          <TouchableOpacity onPress={toggleModal} style={styles.closeModalButton}>
            <Text style={styles.closeModalText}>Got it</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#b5ebc8',
    paddingHorizontal: 10,
    width: '100%', // Take the whole width of the screen
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 0,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },

  card: {
    backgroundColor: '#b5ebc8',
    padding: 16,
    margin: 0,
  },
  cardSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    fontSize: 20,
  },
  cardSearchIcon: {
    marginRight: 10,
    color: '#249c0c',
  },
  cardSearchInput: {
    paddingVertical: 12,
    color: '#141313',
    fontSize: 24,
    fontWeight: 'bold',
  },
  recentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  clockIcon: {
    marginRight: 10,
    marginTop: 12,
  },
  recentSearchText: {
    fontSize: 26,
    color: '#333',
  },
  imageStyle: {
    marginLeft: 130,
    width: 160,
    height: 120,
    margin: 0,
    padding: 0,
    marginBottom: -15,
  },
  CodeLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
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
});

export default InviteScreenTopBar;
