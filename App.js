import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
} from "react-native";

import Todos from "./components/todos";

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Image
          source={require("./assets/icon.png")}
          style={{
            maxHeight: 90,
            maxWidth: 90,
            borderRadius: 20,
          }}
        />
        <Text style={styles.headline}>Todo-King</Text>
      </View>
      <ScrollView style={styles.todos}>
        <Text>Todos</Text>
      </ScrollView>
      <View style={styles.add}>
        <TextInput placeholder="Todo" style={styles.add.input}></TextInput>
        <Button
          title="Add"
          color="#f75605"
          accessibilityLabel="Add"
          style={styles.add.button}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    backgroundColor: "purple",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    paddingTop: 20,
  },

  header: {
    backgroundColor: "blue",
    display: "flex",
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  headline: {
    color: "white",
    fontSize: 30,
  },

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
  },

  todos: {
    padding: 20,
    backgroundColor: "#e1e1e1",
  },
});
