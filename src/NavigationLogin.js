import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const Stack = createStackNavigator()

export default function NavigationLogin() {
    return (
        <Stack.Navigator
        initialRouteName="Profile"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Registrar',
          }}
        />
      </Stack.Navigator>
    );
  }