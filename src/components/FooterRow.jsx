// FooterRow.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterRow = ({ data, cellWidth, actionWidth }) => {
  // Calculate totals and averages
  const calculateTotalsAndAverages = () => {
    if (!data || data.length === 0) return {
      totalGrossWt: "0.0000",
      avgTch: "0.00",
      avgNet: "0.00",
      totalStk: "0.0000",
      totalPartyFine: "0.0000"
    };

    const totalGrossWt = data.reduce((sum, item) => sum + Number(item.grossWt), 0);
    const avgTch = data.reduce((sum, item) => sum + Number(item.tch), 0) / data.length;
    const avgNet = data.reduce((sum, item) => 
      sum + (Number(item.tch) - Number(item.badla)), 0) / data.length;
    const totalStk = data.reduce((sum, item) => 
      sum + ((Number(item.grossWt) * Number(item.tch)) / 100), 0);
    const totalPartyFine = data.reduce((sum, item) => 
      sum + ((Number(item.grossWt) * (Number(item.tch) - Number(item.badla))) / 100), 0);

    return {
      totalGrossWt: totalGrossWt.toFixed(4),
      avgTch: avgTch.toFixed(2),
      avgNet: avgNet.toFixed(2),
      totalStk: totalStk.toFixed(4),
      totalPartyFine: totalPartyFine.toFixed(4)
    };
  };

  const totals = calculateTotalsAndAverages();

  return (
    <View style={styles.footerRow}>
      <View style={[styles.cell, { width: cellWidth }]}>
        <Text style={styles.footerText}>Total</Text>
      </View>
      <View style={[styles.cell, { width: cellWidth }]}>
        <Text style={styles.footerText}>{totals.totalGrossWt}</Text>
      </View>
      <View style={[styles.cell, { width: cellWidth }]}>
        <Text style={styles.footerText}>{totals.avgTch}</Text>
      </View>
      <View style={[styles.cell, { width: cellWidth }]}>
        <Text style={styles.footerText}>-</Text>
      </View>
      <View style={[styles.cell, { width: cellWidth }]}>
        <Text style={styles.footerText}>{totals.avgNet}</Text>
      </View>
      <View style={[styles.cell, { width: cellWidth }]}>
        <Text style={styles.footerText}>{totals.totalStk}</Text>
      </View>
      <View style={[styles.cell, { width: cellWidth }]}>
        <Text style={styles.footerText}>{totals.totalPartyFine}</Text>
      </View>
      <View style={[styles.cell, { width: actionWidth }]}>
        <Text style={styles.footerText}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerRow: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderTopWidth: 2,
    borderColor: '#E0E0E0',
  },
  cell: {
    padding: 3,
    paddingVertical:10,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#F0F0F0',
  },
  footerText: {
    fontWeight: '700',
    color: '#2A2A2A',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default FooterRow;