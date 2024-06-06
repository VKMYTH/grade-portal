import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TranscriptScreen: React.FC = () => {
  return (
    <ImageBackground 
      source={require('@/assets/images/graydbg.jpg')} 
      style={styles.background} 
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.schoolTitle}>Lawler Middle School</Text>
          <Text style={styles.grade}>Grade: 07</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Class</Text>
            <Text style={styles.tableHeaderText}>Description</Text>
            <Text style={styles.tableHeaderText}>SEM1</Text>
            <Text style={styles.tableHeaderText}>SEM2</Text>
            <Text style={styles.tableHeaderText}>FIN</Text>
            <Text style={styles.tableHeaderText}>Credit</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>03100500 - 1</Text>
            <Text style={styles.tableRowText}>ALG 1</Text>
            <Text style={styles.tableRowText}>93</Text>
            <Text style={styles.tableRowText}>98</Text>
            <Text style={styles.tableRowText}>96</Text>
            <Text style={styles.tableRowText}>1.000</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.section}>
          <Text style={styles.schoolTitle}>Lawler Middle School</Text>
          <Text style={styles.grade}>Grade: 08</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Class</Text>
            <Text style={styles.tableHeaderText}>Description</Text>
            <Text style={styles.tableHeaderText}>SEM1</Text>
            <Text style={styles.tableHeaderText}>SEM2</Text>
            <Text style={styles.tableHeaderText}>FIN</Text>
            <Text style={styles.tableHeaderText}>Credit</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>03100500 - 1</Text>
            <Text style={styles.tableRowText}>ALG 1</Text>
            <Text style={styles.tableRowText}>93</Text>
            <Text style={styles.tableRowText}>98</Text>
            <Text style={styles.tableRowText}>96</Text>
            <Text style={styles.tableRowText}>1.000</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.section}>
          <Text style={styles.schoolTitle}>Centennial High School</Text>
          <Text style={styles.grade}>Grade: 09</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Class</Text>
            <Text style={styles.tableHeaderText}>Description</Text>
            <Text style={styles.tableHeaderText}>SEM1</Text>
            <Text style={styles.tableHeaderText}>SEM2</Text>
            <Text style={styles.tableHeaderText}>FIN</Text>
            <Text style={styles.tableHeaderText}>Credit</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>03100500 - 1</Text>
            <Text style={styles.tableRowText}>ALG 1</Text>
            <Text style={styles.tableRowText}>93</Text>
            <Text style={styles.tableRowText}>98</Text>
            <Text style={styles.tableRowText}>96</Text>
            <Text style={styles.tableRowText}>1.000</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>03100500 - 1</Text>
            <Text style={styles.tableRowText}>ALG 1</Text>
            <Text style={styles.tableRowText}>93</Text>
            <Text style={styles.tableRowText}>98</Text>
            <Text style={styles.tableRowText}>96</Text>
            <Text style={styles.tableRowText}>1.000</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.section}>
          <Text style={styles.gpaTitle}>GPA & Rank</Text>
          <View style={styles.gpaRow}>
            <Text style={styles.gpaText}>Weighted GPA (6.0)</Text>
            <Text style={styles.gpaValue}>4.444</Text>
          </View>
          <View style={styles.gpaRow}>
            <Text style={styles.gpaText}>College (4.0)</Text>
            <Text style={styles.gpaValue}>4.0</Text>
          </View>
          <View style={styles.gpaRow}>
            <Text style={styles.gpaText}>Rank</Text>
            <Text style={styles.gpaValue}>0</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly transparent black overlay for readability
  },
  section: {    
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  schoolTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  grade: {
    fontSize: 16,
    color: '#D5A6E9',
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  tableRowText: {
    fontSize: 14,
    color: '#D5A6E9',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#663A82',
    marginVertical: 8,
  },
  gpaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  gpaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  gpaText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  gpaValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D5A6E9',
  },
});

export default TranscriptScreen;
