import { Navigation } from 'react-native-navigation';
import screen from './constant';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import InitialScreen from './InitialScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AuthScreen from './AuthScreen';

import MobxDemoScreen from '../module/mobx-demo/mobx-demo-screen';
import StyleDemoScreen from '../module/style-demo/style-demo-screen';
import StyleDemo1Screen from '../module/style-demo/demo1/style-demo1-screen';




export const registerScreens = () => {
    Navigation.registerComponent(screen.home, () => HomeScreen);
    Navigation.registerComponent(screen.auth, () => AuthScreen);
    Navigation.registerComponent(screen.setting, () => SettingScreen);
    Navigation.registerComponent(screen.initial, () => InitialScreen);
    Navigation.registerComponent(screen.signin, () => SignInScreen);
    Navigation.registerComponent(screen.signup, () => SignUpScreen);

    Navigation.registerComponent(screen.mobxDemo, () => MobxDemoScreen);
    Navigation.registerComponent(screen.styleDemo, () => StyleDemoScreen);
    Navigation.registerComponent(screen.styleDemo1, () => StyleDemo1Screen);

}