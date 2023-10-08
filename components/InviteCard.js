import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput, FlatList, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function InviteCard(){
    const navigation = useNavigation();
    function handlepress(){
        navigation.navigate('Invite_Code');
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
        <View style={styles.recentSearchText}>
          <Text style={{fontSize: 20, marginRight: 150, fontWeight: "bold"}}>Invite your friends to try Ola</Text>
        </View>

        {/* Recent Search */}
        <View style={styles.recentSearch}>
        <View>
          <Text style={styles.cardSearch}>GHHRHHU</Text>
          <Text style={styles.CodeLink}>Share Invite Code</Text>
          </View>
          <Image source={require('../assets/hifi.jpeg')} style={styles.imageStyle} />
        </View>
        {/* <View> */}
        
        {/* </View> */}
      </View>
      </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    width: '100%', // Take the whole width of the screen
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  
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
    padding:10,
    fontSize: 20,
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
    // paddingRight: 70,
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
    fontSize: 26,
    color: '#333',
    // marginTop: 12,
    // padding: 20,
  },
  imageStyle:{
    flex: 1,
    width: 170,
    height: 170,
    margin: 0,
    padding: 0,
  },
  CodeLink:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:20,
    color: '#007AFF',

  },
});

export default InviteCard;