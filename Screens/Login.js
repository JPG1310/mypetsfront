import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import usuarioService from '../services/UsuarioService';
import styles from '../style/MainStyle';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isLoadingToken, setLoadingToken] = useState(true)

   const entrar = () =>{

    let data = {
      username: email,
      password: password
    }

    usuarioService.login(data)
    .then((response) => {
      setLoading(false)
      navigation.reset({
        index:0,
        routes: [{name:"Principal"}]
      })
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
      Alert.alert("Usuário não existe")
    })
 }

 const logarComToken = (token) => {

  setLoadingToken(true) 
  let data = {
    token: token
  }

  usuarioService.loginComToken(data)
  .then((response) => {
    setLoadingToken(false)
    navigation.reset({
      index:0,
      routes: [{name:"Principal"}]
    })
  })
  .catch((error) => {
    setLoadingToken(false)
  })
}

 const cadastrar = () =>{
   navigation.navigate ("Cadastro")
 }

useEffect(() => {
  AsyncStorage.getItem("TOKEN").then((token) => {
    logarComToken(token)

  })
}, [])


  return (
    <View style={styles.container, specificStyle.specifcContainer}>
     
      { isLoadingToken &&
      <Text style={styles.textStyle} h3>Só um minutinho...</Text>
      }

    { !isLoadingToken &&
    <>
     <Image source={require('../assets/Imagens/banner_cadastro.png')} style={styles.imageBack}/>
      <Text style={styles.textStyle} h3 style={styles.titulo}>Login</Text>   
      <Input
      placeholder="E-mail"
      leftIcon={{ type: 'font-awesome', name: 'paw' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
  />
  <Input
      placeholder="Sua senha"
      leftIcon={{ type: 'font-awesome', name: 'unlock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
  />

  { isLoading &&
  <ActivityIndicator/>
  }

  { !isLoading &&
  <Button
  /*icon={
    <Icon
      name="check-circle"
      size={15}
      color="white"
    />
    
  }*/
  
  title="Entrar"
  buttonStyle={specificStyle.button}
  onPress= {() => entrar()}
/>
}

<Button
  /*icon={
    <Icon
      name="user"
      size={15}
      color="white"
    />
    
  }*/
  
  title="Sou um novo usuário"
  buttonStyle={specificStyle.button2}
  onPress={() => cadastrar ()}
/>
</>
}
</View>
  );
}

const specificStyle = StyleSheet.create({
  specifcContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title:{
    fontFamily: 'OpenSansCondensed-Light',
  },
  button:{
    margin: 0,
    width: 200,
    marginTop: 20,
    fontFamily: "OpenSansCondensed-Light",
    backgroundColor:"#FF9100",
    fontSize: 12,
    textAlign: "center",
    alignItems: "center",
    marginRight:0,
    marginLeft:0,
    paddingLeft:30,
    paddingRight:30,
    paddingTop: 11,
    paddingBottom: 12,  
    borderRadius: 50,
    textTransform: 'uppercase',
  },
  button2:{
    width: 200,
    marginTop: 10,
    fontSize: 12,
    fontFamily: "OpenSansCondensed-Light",
    textAlign:"center",
    backgroundColor:"#FF9100",
    alignItems:"center",
    marginRight: 30,
    marginLeft: 30,
    paddingTop: 11,
    paddingBottom: 12,
    borderRadius: 50,
  },
  /*button:{
    width:"200%",
    marginTop: 20,
    textAlign:"left",
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:"blue",
    marginRight:0,
    marginLeft:0,
    paddingLeft:23,
    paddingRight:23,
    fontWeight:"bold",  

  },*/
  /*button2:{
    width:"100%",
    marginTop: 10,
    textAlign:"left",
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:"blue",
    marginRight:0,
    marginLeft:0,

  },*/
  /*image:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
    width:"100%",
    height:"100%",
  }*/
})
