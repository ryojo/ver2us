/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/navigation/routes';
AppRegistry.registerComponent(appName, () => Routes);
