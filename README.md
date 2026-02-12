# VinoBuzz – React Native Demo

A small React Native prototype demonstrating **mobile-first patterns**: chat overlay, product detail screen, navigation, and deep linking.
All data is mocked. Focus is on architecture and interaction, not pixel-perfect UI.

📹 **Demo video**
[https://gofile.io/d/cIgSrB](https://gofile.io/d/cIgSrB)

---

## Tech Stack

* React Native 0.83.2
* TypeScript
* React Navigation (Stack)
* react-native-gifted-chat
* @react-native-community/netinfo

---

## Features

### 1. Chat Overlay (FAB)

* Floating Action Button (FAB) fixed at bottom-right
* Two states:

  * **Minimized**: chat bubble with last message preview
  * **Expanded**: full-screen chat
* Smooth animated transitions
* Typing indicator + quick reply actions
* One chat action navigates directly to product detail

**Why GiftedChat**
Used to speed up development while keeping flexibility:

* **Fully Customizable** – Override any component
* **Quick Replies** – Bot-style actions
* **Typing Indicator** – Bot/user typing state
* **Keyboard Handling** – Automatic keyboard avoidance
* **Message Status** – Sent / delivered / read states

Chat layout automatically adjusts when the keyboard is shown using `KeyboardAvoidingView`.

---

### 2. Product Detail Screen

* Horizontal swipeable image gallery (`FlatList` with paging)
* Product name, price, description
* Expandable tasting notes section with animation
* Sticky “Add to Cart” CTA at the bottom
* Skeleton loading on first load

---

### 3. Navigation & Deep Linking

* Stack navigation: Home → Product Detail
* Deep linking support:

```bash
vinobuzz://product/1
```

* Example products:

  * 1 – Château Margaux 2015
  * 2 – Sassicaia 2016
  * 3 – Opus One 2018
  * 4 – Penfolds Grange 2017

---

### 4. Offline Detection

* Network state detected via NetInfo
* Offline banner automatically appears/disappears on connectivity change

---

## Project Structure

```
src/
├── components/        # Reusable UI components
├── screens/           # Home & ProductDetail
├── navigation/        # React Navigation setup
├── hooks/             # Network status hook
├── utils/             # Mock data & types
```

---

## Design & Technical Decisions

* **Animations**: Native `Animated` + `LayoutAnimation` (no heavy libs)
* **State**: Local state only (demo scope)
* **Data**: Fully mocked, no API calls
* **UI**: Mobile-first patterns (FAB, sticky CTA, swipe gallery)
* **Safety**: SafeArea handling for notch / dynamic island

---

## Trade-offs

* No global state management (Redux/MobX)
* No unit/integration tests (out of scope)
* Placeholder images (Unsplash)
* Basic error handling

---

## Setup (Quick)

```bash
npm install
cd ios && pod install && cd ..
npm run ios
# or
npm run android
```

---

## Time Spent

~ **4–6 hours**

* Setup & config: ~30 min
* Core components: ~2–3 hrs
* Navigation & deep linking: ~1–2 hrs
* Polish & docs: ~1 hr
