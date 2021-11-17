import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
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
        <Text style={{fontSize: 25, color: 'white', marginTop: 20 }}>Gabrielle Laura</Text>

        <View style={flatstyles.container}>
      <FlatList
        data={[
          {key: 'Cidade: Pidamonhangaba-SP'},
          {key: 'Idade: 21 anos'},
          {key: 'CPF/CNPJ: 473.494.248-09'},
          {key: 'WhatsApp: (12) 99159-4568'},
          {key: 'E-mail: gabrielle.palma@gmail.com'},

    
        ]}
        renderItem={({item}) => <Text style={flatstyles.item}>{item.key}</Text>}
      />
    </View>
    <Button buttonStyle={{ 
   width: 150, marginTop: 50, fontSize: 12, fontFamily: "OpenSansCondensed-Light", textAlign:"center",
   backgroundColor:"#FF9100", alignItems:"center", marginRight: 30, marginLeft: 30, paddingTop: 11,
   paddingBottom: 12, borderRadius: 50,}}
   icon={
    <Icon
      name="edit"
      size={15}
      color="white"
    />
  }
    title="Editar Perfil"
  
  />
        
    <Button buttonStyle={{ 
   width: 150, marginTop: 10, fontSize: 12, fontFamily: "OpenSansCondensed-Light", textAlign:"center",
   backgroundColor:"#FF9100", alignItems:"center", marginRight: 30, marginLeft: 30, paddingTop: 11,
   paddingBottom: 12, borderRadius: 50,}}
    title="Sair"
    onPress= {() => logout(navigation)}
  />
  
      </View>
    );
  }
  const flatstyles = StyleSheet.create({
    container: {
     width: "100%",
     paddingTop: 30, 
     marginLeft: 30
    
    },
    item: {
      padding: 5,
      fontSize: 20,
      height: 40,
      color: 'white'
    },
  });