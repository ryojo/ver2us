import React from 'react';
import {ImageBackground,View,TextInput,Text,TouchableHighlight,Dimensions,Image} from 'react-native';
import  {containerlogin} from '../Login/Style'
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';

import Fundo from '../dashboard/img/fundo.png';
 import Logo from '../dashboard/img/logo.png';
import { containerlogin } from './Style';
 
state = {
    esqueci: "Esqueci minha senha",
    não: " Não tenho uma conta",

}


export default function Login({navigation}) {


windowWidth = ()=>{
wp('100%')

}
windowHeight=()=>{
    
}

Edit =()=>{
 navigation.navigate('Edit');   
}

Entrar = () => {
 navigation.navigate('Feed');
}



return <SafeAreaView>
    <containerlogin>
<View>
</View>
</containerlogin>
</SafeAreaView>
    
 



}
