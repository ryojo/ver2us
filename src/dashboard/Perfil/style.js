import {StyleSheet} from 'react-native';




export default StyleSheet.create({


container:{ 
 flex:1,
    justifyContent:'center',
 alignItems: 'center',
paddingHorizontal: 20,
 backgroundColor: '#F5F5F5'
},


ViewUser:{
flex:1,
    flexDirection: 'row',
marginTop:30,
alignItems: 'flex-start',

  
}, 

ViewNome:{
 flex:1,
 marginTop:-240,
 flexDirection: 'row',
marginLeft: 10,

 alignItems: 'center'  ,

},


ViewApelido:{
flex:1,

marginTop: -265,
marginLeft: 15,

},


ViewComponentesNomes:{
 flex:1,
 justifyContent: 'center',
  
},


ViewDescricao:{
 flex:1,
marginTop: -529,
marginLeft:-13,
paddingHorizontal: 30,
textAlign: 'left',
height: 16,

}





});