import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View , SafeAreaView} from 'react-native';
import CartPage from './components/index.js'
import StyleButton from './components/button.js'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CartPage 
        name={"Model 3"}
        tagline={"Order Online for "}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/Model3.jpeg')}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
