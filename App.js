import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Page1 from './source/Page1';
import Page2 from './source/Page2';
import Page3 from './source/Page3';

const Stack = createStackNavigator();

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Page1"
          component={Page1}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
        />
        <Stack.Screen
          name="Page3"
          component={Page3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
