import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductGallery } from '../components/ProductGallery';
import { ExpandableSection } from '../components/ExpandableSection';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { RootStackParamList } from '../utils/types';
import { mockProducts } from '../utils/mockData';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export const ProductDetailScreen: React.FC<Props> = ({ route }) => {
  const { productId } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const insets = useSafeAreaInsets();

  const product = mockProducts.find(p => p.id === productId);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    Alert.alert('Thành công', 'Sản phẩm đã được thêm vào giỏ hàng!');
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Không tìm thấy sản phẩm</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 80 },
        ]}
      >
        <ProductGallery images={product.images} />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.expandableContainer}>
            <ExpandableSection title="Tasting Notes">
              <Text style={styles.tastingNotes}>{product.tastingNotes}</Text>
            </ExpandableSection>
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          {
            paddingBottom: insets.bottom + 16,
          },
        ]}
      >
        <Pressable
          style={({ pressed }) => [
            styles.addToCartButton,
            pressed && styles.addToCartButtonPressed,
          ]}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  infoContainer: {
    padding: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: '#8B0000',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 24,
  },
  expandableContainer: {
    marginTop: 8,
  },
  tastingNotes: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  addToCartButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addToCartButtonPressed: {
    opacity: 0.8,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#666',
  },
});
