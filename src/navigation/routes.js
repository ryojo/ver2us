<<<<<<< HEAD
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import login from '../dashboard/Login/index'
import register from '../dashboard/Register/index'
import feed from '../dashboard/Feed/index'
export default createAppContainer(


createSwitchNavigator({
//login,
//register,
feed 

})
)
=======
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
>>>>>>> 8104ad2799a9c5774e8f49c3ac66adf931b07ad9

import Login from '../dashboard/Login';
import Register from '../dashboard/Register';

const Navigator = createAppContainer(
    createSwitchNavigator({
        Login,
        Register
    })
);


export default Navigator;