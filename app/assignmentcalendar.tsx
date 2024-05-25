import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AssignmentCalendarScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Assignment Calendar Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AssignmentCalendarScreen;
