import { ScrollView, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RecentlyGradedCarousel from '@/components/RecentlyGradedCarousel';
import Classes from '@/components/Classes';
import NavigationButton from '@/components/NavigationButton';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#000000', '#663A82']}
        style={styles.background}
      />
      <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
        <View style={styles.container}>
          <ThemedText type="title">GradePortal</ThemedText>
        </View>  
        <View style={styles.horizontalLine} />
        <RecentlyGradedCarousel />
        <Classes />
        <View style={styles.horizontalLine} />
        <NavigationButton
          title="Transcript"
          description="View your high school transcript"
          link="/transcript"
          imageSrc={require('@/assets/images/transcript-logo.png')}
        />
        <NavigationButton
          title="Assignment Calendar"
          description="View your past and upcoming assignments for the month"
          link="/assignmentcalendar"
          imageSrc={require('@/assets/images/assignment-calendar-logo.png')}
        />
        <NavigationButton
          title="Class Schedule"
          description="View your A and B day class schedule"
          link="/classschedule"
          imageSrc={require('@/assets/images/assignment-calendar-logo.png')}
        />
        <NavigationButton
          title="Report Cards"
          description="View your past report cards from the year"
          link="/reportcards"
          imageSrc={require('@/assets/images/report-cards-logo.png')}
        />
        <NavigationButton
          title="Progress Reports"
          description="View your past progress reports from the year"
          link="/progressreports"
          imageSrc={require('@/assets/images/report-cards-logo.png')}
        />
        <NavigationButton
          title="Texas STAAR Scores"
          description="View your Texas STAAR Scores"
          link="/staarscores"
          imageSrc={require('@/assets/images/texas-staar-scores.png')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 0,
    marginTop: 37,
  },
  horizontalLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#663A82',
    marginBottom: 10,
    marginTop: 10,
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
  scrollContainer: {
    padding: 20,
  },
  scrollContentContainer: {
    paddingBottom: 20, // Add padding to the bottom
  },
});
