/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import routes from './src/dashboard/navigation/routes'
AppRegistry.registerComponent(appName, () => routes);
