// components/Header.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Header = ({ voucherNumber, setVoucherNumber, date, setDate }) => (
  <View style={styles.header}>
    <Text style={styles.title}>Voucher Entry</Text>
    <View style={styles.inputRow}>
      <Text style={styles.label}>Voucher:</Text>
      <TextInput
        style={styles.input}
        placeholder="Voucher Number"
        placeholderTextColor="#666"
        value={voucherNumber}
        onChangeText={setVoucherNumber}
      />
    </View>
    <View style={styles.inputRow}>
      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        placeholderTextColor="#666"
        value={date}
        onChangeText={setDate}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: { 
    backgroundColor: '#F8F9FA',
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: { 
    fontSize: 22,
    fontWeight: '700',
    color: '#2A2A2A',
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  inputRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12,
  },
  label: { 
    fontSize: 15,
    width: 80,
    color: '#444',
    fontWeight: '500',
  },
  input: { 
    flex: 1, 
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#FFF',
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Header;