import React from 'react';
import {SafeAreaView,View,TextInput,Text,TouchableHighlight,ImageBackground,Image} from 'react-native';
import Style from './css/Style';
import Fundo from  '../dashboard/img/fundo.png';
import Logo from '../dashboard/img/logo.png';
export default function Edit({navigation}){
state = {
    esqueci: "Esqueci minha senha",
    ja: "Já tenho uma conta",

}



VoltarLogin=()=>{
navigation.navigate('Login')
}


    
 
    


return <SafeAreaView>
<Image source = {Fundo} style={{width:500}}/>
<View style={Style.ViewFeedTitulo}><Image source={Logo} style={Style.FeedTitulo}/></View>


<View style={Style.containerFeed}>

    <View style={Style.ViewFeed}>
<TextInput placeholder='Nome'style={Style.InputTextInput1}placeholderTextColor = 'black'/>
<TextInput placeholder='Usuário'style={Style.InputTextInput1}placeholderTextColor = 'black'/>
<TextInput placeholder='Email'style={Style.InputTextInput1} placeholderTextColor = 'black' />
<TextInput placeholder='Senha'style={Style.InputTextInput1}placeholderTextColor = 'black' />


</View>
<View style={Style.ViewBottonsLogin}>
<TouchableHighlight><Text style = {Style.textoesqueci1}>{this.state.esqueci}</Text></TouchableHighlight>
    <TouchableHighlight style ={Style.buttonLoginEntrar} ><Text> Começar </Text></TouchableHighlight >
    <TouchableHighlight onPress={this.VoltarLogin}><Text style ={Style.textoja}>{this.state.ja}</Text></TouchableHighlight>




</View>


</View>

</SafeAreaView>

 
}

