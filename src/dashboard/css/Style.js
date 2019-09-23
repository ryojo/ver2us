import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({

    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6A5ACD",
    
    },


    containerLogin: {
        flex: 1,
        justifyContent:'center',
        alignItems: "center",
        backgroundColor: "#6A5ACD",
       
        
      
    },


    ViewLogin:{
        alignSelf: 'stretch',
        justifyContent: 'center',
      paddingHorizontal: 50,
      marginTop: 170,
    },

  

    InputTextInput: {
        alignSelf: 'stretch',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal:20,
     
    },


     InputTextInput1: {
         alignSelf: 'stretch',
         height: 45,
         backgroundColor: 'white',
         marginTop: 15,
         borderRadius:40,
         paddingHorizontal:20,
         
        },


        textoesqueci:{
        marginTop:30,
        paddingLeft:180,  
       color:'white',
    },

    textonão:{
         marginTop: 60,
             paddingHorizontal: 50,
             color: 'white',
    },

    buttonLoginEntrar:{
     justifyContent: 'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor: 'white',
    width: 172,
    height: 45,
    marginTop:70

    }


});