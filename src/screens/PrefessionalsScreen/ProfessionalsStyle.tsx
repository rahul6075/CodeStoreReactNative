import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  headerSection: {
    backgroundColor: '#fff',
  },
  content: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {width: 0.6, height: 1},
    shadowOpacity: 0.8,
    elevation: 0.3,
  },
  contentHeaderIcon: {
    padding: 5,
    flex:0.08
  },
  searchIcon: {
    backgroundColor: '#3C65F5',
    borderRadius: 10,
    alignItems: 'center',
  },
  filterIcon: {
    alignItems:'flex-end'
  },
  searchInput: {
    flex: 0.9,
    color: '#000000',
    paddingHorizontal: 5,
    fontSize: 18,
  },
  contentHeading: {
    color:'#05264E',
    fontSize:22,
    lineHeight:32,
    fontWeight:'bold',
    padding:10,
  },
  contentCards: {
    marginHorizontal:5,
  },
  contentCard:{
    marginVertical:8,
  }
});

export default styles;
