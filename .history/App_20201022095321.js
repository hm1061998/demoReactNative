import React from "react";
import AppNavigation from './AppNavigation'
import { Provider } from 'react-redux'
import store from './models/index'
import { StyleSheet, Platform, View } from 'react-native'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'white'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'yellow'
      }
    })
  }
});

export default App;
