import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
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
           Following: Following , /// o Feed está importando a pasta following, onde a página carrega 
           Explore:Explore

        })

        
         
    }),


    );


export default Navigator;