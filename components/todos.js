import { Text, StyleSheet, Button, View } from "react-native";
import { loadTodos, deleteTodo } from "./hooks/useTodos";

function Todos(props) {
  const todos = [
    {
      name: "Test1",
    },
    {
      name: "Test2",
    }
  ];

  return (
    <View>
      {todos.map((todo) => {
        return (
          <View key={todo.name}>
            <Text>{todo.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default Todos;
