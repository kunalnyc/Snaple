import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'; // Fixed incorrect import
import CafesScreen from '../screens/CafeScreen'; // Fixed incorrect import

// Define the navigation stack parameters
type RootStackParamList = {
  Home: undefined; // No parameters for Home screen
  Cafes: undefined; // No parameters for Cafes screen
};

// Create a typed stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cafes" component={CafesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
