import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import TermsOfService from './screens/TermsOfService';
import PrivacyPolicy from './screens/PrivacyPolicy';
import CCode from './screens/CCode';
import AccountSetup from './screens/AccountSetup';
import CreateRelay from './screens/CreateRelay';
import RelaysInfo from './screens/RelaysInfo';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Welcome", headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ title: "Login", headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: "Signup", headerShown: false }} />
            <Stack.Screen name="TermsOfService" component={TermsOfService} options={{ title: "Terms of Service", headerShown: true }} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: "Privacy Policy", headerShown: true }} />

            <Stack.Screen name="CCode" component={CCode} options={{ title: "", headerShown: false }} />
            <Stack.Screen name="AccountSetup" component={AccountSetup} options={{ title: "", headerShown: false }} />

            <Stack.Screen name="CreateRelay" component={CreateRelay} options={{ title: "Create a Relay", headerShown: false }} />
            <Stack.Screen name="RelaysInfo" component={RelaysInfo} options={{ title: "Your Relays", headerShown: false }} />

        </Stack.Navigator>
    );
}

export default function Root() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
