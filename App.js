import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Button,
  TextInput,
} from "react-native";

// import Todos from "./components/todos";
import Add from "./components/add";

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
      <Add />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    paddingTop: StatusBar.currentHeight + 5,
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

  todos: {
    padding: 20,
    backgroundColor: "#e1e1e1",
  },
});
