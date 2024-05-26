import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ClassScheduleScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.quarterTitle}>Q1 & Q2</Text>
        <View style={styles.scheduleContainer}>
          <Text style={styles.dayTitle}>A Day</Text>
          <View style={styles.horizontalLine} />
          <ClassRow period="1" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="2" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="3" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="4" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <Text style={styles.dayTitle}>B Day</Text>
          <View style={styles.horizontalLine} />
          <ClassRow period="1" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="2" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="3" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="4" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.section}>
        <Text style={styles.quarterTitle}>Q3 & Q4</Text>
        <View style={styles.scheduleContainer}>
          <Text style={styles.dayTitle}>A Day</Text>
          <View style={styles.horizontalLine} />
          <ClassRow period="1" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="2" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="3" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="4" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <Text style={styles.dayTitle}>B Day</Text>
          <View style={styles.horizontalLine} />
          <ClassRow period="1" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="2" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="3" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
          <ClassRow period="4" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.section}>
        <ClassRow period="ADV" title="AP Physics 1 S1" teacher="Gonzalez-Vega, Kristin" room="AA203" />
      </View>
    </ScrollView>
  );
};

const ClassRow: React.FC<{ period: string; title: string; teacher: string; room: string }> = ({ period, title, teacher, room }) => {
  return (
    <View style={styles.classRow}>
      <View style={styles.periodContainer}>
        <Text style={styles.period}>{period}</Text>
      </View>
      <View style={styles.classInfo}>
        <Text style={styles.classTitle}>{title}</Text>
        <Text style={styles.teacher}>{teacher}</Text>
      </View>
      <Text style={styles.room}>{room}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333333',
  },
  section: {
    backgroundColor: '#B042FF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  quarterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  scheduleContainer: {
    backgroundColor: '#B042FF',
    borderRadius: 8,
    padding: 16,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#663A82',
    marginVertical: 8,
  },
  classRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  periodContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  period: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#B042FF',
  },
  classInfo: {
    flex: 1,
  },
  classTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  teacher: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  room: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ClassScheduleScreen;
