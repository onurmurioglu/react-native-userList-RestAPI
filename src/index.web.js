import { AppRegistry } from 'react-native';
import App from "./App";


const appName= "MyApp";

AppRegistry.registryComponent(appName, () => App);
AppRegistry.runApplication(appName, {

     rootTag: document.getElentById('root'),

});