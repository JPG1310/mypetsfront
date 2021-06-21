
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
     <Image
     source={require('../../assets/Imagens/dog1.jpg')}
     style={styles.image}
     resizemode="cover"
     />
         <View style={styles.line}/>
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <View>
         <Text style={styles.text, {fontSize: 30}}>Teberga</Text>
       </View>
       <View>
         <Text style={styles.text, {fontSize: 20}}>Porte grande, carinhoso, brincalhão.</Text>
       </View>
       
       <Button buttonStyle={styles.botao}
       icon={
    <Icon
      name="paw"
      size={15}
      color="white"
    />
  }
  title="ADOTAR"
/>
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
  image:{
    width:420,
    height: 300,
  },
  text:{
    
  },
botao:{
  width:"100%",
  marginTop: 20,
  textAlign:"center",
  alignItems:"center",
  justifyContent:"flex-start",
  /*backgroundColor:"#000000a0",*/
  backgroundColor:"#32CD32",
  marginRight:0,
  marginLeft:0,
  paddingLeft:23,
  paddingRight:23,
  fontWeight:"bold",  
  
},

line:{
  borderBottomColor:'#000',
  borderBottomWidth: 2,
  marginVertical:'1%'
}

})