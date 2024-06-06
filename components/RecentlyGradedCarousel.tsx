import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = width - 160;

const RecentlyGradedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = React.useRef<ScrollView>(null);

  const items = [
    { assignment: 'Assignment 1', date: '2024-05-20', grade: 99 },
    { assignment: 'Assignment 2', date: '2024-05-21', grade: 95 },
    { assignment: 'Assignment 3', date: '2024-05-22', grade: 80 },
    { assignment: 'Assignment 4', date: '2024-05-22', grade: 80 },
    { assignment: 'Assignment 5', date: '2024-05-22', grade: 80 },
    { assignment: 'Assignment 6', date: '2024-05-22', grade: 80 },
    { assignment: 'Assignment 7', date: '2024-05-22', grade: 80 },
  ];

  const onScroll = (event: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / cardWidth);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    scrollViewRef.current?.scrollTo({ x: index *(cardWidth + 15), animated: true });
  };

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.headerText}>Recently Graded</Text>
      <View style={styles.arrowContainer}>
        <TouchableOpacity
          onPress={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
          disabled={activeIndex === 0}
          style={styles.arrowButton}
        >
          <AntDesign name="left" size={24} color={activeIndex === 0 ? 'gray' : 'white'} />
        </TouchableOpacity>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollViewContainer}
          decelerationRate="fast"
          ref={scrollViewRef}
          snapToInterval={cardWidth}
          snapToAlignment="center"
        >
          {items.map((item, index) => (
            <View key={index} style={[styles.card, { width: cardWidth}]}>
              <Text style={styles.assignmentText}>{item.assignment}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
              <View style={styles.gradeContainer}>
                <Text style={styles.gradeText}>{item.grade}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => scrollToIndex(Math.min(activeIndex + 1, items.length - 1))}
          disabled={activeIndex === items.length - 1}
          style={styles.arrowButton}
        >
          <AntDesign name="right" size={24} color={activeIndex === items.length - 1 ? 'gray' : 'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  arrowButton: {
    paddingHorizontal: 2,
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#2E2E2E',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 8, // Adjust margin to better fit the card on the screen
    alignItems: 'center',
  },
  assignmentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D5A6E9',
  },
  dateText: {
    fontSize: 14,
    color: '#D5A6E9',
    marginBottom: 16,
  },
  gradeContainer: {
    backgroundColor: '#A9D18E',
    borderRadius: 8,
    padding: 8,
  },
  gradeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default RecentlyGradedCarousel;
