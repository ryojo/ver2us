import {StyleSheet} from 'react-native';




export default StyleSheet.create({


container:{ 

    justifyContent:'center',
 alignItems: 'center',
paddingHorizontal: 20,
 backgroundColor: '#F5F5F5'
},


ViewUser:{
  height:"100%",
    flexDirection: 'row',
marginTop:"10%",
alignItems: 'flex-start',
backgroundColor: 'black',


  
}, 

ViewNome:{
 flex:1,
 marginTop:'15%',
 flexDirection: 'row',
marginLeft:"10%",
backgroundColor:"blue",

   

},


ViewApelido:{
flex:1,

marginTop: "-10%",
marginLeft: "1%",
backgroundColor:'yellow',
},


ViewComponentesNomes:{
 flex:1,
 justifyContent: 'center',
  marginTop:"1%",
  marginBottom: '50%',
  backgroundColor:'gray',


},


ViewDescricao:{
 flex:1,
marginTop: -529,
marginLeft:-13,
paddingHorizontal: 30,
textAlign: 'left',
height: 16,

},

ViewImages:{
flexDirection: 'column',

 
   
},



ViewNumbers:{
  flex:1,  
}





});