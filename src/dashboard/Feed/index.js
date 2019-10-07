import  React from 'react';
import {SafeAreaView,View,Image,Text} from 'react-native';
import css from '../Feed/css';
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
<SafeAreaView style={css.container}>
<View style={css.ViewUser}>
<Image source={user}/>
<View style={css.ViewNome}>
<Nomes nome={"David"}/>
</View>
<View style={css.ViewApelido}>
<Apelido apelido={"@davidbruno"}/>   
</View>

</View>





    
</SafeAreaView>







)

 }   
}