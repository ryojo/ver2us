import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default StyleSheet.create({
 container:{
  flex:1,
 justifyContent: 'center',
 alignItems: 'center',
width: wp('100%'),
height: hp('100%')
 }   
})