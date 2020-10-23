import React from "react";
import AppNavigation from './AppNavigation'
import { Provider } from 'react-redux'
import store from './models/index'
import { StyleSheet, Platform } from 'react-native'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
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
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});

export default App;
