import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Link } from 'expo-router';

type NavigationButtonProps = {
  title: string;
  description: string;
  link: string;
  imageSrc: ImageSourcePropType; // Adding imageSrc prop
};

const NavigationButton: React.FC<NavigationButtonProps> = ({ title, description, link, imageSrc }) => {
  return (
    <Link href={link} asChild>
      <TouchableOpacity style={styles.button}>
        <View style={styles.logoPlaceholder}>
          <Image source={imageSrc} style={styles.logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    marginBottom: 10,
  },
  logoPlaceholder: {
    width: 33,
    height: 33,
    marginRight: 16,
    marginLeft: 8,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    color: '#D5A6E9',
  },
});

export default NavigationButton;
