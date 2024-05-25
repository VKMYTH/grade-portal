import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const RecentlyGradedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { assignment: 'Assignment 1', date: '2024-05-20', grade: 99 },
    { assignment: 'Assignment 2', date: '2024-05-21', grade: 95 },
  ];

  const onScroll = (event: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.headerText}>Recently Graded</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.assignmentText}>{item.assignment}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
            <View style={styles.gradeContainer}>
              <Text style={styles.gradeText}>{item.grade}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {items.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: activeIndex === index ? '#FFFFFF' : '#808080' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: '#B042FF',
    padding: 16,
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
  scrollViewContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#2E2E2E',
    borderRadius: 10,
    width: width * 0.7,
    padding: 16,
    marginHorizontal: 8,
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
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default RecentlyGradedCarousel;
