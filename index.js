/**
 * @format
 */

import {AppRegistry} from 'react-native';
import routes from './src/routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => routes);
