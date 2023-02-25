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
  heading: {
    color: '#05264E',
    fontSize: 25,
    lineHeight: 28,
  },
  uploadIcon: {
    marginTop: 20,
    marginBottom: 8,
    paddingVertical: 20,
    width: '25%',
    borderWidth: 2,
    borderColor: '#A0ABB8',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  avatarImg: {},
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
