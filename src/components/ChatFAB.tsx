import React from 'react';
import { Pressable, Text, StyleSheet, Platform } from 'react-native';

interface ChatFABProps {
  onPress: () => void;
}

export const ChatFAB: React.FC<ChatFABProps> = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.fab,
        pressed && styles.fabPressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.icon}>💬</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  fabPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  icon: {
    fontSize: 28,
  },
});
