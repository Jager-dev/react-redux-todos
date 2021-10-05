export const addTodo = (todos, newTask) => {
  const task = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title: newTask,
  }
  return {type: "ADD_TODO", payload: task}
}

export const deleteTodo = (id) => {
  return {type: "DELETE_TODO", payload: id}
}