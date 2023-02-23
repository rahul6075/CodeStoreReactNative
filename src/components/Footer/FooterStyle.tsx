import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
  },
  footerLinks: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 1,
    paddingVertical: 2,
  },
  footerLink: {
    paddingBottom: 2,
  },
  linkText: {
    color: '#fff',
    fontSize: 13,
    lineHeight:20,
    fontWeight: '400',
  },
  footerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderBottomColor: 'rgba(183, 226, 198, 0.2)',
    borderBottomWidth: 1,
  },
  icons: {
    width: 50,
    height: 50,
  },
  footerCaption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCapText: {
    color: '#fff',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '300',
    letterSpacing: 0.2,
  },
});

export default styles;
