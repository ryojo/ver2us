import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import login from '../dashboard/Login/Login'
import register from '../dashboard/Register/register'
export default createAppContainer(


createSwitchNavigator({
login,
register

})
)




