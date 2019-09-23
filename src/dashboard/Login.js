import React from 'react';
import {SafeAreaView,Image,View,TextInput,Text,TouchableOpacity,TouchableHighlight} from 'react-native';
import Style from './css/Style';

 
state = {
    esqueci: "Esqueci minha senha",
    não: "Não tenho uma conta",

}


export default function Login({navigation}) {


Entrar = () => {
 navigation.navigate('Feed')
}

return <SafeAreaView style={Style.containerLogin}>
<View>< Image  /></View>
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
<TouchableOpacity>
<Text style = {Style.textoesqueci}>{this.state.esqueci}</Text></TouchableOpacity>
<TouchableHighlight style={Style.buttonLoginEntrar} onPress={this.Entrar}><Text>Entrar</Text></TouchableHighlight>
< TouchableOpacity >< Text style = {Style.textonão}>{this.state.não}</Text></ TouchableOpacity>










</SafeAreaView>
    

}




