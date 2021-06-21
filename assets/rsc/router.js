import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Principal from './Screens/Principal';
import Detail from './Screens/Detail';
import Busca from '../../Screens/Busca';


const Stack = createStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        nome="Busca"
        component={Busca}
        options={{ headerShown: false}}
        />
        <Stack.Screen
        nome="Detail"
        component={Detail}
        />
        

      </Stack.Navigator>
  
      </NavigationContainer>
  )
}

export default Routes;