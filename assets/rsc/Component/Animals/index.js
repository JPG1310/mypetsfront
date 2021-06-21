import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function Animals(props) {

function filterDesc(desc){
  if(desc.length < 27){
    return desc;
  }
  return `${desc.substring(0, 20)}...`;
}
  return (
   <TouchableOpacity styles={styles.container} onPress={props.onClick}>
     <Image 
     source={props.img}
     style={styles.AnimalsImg}
     />
     <Text style={styles.animalsText}>
     {props.children}
     </Text>
     <View>
     <Text style={styles.animalsText}>
     {filterDesc(props.descr)}
     </Text>
     </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:'2%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  AnimalsImg:{
    width: 155,
    height: 155,
    marginVertical:'5%'
  },
  animalsText:{
    fontSize:20,
    alignItems:'center',
    marginHorizontal: '0%',
    marginVertical:'2%'

  }
})