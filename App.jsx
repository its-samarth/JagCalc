import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Modal, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/components/Header';
import DataTable from './src/components/DataTable';
import ModalComponent from './src/components/ModalComponent';

const App = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState({});
  const [voucherNumber, setVoucherNumber] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    const savedData = await AsyncStorage.getItem('tableData');
    if (savedData) setData(JSON.parse(savedData));
  };

  const saveData = async (newData) => {
    setData(newData);
    await AsyncStorage.setItem('tableData', JSON.stringify(newData));
  };

  const handleAddRow = () => {
    setCurrentRow({ type: '', itemName: '', grossWt: '', tch: '', badla: '', fineWt: '', labRate: '', amount: '' });
    setModalVisible(true);
  };

  const handleEditRow = (index) => {
    setCurrentRow({ ...data[index], index });
    setModalVisible(true);
  };

  const handleDeleteRow = (index) => {
    Alert.alert('Delete Row', 'Are you sure you want to delete this row?', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => saveData(data.filter((_, i) => i !== index)) },
    ]);
  };

  const handleSaveRow = () => {
    const updatedData = [...data];
    if (currentRow.index !== undefined) {
      updatedData[currentRow.index] = currentRow;
    } else {
      updatedData.push(currentRow);
    }
    saveData(updatedData);
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.container}>
        <Header
          voucherNumber={voucherNumber}
          setVoucherNumber={setVoucherNumber}
          date={date}
          setDate={setDate}
        />

        <DataTable
          data={data}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddRow}>
          <Text style={styles.addButtonText}>Add Row</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <ModalComponent
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          currentRow={currentRow}
          setCurrentRow={setCurrentRow}
          handleSave={handleSaveRow}
        />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },
  container: { 
    padding: 16 
  },
  addButton: { 
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonText: { 
    color: '#2A2A2A',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});

export default App;