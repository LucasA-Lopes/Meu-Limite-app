import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/screens/Dashboard';
import AddExpense from './src/screens/AddExpense';
import EditExpense from './src/screens/EditExpense';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AddExpense" component={AddExpense} />
          <Stack.Screen name="EditExpense" component={EditExpense} />
          <Stack.Screen name="Login" component={Login}
/>

        </Stack.Navigator>
      </NavigationContainer>
  )
}

/*export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Dashboard" 
          component={() => (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text>Dashboard funcionando</Text>
            </View>
          )} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

