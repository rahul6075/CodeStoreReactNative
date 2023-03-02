import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageHeader: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: '#05264E',
    fontSize: 22,
    lineHeight: 28,
    paddingLeft: 10,
  },
  leftArrowIcon: {
    width: 43,
    height: 43,
    padding: 10,
    backgroundColor: '#F1F3F6',
    borderRadius: 50,
  },
  avatar: {
    flex: 0.1,
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  avatarText: {
    padding: 8,
    textTransform: 'uppercase',
    fontSize: 23,
    fontWeight: '600',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#05264E',
  },
  avatarDummy: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default styles;
