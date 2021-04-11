import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

 const entrar = () =>{
   navigation.reset({
     index:0,
     routes: [{name:"Principal"}]
   })
 }
  return (
    <View style={styles.container, specificStyle.specifcContainer}>
      <Text h3>  Enter in fucking Pets</Text>
      
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
  <Button
  icon={
    <Icon
      name="check-circle"
      size={25}
      color="white"
    />
    
  }
  
  title="Entrar"
  onPress= {() => entrar()}
/>
<Button
  icon={
    <Icon
      name="check-circle"
      size={25}
      color="white"
    />
    
  }
  
  title="Cadastrar"
/>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specifcContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "#fc0"
  }
})
