import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import { View, StyleSheet, ScrollView, Image, TextInput} from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Config from '../util/Config';
import servicoService from '../services/ServicoService';

export default function Busca() {
  function Detail(){
    navigation.navigate("Detail")
  }

  function Detail1(){
    navigation.navigate("Detalhes")
  }

  const navigation = useNavigation();

  const [pets, setPets] = useState([])
  const [busca, setBusca] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    buscar()
  
  }, [])

  const buscar = () => {
    servicoService.listartodos(busca)
    .then((response) => {
      console.log(response.data)
      setLoading(false)
      setPets(response.data)
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
    })
  }

  const renderItem = ({ item }) => (
    <View style={styles.caixa}>
        <Image
          source={require('../assets/Imagens/dog1.jpg')}
          style={styles.images}
          resizemode="cover"
        />
        <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20, fontWeight:'bold'}}>{item.titulo}</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 20}}>Idade: {item.idade}</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Sexo: {item.sexo}</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Raça: {item.raca}</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Cidade: {item.cidade}</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Descrição: {item.descricao}</Text>

        <Button buttonStyle={styles.button}
         icon={
          <Icon
            name="paw"
            size={15}
            color="white"
          />
        }
        title="ADOTAR"
        onPress={() => {
          Alert.alert(
            "SOLICITAÇÃO DE ADOÇÃO ENVIADA",
            "Sua solicitação foi enviada ao doador. Aguarde o contato.",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
        
              },
              { text: "OK!", onPress: () => console.log("OK Pressed") }
            ]
          );
        }}
        /*onPress={() => Detail1 ()}*/
        />
        </View>

  );

    return (
      <View style={styles.header}>

<View style={styles.menu}>
      <Image source={require('../assets/Imagens/logo.png')} style={styles.logo}/>
      <Text style={{fontSize: 18, marginLeft: 100, color: '#fff', marginTop: -32, fontWeight: "bold"}}>Meu Pet Perfeito</Text>
      </View>

      <View style={styles.fundo}>
      <Icon name='search' style={{fontSize:24, marginLeft:5}}/>
      <TextInput style={styles.texto} placeholder="Procurar Pet"
      onChangeText={value => {
        setBusca(value)
      }}
      onSubmitEditing = {() => buscar()}
      />
      </View>
      <Text style={{textAlign: 'center', marginTop: 20, fontSize: 24, fontWeight: "bold"}}>Pets para adoção</Text>

        <FlatList 
        data={pets}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        />
</View>
      
  );
}


const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 29,
    borderRadius: 50,
  },
  button:{
    backgroundColor: "#FF9100",
    width: "50%",
    marginTop: 15,
    marginLeft: 90,
    fontFamily: "OpenSansCondensed-Light",
    fontSize: 12,
    textAlign: "center",
    alignItems: "center",
    paddingLeft:30,
    paddingRight:30,
    paddingTop: 11,
    paddingBottom: 12,  
    borderRadius: 50,
    textTransform: 'uppercase',
  },
  images:{
    width: 150,
    height: 150,
    borderRadius: 1000,
    marginTop: 30,
    marginLeft: 100,
  },
  anuncioimg:{
    width: '90%',
    height: 150,
    marginTop: 30,
    marginLeft: 20,
  },
  line:{
    borderBottomColor:'#000',
    borderBottomWidth: 2,
    marginVertical:'1%'
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
  caixa:{
    width: '90%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2,},
    shadowOpacity: 0.25,
    elevation: 5,
    shadowRadius: 3.84,
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 0,
    paddingBottom: 50,
  },
  text:{
    fontSize:22,
    alignItems:'center',
    color: 'black'
  },
  header:{
    marginBottom: 60,
    flex:1,
    width:'100%'
  },
  vieu:{
    height: 80, 
    backgroundColor:'#7B68EE',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  fundo:{
    width: 375,
    backgroundColor:'#fff',
    flexDirection:'row',
    padding: 5,
    marginTop: 15,
    marginLeft: 4,
    alignItems:'center',
    borderRadius: 50,
  },
  texto:{
    alignItems:'center',
    marginLeft:'3%',
    fontSize:18,
  },
  textt:{
    fontSize:20,
    flexDirection:'row',
    marginVertical:'18%',
    marginHorizontal:'30%',
  },
})

