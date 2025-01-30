// components/DataTable.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const DataTable = ({ data, handleEditRow, handleDeleteRow }) => {
  const columns = ['Type', 'Item Name', 'Gross Wt', 'Tch%', 'Badla%', 'Fine Wt', 'Lab Rate', 'Amount', 'Actions'];
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          {columns.map((header, index) => (
            <View key={index} style={[styles.headerCell, { width: header === 'Actions' ? 140 : 120 }]}>
              <Text style={styles.headerText}>{header}</Text>
            </View>
          ))}
        </View>

        {/* Table Rows */}
        {data.map((item, index) => (
          <View key={index} style={[styles.tableRow, index % 2 === 0 && styles.evenRow]}>
            {Object.values(item).map((value, cellIndex) => (
              <View key={cellIndex} style={[styles.cell, { width: columns[cellIndex] === 'Actions' ? 140 : 120 }]}>
                <Text style={styles.cellText}>{value}</Text>
              </View>
            ))}
            <View style={[styles.cell, styles.actionCell]}>
              <TouchableOpacity 
                onPress={() => handleEditRow(index)}
                style={styles.editButton}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => handleDeleteRow(index)}
                style={styles.deleteButton}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tableHeader: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF',
    paddingVertical: 4,
    borderBottomWidth: 2, 
    borderColor: '#E0E0E0',
    
  },
  headerCell: {
    borderRightWidth: 1,
    borderColor: '#F0F0F0',
   
  },
  headerText: {
    fontWeight: '700',
    color: '#2A2A2A',
    fontSize: 14,
    textAlign: 'center',
  },
  tableRow: { 
    flexDirection: 'row', 
  
    backgroundColor: '#FFF',
    borderBottomWidth: 1, 
    borderColor: '#F5F5F5',
  },
  evenRow: { 
    backgroundColor: '#F8F9FA',
  },
  cell: {
    padding: 6,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#F0F0F0',
  },
  cellText: {
    color: '#444',
    fontSize: 14,
    textAlign: 'center',
  },
  actionCell: {
    flexDirection: 'row',
  
  
  },
  editButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  deleteButton: {
    backgroundColor: '#FF4444',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default DataTable;