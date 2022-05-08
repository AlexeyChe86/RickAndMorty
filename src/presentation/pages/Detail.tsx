import { useRoute, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CharacterDetailItem from '../../components/CharacterDetailItem';
import { Colors } from '../../config/styles';
import { CharacterInteractor } from '../../core';
import CharacterDetail from '../../core/entities/characterDetail';
import { CharacterService } from '../../core/services/apiService';
import { ParamsTypes } from '../../routes';

export const DetailPageRoute = "detail";

const contentPadding = 16; 
const {height: viewportHeight} = Dimensions.get('window');

const service = new CharacterService();
const interactor = new CharacterInteractor(service);

const DetailPage: React.FC = () => {
    const route = useRoute<RouteProp<ParamsTypes, 'detail'>>();
    const {characterId} = route.params;

    const [characterDetail, setCharacterDetail] = useState<CharacterDetail>();
    const [loading, setLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        interactor.getCharacterDetail(characterId).then((detail: CharacterDetail) => {
            setCharacterDetail(detail);
            setLoading(false);
        })
    }, [characterId, setCharacterDetail])

    return (
        <>
            {(loading || imageLoading) && (
                <View style={styles.loader}>
                    <ActivityIndicator color={Colors.primaryText} />
                </View>
            )}
            <ScrollView style={styles.container}>
                <View style={styles.posterContainer}>
                    <Image
                        source={{uri: characterDetail?.image}}
                        style={styles.posterImage}
                        onLoadEnd={() => {
                            setImageLoading(false);
                        }} 
                    />
                </View>
                <View style={styles.bodyContainer}>
                    <CharacterDetailItem title="Name" value={characterDetail?.name} />
                    <CharacterDetailItem title="Status" value={characterDetail?.status} />
                    <CharacterDetailItem title="Species" value={characterDetail?.species} />
                    <CharacterDetailItem title="Gender" value={characterDetail?.gender} />
                </View>
                <View style={styles.createdDateContainer}>
                    <Text style={styles.createdDate}>
                        {characterDetail?.created}
                    </Text>
                </View>
            </ScrollView>
        </>
       
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 2,
        backgroundColor: Colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyContainer: {
        padding: contentPadding,
    },
    posterContainer: {
        width: '100%',
        height: viewportHeight / 2,
        resizeMode: 'cover',
        marginTop: 10,
    },
    posterImage: {width: '100%', height: '100%'},
    createdDateContainer: { 
        marginTop: 10,
        padding: contentPadding, 
    },
    createdDate: { color: Colors.secondaryText}
})

export default DetailPage;