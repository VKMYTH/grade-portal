import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import GradeBox from '@/components/GradeBox';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { LinearGradient } from 'expo-linear-gradient';

interface Grade {
  subject: string;
  grade: number;
  backgroundColor: string;
  imageSource: any;
}

const assignImage = (subject: string) => {
  if (subject.includes('Computer')) {
    return require('@/assets/images/code_comp.jpeg');
  } else if (subject.includes('History')) {
    return require('@/assets/images/partial-portal-logo.png');
  } else if (subject.includes('Math')) {
    return require('@/assets/images/math_logo.png');
  } else if (subject.includes('Music')) {
    return require('@/assets/images/music_logo.png');
  } else if (subject.includes('English') || subject.includes('Language')) {
    return require('@/assets/images/misc_logo.jpeg');
  } else if (subject.includes('Science') || subject.includes('Biology') || subject.includes('Physics') || subject.includes('Chemistry')) {
    return require('@/assets/images/science.png');
  } else {
    return require('@/assets/images/misc_logo.jpeg');
  }
};

const truncateText = (text: string, limit: number) => {
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

const gradesData: { [key: string]: Grade[] } = {
  1: [
    { subject: 'AP Seminar', grade: 100, backgroundColor: '#CCFFCC', imageSource: assignImage('AP Seminar') },
    { subject: 'AP World History', grade: 87, backgroundColor: '#FFE4B2', imageSource: assignImage('AP World History') },
    { subject: 'AP Computer Science', grade: 79, backgroundColor: '#FFFFE0', imageSource: assignImage('AP Computer Science') },
    { subject: 'AP Biology', grade: 69, backgroundColor: '#FFCCCC', imageSource: assignImage('AP Biology') },
    { subject: 'AP Math', grade: 93, backgroundColor: '#CCFFCC', imageSource: assignImage('AP Latavious') },
    { subject: 'AP Chemistry', grade: 84, backgroundColor: '#FFE4B2', imageSource: assignImage('AP Chemistry') },
    { subject: 'AP Physics', grade: 75, backgroundColor: '#FFFFE0', imageSource: assignImage('AP Physics') },
    { subject: 'AP Music', grade: 95, backgroundColor: '#CCFFCC', imageSource: assignImage('AP Music') },
  ],
  // Define other marking periods similarly...
};

const GradesScreen: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedMarkingPeriod, setSelectedMarkingPeriod] = useState('1');

  const handleGradePress = (grade: Grade) => {
    setSelectedGrade(grade);
  };

  const handleCloseModal = () => {
    setSelectedGrade(null);
  };

  const handleMarkingPeriodChange = (period: string) => {
    setSelectedMarkingPeriod(period);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#663A82']}
        style={styles.background}
      />
      <ScrollView>
        <View style={styles.bigContainer}>
          <View style={styles.headerContainer}>
            <ThemedText type="title">Grades</ThemedText>
            <RNPickerSelect
              onValueChange={(value) => handleMarkingPeriodChange(value)}
              items={[
                { label: 'Marking Period 1', value: '1' },
                { label: 'Marking Period 2', value: '2' },
                { label: 'Marking Period 3', value: '3' },
                { label: 'Marking Period 4', value: '4' },
              ]}
              style={pickerSelectStyles}
              value={selectedMarkingPeriod}
            />
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.gradesContainer}>
            {gradesData[selectedMarkingPeriod].map((item, index) => (
              <GradeBox 
                key={index} 
                grade={item.grade} 
                subject={truncateText(item.subject, 20)} 
                backgroundColor={item.backgroundColor}
                imageSource={item.imageSource}
                onPress={() => handleGradePress(item)} 
              />
            ))}
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.section}>
            <Text style={styles.gpaTitle}>GPA Information</Text>
            <View style={styles.gpaRow}>
              <Text style={styles.gpaText}>Semester GPA</Text>
              <Text style={styles.gpaValue}>4.444</Text>
            </View>
            <View style={styles.gpaRow}>
              <Text style={styles.gpaText}>Cumulative GPA</Text>
              <Text style={styles.gpaValue}>4.0</Text>
            </View>
            <View style={styles.gpaRow}>
              <Text style={styles.gpaText}>Estimated Cumulative GPA</Text>
              <Text style={styles.gpaValue}>0</Text>
            </View>
          </View>
          {selectedGrade && (
            <Modal
              transparent={true}
              visible={true}
              animationType="slide"
              onRequestClose={handleCloseModal}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                  {/* Additional content for the modal can go here */}
                </View>
              </View>
            </Modal>
          )}
        </View>
      </ScrollView>
    </View>  
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#333333',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#333333',
  },
});

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  gradesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gpaContainer: {
    backgroundColor: '#B042FF',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  gpaHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  gpaBox: {
    backgroundColor: '#D8BFD8',
    borderRadius: 10,
    padding: 10,
  },
  gpaText: {
    fontSize: 16,
    color: '#D5A6E9',
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#B042FF',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  horizontalLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#663A82',
    marginTop: 5,
    marginBottom: 5,
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
  gpaValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default GradesScreen;
