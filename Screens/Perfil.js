import * as React from 'react';
import { Text, View } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Avatar } from 'react-native-elements';

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#7B68EE' }}>
        <Avatar
        size="xlarge"
        rounded
        source={require('../assets/Imagens/perfil.jpeg')
      }
/>
        <Text style={{fontSize: 25, color: 'white', marginTop: 20}}>Gabrielle Laura</Text>
        <Button buttonStyle={{backgroundColor:"orange", marginTop:"8%"}}
    icon={
      <Icon
        name="check-circle"
        size={15}
        color="white"
      />
      
    }
    
    title="Sair"
    onPress= {() => logout(navigation)}
  />
      </View>
    );
  }