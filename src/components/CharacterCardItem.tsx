import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../config/styles";

type CharacterCardItemProps = {
    name: string,
    value: string
}

const CharacterCardItem: React.FC<CharacterCardItemProps> = props => {
    const {name, value} = props;
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    title: {
        color: Colors.primaryText,
        fontWeight: 'bold',
    },
    text: {
        color: Colors.primaryText,
        marginLeft: 5,
        width: 100
    }
});

export default CharacterCardItem;