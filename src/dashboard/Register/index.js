import React from 'react';
import {SafeAreaView,Image,View,TextInput,TouchableHighlight,Text} from 'react-native';
import style from './style';
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
navigation.navigate('Login')
}

Entrar = ()=>{
const {navigation} = this.props // 
navigation.navigate('Feed')    
}


    render(){

return (

<SafeAreaView style={style.container}>
<Image source = {fundo}style = {{width: wp('100%'), height: hp('115%'), marginTop:-124,}}/>
<View style={style.ViewLogo}><Image source={logo} /></View>
<View style = {style.ViewInput}>
    <TextInput style = {style.input}
    placeholder = {"Nome"}placeholderTextColor = {'black'}
    />
 <TextInput style = {style.input}placeholder = {"Usuário"}
 placeholderTextColor = {'black'}
 /> 
 <TextInput style = {style.input}
 placeholder = {"Email"}placeholderTextColor = {'black'}
 /> 
 <TextInput style = { style.input}
 placeholder = {"Senha"}placeholderTextColor = { 'black'}
 /> 
</View>
<View style = {style.ViewButtonText}>
<TouchableHighlight><Text style = {style.textobotao1}>{this.metodos.botao1}</Text></TouchableHighlight>
</View>
<View style={style.ViewButtonEntrar}>
<TouchableHighlight style={style.buttonentrar} onPress={this.Entrar}><Text>{this.metodos.comecar}</Text></TouchableHighlight>   
</View>
<View style = {style.ViewButtontext1}><TouchableHighlight onPress={this.backLogin} ><Text style = {style.textobotao2}>{this.metodos.botao2}</Text></TouchableHighlight>
 </View>
    
</SafeAreaView>



);


    }
}