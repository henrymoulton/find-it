import React from "react";
import {listTodos} from "./src/graphql/queries";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import {StyleSheet, Text, View} from "react-native";

const LIST_DOGS = gql`${listTodos}`;

export const ListTodos = () => {
    const { loading, error, data } = useQuery(LIST_DOGS);


    if (error) {
        console.log(error)
        return (
            <View style={styles.container}>
                <Text>Error...</Text>
                <Text>{JSON.stringify(error, null, 4)}</Text>
            </View>
        )
    }
    if (loading) {
        console.log("fetching...")
        return (<View style={styles.container}>
            <Text>Fetching...</Text>
        </View>)
    }

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(data, null, 4)}</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
