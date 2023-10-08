import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
// import { Provider } from 'react-redux';
import Home from './screens/Home';
import InviteScreen from './screens/InviteScreen';
import AllInvitesScreen from './screens/AllInvitesScreen';
import Pickup from './screens/PickupScreen';
import DestinationScreen from './screens/DestinationScreen';
import store from './store/store';
import { Provider } from 'react-redux';
import Ad_Screen from './screens/Ad1Screen';
import Profile from './screens/ProfileScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: '#351401' },
        // headerTintColor: 'white',
        // sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerHideStatusBarOnOpen: true,
        // drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'black',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#d4cdcd',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          drawerIcon: ({ color, size }) => (
            <Ionicons name="pin" color={color} size={size} />
          ),
          headerShown: false,
          // Add a placeholder button without the `onPress` to avoid flicker
        })}
        // options={{
          
        // }}
      />
      {/* <Drawer.Screen
        name="Pickup"
        component={Pickup}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bus" color={color} size={size} />
          ),
          headerShown: false,
          title: "Set Pickup Location"
        }}
      />
      <Drawer.Screen
        name="Destination_Screen"
        component={DestinationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="analytics" color={color} size={size} />
          ),
          headerShown: false,
          title: "Set Destination Location"
        }}
      /> */}
      <Drawer.Screen
        name="Invite_Code"
        component={InviteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="code-working" color={color} size={size} />
          ),
          headerShown: false,
          title: "Invite Your Friends"
        }}
      />
      <Drawer.Screen
        name="Electric_Bike"
        component={Ad_Screen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bicycle" color={color} size={size} />
          ),
          headerShown: false,
          title: "Electric Bike"
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerShown: false,
          title: "Your Profile"
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Invite_Code"
              component={InviteScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="All_Invites"
              component={AllInvitesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PickUp"
              component={Pickup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Destination_Screen"
              component={DestinationScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Ad_Screen1"
              component={Ad_Screen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
