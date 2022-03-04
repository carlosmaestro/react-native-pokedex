import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

const Stack = createNativeStackNavigator();

import { Home } from '../Home/Home';
import { List } from '../List/List';
import { Login } from '../Login/Login';
import { PokemonDetail } from '../PokemonDetail/PokemonDetail';

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{ title: 'List', headerShown: false }}
        />
        <Stack.Screen
          name="PokemonDetail"
          component={PokemonDetail}
          options={{ title: 'PokemonDetail', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
