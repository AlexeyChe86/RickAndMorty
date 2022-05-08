import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Character } from "../core"
import { DetailPageRoute } from "../presentation/pages/Detail";
import { Colors } from "../config/styles";
import CharacterCardItem from "./CharacterCardItem";

type CharacterCardProps = {
    character: Character;
};

const CharacterCard: React.FC<CharacterCardProps> = props => {
    const {character} = props

    const navigation = useNavigation();

    const onCharacterPress = () => {
        navigation.navigate(DetailPageRoute, {characterId: character.id})
    }

    return (
        <TouchableOpacity style={styles.card} onPress={onCharacterPress}>
            <Image source={{uri: character.image}} style={styles.img} />
            <View style={styles.content}>
                <CharacterCardItem name="Name:" value={character.name} />
                <CharacterCardItem name="Status:" value={character.status} />
                <CharacterCardItem name="Species:" value={character.species} />
                <CharacterCardItem name="Gender:" value={character.gender} />
                <Text style={styles.date}>{character.created}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    img: {
        width: 150,
        height: 150,
        flex: 1,
        resizeMode: 'contain',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    date: {
        color: Colors.primaryText,
        fontSize: 10,
        fontWeight: '200',
        marginTop: 30
    }
})

export default CharacterCard;