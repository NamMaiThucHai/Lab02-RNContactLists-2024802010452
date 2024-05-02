import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native';
import TabNavigator from './contact-lists/2/routes';
import DrawerNavigator from './contact-lists/4/routes';


const App=()=>
{
    return (
        <DrawerNavigator/>
    );
}
export default App;