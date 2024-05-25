import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const STAARScoresScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the STAAR Scores Screen</Text>
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

export default STAARScoresScreen;
