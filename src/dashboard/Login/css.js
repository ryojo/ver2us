import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default StyleSheet.create({
 container:{ // container geral do login

 justifyContent: 'center',
 alignItems: 'center',


 },
 
 ViewInput:{ // view dos inputs
  flex:1,
    justifyContent: 'center',
  paddingRight: 50,
  marginTop:269,
  paddingHorizontal:45,
    alignSelf: 'stretch',
    
 },

 input:{ // input do login
  backgroundColor:'white',
  height:40,

 paddingHorizontal:20,
  borderRadius: 20,
marginTop: 15 
},

ViewButtonText:{
 flex:1,
 alignItems: 'center',
 justifyContent: 'center',
 marginTop:70,
 marginLeft: 130,


},

textobotao1:{
 color: 'white', 
 fontSize: 12 ,
},

ViewLogo:{  // logo ver2us


justifyContent:'center',
alignItems: 'center',
marginTop:-574,

},
ViewButtonEntrar:{
flex:1,
marginTop:50,

},

buttonentrar:{
backgroundColor:'white',
width: 165,
height:40,
justifyContent: 'center',
  alignItems: 'center',
borderRadius:3,
marginRight:25

},
textobotao2: {
  color: 'white',
  fontSize: 12,
},

ViewButtontext1:{

 marginTop:75,
 marginRight: 20,
}
})