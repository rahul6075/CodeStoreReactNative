import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  model:{
    width:"100%",
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  conatiner: {
    position:'relative',
    backgroundColor: '#fff',
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: '#eee',
  },
  closeIcon: {
      position:'absolute',
      right:5,
      top:1,
      padding:8,
      backgroundColor:'#eee',
      borderRadius:50,

  },
  messageIcon:{
    alignItems:'center',
    marginTop:50,
  },
  messageText: {
    textAlign:'center',
    color:'#05264E',
    fontSize:20,
    lineHeight:40,
  },
  modelButton: {
    alignItems:'center',
    marginVertical:10,    
  },
});

export default styles;
