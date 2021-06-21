import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import Animals from '../assets/rsc/Component/Animals'
import {useLinkProps, useNavigation} from '@react-navigation/native'




export default function Busca() {
  const navigation = useNavigation();
    return (
      <View style={styles.header}>
       <Image
       source={require('../assets/Imagens/mpp.png')}
       style={styles.image}
       />
       <View style={styles.line}/>
<View style={{ justifyContent: 'center', alignItems: 'center' }}>
<Text style={styles.text}>Bem vindo ao Meu Pet Perfeito!</Text>  
</View>
<View style={styles.vieu}>
<View style={styles.fundo}>
<Icon name='search' style={{fontSize:24}}/>
<TextInput style={styles.texto} placeholder="Procurar"/>
</View>
  </View>
<View style={styles.line}/>
<View style={{flex:1}}>

</View>


<View>
  
</View>
<View style={{flexDirection:'row'}}>
<ScrollView>
         <Text style={styles.text}></Text>
         <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
        <Animals img={require('../assets/Imagens/cat3.jpg')} descr='3 anos.' onClick={()=> navigation.navigate('Detail')}>
          Fernandinho
        </Animals>
        <Animals img={require('../assets/Imagens/dog1.jpg')} descr='2 anos. Dócil' onClick={()=> navigation.navigate('Detalhes')}>
          Teberga
        </Animals>
         </View>
         <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
        <Animals img={require('../assets/Imagens/cat1.jpg')} descr='3 anos. Dócil' onClick={()=> navigation.navigate('Detalhes1')}>
          Felipinho
        </Animals>
        <Animals img={require('../assets/Imagens/dog2.jpg')} descr='2 anos. Dócil' onClick={()=> navigation.navigate('Detalhes2')}>
          Maicão
        </Animals>
         </View>
         <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
        <Animals img={require('../assets/Imagens/cat1.jpg')} descr='3 anos. Dócil' onClick={()=> navigation.navigate('Detalhes1')}>
          Felipinho
        </Animals>
        <Animals img={require('../assets/Imagens/cat1.jpg')} descr='2 anos. Dócil' onClick={()=> navigation.navigate('Detalhes2')}>
          Maicão
        </Animals>
         </View>
         </ScrollView>   

</View>

</View>
      
  );
}


const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: '29%'

  },
  line:{
    borderBottomColor:'#000',
    borderBottomWidth: 2,
    marginVertical:'1%'
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
    height: 50,
    backgroundColor:'#fff',
    flexDirection:'row',
    padding:5,
    alignItems:'center'
  },
  texto:{
    alignItems:'center',
    marginLeft:'5%',
    fontSize:20,
  },
  textt:{
    fontSize:20,
    flexDirection:'row',
    marginVertical:'18%',
    marginHorizontal:'30%',
  }
})
