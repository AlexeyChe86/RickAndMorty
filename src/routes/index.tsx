import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from '../config/styles';
import DetailPage, { DetailPageRoute } from '../presentation/pages/Detail';
import HomePage, { HomePageRoute } from '../presentation/pages/Home';
import SplashPage, { SplashPageRoute } from '../presentation/pages/Splash';

const Stack = createNativeStackNavigator<ParamsTypes>();

export type ParamsTypes = {
    [SplashPageRoute]: {},
    [HomePageRoute]: {},
    [DetailPageRoute]: {
        characterId: number
    }
} 

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SplashPageRoute}>
                <Stack.Screen
                    name={SplashPageRoute}
                    component={SplashPage}
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name={HomePageRoute} 
                    component={HomePage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name={DetailPageRoute} 
                    component={DetailPage} 
                    options={{ 
                        headerShown: true,
                        headerShadowVisible: false, 
                        headerStyle: {
                            backgroundColor: Colors.background,
                        },
                        headerTintColor: Colors.primaryText,
                        headerBackTitle: '',
                        title: '',
                        
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;