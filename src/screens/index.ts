import { Navigation } from 'react-native-navigation';
import screen from './constant';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import InitialScreen from './InitialScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AuthScreen from './AuthScreen';

import MobxDemoScreen from '../module/mobx-demo/mobx-demo-screen';



export const registerScreens = () => {
    Navigation.registerComponent(screen.home, () => HomeScreen);
    Navigation.registerComponent(screen.auth, () => AuthScreen);
    Navigation.registerComponent(screen.setting, () => SettingScreen);
    Navigation.registerComponent(screen.initial, () => InitialScreen);
    Navigation.registerComponent(screen.signin, () => SignInScreen);
    Navigation.registerComponent(screen.signup, () => SignUpScreen);

    Navigation.registerComponent(screen.mobxDemo, () => MobxDemoScreen);

}