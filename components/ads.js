import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';
import {
  useNavigation,
//   useRoute,
//   useIsFocused,
} from '@react-navigation/native';

const Ads = () => {
    const navigation = useNavigation();
    function handlepress(){

    }
  
  return (
    <View style={styles.container2}>
      <View style={styles.card}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate('Electric_Bike')}
      >
        <Image source={require('../assets/ad1.png')} style={styles.imageStyle} />
        </Pressable>
        <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={handlepress}
      >
        <Image source={require('../assets/ad2.png')} style={styles.imageStyle} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 10,
    width: '100%', // Take the whole width of the screen
    borderRadius: 10,
    marginBottom: 30,
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
    padding: 5,
    margin: 0,
  },
  imageStyle:{
    // flex: 1,
    width: '100%',
    height: 370,
    margin: 0,
    padding: 0,
    resizeMode:'contain',
    marginVertical: -65,
    marginBottom: -55,
  },
});

export default Ads;