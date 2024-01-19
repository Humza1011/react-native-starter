import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroductionScreen from '../pages/Introduction/introduction';
// import AppNavigator from './app-navigator';
// import {StatusBar} from 'react-native';

export const routes = [
  {name: 'Introduction', component: IntroductionScreen},
  //   {name: 'App', component: AppNavigator},
];

const Stack = createNativeStackNavigator();

const MainNavigator = ({initialRouteName}: {initialRouteName?: string}) => {
  return (
    <>
      {/* <StatusBar backgroundColor="#fff" barStyle={'dark-content'} /> */}
      <Stack.Navigator
        initialRouteName={initialRouteName || 'Login'}
        screenOptions={{headerShown: false}}>
        {routes.map((route, index) => (
          <Stack.Screen
            key={`main-navigator-${index}`}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
