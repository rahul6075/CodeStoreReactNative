import {StyleSheet, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderRadius: 5,
  },
  statusIcon: {
    flex: 0.1,
    marginLeft: 10,
  },
  statusIconSucess: {
    height: 28,
    width: 28,
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 5,
    borderRadius: 50,
  },
  statusIconError: {
    height: 28,
    width: 28,
    alignItems: 'center',
    padding: 5,
    borderColor: 'red',
    borderWidth:2,
    borderRadius: 50,
  },
  messageText: {
    flex: 0.8,
  },
  message: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '500',
  },
  closeModelIcons: {
    flex: 0.1,
    backgroundColor:'#D0DAFF',
    padding:5,
    borderRadius:50,
  },
});

export default styles;
