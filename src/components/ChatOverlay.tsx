import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements'
import { mockChatMessages } from '../utils/mockData';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ChatOverlayProps {
  visible: boolean;
  onClose: () => void;
  onNavigateToProduct: (productId: string) => void;
}

export const ChatOverlay: React.FC<ChatOverlayProps> = ({
  visible,
  onClose,
  onNavigateToProduct,
}) => {
  const [messages, setMessages] = useState<IMessage[]>(mockChatMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight()

  useEffect(() => {
    if (visible) {
      setIsExpanded(true);
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setIsExpanded(false);
      });
    }
  }, [visible, slideAnim]);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  }, []);

  const onQuickReply = useCallback(
    (replies: any[]) => {
      const reply = replies[0];
      if (reply.value === 'view_product_1') {
        onNavigateToProduct('1');
        onClose();
      } else {
        const botMessage: IMessage = {
          _id: Math.random().toString(),
          text:
            reply.value === 'more_info'
              ? 'This wine has won numerous awards and is highly sought after by collectors worldwide.'
              : 'Let me show you some excellent alternatives...',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'VinoBuzz AI',
            avatar: '🍷',
          },
        };
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, [botMessage])
        );
      }
    },
    [onNavigateToProduct, onClose]
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        isExpanded ? styles.containerExpanded : styles.containerMinimized,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={[styles.header]}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Chat</Text>
        </View>
        <View style={styles.headerRight}>
          <Pressable onPress={toggleExpand} style={styles.headerButton}>
            <Text style={styles.headerButtonText}>
              {isExpanded ? '−' : '+'}
            </Text>
          </Pressable>
          <Pressable onPress={onClose} style={styles.headerButton}>
            <Text style={styles.headerButtonText}>✕</Text>
          </Pressable>
        </View>
      </View>

      {isExpanded && (
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1,
            name: 'You',
          }}
          isTyping={isTyping}
          onQuickReply={onQuickReply}
          textInputProps={{
            placeholder: 'Nhập tin nhắn...',
            style: {
              height: 40,
            },
          }}
          keyboardAvoidingViewProps={{ keyboardVerticalOffset: headerHeight }}
        />
      )}

      {!isExpanded && (
        <Pressable onPress={toggleExpand} style={styles.minimizedContent}>
          <Text style={styles.minimizedText}>💬</Text>
          <View style={styles.minimizedTextContainer}>
            <Text style={styles.minimizedTitle}>VinoBuzz Chat</Text>
            <Text style={styles.minimizedMessage} numberOfLines={1}>
              {messages[0]?.text || 'Start chatting...'}
            </Text>
          </View>
        </Pressable>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerExpanded: {
    zIndex: 9999,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT ,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  containerMinimized: {
    zIndex: 9999,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop: 10 
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  minimizedContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  minimizedText: {
    fontSize: 32,
  },
  minimizedTextContainer: {
    flex: 1,
  },
  minimizedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  minimizedMessage: {
    fontSize: 14,
    color: '#666',
  },
});
