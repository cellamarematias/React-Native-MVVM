import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { ProfileScreen } from './src/Presentation/views/profile/Profile';
import LoginScreen from './src/Presentation/views/Login/Login';

export type RootStackParamList = {
  Home: undefined,
  Profile: undefined,
  Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
