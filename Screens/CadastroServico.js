import React, { useState } from 'react';
import { Alert, Image, View} from 'react-native';
import { KeyboardAvoidingView, Platform, ScrollView,  StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import servicoService from '../services/ServicoService';
import styles from '../style/MainStyle';

export default function CadastroServico({navigation}) {

  const [titulo, setTitulo] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [cidade, setCidade] = useState(null)
  const [raca, setRaca] = useState(null)
  const [idade, setIdade] = useState(null)
  const [sexo, setSexo] = useState(null)
  const [errorTitulo, setErrorTitulo] = useState(null)
  const [errorDescricao, setErrorDescricao] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const validar = () =>{
    let error = false
    setErrorTitulo(null)
    setErrorDescricao(null)

    if(titulo.length < 4){
    setErrorTitulo("Digite pelo menos 4 letras no título")
    error = true
  }

  if(descricao.length < 20){
    setErrorDescricao("Digite pelo menos 20 letras na descrição")
    error = true
  }

  return !error 
}

  const salvar = () => {
    if (validar()){
      setLoading(true)

    let data = {
      titulo: titulo,
      descricao: descricao,
      cidade: cidade,
      raca: raca,
      idade: idade,
      sexo: sexo
    }

    servicoService.cadastrar(data)
    .then((response) => {
      setLoading(false)
      Alert.alert(response.data.mensagem)
      setTitulo(null)
      setDescricao(null)
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
      Alert.alert("Erro", "Houve um erro inesperado")
    })
  }
 
}

function cancelar(){
  navigation.navigate("Busca")
}

 
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container, specificStyle.specifcContainer}>
        <View style={specificStyle.menu}>
      <Image source={require('../assets/Imagens/logo.png')} style={specificStyle.logo}/>
      <Text style={{fontSize: 18, marginLeft: 100, color: '#fff', marginTop: -32, fontWeight: "bold"}}>Meu Pet Perfeito</Text>
      </View> 
        <ScrollView style={{width: "100%"}} keyboardVerticalOffset={80}>
        <Text style={{textAlign: 'center', marginTop: 20, fontSize: 24, fontWeight: "bold"}}>Cadastrar Pet</Text>

      <View style={specificStyle.cont}>
    
    <Input style={{marginTop: 40}}
      placeholder="Nome"
      onChangeText={value => {
        setTitulo(value)
        setErrorTitulo(null)
      }}
      errorMessage={errorTitulo}
  />

<Input style={{marginTop: 1}}
      placeholder="Cidade"
      onChangeText={value => {
        setCidade(value)
    
      }}
     
  />

<Input style={{marginTop: 1}}
      placeholder="Raça"
      onChangeText={value => {
        setRaca(value)
    
      }}
     
  />
  
<Input style={{marginTop: 1}}
      placeholder="Idade"
      onChangeText={value => {
        setIdade(value)
    
      }}
      keyboardType="number-pad"   
  />

<Input style={{marginTop: 1}}
      placeholder="Sexo"
      onChangeText={value => {
        setSexo(value)
      }}  
  />

<Input
      placeholder="Descreva o animal"
      onChangeText={value => {
        setDescricao(value)
        setErrorDescricao(null)
      }}
      errorMessage={errorDescricao}
  />

  { isLoading &&
  <Text>Carregando...</Text>
  }
  
  { !isLoading && 
  <> 
<Button buttonStyle={specificStyle.button}
  title="Cadastrar"
  buttonStyle={styles.cadastrobutton}
  onPress={() => salvar()}
/>

<Button buttonStyle={specificStyle.button}
  title="Cancelar"
  buttonStyle={styles.button, styles.cancelButton}
  onPress={() => cancelar()}
  
/>

</>
}
</View>
</ScrollView>
</KeyboardAvoidingView>

  );
}
const specificStyle = StyleSheet.create({
  specifcContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  menu:{
    backgroundColor: '#3C096C',
    width: 385,
    height: 88,
  },
  logo:{
      width: 70,
      height: 55,
      marginTop: 34,
      marginLeft: 10,
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
  menuText:{
     zIndex: 1,
     marginTop: -32,
     marginLeft: 300,
     color: '#FFF',
     fontSize: 15,
  },
  banner:{
    width: 360,
    height: 190,
    marginTop: 16,
  },
  cont:{
    marginLeft: 10,
    marginRight: 10,
  } 
})
