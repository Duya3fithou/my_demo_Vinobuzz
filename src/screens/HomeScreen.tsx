import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatFAB } from '../components/ChatFAB';
import { RootStackParamList } from '../utils/types';
import { ChatOverlay } from '../components/ChatOverlay';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleNavigateToProduct = (productId: string) => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🍷</Text>
        <Text style={styles.title}>VinoBuzz</Text>
        <Text style={styles.subtitle}>Wine Discovery Assistant</Text>
      </View>

      <ChatFAB onPress={() => setIsChatVisible(true)} />

      <ChatOverlay
        visible={isChatVisible}
        onClose={() => setIsChatVisible(false)}
        onNavigateToProduct={handleNavigateToProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#8B0000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});
