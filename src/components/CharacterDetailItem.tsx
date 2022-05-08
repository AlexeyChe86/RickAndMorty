import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../config/styles';

type CharacterDetailItemProps = {
    title: string,
    value?: string
}

const CharacterDetailItem: React.FC<CharacterDetailItemProps> = props => {
    const { title, value } = props
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemValue}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    itemTitle: {
        color: Colors.primaryText,
        fontWeight: 'bold',
    },
    itemValue: {color: Colors.primaryText}
})

export default CharacterDetailItem;