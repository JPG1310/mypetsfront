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
    width: "40%",
    marginTop: 10,
    marginLeft: 110,
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
  cadastrobutton: {
    backgroundColor: "#FF9100",
    width: "40%",
    marginTop: 10,
    marginLeft: 110,
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
    fontFamily: "OpenSansCondensed-Light",
  },
  imageBack:{
    width: 390,
    height: 300,
    marginTop: -171,
  },
  imageBack2:{
    width: 390,
    height: 300,
    marginTop: 0,
  },
  titulo:{
    fontFamily: "OpenSansCondensed-Light",
    marginTop: -20,
    marginBottom: 30,
  },
  /*imageBack:{
    width:260,
    height:260,

  }*/

});

export default styles