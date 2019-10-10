import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../dashboard/Login/index';
import Register from '../dashboard/Register/index';
import Perfil from '../dashboard/Perfil/index';
import Feed from '../dashboard/Feed/index';
import Explore from '../dashboard/Explore/index';
import Following  from '../dashboard/Following/index';

const Navigator = createAppContainer(
    createSwitchNavigator({
        //Login,
        //Register,
        Feed: createMaterialTopTabNavigator({ 
        Seguindo: { screen: Following }, /// o Feed está importando a pasta following, onde a página carrega 
         Explorar: {screen:Explore}

        },{
         tabBarPosition:'top',
            swipeEnabled: true,
            animationEnabled: true,
            tabBarOptions:{
              activeTintColor: '#5261CC',
              inactiveTintColor: "#7A8FA6",
            style:{backgroundColor: 'f5f5f5'},
            labelStyle:{
              textAlign: 'center',  
            },
            indicatorStyle:{
               borderBottomColor: "#5261CC",
             borderBottomWidth: 5
            },  //estilação do menu 
           
        } 
        }),

         

        

        
         
    }),


    );


export default Navigator;