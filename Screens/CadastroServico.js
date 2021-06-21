import React, { useState } from 'react';
import { Alert, Image, View} from 'react-native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import servicoService from '../services/ServicoService';
import styles from '../style/MainStyle';

export default function CadastroServico() {

  const [titulo, setTitulo] = useState(null)
  const [descricao, setDescricao] = useState(null)
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
      descricao: descricao
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
 
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <View style={{width: "100%", height: "15%"}}>
        <Image style={{width: "100%", height: "165%"}}
       source={require('../assets/Imagens/mpp.png')}
       />
       </View>
      <ScrollView style={{width: "100%"}} keyboardVerticalOffset={80}>
        
      <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 25, marginLeft: 15, marginEnd: 20, marginTop: 90 }}>Cadastre seu animal perfeito!</Text>
      
    <Input style={{marginTop: 40}}
      placeholder="Nome do Animal"
      onChangeText={value => {
        setTitulo(value)
        setErrorTitulo(null)
      }}
      errorMessage={errorTitulo}
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
<Button 
  icon={
    <Icon
      name="check-circle"
      size={25}
      color="white"
    />
  }
  title="Salvar"
  buttonStyle={styles.button}
  onPress={() => salvar()}
/>

<Button 
  icon={
    <Icon
      name="times"
      size={25}
      color="white"
    />
  }
  title="Cancelar"
  buttonStyle={styles.button, styles.cancelButton}
  onPress={() => cancelar()}
/>
</>
}
   </ScrollView>
  </KeyboardAvoidingView>
  );
}