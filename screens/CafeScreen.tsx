import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the navigation stack parameters
type RootStackParamList = {
  Home: undefined;
  Cafes: undefined;
};

type CafesScreenProps = NativeStackScreenProps<RootStackParamList, 'Cafes'>;

const CafesScreen: React.FC<CafesScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Famous Cafes</Text>
      <Text style={styles.description}>
        This is where you'll list cafes with images and details.
      </Text>
    </SafeAreaView>
  );
};

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
  },
});

export default CafesScreen;
