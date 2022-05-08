import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import CharacterCard from '../../components/CharacterCard';
import { Colors } from '../../config/styles';
import StateTypes from '../../core/adapters/redux/reducers/stateTypes';
import { Character } from '../../core/entities';

export const HomePageRoute = 'home';

const contentPadding = 5;
// const {width: viewportWidth} = Dimensions.get('window');

const HomePage: React.FC = () => {
    
    const characters: StateTypes['characters'] = useSelector(
        (state: StateTypes) => state.characters,
    )
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rick and Morty</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar
                    backgroundColor={Colors.background} 
                    barStyle="light-content"
                />
                <View style={styles.content}>
                    {characters.getAllCharacters.map((character: Character) => (
                        <CharacterCard character={character} key={character.id} />
                    ))}
                </View>
            </ScrollView>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: contentPadding,
        backgroundColor: Colors.background,
    },
    content: {
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
        color: Colors.primaryText,
        fontSize: 26,
        fontWeight: 'bold',
    }
})

export default HomePage;
