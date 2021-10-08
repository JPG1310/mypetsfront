import React from 'react';
import { View, Image, ScrollView, TouchableOpacity,StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native-elements';

export default function Detalhes({ navigation}) {

  navigation.setOptions({
    headerTitle: 'Teberga'
  })
 return (
   <ScrollView style={styles.container}>
     
     <View style={styles.menu}>
    <Image source={require('../../assets/Imagens/logo.png')} style={styles.logo}/>
    <Text style={{fontSize: 18, marginLeft: 100, color: '#fff', marginTop: -32, fontWeight: "bold"}}>Meu Pet Perfeito</Text>
  </View>
     
  <Text style={{textAlign: 'center', marginTop: 20, fontSize: 24, fontWeight: "bold"}}>Detalhes</Text>

     <View style={styles.caixa}>
     <Image
     source={require('../../assets/Imagens/dog1.jpg')}
     style={styles.image}
     resizemode="cover"
     />

     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <View>
         <Text style={styles.text, {fontSize: 24, textAlign: 'center', marginTop: 20, marginBottom: 20, fontWeight: "bold"}}>Teberga</Text>
       </View>
       <View>
         <Text style={styles.text, {fontSize: 18, textAlign: 'center'}}>Porte grande, carinhoso, brincalhão.</Text>
       </View>
       
       <Button buttonStyle={styles.button}
       icon={
    <Icon
      name="paw"
      size={15}
      color="white"
    />
  }
  title="Adotar"
/>
     </View>
    </View>
    <View>
     <Text></Text>
   </View>  
   </ScrollView>
   
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor:'#fff'

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
  image:{
    width: 150,
    height: 150,
    borderRadius: 1000,
    marginTop: 30,
    marginLeft: 100,
  },
  text:{
    
  },
  button:{
    width: 150,
    marginTop: 30,
    marginBottom: 30,
    fontSize: 12,
    fontFamily: "OpenSansCondensed-Light",
    textAlign:"center",
    backgroundColor:"#FF9100",
    alignItems:"center",
    marginLeft: 0,
    paddingTop: 11,
    paddingBottom: 12,
    borderRadius: 50,
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
line:{
  borderBottomColor:'#000',
  borderBottomWidth: 2,
  marginVertical:'1%'
}

})