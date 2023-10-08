// import React, { useState } from 'react';
// import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Pressable, FlatList, Modal } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// // Sample list of cities for the modal
// const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad'];

// const Ad_Screen = ({ navigation }) => {
//   const [selectedCity, setSelectedCity] = useState('Bangalore');
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const handleCitySelect = (city) => {
//     setSelectedCity(city);
//     toggleModal();
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => handleCitySelect(item)} style={styles.modalItem}>
//       <Text style={styles.modalItemText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../assets/ad1.png')} // Replace with your image source
//         style={styles.backgroundImage}
//       >
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <FontAwesome name="arrow-left" size={24} color="white" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>
//           Ola Experience centres in {selectedCity}
//           <Pressable onPress={toggleModal}>
//             <Text style={styles.dropdownText}> ▼</Text>
//           </Pressable>
//         </Text>
//         <FlatList
//           data={['1', '2', '3', '4']} // Add your card data here
//           numColumns={2}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Text style={styles.cardTitle}>Title</Text>
//               <Text style={styles.cardText}>Hi User</Text>
//               <Pressable style={styles.scheduleButton}>
//                 <Text style={styles.scheduleButtonText}>Schedule a visit</Text>
//                 <FontAwesome name="arrow-right" size={16} color="white" />
//               </Pressable>
//             </View>
//           )}
//         />
//         <Pressable style={styles.chatButton}>
//           <FontAwesome name="comments" size={24} color="white" />
//         </Pressable>
//       </ImageBackground>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={toggleModal}
//       >
//         <View style={styles.modalContainer}>
//           <Text style={styles.modalTitle}>Select a City</Text>
//           <FlatList
//             data={cities}
//             keyExtractor={(item) => item}
//             renderItem={renderItem}
//           />
//           <Pressable style={styles.modalCloseButton} onPress={toggleModal}>
//             <Text style={styles.modalCloseText}>Close</Text>
//           </Pressable>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     padding: 0,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 16,
//     left: 16,
//   },
//   headerText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   dropdownText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: 'black',
//     margin: 8,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: 'black',
//     shadowOpacity: 0.5,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   cardTitle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardText: {
//     color: 'white',
//   },
//   scheduleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   scheduleButtonText: {
//     color: 'white',
//     marginRight: 4,
//   },
//   chatButton: {
//     position: 'absolute',
//     bottom: 16,
//     right: 16,
//     backgroundColor: 'black',
//     padding: 16,
//     borderRadius: 50,
//     shadowColor: 'black',
//     shadowOpacity: 0.5,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   // Modal styles
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   modalItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   modalItemText: {
//     fontSize: 16,
//   },
//   modalCloseButton: {
//     backgroundColor: 'black',
//     borderRadius: 8,
//     padding: 10,
//     marginTop: 20,
//   },
//   modalCloseText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 5,
//   },
// });

// export default Ad_Screen;

import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Pressable, FlatList, Modal } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

// Sample list of cities for the modal
const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad', 'Adoni', 'Adoor', 'Agartala','Agra', 'Kolkata', 'Lucknow', 'Ahmedabad','Vizag', 'Suryapet', 'Aurangabad', 'Surat', 'Gurgaon','Chandigarh','Delhi', 'Godavari','Guntur', 'Guwahati'];

const Ad_Screen = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    toggleModal();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCitySelect(item)} style={styles.modalItem}>
      <Text style={styles.modalItemText}>{item}</Text>
    </TouchableOpacity>
  );

  const headerTextParts = [
    'Ola Experience centres in ',
    <Text key="selectedText" style={styles.selectedText}>{selectedCity}</Text>,
  ];

  const cardData = [
    {
      title: 'Ola Experience Centre,',
      text: '522/1, Chinmaya Mission Hospital Rd, Stage 1, Indiranagar...',
    },
    {
      title: 'Ola Experience Centre, Rr',
      text: 'Bhoopanna Building, Kenchena Halli Rd, Janankshi Layout,...',
    },
    {
      title: 'Ola Experience Centre,',
      text: '#363, Ground floor, 10th B Main Rd, Javanagar 3rd Block...',
    },
    {
      title: 'Ola Experience Centre,',
      text: '290-284, 15th A Cross Rd, Yelahanka Satellite Town...',
    },
  ];

  const renderCard = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardText}>{item.text}</Text>
      <Pressable style={styles.scheduleButton}>
        <Text style={styles.scheduleButtonText}>Schedule a visit</Text>
        <FontAwesome name="arrow-right" size={16} color="#0db588" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/ad1.png')} // Replace with your image source
        style={styles.backgroundImage}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.iconContainer}>
            <Ionicons name="arrow-back" size={28} color="black" />
        </View>
        </TouchableOpacity>
        
      </ImageBackground>
      <Text style={styles.headerText}>
          {/* Ola Experience centres in {selectedCity} */}
          {/* <Pressable onPress={toggleModal} > */}
            {/* <Text style={styles.dropdownText}> ▼</Text> */}
            {/* <Ionicons name="chevron-down" size={20} color="black" /> */}
          {/* </Pressable> */}
          {headerTextParts}
          <Pressable onPress={toggleModal} >
            <Ionicons name="chevron-down" size={20} color="#0db588" />
          </Pressable>
        </Text>

      <FlatList
        data={cardData} // Add your card data here
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCard}
      />

      <Pressable style={styles.chatButton}>
        <FontAwesome name="comments" size={24} color="black" />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a City</Text>
          <FlatList
            data={cities}
            keyExtractor={(item) => item}
            renderItem={renderItem}
          />
          <Pressable style={styles.modalCloseButton} onPress={toggleModal}>
            <Text style={styles.modalCloseText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    selectedText: {
        color: '#0db588', // Change this to the desired color for selectedText
        margin:0,
        padding: 0,
      },
  container: {
    flex: 1,
    backgroundColor: '#283030',
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 50,
    paddingTop: 170,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 20,
    marginRight:100,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 50, // Makes it circular
    width: 40, // Set a fixed width and height for the circle
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: -120,
    left: -40,
  },
  
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 40,
    // margin:0,
  },
  dropdownText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    flex: 1,
    backgroundColor: '#2a3030',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    marginTop:30,
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 10,
  },
  cardText: {
    color: '#6f7070',
    fontSize: 16,
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  scheduleButtonText: {
    color: '#0db588',
    marginRight: 4,
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight:7,
  },
  chatButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 20,
    color: '#303030',
    fontFamily: 'sans-serif',
  },
  modalItem: {
    padding: 10,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303030',
    marginLeft:10,
    backgroundColor: '#eee',
    padding:10,
    borderRadius:10,
  },
  modalCloseButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  modalCloseText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
  },
});

export default Ad_Screen;
