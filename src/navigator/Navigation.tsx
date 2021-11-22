import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../Screen/HomeScreen';
import { LoginScreen } from '../Screen/LoginScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
