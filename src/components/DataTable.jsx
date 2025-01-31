import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FooterRow from './FooterRow';

const DataTable = ({data, handleEditRow, handleDeleteRow}) => {
  const columns = [
    'Sr',
    'Gross Wt',
    'Tch%',
    'Badla%',
    'Net%',
    'Stk',
    'Party Fine',
    'Actions',
  ];
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height,
  );

  useEffect(() => {
    const handleDimensionChange = ({window}) => {
      setIsLandscape(window.width > window.height);
    };

    const subscription = Dimensions.addEventListener(
      'change',
      handleDimensionChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const cellWidth = isLandscape ? 70 : 55;
  const actionWidth = isLandscape ? 80 : 100;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          {columns.map((header, index) => (
            <View
              key={index}
              style={[
                styles.headerCell,
                {width: header === 'Actions' ? actionWidth : cellWidth},
              ]}>
              <Text style={styles.headerText}>{header}</Text>
            </View>
          ))}
        </View>

        {/* Table Rows */}
        {data.map((item, index) => (
          <View
            key={index}
            style={[styles.tableRow, index % 2 === 0 && styles.evenRow]}>
            {/* Sr No column */}
            <View style={[styles.cell, {width: cellWidth}]}>
              <Text style={styles.cellText}>{index + 1}</Text>
            </View>

            {/* Data columns in specific order */}
            <View style={[styles.cell, {width: cellWidth}]}>
              <Text style={styles.cellText}>
                {Number(item.grossWt).toFixed(4)}
              </Text>
            </View>
            <View style={[styles.cell, {width: cellWidth}]}>
              <Text style={styles.cellText}>{Number(item.tch).toFixed(2)}</Text>
            </View>
            <View style={[styles.cell, {width: cellWidth}]}>
              <Text style={styles.cellText}>
                {Number(item.badla).toFixed(2)}
              </Text>
            </View>
            <View style={[styles.cell, {width: cellWidth}]}>
              <Text style={styles.cellText}>
                {(Number(item.tch) - Number(item.badla)).toFixed(4)}
              </Text>
            </View>
            <View style={[styles.cell, {width: cellWidth}]}>
              <Text style={styles.cellText}>
                {((Number(item.grossWt) * Number(item.tch)) / 100).toFixed(4)}
              </Text>
            </View>
            <View style={[styles.cell, {width: cellWidth}]}>
              <Text style={styles.cellText}>
                {(
                  (Number(item.grossWt) *
                    (Number(item.tch) - Number(item.badla))) /
                  100
                ).toFixed(4)}
              </Text>
            </View>

            {/* Actions column */}
            <View
              style={[styles.cell, styles.actionCell, {width: actionWidth}]}>
              <TouchableOpacity
                onPress={() => handleEditRow(index)}
                style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteRow(index)}
                style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
         <FooterRow 
          data={data} 
          cellWidth={cellWidth} 
          actionWidth={actionWidth}
        />
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 12,
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
    fontSize: 12,
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
    padding: 4,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#F0F0F0',
  },
  cellText: {
    color: '#444',
    fontSize: 12,
    textAlign: 'center',
  },
  actionCell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  deleteButton: {
    backgroundColor: '#FF4444',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default DataTable;
