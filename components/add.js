import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { addTodo } from './hooks/useTodos';

function Add(props) {
    return (
        <View style={styles.add}>
            <TextInput placeholder="Todo" style={styles.add.input}></TextInput>
            <Button
                title="Add"
                color="#f75605"
                accessibilityLabel="Add"
                style={styles.add.button} />
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        input: {
            backgroundColor: "#e2e2e2",
            padding: 7.5,
            borderRadius: 20,
        },
        button: {
            borderRadius: 20,
        },
        backgroundColor: "purple",
        padding: 15,
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        gap: 15,
        // flexDirection: "row",
    }
});

export default Add;