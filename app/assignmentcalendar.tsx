import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

type Assignment = {
  date: string;
  title: string;
  course: string;
};

const assignments: Assignment[] = [
  { date: '2024-05-01', title: 'QC: Core War', course: 'MTH345000-2' },
  { date: '2024-05-02', title: 'TEKS: 10C Unit 4 PBA (Argument)', course: 'ELA12000B-1' },
  { date: '2024-05-02', title: 'EPC: Review Poster', course: 'SST24000B-1' },
];

const AssignmentCalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const renderAssignment = ({ item }: { item: Assignment }) => (
    <View style={styles.assignment}>
      <Text style={styles.assignmentTitle}>{item.title}</Text>
      <Text style={styles.assignmentCourse}>{item.course}</Text>
    </View>
  );

  const assignmentsForSelectedDate = assignments.filter(
    (assignment) => assignment.date === moment(selectedDate).format('YYYY-MM-DD')
  );

  const markedDates = useMemo(() => {
    const uniqueDates = Array.from(new Set(assignments.map(assignment => assignment.date)));
    return uniqueDates.map(date => ({
      date,
      dots: [{
        color: 'green',
        selectedDotColor: 'green',
      }],
    }));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>
          Welcome to your Assignment Calendar! Here you can view your upcoming assignments highlighted in green. 
          Scroll through the calendar to see different dates. Tap on a date to see the assignments due on that day. 
          This calendar helps you stay organized by keeping track of your coursework and important deadlines.
        </Text>
      </View>
      <CalendarStrip
        scrollable
        style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
        calendarColor={'#333333'}
        calendarHeaderStyle={{ color: 'white' }}
        dateNumberStyle={{ color: 'white' }}
        dateNameStyle={{ color: 'white' }}
        highlightDateNumberStyle={{ color: '#B042FF' }}
        highlightDateNameStyle={{ color: '#B042FF' }}
        onDateSelected={(date) => setSelectedDate(date.toDate())}
        markedDates={markedDates}
      />
      <View style={styles.assignmentsContainer}>
        {assignmentsForSelectedDate.length > 0 ? (
          <FlatList
            data={assignmentsForSelectedDate}
            renderItem={renderAssignment}
            keyExtractor={(item) => item.title}
          />
        ) : (
          <Text style={styles.noAssignmentsText}>No assignments for this date.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  instructionsContainer: {
    padding: 16,
    backgroundColor: '#444444',
    borderBottomWidth: 1,
    borderBottomColor: '#555555',
  },
  instructionsText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  assignmentsContainer: {
    flex: 1,
    padding: 16,
  },
  assignment: {
    backgroundColor: '#B042FF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  assignmentCourse: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  noAssignmentsText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AssignmentCalendarScreen;
