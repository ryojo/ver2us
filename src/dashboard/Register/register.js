import React from 'react-native';
import {SafeAreaView} from 'react-native';
import css from '../Register/css';
import fundo from '../Layout/img/fundo.png';

export default class Register extends React.Component{


    render(){

return (

<SafeAreaView style={css.container}>
<Image source = {fundo}style = {{width: wp('100%'), height: hp('115%'), marginTop:-124,}}/>


    
</SafeAreaView>



);


    }
}