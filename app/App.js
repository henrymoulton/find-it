import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/HomeScreen';
import CameraScreen from './src/CameraScreen';

// const Stack = createStackNavigator();

function App() {
  return (
    <HomeScreen></HomeScreen>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Camera" component={CameraScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
