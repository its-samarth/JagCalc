import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>JagCalc</Text>
        <View style={styles.headerLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'white',
    paddingVertical: 10, // Reduced height by half
    paddingHorizontal: 20,
    elevation: 5, // Shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
  
 
  },
  modalHeader: {
    alignItems: 'flex-start', // Align the header content to the left
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24, // Slightly smaller font size
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerLine: {
    width: '30%',
    height: 4,
    backgroundColor: '#FFD700',
    borderRadius: 3, // Slight curve for a subtle swirl effect
   
  },
});

export default TopBar;
