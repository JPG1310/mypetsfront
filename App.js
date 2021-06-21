import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login';
import Principal from './Screens/Principal';
import Cadastro from './Screens/Cadastro';
import CadastroProduto from './Screens/CadastroProduto';
import CadastroServico from './Screens/CadastroServico';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from './util/Config';
import Detalhes from './Screens/Detalhes';
import Detalhes1 from './Screens/Detalhes1';
import Detalhes2 from './Screens/Detalhes2';
import Detail from './Screens/Detail';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
      <Stack.Screen name="CadastroServico" component={CadastroServico} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Detalhes1" component={Detalhes1} />
      <Stack.Screen name="Detalhes2" component={Detalhes2} />
          </Stack.Navigator>
  );
}

function defineInterceptor(){
  axios.interceptors.response.use(response => {
    return response
  }, err => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config
      if (err.response.status == 401 && err.config && !err.config.retry){
        originalReq._retry = true
        AsyncStorage.getItem("TOKEN").then((token) => {
          let res = axios.put(`${Config.API_URL}token/refresh`, {oldToken: token})
          .then((res) => {
            AsyncStorage.setItem("TOKEN", res.data.access_token)
            originalReq.headers["Authorization"] = `Bearer ${res.data.access_token}`
            return axios(originalReq)
          })
          resolve(res)
        })
      }else{
        reject(err)
      }
    })
  })
}

export default function App() {
  defineInterceptor()
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}