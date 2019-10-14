import  React from 'react';
import {SafeAreaView,View,Image,Text} from 'react-native';
import style from './style';
import user from '../Layout/icon/user.png'
import editar from '../Layout/icon/editar.png';
import numbers from '../Layout/icon/numbers.png'

export default class Feed extends React.Component{
 
 

 
 
    render(){
  function Nomes (props){
return [ < Text style = {{fontWeight: 'bold',fontSize: 21,marginHorizontal: 5,color: '#272727'}}> {props.nome}</Text>,
   <Text style={{fontSize: 21, fontWeight: 'regular'}}>Bruno</Text>  
  
]
}

function Apelido (props){
return <Text style = {{color: '#7A8FA6', fontSize:14.5, fontWeight: 'regular 15/ poppins 27'}}> {props.apelido} </Text>
   
}

function Descricao (props){
return <Text style = {{color: "#7A8FA6", fontSize: 16, fontWeight: 'regular'}}> {props.descricao}</Text>
}
    

return (
<SafeAreaView style={style.container}>
<View style={style.ViewUser}>
<View style={style.ViewImages}>
<Image source={user}/>
 <Image source={editar} style={{marginLeft:25, marginTop:-10,backgroundColor:'trasparent'}}/>
 </View>
 <View style={style.ViewComponentesNomes}>
<View style={style.ViewNome}>
<Nomes nome={"David"}/>
</View>
<View style={style.ViewApelido}>
<Apelido apelido={"@davidbruno"}/>
</View>
<View style = {style.ViewDescricao}><Descricao descricao = {"Oi! Meu nome é David e eu adoro competir com covers de músicas na bateria! :)"}/> 

</View>
</View>

</View>
<View style={style.ViewNumbers}>
  <Image source={numbers}/>
</View>


{/*<View style = {style.ViewComponentesNomes}>
<View style={style.ViewNome}>

<Nomes nome={"David"}/>

<View style={style.ViewApelido}>
<Apelido apelido={"@davidbruno"}/>   
</View>
</View>*/}






    
</SafeAreaView>







)

 }   
}