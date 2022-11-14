# React Native Starter

React Native Starter Mobile Application based on React Native Framework. Built with **React Native 0.63.4**.

## Features

- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind](https://github.com/vadimdemedes/tailwind-rn)
- [React Query](https://github.com/tanstack/query)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [React Hook Form](https://react-hook-form.com)
- [React Navigation v6](https://reactnavigation.org/docs/getting-started)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [React Native Flash Message](https://github.com/lucasferreira/react-native-flash-message)

## Installation

First of all, install npm package dependencies:

```
npm install
```

or if using yarn:

```
yarn install
```

## Run Tailwind

Below command is used for running server tailwind in development mode:

```
yarn dev:tailwind
```

And If you want to build server tailwind use below command:

```
yarn build:tailwind
```

## Run Application [Android]

Below command is used for running metro packager and build and install android debug APK file to device or emulator

```
npx react-native run-android
```

Or if you want run a stand alone metro packager only, use below command:

```
yarn start
```

And If you want to build APK file only use below command:

- Build debug version

```
// on Windows
> cd android
> .\gradlew assembleDebug

// on Mac OS
$ cd android
$ chmod +x gradlew
$ ./gradlew assembleRelease
```

- Build release version

```
// on Windows
> cd android
> .\gradlew assembleRelease

// on Mac OS
$ cd android
$ chmod +x gradlew
$ ./gradlew assembleRelease
```

## Run Application [iOS]

Below command is used for running metro packager and build and install iOS debug IPA file to device or emulator

```
npx react-native run-ios
```
