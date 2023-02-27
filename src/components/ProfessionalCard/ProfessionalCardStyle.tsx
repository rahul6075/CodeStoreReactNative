import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF',
    display: 'flex',
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.8,
    elevation: 0.5,
  },
  cardHeader: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  cardHeaderLeft: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  cardHeaderRight: {},
  avatarImg: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  info: {
      paddingLeft:15, 
  },
  name: {
    color:'#05264E',
    fontSize:18,
    lineHeight:23,
    fontWeight:'700'
  },
  designation: {
    color:'#66789C',
    fontSize:14,
    lineHeight:25,
  },
  price: {
    color:'#3C65F5',
    fontWeight:'700',
    fontSize:22,
    lineHeight:28,
  },
  cardContent: {
    paddingVertical:10,
  },
  cardDescription: {
    paddingVertical:5,
    color:'#66789C',
    fontSize:16,
    lineHeight:18,
    letterSpacing:0.2
  },
  showMoreBtn:{
    color:'#3C65F5',
    fontSize:15,
    lineHeight:20,
    fontWeight:'500'
  },
  cardSkills: {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  cardSkill: {
    textTransform:'uppercase',
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:'#F2F6FD',
    fontWeight:'500',
    color:'#4F5E64',
    marginRight:5,
    marginVertical:3,
    borderRadius:3,
  },
});

export default styles;
