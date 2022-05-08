import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../config/styles';
import StateTypes from '../../core/adapters/redux/reducers/stateTypes';
import { getInitialDataAction } from '../../core/adapters/redux/sagas';
import { HomePageRoute } from './Home';

export const SplashPageRoute = 'splash';

const SplashPage: React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const loadingState: boolean = useSelector(
        (state: StateTypes) => state.loading.initialData,
    );

    useEffect(() => {
        dispatch(getInitialDataAction());
    }, [dispatch]);

    useEffect(() => {
        if (!loadingState) {
            navigation.reset({
                index: 1,
                routes: [{name: HomePageRoute}],
            });
        }
    }, [navigation, loadingState]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color={Colors.primaryText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    appTitle: {
        fontSize: 24,
        color: Colors.primaryText
    }
})

export default SplashPage;