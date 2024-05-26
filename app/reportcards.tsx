import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

type ReportCardData = {
  course: string;
  description: string;
  period: string;
  teacher: string;
  room: string;
  attCredit: string;
  emCredit: string;
  q1: string;
  q2: string;
  sem1: string;
  q3: string;
  q4: string;
  sem2: string;
  fin: string;
  cit: string;
  cm1: string;
  cm2: string;
  ytda: string;
  ytdt: string;
};

type CommentLegend = {
  [key: string]: string;
};

const reportCardPeriods = ['1', '2', '3', '4'];

const reportCardData: { [key: string]: ReportCardData[] } = {
  '1': [
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '1', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '5', cm2: '1', ytda: '1', ytdt: '0' },
  ],
  '2': [
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '1', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '5', cm2: '1', ytda: '1', ytdt: '0' },
  ],
  '3': [
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '1', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '5', cm2: '1', ytda: '1', ytdt: '0' },
  ],
  '4': [
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '1', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '5', cm2: '', ytda: '1', ytdt: '0' },
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '2', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '', cm2: '', ytda: '1', ytdt: '0' },
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '3', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '', cm2: '', ytda: '1', ytdt: '0' },
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '4', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '', cm2: '', ytda: '1', ytdt: '0' },
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '5', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '', cm2: '', ytda: '1', ytdt: '0' },
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '6', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '', cm2: '', ytda: '1', ytdt: '0' },
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '7', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '', cm2: '', ytda: '1', ytdt: '0' },
    { course: 'MTH34200A-2', description: 'Pre Calculus Adv S1', period: '8', teacher: 'Adams, April', room: 'B204', attCredit: '0.5000', emCredit: '0.5000', q1: '100', q2: '90', sem1: '95', q3: '92', q4: '97', sem2: '95', fin: '', cit: '', cm1: '', cm2: '', ytda: '1', ytdt: '0' },
  ],
};

const commentLegend: CommentLegend = {
  '1': 'Needs Improvement',
  '2': 'Satisfactory',
  '3': 'Good Effort',
  '4': 'Excellent',
  '5': 'Working Very Hard',
};

const ReportCardsScreen: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('4');

  const renderReportCardItem = ({ course, description, period, teacher, room, attCredit, emCredit, q1, q2, sem1, q3, q4, sem2, fin, cit, cm1, cm2, ytda, ytdt }: ReportCardData) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{course}</Text>
      <Text style={styles.cell}>{description}</Text>
      <Text style={styles.cell}>{period}</Text>
      <Text style={styles.cell}>{teacher}</Text>
      <Text style={styles.cell}>{room}</Text>
      <Text style={styles.cell}>{attCredit}</Text>
      <Text style={styles.cell}>{emCredit}</Text>
      <Text style={styles.cell}>{q1}</Text>
      <Text style={styles.cell}>{q2}</Text>
      <Text style={styles.cell}>{sem1}</Text>
      <Text style={styles.cell}>{q3}</Text>
      <Text style={styles.cell}>{q4}</Text>
      <Text style={styles.cell}>{sem2}</Text>
      <Text style={styles.cell}>{fin}</Text>
      <Text style={styles.cell}>{cit}</Text>
      <Text style={styles.cell}>{cm1}</Text>
      <Text style={styles.cell}>{cm2}</Text>
      <Text style={styles.cell}>{ytda}</Text>
      <Text style={styles.cell}>{ytdt}</Text>
    </View>
  );

  const renderComments = (cm1: string, cm2: string) => {
    const comments = [];
    if (cm1 in commentLegend) comments.push(`${cm1}: ${commentLegend[cm1]}`);
    if (cm2 in commentLegend) comments.push(`${cm2}: ${commentLegend[cm2]}`);
    return comments.map((comment, index) => (
      <Text key={index} style={styles.commentCell}>{comment}</Text>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Report Card For Reporting Period</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedPeriod(value)}
          items={reportCardPeriods.map((period) => ({ label: period, value: period }))}
          value={selectedPeriod}
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
            <Text style={styles.headerCell}>Att.Credit</Text>
            <Text style={styles.headerCell}>Em.Credit</Text>
            <Text style={styles.headerCell}>Q1</Text>
            <Text style={styles.headerCell}>Q2</Text>
            <Text style={styles.headerCell}>SEM1</Text>
            <Text style={styles.headerCell}>Q3</Text>
            <Text style={styles.headerCell}>Q4</Text>
            <Text style={styles.headerCell}>SEM2</Text>
            <Text style={styles.headerCell}>FIN</Text>
            <Text style={styles.headerCell}>CIT</Text>
            <Text style={styles.headerCell}>CM1</Text>
            <Text style={styles.headerCell}>CM2</Text>
            <Text style={styles.headerCell}>YTDA</Text>
            <Text style={styles.headerCell}>YTDT</Text>
          </View>
          {reportCardData[selectedPeriod].map(renderReportCardItem)}
        </View>
      </ScrollView>
      <View style={styles.commentSection}>
        <Text style={styles.commentHeader}>Comment Legend</Text>
        {reportCardData[selectedPeriod].map(({ cm1, cm2 }, index) => (
          <View key={index}>
            {renderComments(cm1, cm2)}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // Purple background
  },
  header: {
    padding: 10,
    backgroundColor: '#B042FF', // Lighter purple background
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
    backgroundColor: '#B042FF', // Lighter purple background
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
    color: 'white',
  },
  commentSection: {
    padding: 10,
    backgroundColor: '#B042FF', // Lighter purple background
    borderTopWidth: 1,
    borderColor: '#D8BFD8', // Lavender border
  },
  commentHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  commentCell: {
    color: 'white',
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

export default ReportCardsScreen;
