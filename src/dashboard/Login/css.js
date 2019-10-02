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
  alignSelf: 'stretch',
  paddingHorizontal: 50,
  marginTop: -327,   
 },

 input:{ // input do login
  backgroundColor:'white',
  height:45,
 paddingHorizontal:20,
  borderRadius: 20,
marginTop: 15 
},

ViewButtonText:{
 flex:1,
 alignItems: 'center',
 justifyContent: 'center',
 marginTop:80,
 marginLeft: 169,


},

textobotao1:{
 color: 'white'   
}
})