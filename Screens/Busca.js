import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet, ScrollView, Image, TextInput} from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import Animals from '../assets/rsc/Component/Animals';
import {useLinkProps, useNavigation} from '@react-navigation/native';


export default function Busca() {
  function Detail(){
    navigation.navigate("Detail")
  }

  function Detail1(){
    navigation.navigate("Detalhes")
  }

  const navigation = useNavigation();
    return (
      <View style={styles.header}>
       
      <View style={styles.menu}>
      <Image source={require('../assets/Imagens/logo.png')} style={styles.logo}/>
      <Text style={{fontSize: 18, marginLeft: 100, color: '#fff', marginTop: -32, fontWeight: "bold"}}>Meu Pet Perfeito</Text>
      </View>

      <View style={styles.fundo}>
      <Icon name='search' style={{fontSize:24, marginLeft:5}}/>
      <TextInput style={styles.texto} placeholder="Procurar Pet"/>
      </View>
      <Text style={{textAlign: 'center', marginTop: 20, fontSize: 24, fontWeight: "bold"}}>Pets para adoção</Text>
      <View>
      <ScrollView>
      
        <View style={styles.caixa}>
        <Image
          source={require('../assets/Imagens/cat3.jpg')}
          style={styles.images}
          resizemode="cover"
        />
        <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20, fontWeight:'bold'}}>Fernandinho</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 20}}>Idade: 3 anos</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Sexo: Macho</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Porte: Pequeno</Text>
        <Button buttonStyle={styles.button}
        title="Ver detalhes"
        style={styles.button}
        onPress={() => Detail ()}
        />
        </View>
        <Image
          source={require('../assets/Imagens/anuncio.jpg')}
          style={styles.anuncioimg}
          resizemode="cover"
        />
        <View>

        </View>

        <View style={styles.caixa}>
        <Image
          source={require('../assets/Imagens/dog1.jpg')}
          style={styles.images}
          resizemode="cover"
        />
        <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20, fontWeight:'bold'}}>Teberga</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 20}}>Idade: 2 anos</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Sexo: Macho</Text>
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 8}}>Porte: Grande</Text>
        <Button buttonStyle={styles.button}
        title="Ver detalhes"
        onPress={() => Detail1 ()}
        />
        </View>
        
        <View style={{marginTop: 200}}></View>
</ScrollView>   

</View>

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

