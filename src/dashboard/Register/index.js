import React from 'react';
import {SafeAreaView,Image,View,TextInput,TouchableHighlight,Text} from 'react-native';
import css from './css';
import fundo from '../Layout/img/fundo.png';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import logo from '../Layout/img/logo.png';
export default class Register extends React.Component{
metodos={
 botao1: "Esqueci a minha senha",   
botao2: "Já tenho um conta",
comecar: "Começar"
}


backLogin = ()=>{
const {navigation} = this.props // método do thiago.    
navigation.navigate('login')
}

Entrar = ()=>{
const {navigation} = this.props // 
navigation.navigate('feed')    
}


    render(){

return (

<SafeAreaView style={css.container}>
<Image source = {fundo}style = {{width: wp('100%'), height: hp('115%'), marginTop:-124,}}/>
<View style={css.ViewLogo}><Image source={logo} /></View>
<View style = {css.ViewInput}>
    <TextInput style = {css.input}
    placeholder = {"Nome"}placeholderTextColor = {'black'}
    />
 <TextInput style = {css.input}placeholder = {"Usuário"}
 placeholderTextColor = {'black'}
 /> 
 <TextInput style = {css.input}
 placeholder = {"Email"}placeholderTextColor = {'black'}
 /> 
 <TextInput style = { css.input}
 placeholder = {"Senha"}placeholderTextColor = { 'black'}
 /> 
</View>
<View style = {css.ViewButtonText}>
<TouchableHighlight><Text style = {css.textobotao1}>{this.metodos.botao1}</Text></TouchableHighlight>
</View>
<View style={css.ViewButtonEntrar}>
<TouchableHighlight style={css.buttonentrar} onPress={this.Entrar}><Text>{this.metodos.comecar}</Text></TouchableHighlight>   
</View>
<View style = {css.ViewButtontext1}><TouchableHighlight onPress={this.backLogin} ><Text style = {css.textobotao2}>{this.metodos.botao2}</Text></TouchableHighlight>
 </View>
    
</SafeAreaView>



);


    }
}