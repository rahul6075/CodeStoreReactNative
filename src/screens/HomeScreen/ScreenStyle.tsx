import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  gradient: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
  },
  heroContainer: {
    paddingVertical: 10,
    flex: 1,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  logoImg: {},
  logo: {
    height: 35,
    paddingTop: 10,
    paddingLeft: 10,
  },
  headerRight: {
    width: '20%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBtn: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 60,
  },
  heroHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 10,
    fontFamily: 'Montserrat',
  },
  heroDesc: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
    paddingVertical: 5,
    fontFamily: 'Montserrat',
  },
  heroBtn: {
    backgroundColor: '#5BBB7B',
    width: '30%',
    marginVertical: 20,
    paddingVertical: 8,
    alignItems: 'center',
    color: '#fff',
    borderRadius: 25,
  },
  talentSection: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  sectionHeading: {
    color: '#000000',
    fontSize: 25,
    fontWeight: '300',
    marginVertical: 10,
  },
  sectiondesc: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '300',
    marginVertical: 5,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap:5,
    marginVertical:10,
  },
});

export default styles;
