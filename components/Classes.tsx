import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Classes = () => {
  const classes = [
    { period: 1, name: 'AP Physics 1 S2' },
    { period: 2, name: 'AP Computer Science Principles' },
    { period: 3, name: 'Spanish 3 ADV' },
    { period: 4, name: 'AP Computer Science A' },
  ];

  return (
    <View style={styles.classesContainer}>
      <Text style={styles.headerText}>Today's Classes</Text>
      {classes.map((classItem, index) => (
        <View key={index} style={styles.classItem}>
          <View style={styles.periodContainer}>
            <Text style={styles.periodText}>{classItem.period}</Text>
          </View>
          <View style={styles.classNameContainer}>
            <Text numberOfLines={1} style={styles.classNameText}>{classItem.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  classesContainer: {
    backgroundColor: '#B042FF',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  classItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
  },
  periodContainer: {
    backgroundColor: '#2E2E2E',
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  periodText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D5A6E9',
  },
  classNameContainer: {
    backgroundColor: '#2E2E2E',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  classNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D5A6E9',
  },
});

export default Classes;
