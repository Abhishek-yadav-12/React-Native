// The main entry point of the javascript file. Inside which the components get registered and the app gets started.

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './components/redux/store';

const AppRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);



AppRegistry.registerComponent(appName, () => AppRedux);
