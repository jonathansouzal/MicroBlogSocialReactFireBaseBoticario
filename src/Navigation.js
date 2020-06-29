import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
            name="Feed" 
            component={Feed}             
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
        />
        <Tab.Screen 
            name="Postar" 
            component={Feed} 
            options={{
                tabBarLabel: 'Postar',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="paper-plane" color={color} size={size} />
                ),
              }}
        />
        <Tab.Screen 
            name="Profile" 
            component={Feed} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="user" color={color} size={size} />
                ),
              }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
