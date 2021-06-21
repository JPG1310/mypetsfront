import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Cadastrar({navigation}) {

function cadastrarServico(){
  navigation.navigate("CadastroServico")
}

function cadastrarProduto(){
  navigation.navigate("CadastroProduto")
}

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#7B68EE'}}>
        <Text style={{fontSize: 25, color: 'white', marginTop: "5%"}}>O que você quer cadastrar?</Text>
    <Button  buttonStyle={{backgroundColor:"orange", marginTop:"8%"}}
    icon={
      <Icon
        name="paw"
        size={15}
        color="white"
      /> 
    }
  title="Cadastrar Animal"
  style={styles.button}
  onPress={() => cadastrarServico ()}
/>

<Button  buttonStyle={{backgroundColor:"orange", marginTop:"4%"}}
    icon={
      <Icon
        name="child"
        size={15}
        color="white"
      /> 
    }
  title="Cadastrar Serviço"
  style={styles.button}
  onPress={() => cadastrarProduto ()}
/>
  </View>
 );
}  