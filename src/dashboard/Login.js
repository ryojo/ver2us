import React from 'react';
import {SafeAreaView,Image,View,TextInput,Text,TouchableHighlight,Dimensions} from 'react-native';
import Style from './css/Style';

 
state = {
    esqueci: "Esqueci minha senha",
    não: "Não tenho uma conta",

}


export default function Login({navigation}) {





Edit =()=>{
 navigation.navigate('Edit');   
}

Entrar = () => {
 navigation.navigate('Feed');
}

return <SafeAreaView style={Style.containerLogin}>

<View style={Style.ViewLogin}>
<TextInput placeholder='Email'
style={Style.InputTextInput}
placeholderTextColor='black'
/>
< TextInput placeholder = 'Senha'
style = {Style.InputTextInput1}
placeholderTextColor='black'
/>

</View>
<View style={Style.ViewBottonsLogin}>
<TouchableHighlight><Text style={Style.textoesqueci}>{this.state.esqueci}</Text></TouchableHighlight>
<TouchableHighlight  onPress={this.Entrar} style={Style.buttonLoginEntrar}><Text>Entrar</Text></TouchableHighlight>
<TouchableHighlight onPress ={this.Edit}><Text  style={Style.textonão}>{this.state.não}</Text></TouchableHighlight>
</View>









</SafeAreaView>
    

}



