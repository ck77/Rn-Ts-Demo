import { Navigation } from 'react-native-navigation';
import screen from './src/screens/constant';
import { registerScreens } from './src/screens/index';

registerScreens();

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
    },
    topBar: {
        title: {
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    }
})

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: screen.home
                                    }
                                }
                            ]
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: screen.auth
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    });
});