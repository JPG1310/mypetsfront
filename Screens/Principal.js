import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perfil from './Perfil';
import Busca from './Busca';
import Produtos from './Produtos';
import Servicos from './Servicos';
import Cadastrar from './Cadastrar';
import CadastroServico from './CadastroServico';

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Busca"
      tabBarOptions={{
        activeTintColor: '#FF9100',
      }}
    >
      <Tab.Screen
        name="Busca"
        component={Busca}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarLabel: 'Animais',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="paw" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Serviços"
        component={Servicos}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
          <Tab.Screen
        name="Cadastrar"
        component={CadastroServico}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

