import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';

const STAARScoresScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>STAAR Scores</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instructions}>
          Click the link below to access your Texas STAAR scores. Upon opening, enter your 6 Digit ID, Date of Birth, and your Legal First Name.
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL('https://tx-familyportal.cambiumast.com/#/home')}>
          https://tx-familyportal.cambiumast.com/#/home
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // Dark background
  },
  header: {
    padding: 20,
    backgroundColor: '#B042FF', // Lighter purple background
    borderBottomWidth: 2,
    borderColor: '#D8BFD8', // Lavender border
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
    backgroundColor: '#4B0082', // Indigo background for content
    borderRadius: 10,
    margin: 20,
    alignItems: 'center', // Center align the content
  },
  instructions: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center', // Center align the text
  },
  link: {
    fontSize: 18,
    color: '#ADD8E6', // Light blue color for the link
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center', // Center align the link text
  },
});

export default STAARScoresScreen;
