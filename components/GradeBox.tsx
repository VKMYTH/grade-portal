import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface GradeBoxProps {
  grade: number;
  subject: string;
  backgroundColor: string;
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

const GradeBox: React.FC<GradeBoxProps> = ({ grade, subject, backgroundColor, imageSource, onPress }) => {
  const getLetterGrade = (grade: number) => {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
  };

  return (
    <TouchableOpacity style={[styles.gradeBox, { backgroundColor }]} onPress={onPress}>
      <View style={styles.gradeContent}>
        <Text style={styles.percentage}>{grade}%</Text>
        <Image source={imageSource} style={styles.gradeIcon} />
        <Text style={styles.letterGrade}>{getLetterGrade(grade)}</Text>
      </View>
      <View style={styles.blackSection}>
        <Text style={styles.subjectText}>{subject}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradeBox: {
    width: '48%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 11,
  },
  gradeContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 100,
  },
  gradeIcon: {
    width: '100%',
    height: '100%',
    opacity: 0.2, // Increased transparency
    position: 'absolute',
  },
  letterGrade: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    zIndex: 1,
  },
  percentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  blackSection: {
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  subjectText: {
    fontSize: 14,
    color: 'white',
  },
});

export default GradeBox;
