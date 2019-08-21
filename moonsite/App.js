import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import StackNavigator from './src/routes/StackNavigator'

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <StackNavigator />
      </View>
      <View style={styles.footer}>
      <Text>Almog Bakhshi</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: { flex: 1 },
  body: { flex: 0.9},
  footer: { flex: 0.1, justifyContent:'center', alignItems:'center' }
});
