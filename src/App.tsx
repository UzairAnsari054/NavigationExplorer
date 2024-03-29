import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

type RootStackParamList = {
  Home: undefined
  Details: {productId: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title: "Home Screen Hai Yeh"
        }}
        />
        <Stack.Screen 
        name='Details'
        component={Home}
        options={{
          title: "Details Screen Hai Yeh"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
