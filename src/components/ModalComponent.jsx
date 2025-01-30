// components/ModalComponent.js
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ModalComponent = ({ visible, onClose, currentRow, setCurrentRow, handleSave }) => {
  if (!visible) return null;

  const fields = [
    ['type', 'itemName'],
    ['grossWt', 'tch'],
    ['badla', 'fineWt'],
    ['labRate', 'amount'],
   
  ];

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {/* Modal Header */}
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Jagcalc</Text>
          <View style={styles.headerLine} />
        </View>

        {/* Input Fields */}
        {fields.map((fieldPair, index) => (
          <View key={index} style={styles.inputRow}>
            {fieldPair.map((field) => (
              <TextInput
                key={field}
                style={styles.modalInput}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                placeholderTextColor="#888"
                value={currentRow[field]}
                onChangeText={(text) => setCurrentRow({ ...currentRow, [field]: text })}
              />
            ))}
          </View>
        ))}

        {/* Action Buttons */}
        <View style={styles.modalActions}>
          <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancelButton]}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} style={[styles.button, styles.saveButton]}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '55%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 10,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '', // Golden yellow
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  headerLine: {
    width: '30%',
    height: 4,
    backgroundColor: '#FFD700',
    borderRadius: 2,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  modalInput: {
    width: '48%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 25,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#FFD700',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default ModalComponent;