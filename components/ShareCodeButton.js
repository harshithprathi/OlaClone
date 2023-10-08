import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';
import Toast from 'react-native-toast-message';
import { FontAwesome } from '@expo/vector-icons';

const ShareCodeButton = () => {
  const copyToClipboard = async () => {
    await Clipboard.setString('G44RHHU'); // Copy text to clipboard

    // Show a success message for 2 seconds
    Toast.show({
      type: 'success',
      text1: 'Coupon Code Copied',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 40, // Adjust this value as needed
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <Text style={styles.title}>Your Referral Code</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>G44RHHU</Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <FontAwesome name="copy" size={20} color="black" style={styles.copyIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0', // Light background color
    borderRadius: 10,
    padding: 16,
    marginTop: 240,
  },
  upperPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#e7e4eb",
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    fontSize: 16,
    marginRight: 10,
  },
  copyIcon: {
    fontSize: 20,
  },
  lowerPart: {
    marginTop: 10,
  },
  shareButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ShareCodeButton;
