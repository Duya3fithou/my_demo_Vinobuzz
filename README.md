# VinoBuzz - React Native Demo

Demo ứng dụng React Native với chatbox overlay, product detail screen, navigation và deep linking.

## Yêu cầu hệ thống

- Node.js >= 20
- React Native 0.83.2
- iOS: Xcode 14+ và iOS 13.4+
- Android: Android Studio và API 21+

## Cài đặt

### 1. Clone và cài đặt dependencies

```bash
cd My_demo01
npm install
```

### 2. iOS Setup

```bash
cd ios
pod install
cd ..
```

### 3. Chạy ứng dụng

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

## Tính năng chính

### Task 1: Chatbox với FAB + Overlay
- **Floating Action Button (FAB)**: Nút tròn màu đỏ wine ở góc dưới bên phải
- **Chat Overlay**: 
  - Minimized state: Bubble nhỏ hiển thị preview tin nhắn cuối
  - Expanded state: Full screen chat với GiftedChat
  - Smooth animation transition giữa 2 states
  - Typing indicator khi bot đang trả lời
  - Quick reply buttons để navigate đến product detail

### Task 2: Product Detail Screen
- **Gallery**: Swipeable image gallery với FlatList horizontal paging
- **Product Info**: Tên, giá, mô tả sản phẩm
- **Expandable Section**: Tasting notes có thể mở/đóng với animation
- **Sticky CTA**: Nút "Thêm vào giỏ hàng" luôn hiển thị ở bottom
- **Loading State**: Skeleton loading khi vào trang lần đầu

### Task 3: Navigation & Connectivity
- **React Navigation**: Stack navigation giữa Home và ProductDetail
- **Deep Linking**: Hỗ trợ mở product qua deep link
- **Offline Detection**: Banner hiển thị khi mất kết nối mạng

## Test Deep Linking

### iOS (Simulator)
```bash
xcrun simctl openurl booted "vinobuzz://product/1"
```

### Android (Device/Emulator)
```bash
adb shell am start -W -a android.intent.action.VIEW -d "vinobuzz://product/1"
```

### Test các productId khác
- `vinobuzz://product/1` - Château Margaux 2015
- `vinobuzz://product/2` - Sassicaia 2016
- `vinobuzz://product/3` - Opus One 2018
- `vinobuzz://product/4` - Penfolds Grange 2017

## Cấu trúc thư mục

```
src/
├── components/
│   ├── ChatFAB.tsx              # Floating Action Button
│   ├── ChatOverlay.tsx          # Chat overlay với minimize/expand
│   ├── ProductGallery.tsx       # Swipeable image gallery
│   ├── ExpandableSection.tsx    # Expandable content section
│   ├── OfflineBanner.tsx        # Network status banner
│   └── LoadingSkeleton.tsx      # Product loading skeleton
├── screens/
│   ├── HomeScreen.tsx           # Main screen với FAB
│   └── ProductDetailScreen.tsx  # Product detail với gallery
├── navigation/
│   └── AppNavigator.tsx         # React Navigation setup
├── utils/
│   ├── mockData.ts              # Mock messages & products
│   └── types.ts                 # TypeScript interfaces
└── hooks/
    └── useNetworkStatus.ts      # Network detection hook
```

## Implementation Notes

### 1. Animations
- Sử dụng `Animated` API cho smooth transitions
- ChatOverlay có slide animation khi mở/đóng
- ExpandableSection dùng `LayoutAnimation` cho height animation
- LoadingSkeleton có pulse effect để hiển thị loading state

### 2. Keyboard Handling
- GiftedChat tích hợp `KeyboardAvoidingView` với `keyboardVerticalOffset` phù hợp cho iOS/Android
- Chat overlay tự động adjust khi keyboard hiển thị

### 3. Deep Linking Configuration
- **iOS**: CFBundleURLTypes trong Info.plist với scheme `vinobuzz`
- **Android**: intent-filter trong AndroidManifest.xml
- React Navigation linking config map URL patterns đến screens

### 4. Offline Detection
- Sử dụng `@react-native-community/netinfo` để detect network state
- Custom hook `useNetworkStatus` expose isOffline state
- OfflineBanner tự động slide in/out khi network thay đổi

### 5. Mobile-Specific Patterns
- FlatList với `pagingEnabled` cho smooth horizontal scrolling
- Platform-specific shadows (iOS: shadowColor, Android: elevation)
- SafeAreaView/useSafeAreaInsets cho notch/dynamic island
- Sticky footer với position absolute

### 6. State Management
- Local state với useState cho UI interactions
- Mock data trong utils/mockData.ts
- No external state management library (Redux, MobX) - giữ đơn giản

### 7. TypeScript
- Type-safe navigation với RootStackParamList
- Interface cho Product, ChatMessage
- Props typing cho tất cả components

## Dependencies chính

```json
{
  "react-native-gifted-chat": "^3.3.2",
  "@react-navigation/native": "^7.1.28",
  "@react-navigation/native-stack": "^7.12.0",
  "@react-native-community/netinfo": "latest",
  "react-native-gesture-handler": "^2.30.0",
  "react-native-reanimated": "^4.2.1",
  "react-native-safe-area-context": "^5.6.2",
  "react-native-screens": "^4.23.0"
}
```

## Troubleshooting

### iOS Pod Install Issues
Nếu gặp lỗi encoding khi chạy pod install:
```bash
export LANG=en_US.UTF-8
cd ios && pod install
```

### Metro Bundler Cache
Nếu gặp lỗi import hoặc build:
```bash
npm start -- --reset-cache
```

### Android Build Issues
Clean build:
```bash
cd android && ./gradlew clean
cd .. && npm run android
```

## Giả định & Tradeoffs

1. **Mock Data**: Tất cả data được mock, không có real API calls
2. **Images**: Sử dụng Unsplash placeholder images
3. **Icons**: Dùng emoji thay vì icon libraries để giảm dependencies
4. **Animations**: Chọn Animated API native thay vì thư viện bên ngoài để giảm bundle size
5. **State**: Local state only, phù hợp cho demo app nhỏ
6. **Error Handling**: Basic error handling, production cần robust hơn
7. **Testing**: Chưa có unit/integration tests (ngoài scope của demo)

## Thời gian thực hiện

Ước tính: 4-6 giờ cho full implementation bao gồm:
- Setup project & dependencies: 30 phút
- Components implementation: 2-3 giờ
- Screens & navigation: 1-2 giờ
- Testing & refinement: 1 giờ
- Documentation: 30 phút
