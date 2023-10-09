import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native'; 

const ImageDisplay = () => {
  return (
    <ImageBackground
      source={require('../assets/Map.jpeg')}
      resizeMode="cover"
      style={styles.customImageStyle}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 16 / 9,
  },
  customImageStyle: {
    height: 525,
    width: 385,
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 0,
    },
});

export default ImageDisplay;
