import React from 'react';
import {SafeAreaView,ImageBackground,View,TextInput,Text,TouchableHighlight,Dimensions,Image} from 'react-native';
import Style from './css/Style';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import Fundo from '../dashboard/img/fundo.png';
 import Logo from '../dashboard/img/logo.png';
 
state = {
    esqueci: "Esqueci minha senha",
    não: " Não tenho uma conta",

}


export default function Login({navigation}) {





Edit =()=>{
 navigation.navigate('Edit');   
}

Entrar = () => {
 navigation.navigate('Feed');
}

return <SafeAreaView style={Style.containerLogin}>

<View style = {Style.ViewLoginFundo}><ImageBackground source = {Fundo} style = {{width:wp('100%'), height: hp('100%')}}/>
<View style = {Style.ViewLoginTitulo}><Image source = {Logo}/></View>

<View style={Style.ViewLogin}>
<TextInput placeholder='Email'
style={Style.InputTextInput}
placeholderTextColor='black'
/>
<TextInput placeholder = 'Senha'
style = {Style.InputTextInput1}
placeholderTextColor='black'
/>

</View>
</View>
<View style={Style.ViewBottonsLogin}>
<TouchableHighlight><Text style={Style.textoesqueci}>{this.state.esqueci}</Text></TouchableHighlight>
<TouchableHighlight  onPress={this.Entrar} style={Style.buttonLoginEntrar}><Text>Entrar</Text></TouchableHighlight>
<TouchableHighlight onPress ={this.Edit}><Text  style={Style.textonão}>{this.state.não}</Text></TouchableHighlight>
</View>









</SafeAreaView>
    

}



