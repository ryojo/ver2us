import {
    StyleSheet
} from 'react-native';




export default StyleSheet.create({

    container: { // container geral do register

        justifyContent: 'center',
        alignItems: 'center',


    },


    ViewLogo: { // logo ver2us


        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -574,

    },
    ViewInput: { // view dos inputs
        flex: 1,
        justifyContent: 'center',
        paddingRight: 50,
        marginTop: 199,
        paddingHorizontal: 45,
        alignSelf: 'stretch',

    },
    input: { // input do login
        backgroundColor: 'white',
        height: 40,

        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 15
    },
    ViewButtonText: {
    
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 130,
        marginLeft: 170,


    },
    textobotao1: {
        color: 'white',
        fontSize: 12,
    },
    ViewButtonEntrar: {
        flex: 1,
        marginTop: 50,

    },
    buttonentrar: {
        backgroundColor: 'white',
        width: 165,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 25

    },
    textobotao2: {
        color: 'white',
        fontSize: 12,
    },
    ViewButtontext1: {
    
        marginTop: 85,
        marginRight: 20,
    }




})