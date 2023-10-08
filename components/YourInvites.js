import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function YourInvites() {
    const navigation = useNavigation();
    function handleSeeAll(){
        navigation.navigate('All_Invites');
    }
    
  return (
    <View style={[styles.card, Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow]}>
      <View style={styles.topPart}>
        <View style={styles.part}>
          <Text style={styles.amount}>₹0</Text>
          <Text style={styles.text}>Earned</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.part}>
          <Text style={styles.amount}>₹0</Text>
          <Text style={styles.text}>Pending</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.bottomPart}>
        <TouchableOpacity style={styles.seeAll} onPress={handleSeeAll}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="arrow-forward" color={'#5e5c5c'} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#d5d4d9',
        width: 1,
        height: '80%',
      },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
    // elevation: 5,
    marginLeft: 20,
    marginRight: 10,
  },
  topPart: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomPart: {
    marginTop: 10, // Add some space between top and bottom parts
  },
  part: {
    flex: 1,
    alignItems: 'center',
  },
  amount: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#777',
  },
  separator: {
    borderBottomWidth: 1, // Horizontal separator
    borderBottomColor: '#d5d4d9',
    width: '100%', // Full width
    marginVertical: 10, // Adjust spacing
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  seeAllText: {
    color: '#585759',
    fontSize: 18,
    marginRight: 240,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
  },
  androidShadow: {
    elevation: 5, // Android shadow effect
  },
  iosShadow: {
    shadowColor: 'black', // iOS shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default YourInvites;
