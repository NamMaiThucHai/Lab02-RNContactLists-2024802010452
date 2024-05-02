import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contacts from '../2/screens/Contacts';
import Profile from '../2/screens/Profile';
import Favorites from '../3/screens/Favourites';
import User from '../3/screens/User';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../ultility/colors';
import Options from '../3/screens/Options';

const getDrawerItemIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='Contacts' component={Contacts} options={{ title: "Contacts" }} />
      <Stack.Screen name='Profile' component={Profile} options={({ route }) => {
        const { contact } = route.params;
        const { name } = contact;
        return {
          title: name.split(' ')[0],
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue
          }
        }
      }} />
    </Stack.Navigator>
  );
}

const FavoritesScreens = () => {
  return (
    
    <Stack.Navigator initialRouteName='Favorite'
        screenOptions ={{
            headerShown:false
        }}
    >
      <Stack.Screen name='Favorite' component={Favorites} options={{ title: 'Favorite' }} />
      <Stack.Screen name='Profile' component={Profile} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

const UserScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={User} options={{headerTitle:"Profile", headerTintColor:'white',headerStyle:{backgroundColor: colors.blue}, 
    headerRight:() => (
      <MaterialIcons name='settings' size={24} style={{color:'white', marginRight: 10}} onPress={() => navigation.navigate('Options')}/>
    )}}/>
      <Stack.Screen name='Options' component={Options} options={{title:"Options"}}/>
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator= () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName= 'ContactsScreens'
        >
        <Drawer.Screen name="ContactsScreens" component={ContactsScreens}
            options={{
            drawerIcon: getDrawerItemIcon('list'),
            }}
        />
        <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens}
            options={{
            drawerIcon: getDrawerItemIcon('star'),
            }}
        />
        <Drawer.Screen name="UserScreens" component={UserScreens}
            options={{
            drawerIcon: getDrawerItemIcon('person'),
        }}
        />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
