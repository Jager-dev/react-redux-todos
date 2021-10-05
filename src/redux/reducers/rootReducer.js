const initialValue = {
  todos: JSON.parse(localStorage.getItem("todos")) || []
}

export const rootReducer = (state = initialValue, action) => {
  switch (action.type){
    case "ADD_TODO":
      localStorage.setItem("todos", JSON.stringify([...state.todos,action.payload]))
      return {todos: [...state.todos, action.payload]}
    case "DELETE_TODO": {
      const removeTodo = state.todos.filter(el => el.id !== action.payload)
      localStorage.setItem("todos", JSON.stringify(removeTodo))
      return {todos: removeTodo}
    }
    default:
      return state
  }
}