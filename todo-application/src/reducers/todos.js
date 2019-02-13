const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'CLEAR_COMPLETE':
      return state.filter((todos) => {
        if(!todos.completed){
          return todos
        }
      });
    case 'DELETE_ITEM':
      console.log(action.id);
      return state.filter((todos, i) =>{
        if(todos.id !== action.id){
          return todos;
        }
      });
    default:
      return state
  }
}

export default todos
