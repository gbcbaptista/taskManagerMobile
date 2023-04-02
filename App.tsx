import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/Pages/Home/Home';
import { Login } from './src/Pages/Login/Login';


const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  return false
}

export default function App() {
  const isSignedIn = getIsSignedIn();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ?
              <Stack.Screen name="Home" component={Home}/> :
              <Stack.Screen name="Login" component={Login}/>
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
