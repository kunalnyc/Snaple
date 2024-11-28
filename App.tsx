import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Type definitions for navigation
type RootStackParamList = {
  Home: undefined; // No parameters for Home screen
  Cafes: undefined; // No parameters for Cafes screen
};

// Home screen props
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Wanderlust!</Text>
      <Text style={styles.description}>
        Explore places, cafes, and share your travel experiences.
      </Text>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Cafes')}
      >
        Discover Cafes
      </Text>
    </SafeAreaView>
  );
};

const CafesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Famous Cafes</Text>
      <Text style={styles.description}>
        This is where you'll list cafes with images and details.
      </Text>
    </SafeAreaView>
  );
};

// Navigation setup
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cafes" component={CafesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
