import {createAppContainer,createSwitchNavigator,createTopTabNavigator} from 'react-navigation';
import Loading from '../dashboard/Loading';
import Login from '../dashboard/Login';
import Edit from '../dashboard/Edit';
import Feed from '../dashboard/Feed';
export default createAppContainer(

createSwitchNavigator({
//Login,
Edit,
Feed
}),


)





