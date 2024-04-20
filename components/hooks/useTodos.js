import { AsyncStorage } from "@react-native-async-storage/async-storage";

const saveTodos = async (todos) => {
  try {
    await AsyncStorage.setItem("@todos", JSON.stringify(todos));
  } catch (e) {
    console.error("Error saving todos: ", e);
  }
};

if (!(await AsyncStorage.getItem("@todos"))) {
  saveTodos([]);
}

const loadTodos = async () => {
  try {
    const todos = await AsyncStorage.getItem("@todos");
    if (todos !== null) {
      return JSON.parse(todos);
    }
  } catch (e) {
    console.error("Error loading todos: ", e);
  }
  return [];
};

const addTodo = async (newTodo) => {
  const todos = await loadTodos();
  const updatedTodos = [...todos, newTodo];
  await saveTodos(updatedTodos);
};

const deleteTodo = async (todoId) => {
  const todos = await loadTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== todoId);
  await saveTodos(updatedTodos);
};

export { addTodo, loadTodos, saveTodos, deleteTodo };
