import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="index" options={{ headerShown: false }} /> {/* Add index route */}
            <Stack.Screen name="home" options={{}} />
            <Stack.Screen name="details" options={{ title: 'Details' }} />
        </Stack>
    );
}