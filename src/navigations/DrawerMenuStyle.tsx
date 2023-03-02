import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  leftArrowIcon: {
    width: 40,
    height: 40,
    padding: 10,
  },
  drawerHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  avatarImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  info: {
    paddingLeft: 10,
    display: 'flex',
  },
  name: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
  },
  company: {
    color: '#66789C',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
  },
  listItem: {},
  drawerFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 300,
    paddingLeft: 15,
  },
  logout: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '500',
    marginLeft:6,
  },
});

export default styles;
