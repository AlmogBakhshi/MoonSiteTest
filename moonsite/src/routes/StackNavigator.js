import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from '../screen/Main'
import Show from '../screen/Show'

const StackNavigator = (props) => {

    const RootStack = createStackNavigator(
        {
            Main,
            Show,
        },
        {
            initialRouteName: 'Main',
            defaultNavigationOptions: {
                headerTitleStyle: { fontWeight: 'bold' }
            }
        }
    );

    const AppContainer = createAppContainer(RootStack);

    return <AppContainer />;
};

export default StackNavigator;