// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'

import Store from './src/Component';
import { Header, CryptoContainer } from './src/Component'

export default function App() {
  return (
    <Provider>
      <View>
        <Header/>
        <CryptoContainer/>
      </View>
    </Provider>);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
