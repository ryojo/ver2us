import React from 'react';
import {View,SafeAreaView,Image,TextInput,TouchableHighlight,Text,Dimensions,PixelRatio}  from 'react-native';
import fundo from '../Layout/img/fundo.png';
import style from './style';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../Layout/img/logo.png';
export default class Longin extends React.Component{
 metodos={
 botao1: "Esqueci minha senha",
 entrar: "Entrar",
 botao2: "Não tenho uma conta"

 } 

 





Register = ()=>{ // método do thiago // método de entrar no cadastro
const {navigation} = this.props
navigation.navigate('Register');

}


Entrar = ()=>{
 const {navigation} = this.props
 navigation.navigate('Feed')   
}
 
render(){
 
    const WP = widthPercent =>{
        const screenWidth = Dimensions.get('window').width
        
        
          return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent)/100);  
           
        
        }
        
        const HP =heightPercent =>{
        const screenHeight = Dimensions.get('window').height;
        return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent)/100);  
        }
    
    
    
 

// hp (115%) marginTop: -125
    return (    
    
<SafeAreaView style={style.container}>
<Image source = {fundo}style = {{width: WP('100%'), height: HP('115%'), marginTop:-125}}/>
<View style={style.ViewLogo}><Image source = {logo}/></View>

<View style = {style.ViewInput}>
<TextInput  style={style.input}
placeholder={"Email"}
placeholderTextColor={'black'}
/>
<TextInput style = {style.input}placeholder = {"Senha"}
placeholderTextColor = {'black'}/>
</View>
<View style={style.ViewButtonText}>
<TouchableHighlight><Text style={style.textobotao1}>{this.metodos.botao1}</Text></TouchableHighlight>
</View>
<View style={style.ViewButtonEntrar}>
<TouchableHighlight onPress={this.Entrar} style={style.buttonentrar}><Text>{this.metodos.entrar}</Text></TouchableHighlight>   
</View>
<View style={style.ViewButtontext1}>
<TouchableHighlight onPress={this.Register}><Text style={style.textobotao2}>{this.metodos.botao2}</Text></TouchableHighlight>
</View>

</SafeAreaView>



    )
  
    }
}