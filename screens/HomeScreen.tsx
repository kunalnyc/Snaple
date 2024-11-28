import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Homes: undefined;
    Cafes: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Homes'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const topPlaces = [
        { id: 1, name: 'Udaipur', image: 'https://images.unsplash.com/photo-1630712224754-6d3eea30494f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVkYWlwdXJ8ZW58MHx8MHx8fDA%3D' },
        { id: 2, name: 'Mussoorie', image: 'https://images.unsplash.com/photo-1707993365718-c619a27a81e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzc29vcmllfGVufDB8fDB8fHww' },
        { id: 3, name: 'Italy', image: 'https://plus.unsplash.com/premium_photo-1697730150275-dba1cfe8af9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ld3lvcmt8ZW58MHx8MHx8fDA%3D' },
        { id: 4, name: 'New York', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHx8MHx8fDA%3D' },
        { id: 5, name: 'Scotland', image: 'https://plus.unsplash.com/premium_photo-1714573189973-018546b10078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NvdGxhbmR8ZW58MHx8MHx8fDA%3D' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to Wanderlust!</Text>
            <Text
                style={styles.link}
                onPress={() => navigation.navigate('Cafes')}
            >
                Discover Cafes
            </Text>

            {/* Circular Avatars Section */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.avatarContainer}>
                {topPlaces.map((place) => (
                    <View key={place.id} style={styles.avatarWrapper}>
                        <Image source={{ uri: place.image }} style={styles.avatar} />
                        <Text style={styles.avatarText}>{place.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'normal',
        color: 'black',
        marginBottom: 10,
    },
    link: {
        fontSize: 16,
        color: 'pink',
        // textDecorationLine: 'underline',
        marginBottom: 20,
    },
    avatarContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    avatarWrapper: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40, // Makes it circular
        marginBottom: 5,
    },
    avatarText: {
        fontSize: 12,
        textAlign: 'center',
    },
});

export default HomeScreen;
