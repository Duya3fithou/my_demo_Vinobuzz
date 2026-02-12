import { IMessage } from 'react-native-gifted-chat';
import { Product } from './types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Château Margaux 2015',
    price: '$850',
    images: [
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-2.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-3.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-4.jpg',
    ],
    description: 'A prestigious Bordeaux wine from one of the most renowned châteaux in France. This vintage showcases exceptional balance and complexity.',
    tastingNotes: 'Rich aromas of blackcurrant, cedar, and violets. The palate reveals layers of dark fruit, fine tannins, and a long, elegant finish. Best enjoyed after 2025 or decanted for 2 hours.',
  },
  {
    id: '2',
    name: 'Sassicaia 2016',
    price: '$320',
    images: [
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-2.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-3.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-4.jpg',
    ],
    description: 'An iconic Super Tuscan from Bolgheri, crafted primarily from Cabernet Sauvignon. A benchmark for Italian fine wines.',
    tastingNotes: 'Intense notes of ripe black cherries, tobacco, and Mediterranean herbs. Full-bodied with velvety tannins and remarkable depth. Pairs beautifully with grilled meats.',
  },
  {
    id: '3',
    name: 'Opus One 2018',
    price: '$425',
    images: [
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-2.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-3.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-4.jpg',
    ],
    description: 'A celebrated Napa Valley collaboration between Baron Philippe de Rothschild and Robert Mondavi. The epitome of California luxury wine.',
    tastingNotes: 'Aromas of cassis, dark chocolate, and espresso. The palate is opulent yet refined, with silky tannins and notes of vanilla and spice from French oak aging.',
  },
  {
    id: '4',
    name: 'Penfolds Grange 2017',
    price: '$680',
    images: [
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-2.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-3.JPG',
      'https://wewine.vn/datafiles/images/SEO/cach-cam-ly-ruou-4.jpg',
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
    productId: '1',
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
