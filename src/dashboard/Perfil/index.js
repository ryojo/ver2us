import  React from 'react';
import {SafeAreaView,View,Image,Text} from 'react-native';
import style from './style';
import user from '../Layout/icon/user.png'



export default class Feed extends React.Component{
 
 

 
 
    render(){
  function Nomes (props){
return [ <Text style = {{fontWeight: 'bold',fontSize: 21,marginHorizontal: 5,}}> {props.nome}</Text>,
   <Text style={{fontSize: 21}}>Bruno</Text>  
  
]
}

function Apelido (props){
return <Text>{props.apelido}</Text>
   
}
    

return (
<SafeAreaView style={style.container}>
<View style={style.ViewUser}>
<Image source={user}/>
<View style={style.ViewNome}>
<Nomes nome={"David"}/>
</View>
<View style={style.ViewApelido}>
<Apelido apelido={"@davidbruno"}/>   
</View>

</View>





    
</SafeAreaView>







)

 }   
}