import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './screens/Home';
import Tabs from './navigation/tabs'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Tabs} />
        {/* <Stack.Screen name='Consults' component={Home} /> 
        <Stack.Screen name='Doctors' component={Home} />
        <Stack.Screen name='Profile' component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
