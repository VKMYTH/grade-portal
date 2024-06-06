import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

type ProgressReportData = {
  course: string;
  description: string;
  period: string;
  teacher: string;
  room: string;
  ipr: string;
  cm1: string;
  cm2: string;
  cit: string;
  abs: string;
  tdy: string;
};

type CommentLegend = {
  [key: string]: string;
};

const progressReportDates = ['04/01/24', '04/15/24', '04/29/24'];

const progressReportData: { [key: string]: ProgressReportData[] } = {
  '04/01/24': [
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '1', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '23', cm2: '', cit: '', abs: '1', tdy: '1' },
    // Add more data as needed
  ],
  '04/15/24': [
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '1', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '23', cm2: '', cit: '', abs: '1', tdy: '1' },
    // Add more data as needed
  ],
  '04/29/24': [
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '1', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '23', cm2: '', cit: '', abs: '1', tdy: '1' },
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '2', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '', cm2: '', cit: '', abs: '1', tdy: '1' },
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '3', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '', cm2: '', cit: '', abs: '1', tdy: '1' },
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '4', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '', cm2: '', cit: '', abs: '1', tdy: '1' },
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '5', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '', cm2: '', cit: '', abs: '1', tdy: '1' },
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '6', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '', cm2: '', cit: '', abs: '1', tdy: '1' },
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '7', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '', cm2: '', cit: '', abs: '1', tdy: '1' },
    { course: 'MTH34200B-2', description: 'Pre Calculus Adv S2', period: '8', teacher: 'Adams, April', room: 'B204', ipr: '92', cm1: '', cm2: '', cit: '', abs: '1', tdy: '1' },
  ],
};

const commentLegend: CommentLegend = {
  '23': 'Sometimes does not complete or turn in assignments',
  // Add more comments as needed
};

const ProgressReportsScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('04/29/24');

  const renderProgressReportItem = ({ item }: { item: ProgressReportData }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.course}</Text>
      <Text style={styles.cell}>{item.description}</Text>
      <Text style={styles.cell}>{item.period}</Text>
      <Text style={styles.cell}>{item.teacher}</Text>
      <Text style={styles.cell}>{item.room}</Text>
      <Text style={styles.cell}>{item.ipr}</Text>
      <Text style={styles.cell}>{item.cm1}</Text>
      <Text style={styles.cell}>{item.cm2}</Text>
      <Text style={styles.cell}>{item.cit}</Text>
      <Text style={styles.cell}>{item.abs}</Text>
      <Text style={styles.cell}>{item.tdy}</Text>
    </View>
  );

  const renderCommentLegend = (cm1: string, cm2: string) => {
    const comments = [];
    if (cm1 in commentLegend) comments.push(`${cm1}: ${commentLegend[cm1]}`);
    if (cm2 in commentLegend) comments.push(`${cm2}: ${commentLegend[cm2]}`);
    if (comments.length === 0) return null;

    return comments.map((comment, index) => (
      <Text key={index} style={styles.commentCell}>{comment}</Text>
    ));
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/graydbg.jpg')} 
      style={styles.background} 
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Interim Progress Report For</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedDate(value)}
          items={progressReportDates.map((date) => ({ label: date, value: date }))}
          value={selectedDate}
          style={pickerSelectStyles}
        />
      </View>
      <ScrollView horizontal style={styles.horizontalScroll}>
        <View style={styles.table}>
          <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.headerCell}>Course</Text>
            <Text style={styles.headerCell}>Description</Text>
            <Text style={styles.headerCell}>Period</Text>
            <Text style={styles.headerCell}>Teacher</Text>
            <Text style={styles.headerCell}>Room</Text>
            <Text style={styles.headerCell}>IPR</Text>
            <Text style={styles.headerCell}>CM1</Text>
            <Text style={styles.headerCell}>CM2</Text>
            <Text style={styles.headerCell}>CIT</Text>
            <Text style={styles.headerCell}>ABS</Text>
            <Text style={styles.headerCell}>TDY</Text>
          </View>
          <FlatList
            data={progressReportData[selectedDate]}
            renderItem={renderProgressReportItem}
            keyExtractor={(item) => item.course + item.period}
          />
        </View>
      </ScrollView>
      <View style={styles.commentSection}>
        <Text style={styles.commentHeader}>Comment Legend</Text>
        {progressReportData[selectedDate].map((item, index) => {
          const comments = renderCommentLegend(item.cm1, item.cm2);
          return comments ? (
            <View key={index} style={styles.commentRow}>
              {comments}
            </View>
          ) : null;
        })}
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    borderColor: '#D8BFD8', // Lavender border
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
  horizontalScroll: {
    flex: 1,
  },
  table: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D8BFD8', // Lavender border
    paddingVertical: 5,
  },
  headerRow: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  cell: {
    width: 100, // Adjust the width as necessary
    padding: 5,
    textAlign: 'center',
    color: 'white',
  },
  headerCell: {
    width: 100, // Adjust the width as necessary
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#D5A6E9',
  },
  commentSection: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 1,
    borderColor: '#D8BFD8', // Lavender border
  },
  commentHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D5A6E9',
    marginBottom: 5,
  },
  commentRow: {
    borderBottomWidth: 1,
    borderColor: '#D8BFD8', // Lavender border
    paddingVertical: 5,
  },
  commentCell: {
    color: 'white',
  },
  background: {
    flex: 1,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#D8BFD8', // Lavender background for input
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#D8BFD8', // Lavender background for input
  },
};

export default ProgressReportsScreen;
