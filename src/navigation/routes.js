import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Login from '../dashboard/Login/index';
import Register from '../dashboard/Register/index';
import Perfil from '../dashboard/Perfil/index';
import Feed from '../dashboard/Feed/index';
const Navigator = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
       Feed
    })
);


export default Navigator;