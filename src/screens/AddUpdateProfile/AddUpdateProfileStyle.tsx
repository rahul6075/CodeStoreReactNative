import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0.3, height: 1},
    shadowOpacity: 0.4,
    borderRadius: 10,
  },
  heading: {
    color: '#05264E',
    fontSize: 25,
    lineHeight: 28,
    paddingLeft:20,
    paddingTop:10,
    marginVertical:10,
  },
  photoContainer: {},
  avatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uploadIcon: {
    marginTop: 20,
    marginBottom: 8,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: '#A0ABB8',
    borderStyle: 'dashed',
    alignItems: 'center',
    height: 80,
    width: 80,
  },
  avatarImg: {
    height: 85,
    width: 85,
    borderRadius: 50,
    borderColor: '#A0ABB8',
    borderWidth: 1,
    resizeMode: 'contain',
  },
  formContainer: {
    marginVertical: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    paddingTop: 15,
  },
  formElement: {},
  label: {
    color: '#05264E',
    fontSize: 13,
    lineHeight: 18,
    paddingVertical: 5,
  },
  formInput: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginVertical: 2,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 1,
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
  },
  phoneStyle: {
    flexDirection: 'row',
  },
  contactInput: {
    flex: 0.9,
  },
  countryInput: {
    flex: 0.1,
  },
  formInputNumber: {
    fontSize: 18,
    lineHeight: 20,
    paddingHorizontal: 5,
  },
  formInputcode: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    paddingRight: 7,
    fontSize: 16,
    lineHeight: 18,
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
