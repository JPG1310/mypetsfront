import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function Perfil({navigation}) {

    const logout = (navigation) => {
        AsyncStorage.removeItem("TOKEN").then(() => {
            navigation.reset({
                index:0,
                routes: [{name:"Login"}]
              })
        }).catch(() => {
            console.log(error)
            Alert.alert("Erro ao sair")
        })
       
      }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#3C096C' }}>
        <Avatar
        size="xlarge"
        rounded
        source={require('../assets/Imagens/perfil.jpeg')
      }
/>
        <Text style={{fontSize: 25, color: 'white', marginTop: 20}}>Gabrielle Laura</Text>
    <Button buttonStyle={{ width: 100, marginTop: 10, fontSize: 12, fontFamily: "OpenSansCondensed-Light", textAlign:"center", backgroundColor:"#FF9100", alignItems:"center", marginRight: 30, marginLeft: 30, paddingTop: 11, paddingBottom: 12, borderRadius: 50,}}
    title="Sair"
    onPress= {() => logout(navigation)}
  />
      </View>
    );
  }