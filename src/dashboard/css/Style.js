import {
    StyleSheet,Dimensions
} from 'react-native';

export default StyleSheet.create({

    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6A5ACD",
          width: Dimensions.get('window').width,
              height: Dimensions.get('window').height
    },




    containerLogin: {
        flex: 1,
        justifyContent:'center',
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        
      
    },


    containerEdit: {
       flex:1,
        justifyContent: 'center',
        alignItems: 'center',
       width: Dimensions.get('window').width,
           height: Dimensions.get('window').height,
      
    },


    ViewLogin:{
        alignSelf: 'stretch',
        justifyContent: 'center',
      paddingHorizontal: 50,
      marginTop:380,
     
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

    }, 
    
    ViewBottonsLogin: {
           
        justifyContent: 'center',
        alignItems: "center",
        



    },


    ViewLoginFundo:{
width: Dimensions.get('window').width, height: Dimensions.get('window').height,
    marginTop: 207
    },


    ViewLoginTitulo:{
paddingHorizontal:80,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop:-900,
    
    },

    LoginTitulo:{
marginTop: -710,
paddingHorizontal:15
    },



    

    ViewEdit: {
        paddingHorizontal: 50,
      alignSelf: 'stretch',
          justifyContent: 'center',
     marginTop:-555
     
         
    },

    


     textoesqueci1: {
         marginTop: 10,
         paddingLeft: 170,
         color: 'white',
     },


     textoja:{
         marginTop:15,
             paddingHorizontal: 50,
             color: 'white',
    },


   EditTitulo:{
   marginTop:-700,
     

   },

   ViewEditTitulo:{
   alignItems: 'center',
    marginTop:100
    
   
   },

   buttonEditComecar:{
       justifyContent: 'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor: 'white',
    width: 172,
    height: 45,
    marginTop:10
   },


   ViewEditFundo:{
  width: Dimensions.get('window').width, height: Dimensions.get('window').height,
  marginTop:9
}



});