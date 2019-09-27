import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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
        justifyContent: 'center',
        alignItems: "center",

    },


    containerEdit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },


    ViewLogin: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 50,
        marginTop: 380,
width: wp('100%'),
height: hp('100%'),
marginTop:200
    },



    InputTextInput: {
        alignSelf: 'stretch',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal: 20,

    },


    InputTextInput1: {
        alignSelf: 'stretch',
        height: 45,
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 40,
        paddingHorizontal: 20,


    },


    textoesqueci: {
        marginTop: 30,
        paddingLeft: 180,
        color: 'white',
    },

    textonão: {
        marginTop: 15,
        paddingHorizontal: 50,
        color: 'white',
    },

    buttonLoginEntrar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        width: 172,
        height: 45,
        marginTop: 10

    },

    ViewBottonsLogin: {
width: wp('100%'),
height: hp('100%'),
        justifyContent: 'center',
        alignItems: "center",




    },


    ViewLoginFundo: {
        width: wp('100%'),
        height: hp('50%'),
        marginTop: -300


    },


    ViewLoginTitulo: {
marginTop: -660,
        paddingHorizontal: 80
    },







    ViewEdit: {

        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: -555


    },




    textoesqueci1: {
        marginTop: 10,
        paddingLeft: 170,
        color: 'white',
    },


    textoja: {
        marginTop: 15,
        paddingHorizontal: 50,
        color: 'white',
    },


    EditTitulo: {
        marginTop: -700,


    },

    ViewEditTitulo: {
        alignItems: 'center',
        marginTop: 100


    },

    buttonEditComecar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        width: 172,
        height: 45,
        marginTop: 10
    },


    ViewEditFundo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: 9
    }



});