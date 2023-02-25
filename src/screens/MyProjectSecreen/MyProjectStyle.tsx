import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  headerSection: {
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    marginVertical:20
  },
  profile:{
    marginVertical:20,
  },

  screenHeading: {
    color: '#000000',
    fontSize: 25,
    lineHeight: 30,
  },
  projectContainer: {
    marginVertical: 46,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems:'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0.3, height: 1},
    shadowOpacity: 0.4,
    borderRadius: 10,
  },
  folderIcon:{
    marginVertical:15,
  },
  projectContainerHeading:{
     color:'#000000',
     fontSize:25,
     lineHeight:30,
     letterSpacing:0.02
  },
  projectContainerDesc:{
    color:'#000000',
    fontSize:18,
    lineHeight:24,
    letterSpacing:0.2,
    paddingHorizontal:20,
    paddingVertical:10
  },
  projectContainerBtn:{
     marginVertical:25,
  },
  // modelSection:{
  //    marginHorizontal:15
  // }
});

export default styles;
