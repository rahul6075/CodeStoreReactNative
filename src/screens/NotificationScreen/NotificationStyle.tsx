import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerSection: {
    backgroundColor: '#fff',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  content: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  notification: {
    display: 'flex',
    justifyContent: 'center',
    margin: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  heading: {
    color: '#05264E',
    fontSize: 20,
    lineHeight: 25,
  },
  pageHeading:{
     paddingLeft:15,
     fontSize:22,
     lineHeight:28,
     fontWeight:'700'
  },
  description: {
    color: '#66789C',
    fontSize: 16,
    lineHeight: 25,
    paddingBottom: 10,
  },
});

export default styles;
