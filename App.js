import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UsernameScreen from './screens/afterwelcome';
import SignInScreen from './screens/Login';
import NameScreen from './screens/name';
import BirthdayScreen from './screens/Birthday';
import Generate from './screens/Generatedusername';
import createUsername from './screens/Username';
import PhoneNumberScreen from './screens/Phone';
import EmailScreen from './screens/Email';
import PasswordScreen from './screens/Password';
import WelcomeScreen from './screens/Welcome';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome"
         component={WelcomeScreen}
         options={{ headerShown: false }}/>

        <Stack.Screen name="afterwelcome" 
        component={UsernameScreen}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Login" 
        component={SignInScreen} 
        options={{ headerShown: false }}/>

        <Stack.Screen name="name" 
        component={NameScreen} 
        options={{ headerShown: false }}/>

        <Stack.Screen name="Birthday" 
        component={BirthdayScreen}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Generatedusername" 
        component={Generate}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Username" 
        component={createUsername}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Phone" 
        component={PhoneNumberScreen}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Email"
         component={EmailScreen}
         options={{ headerShown: false }}/>

        <Stack.Screen name="Password" 
        component={PasswordScreen} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
