import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/main-navigator';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

export default function Main() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <MainNavigator initialRouteName={isAuthenticated ? 'App' : 'Login'} /> */}
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
