import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileScreen: {
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#fff',
  },
  container: {
    marginVertical: 46,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0.3, height: 1},
    shadowOpacity: 0.4,
    borderRadius: 10,
  },
  Profileheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  profileButton: {
    fontSize: 23,
    lineHeight: 24,
    borderBottomColor: '#66789C',
    borderBottomWidth: 1,
  },
  profileEditIcon: {
    backgroundColor: '#3C65F5',
    padding: 10,
    borderRadius: 50,
  },
  ProfileContent: {
    marginVertical: 15,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profileDescription: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileName: {
    color: '#05264E',
    fontSize: 20,
    lineHeight: 35,
  },
  profileTag: {
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTagIcon: {
    backgroundColor: '#00D246',
    paddingHorizontal: 4,
    paddingVertical: 4.3,
    lineHeight: 22,
    borderleftRadius: 10,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  profileTagText: {
    backgroundColor: '#00A938',
    fontSize: 14,
    fontWeight:'bold',
    lineHeight: 18,
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: '#fff',
    letterSpacing: 0.02,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  profileFounded: {
    marginVertical: 10,
    color: '#05264E',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.03,
  },
  profileAboutHeading: {
    color: '#05264E',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.03,
  },
  profileAboutDesc: {
    color: '#66789C',
    fontSize: 16,
    lineHeight: 22,
  },
  Profilefooter: {},
  profileUsername: {
    color: '#05264E',
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0.03,
  },
  profileContacts: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 5,
  },
  profileContactsLink: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:3
  
  },
  linkText:{
     marginLeft:10
  }
});

export default styles;
