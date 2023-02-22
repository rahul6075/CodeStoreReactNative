import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical:5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0.3, height: 1},
    shadowOpacity: 0.4,
    borderRadius: 10,
  },
  cardImage: {},
  cardHeading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
  },
  cardDesc: {
    paddingVertical: 3,
    color: '#66789C',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '400',
  },
  cardEmail: {
    color: '#05264E',
    fontSize: 14,
    lineHeight: 35,
    fontWeight: '500',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  formElement: {
  },
  profileBtn:{
    backgroundColor:'rgba(160, 171, 184, 0.63)',
    color:'#fff',
    paddingVertical:6,
    paddingHorizontal:15,
    lineHeight:17,
    fontSize:16,
    fontWeight:'500',
    borderRadius:5,
  },
  formInput: {
    padding:5,
    height: 30,
    width:30,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius:5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0.3, height: 1},
    shadowOpacity: 0.8,
  },
  formElementBtn:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  profile:{
   lineHeight:30,
   marginBottom:20
  },
  btn:{
    color:'#66789C',
    fontWeight:'600',
    fontSize:12,
    lineHeight:45,
    marginHorizontal:10,

  },
  activeBtn:{
    color:'#3C65F5'
  }
});

export default styles;
