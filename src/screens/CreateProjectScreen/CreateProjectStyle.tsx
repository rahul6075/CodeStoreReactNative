import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginVertical: 46,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0.3, height: 1},
    shadowOpacity: 0.4,
    borderRadius: 10,
  },

  formContainer: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  formElement:{},
  formElementCol: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  },
  colFirst: {
    flex:0.59
  },
  colFirstSatrtDate:{
    flex:0.5
  },
  colFirstEndDate:{
    flex:0.5
  },
  colSecond: {
    paddingLeft:5,
    flex:0.4
  },
  label: {
    color: '#05264E',
    fontSize: 19,
    lineHeight: 25,
    paddingVertical: 5,
  },
  desc: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  formInput: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginVertical: 2,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  formInputCheck:{
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginVertical: 2,
    paddingVertical:10,
     borderRadius: 5,
  },
  InputEle: {
    letterSpacing: 0.2,
    color: '#000000',
    fontSize: 18,
  },
  datePicker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:5,
  },
  butttonElements: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnWidth: {
    width: '40%',
    margin: 5,
  },
});

export default styles;
