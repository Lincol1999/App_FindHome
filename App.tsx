import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { LoginScreen } from './src/Screen/LoginScreen'
import { StackNavigation } from './src/navigator/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
