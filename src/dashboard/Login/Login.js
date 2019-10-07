import React from 'react';
import {View,SafeAreaView,Image,TextInput,TouchableHighlight,Text,Button}  from 'react-native';
import fundo from '../Layout/img/fundo.png';
import css from '../Login/css';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../Layout/img/logo.png';
export default class Longin extends React.Component{
 metodos={
 botao1: "Esqueci minha senha",
 entrar: "Entrar",
 botao2: "Não tenho uma conta"

 } 

register = ({navigation})=>{
navigation.navigate('register');
}
 
render(){
 

   



    return (
    
<SafeAreaView style={css.container}>
<Image source = {fundo}style = {{width: wp('100%'), height: hp('115%'), marginTop:-124,}}/>
<View style={css.ViewLogo}><Image source = {logo}/></View>

<View style = {css.ViewInput}>
<TextInput  style={css.input}
placeholder={"Email"}
placeholderTextColor={'black'}
/>
<TextInput style = {css.input}placeholder = {"Senha"}
placeholderTextColor = {'black'}/>
</View>
<View style={css.ViewButtonText}>
<TouchableHighlight><Text style={css.textobotao1}>{this.metodos.botao1}</Text></TouchableHighlight>
</View>
<View style={css.ViewButtonEntrar}>
<TouchableHighlight style={css.buttonentrar}><Text>{this.metodos.entrar}</Text></TouchableHighlight>   
</View>
<View style={css.ViewButtontext1}>
<TouchableHighlight onPress={this.register}><Text style={css.textobotao2}>{this.metodos.botao2}</Text></TouchableHighlight>
</View>

</SafeAreaView>



    )
  
    }
}