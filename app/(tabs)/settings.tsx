import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have react-native-vector-icons installed
import { ThemedText } from '@/components/ThemedText';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#000000', '#663A82']}
        style={styles.background}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <ThemedText type="title">Settings</ThemedText>
        </View>  

        <View style={styles.profileContainer}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileIconText}>V</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Vaibhav Reddy Kolli</Text>
            <Text style={styles.profileId}>210033</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Info</Text>
          <Text style={styles.sectionItem}>Name: Vaibhav Reddy Kolli</Text>
          <Text style={styles.sectionItem}>Birthdate: 9/26/2008</Text>
          <Text style={styles.sectionItem}>Counselor: Yeates, Cara</Text>
          <Text style={styles.sectionItem}>Email: yeatesc@friscoisd.org</Text>
          <Text style={styles.sectionItem}>Building: Centennial High School</Text>
          <Text style={styles.sectionItem}>Grade: 10</Text>
          <Text style={styles.sectionItem}>Student Id: 210033</Text>
        </View>

        <TouchableOpacity style={styles.navButton}>
          <Icon name="document-text-outline" size={20} color="#fff" />
          <Text style={styles.navButtonText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="help-circle-outline" size={20} color="#fff" />
          <Text style={styles.navButtonText}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.navButtonText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Grayd v-1.0 © 2024 Vaibhav Kolli</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
  },
  profileIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  profileIconText: {
    fontSize: 24,
    color: '#fff',
  },
  profileName: {
    fontSize: 18,
    color: '#fff',
  },
  profileId: {
    fontSize: 14,
    color: '#ddd',
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  sectionItem: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 5,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    marginBottom: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  footerText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
