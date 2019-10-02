import React from 'react';
import {View,SafeAreaView,Image}  from 'react-native';
import fundo from '../Layout/img/fundo.svg';
import css from '../Login/css';
export default class Login from extends React.Component{
metodos ={

 botao1: 'esqueci'   
}

render(){




    return (
<SafeAreaView style={css.container}>
<Image source={fundo}/> 
</SafeAreaView>



    )
}   
}