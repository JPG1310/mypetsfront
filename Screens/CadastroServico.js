import React, { useState } from 'react';
import { Alert, Image, TouchableHighlight, View, ToastAndroid} from 'react-native';
import { KeyboardAvoidingView, Platform, ScrollView,  StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
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
  const [Pic, SetPic] = useState(null)


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

const setToastMsg = msg => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
};

const uploadImage = () => {
  let options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: true,
  };

  launchImageLibrary(options, response => {
    if(response.didCancel){
      setToastMsg('Cancelled image selection');
    } else if ((response.errorCode == 'permission')) {
      setToastMsg('permission not satisfied');
    } else if ((response.errorCode == 'others')) {
      setToastMsg(response.errorMessage);
    } else if(response.assets[0].fileSize > 2097152) {
     Alert.alert ('Maximum image size exceeded', 'Please choose image under 2 MB', [{text: 'OK'}],
     );
    } else {
      SetPic(response.assets[0].base64);
    }
  });
};

const removeImage = () => {
  SetPic('')
  setToastMsg('Image removed');
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

    <View style={specificStyle.centerContent}>
      <TouchableHighlight
      onPress={()=>alert('pressed')}
      underlayColor='rgba(0,0,0,0)'>
        <Avatar.Image
        size={250}
        source={{uri:'data:image/png;base64,'+Pic}}
        />
      </TouchableHighlight>
    </View>
    <View style={specificStyle.centerContent}>
      <Button buttonStyle={specificStyle.button}
       title="Escolher Imagem"
       mode="contained" 
       onPress={() => uploadImage()}>
      </Button>
      <Button buttonStyle={specificStyle.button} 
       title="Remover Imagem"
      mode="contained"
      style={{marginLeft: 20}}
      onPress={() => removeImage()}>
      </Button>

    </View>










    
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
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  }
})
