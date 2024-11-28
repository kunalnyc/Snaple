import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Cafes: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Wanderlust!</Text>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Cafes')}
      >
        Discover Cafes
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
