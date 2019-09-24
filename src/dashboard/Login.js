import React from 'react';
import {SafeAreaView,Image,View,TextInput,Text,TouchableHighlight} from 'react-native';
import Style from './css/Style';

 
state = {
    esqueci: "Esqueci minha senha",
    não: "Não tenho uma conta",

}


export default function Login({navigation}) {


Entrar = () => {
 navigation.navigate('Edit')
}

return <SafeAreaView style={Style.containerLogin}>
<View>< Image/></View>
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
<TouchableHighlight style={Style.buttonLoginEntrar}><Text>Entrar</Text></TouchableHighlight>
<TouchableHighlight onPress ={this.Entrar}><Text  style={Style.textonão}>{this.state.não}</Text></TouchableHighlight>
</View>









</SafeAreaView>
    

}




