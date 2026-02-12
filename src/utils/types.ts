import { IMessage } from 'react-native-gifted-chat';

export interface Product {
  id: string;
  name: string;
  price: string;
  images: string[];
  description: string;
  tastingNotes: string;
}

export interface ChatMessage extends IMessage {
  productId?: string;
  quickReplies?: {
    type: 'radio' | 'checkbox';
    values: Array<{
      title: string;
      value: string;
    }>;
  };
}

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { productId: string };
};
