import { IMessage } from 'react-native-gifted-chat';
import { Product } from './types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Château Margaux 2015',
    price: '$850',
    images: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
      'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=800',
      'https://images.unsplash.com/photo-1566843436950-5c6ae3e5fe4e?w=800',
    ],
    description: 'A prestigious Bordeaux wine from one of the most renowned châteaux in France. This vintage showcases exceptional balance and complexity.',
    tastingNotes: 'Rich aromas of blackcurrant, cedar, and violets. The palate reveals layers of dark fruit, fine tannins, and a long, elegant finish. Best enjoyed after 2025 or decanted for 2 hours.',
  },
  {
    id: '2',
    name: 'Sassicaia 2016',
    price: '$320',
    images: [
      'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800',
      'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=800',
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800',
    ],
    description: 'An iconic Super Tuscan from Bolgheri, crafted primarily from Cabernet Sauvignon. A benchmark for Italian fine wines.',
    tastingNotes: 'Intense notes of ripe black cherries, tobacco, and Mediterranean herbs. Full-bodied with velvety tannins and remarkable depth. Pairs beautifully with grilled meats.',
  },
  {
    id: '3',
    name: 'Opus One 2018',
    price: '$425',
    images: [
      'https://images.unsplash.com/photo-1564424224827-cd24b8915874?w=800',
      'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800',
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800',
    ],
    description: 'A celebrated Napa Valley collaboration between Baron Philippe de Rothschild and Robert Mondavi. The epitome of California luxury wine.',
    tastingNotes: 'Aromas of cassis, dark chocolate, and espresso. The palate is opulent yet refined, with silky tannins and notes of vanilla and spice from French oak aging.',
  },
  {
    id: '4',
    name: 'Penfolds Grange 2017',
    price: '$680',
    images: [
      'https://images.unsplash.com/photo-1596276020587-8044fe049813?w=800',
      'https://images.unsplash.com/photo-1598716426946-e0fbb17c2d07?w=800',
      'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800',
    ],
    description: "Australia's most celebrated wine, crafted predominantly from Shiraz grapes. A true icon of New World winemaking.",
    tastingNotes: 'Powerful aromas of blackberry, licorice, and roasted coffee. The palate is full-bodied and concentrated, with layers of dark fruit, mocha, and warm spices. Cellaring potential of 20+ years.',
  },
];

export const mockChatMessages: IMessage[] = [
  {
    _id: 4,
    text: 'I can help you discover amazing wines! What are you looking for today?',
    createdAt: new Date(Date.now() - 240000),
    user: {
      _id: 2,
      name: 'VinoBuzz AI',
      avatar: '🍷',
    },
  },
  {
    _id: 3,
    text: "I'm interested in bold red wines",
    createdAt: new Date(Date.now() - 180000),
    user: {
      _id: 1,
      name: 'You',
    },
  },
  {
    _id: 2,
    text: 'Perfect! I found some excellent options for you. This Château Margaux 2015 is exceptional - rich, complex, and highly rated.',
    createdAt: new Date(Date.now() - 120000),
    user: {
      _id: 2,
      name: 'VinoBuzz AI',
      avatar: '🍷',
    },
    quickReplies: {
      type: 'radio',
      values: [
        {
          title: 'View Product',
          value: 'view_product_1',
        },
        {
          title: 'Tell me more',
          value: 'more_info',
        },
        {
          title: 'Show alternatives',
          value: 'alternatives',
        },
      ],
    },
  },
  {
    _id: 1,
    text: 'Would you like to explore more wines or get pairing recommendations?',
    createdAt: new Date(Date.now() - 60000),
    user: {
      _id: 2,
      name: 'VinoBuzz AI',
      avatar: '🍷',
    },
  },
];
