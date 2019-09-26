import React from 'react';
import {SafeAreaView,View,TextInput,Text,TouchableHighlight,ImageBackground,Image,Dimensions} from 'react-native';
import Style from './css/Style';
import Fundo from  '../dashboard/img/fundo.png';
import Logo from '../dashboard/img/logo.png';
export default function Edit({navigation}){
state = {
    esqueci: "Esqueci minha senha",
    ja: "Já tenho uma conta",

}


Comecar = ()=>{
navigation.navigate('Feed')


}


VoltarLogin=()=>{
navigation.navigate('Login')
}


     
 
    


return <SafeAreaView style = {Style.containerEdit}>
<View style={Style.ViewEditFundo}><Image source = {Fundo} style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height,marginTop:-30 }}/></View>
<View style={Style.ViewEditTitulo}><Image source={Logo} style={Style.EditTitulo}/></View>

<View style={Style.ViewEdit}>
<TextInput placeholder='Nome'style={Style.InputTextInput1}placeholderTextColor = 'black'/>
<TextInput placeholder='Usuário'style={Style.InputTextInput1}placeholderTextColor = 'black'/>
<TextInput placeholder='Email'style={Style.InputTextInput1} placeholderTextColor = 'black' />
<TextInput placeholder='Senha'style={Style.InputTextInput1}placeholderTextColor = 'black' />
</View>

<View style={Style.ViewBottonsLogin}>
<TouchableHighlight><Text style = {Style.textoesqueci1}>{this.state.esqueci}</Text></TouchableHighlight>
    <TouchableHighlight onPress={this.Comecar}style ={Style.buttonEditComecar} ><Text> Começar </Text></TouchableHighlight >
    <TouchableHighlight onPress={this.VoltarLogin}><Text style ={Style.textoja}>{this.state.ja}</Text></TouchableHighlight>



</View>




</SafeAreaView>

 
}

