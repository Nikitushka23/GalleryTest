import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PostsList} from '../screens/PostsList';
import {PostImage} from '../screens/PostImage';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Gallery"  component={PostsList}  options={{
          headerStyle: {
            backgroundColor: '#ccc',
          },
          headerTintColor: '#252525',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name='SinglePost' component={PostImage} options={{
          headerStyle: {
            backgroundColor: '#ccc',
          },
          headerTintColor: '#252525',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
