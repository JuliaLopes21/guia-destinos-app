import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Home from './screens/Home';
import Detalhes from './screens/Detalhes';
import Formulario from './screens/Formulario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0066CC" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0066CC' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Explorar Destinos', headerShown: false }} />
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes do Destino' }} />
        <Stack.Screen name="Formulario" component={Formulario} options={{ title: 'Cadastrar Destino' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}