import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const BottomComponent = () => {
  const handleSupportClick = async () => {
    const upiLink = "upi://pay?pa=7046755055@pthdfc&pn=Samarth&cu=INR";
    try {
      await Linking.openURL(upiLink);
    } catch (error) {
      alert("Unable to open UPI app. Please try manually.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loveSection}>
        <Text style={styles.madeWithLove}>Made with ❤️ by Samarth</Text>
      </View>
      <Text style={styles.supportText}>Want to support the developer?</Text>
      <TouchableOpacity style={styles.supportButton} onPress={handleSupportClick}>
        <Text style={styles.buttonText}>Support via UPI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5b3b1',
    padding: 20,
    alignItems: 'center',
    borderRadius: 12,
    elevation: 10,
  },
  loveSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  madeWithLove: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  supportText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  supportButton: {
    backgroundColor: '#2b2a2a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default BottomComponent;
