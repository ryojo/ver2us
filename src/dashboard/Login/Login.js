import React from 'react';
import {View,SafeAreaView,Image,TextInput,TouchableHighlight,Text}  from 'react-native';
import fundo from '../Layout/img/fundo.png';
import css from '../Login/css';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import logo from '../Layout/img/logo.png';
export default class Login  extends React.Component{
metodos ={

 botao1: "Esqueci minha Senha",
 botao2: "Não tenho uma conta"  
}

render(){ 




    return (
<SafeAreaView style={css.container}>
<Image source = {fundo}style = {{width: wp('110%'), height: hp('115%'), marginTop:-120,}}/>  

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

</SafeAreaView>



    )
}   
}