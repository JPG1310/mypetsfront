import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  
  button: {
    width: "50%",
    marginTop: 30,
    marginLeft: 90,
    backgroundColor:"#32CD32"
  },
  cancelButton: {
    backgroundColor: "#c00",
    width: "50%",
    marginTop: 10,
    marginLeft: 90
  },
  container: {
    flex: 1,
    textAlign:'center',
    backgroundColor: '#fFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskedInput:{
    flexGrow: 1,
    height: 40,
    fontSize:18,
    borderBottomColor:'#999',
    borderBottomWidth:1,
    borderStyle:'solid',
    alignSelf:"flex-start"
  },
  containerMask:{
    flexDirection:'row',
    marginBottom: 5,
    marginLeft:10,
    marginRight:10,

  },
  errorMessage:{
    alignSelf:"flex-start",
    marginLeft: 15,
    color:"#f00",
    fontSize: 12,
  },
  textStyle:{
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    flex:0.3,
    fontFamily:"comic-sans",
  },
  imageBack:{
    width:260,
    height:260,

  }

});

export default styles