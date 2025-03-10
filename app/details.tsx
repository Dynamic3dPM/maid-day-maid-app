import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Details() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}
