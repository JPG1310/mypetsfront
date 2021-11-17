import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { TextInputMask } from 'react-native-masked-text'
import usuarioService from '../services/UsuarioService';
import { Alert } from 'react-native';
import {Image} from 'react-native';



export default function Cadastro ({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [senha, setSenha] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)

  let cpfField = null
  let telefoneField = null

  const validar = () =>{
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorSenha(null)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(email).toLowerCase())){
    setErrorEmail("Preencha seu email corretamente")
    error = true
  }
  if(!cpfField.isValid()){
    setErrorCpf("Preencha seu CPF corretamente")
    error = true
  }
  if(telefone == null){
    setErrorTelefone("Preencha seu telefone corretamente")
    error = true
  }
  if(senha == null){
    setErrorSenha("Preencha a senha")
    error = true
  }
  return !error
}

  const salvar = () => {
    if (validar()){
      setLoading(true)
    let data = {
      email: email,
      cpf: cpf,
      nome: nome,
      telefone: telefone,
      senha: senha
    }
    usuarioService.cadastrar(data)
    .then((response) => {
      setLoading(false)
      const titulo = (response.data.status) ? "SUCESSO!" : "ERRO"
      Alert.alert(titulo, response.data.mensagem)
       console.log(response.data)
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
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container, specificStyle.specifcContainer}>
      <ScrollView style={{width: "100%"}}
      keyboardVerticalOffset={80}>

      <Image source={require('../assets/Imagens/banner_cadastro.png')} style={styles.imageBack2}/>
        
      <Text h3 style={specificStyle.titulo}>  Cadastre-se </Text>
      
      <View style={specificStyle.cont}> 
      <Input
      placeholder="E-mail"
      onChangeText={value => {
        setEmail(value)
        setErrorEmail(null)
      }      }
      keyboardType="email-address"
      errorMessage={errorEmail}
  />
   <Input
      placeholder="Nome/Nome da Empresa"
      onChangeText={value => setNome(value)}
      errorMessage={errorNome}
  />

<View style={styles.containerMask}>
  <TextInputMask
  placeholder="CPF/CNPJ"
  type={'cpf'}
  value={cpf}
  onChangeText={value => {
    setCpf(value)
    setErrorCpf(null)
  }}
  keyboardType="number-pad" 
  returnKeyType="done"
  style={styles.maskedInput}
  ref={(ref) => cpfField = ref}
/>
</View>

<Text style ={styles.errorMessage} >{errorCpf}</Text>

<View style={styles.containerMask}>
  <TextInputMask
  placeholder="Telefone"
  type={'cel-phone'}
  options={{
    maskType: 'BRL',
    withDDD: true,
    dddMask: '(99)'
  }}
  value={telefone}
  onChangeText={value => setTelefone(value)}
  keyboardType="phone-pad"
  returnKeyType="done"
  style={styles.maskedInput}
  ref={(ref) => telefoneField = ref}
/>
</View>
<Text style ={styles.errorMessage} >{errorTelefone}</Text>

<Input
      placeholder="Senha"
      onChangeText={value => setSenha(value)}
      errorMessage={errorSenha}
      secureTextEntry={true}
  />

  <CheckBox 
  title="Eu aceito os termos de uso do aplicativo"
  checkedIcon="check"
  uncheckedIcon="square-o"
  checkedColor="green"
  uncheckedColor="red"
  checked={isSelected}
  onPress={() => setSelected(!isSelected)}
  />

  { isLoading &&
  <Text>Carregando...</Text>
  }
  
  { !isLoading && 
<Button
  icon={
    <Icon
      name="user"
      size={25}
      color="white"
      
    />
    
  }
  
  title="Salvar"
  buttonStyle={specificStyle.button}
  onPress={() => salvar()}
/>
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
  button:{
    width: 200,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    fontFamily: "OpenSansCondensed-Light",
    textAlign:"center",
    backgroundColor:"#FF9100",
    alignItems:"center",
    marginLeft: 85,
    paddingTop: 11,
    paddingBottom: 12,
    borderRadius: 50,
  },
  imageBack:{
    width: 380,
    height: 300,
    marginTop: 0,
  },
  titulo:{
    fontFamily: "OpenSansCondensed-Light",
    marginTop: -20,
    marginBottom: 30,
    textAlign: 'center',
  },
  cont:{
    marginLeft: 10,
    marginRight: 10,
  }
})


