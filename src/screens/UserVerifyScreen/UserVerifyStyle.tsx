import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#fff',
  },
  main: {
    paddingHorizontal: 25,
    paddingVertical: 11,
  },
  skipButton: {
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  skipButtonText: {
    color: '#66789C',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    borderBottomColor: '#05264E',
    borderBottomWidth: 1,
  },
  footer: {
    backgroundColor: '#05264E',
    paddingHorizontal: 25,
    paddingVertical: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
    elevation: 10,
  },
});

export default styles;
