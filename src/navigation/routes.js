import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from '../dashboard/Login';
import Register from '../dashboard/Register';

const Navigator = createAppContainer(
    createSwitchNavigator({
        Login,
        Register
    })
);


export default Navigator;