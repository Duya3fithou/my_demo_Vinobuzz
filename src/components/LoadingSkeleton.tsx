import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const LoadingSkeleton: React.FC = () => {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    return () => animation.stop();
  }, [pulseAnim]);

  const opacity = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.galleryPlaceholder, { opacity }]} />

      <View style={styles.contentContainer}>
        <Animated.View style={[styles.titlePlaceholder, { opacity }]} />
        <Animated.View style={[styles.pricePlaceholder, { opacity }]} />
        <Animated.View style={[styles.descriptionPlaceholder, { opacity }]} />
        <Animated.View
          style={[styles.descriptionPlaceholder, { opacity, width: '80%' }]}
        />
        <Animated.View
          style={[styles.descriptionPlaceholder, { opacity, width: '90%' }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  galleryPlaceholder: {
    width: SCREEN_WIDTH,
    height: 400,
    backgroundColor: '#E0E0E0',
  },
  contentContainer: {
    padding: 24,
  },
  titlePlaceholder: {
    width: '70%',
    height: 28,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 12,
  },
  pricePlaceholder: {
    width: '30%',
    height: 24,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 16,
  },
  descriptionPlaceholder: {
    width: '100%',
    height: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 8,
  },
});
