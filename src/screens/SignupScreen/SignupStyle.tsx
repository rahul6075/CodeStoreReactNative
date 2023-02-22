import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  leftArrowIcon: {
    width: 43,
    height: 43,
    padding: 10,
    backgroundColor: '#F1F3F6',
    borderRadius: 50,
  },
  logoSection: {
    alignItems: 'center',
  },
  loginPageLogo: {
    paddingVertical: 20,
  },
  formSection: {
    flex: 1,
    marginVertical: 15,
  },
  formHeading: {
    color: '#000000',
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '300',
    marginBottom: 15,
  },
  formElememt: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  formElememtCheck: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  phoneStyle: {
    flexDirection: 'row',
  },
  formInput: {
    paddingHorizontal: 5,
    color: '#000000',
    fontSize: 16,
    lineHeight: 18,
  },
  formInputcode: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    paddingRight: 7,
    fontSize: 16,
    lineHeight: 18,
  },
  formInputNumber: {
    fontSize: 18,
    lineHeight: 20,
    paddingHorizontal: 5,
  },
  formButton: {
    marginVertical: 10,
    backgroundColor: '#3C65F5',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  formButtonText: {
    fontSize: 25,
    lineHeight: 30,
    color: '#fff',
    fontWeight: '400',
  },
  containerFooter: {},
  footerHeading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  info: {
    color: '#000000',
    fontSize: 15,
    lineHeight: 30,
    fontWeight: '500',
  },
  signInBtn: {
    color: '#3C65F5',
  },
});

export default styles;
