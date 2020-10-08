
export const todoListReducer = (todos, action) => {
    switch (action.type) {
        case "add":
            return [ ...todos, newToDo(action.payload.task, action.payload.description) ]
        case "complete":
            return todos.map( todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            } )
        case "remove":
            return todos.filter( todo => todo.id !== action.payload.id )    
        default:
            break;
    }
}

const newToDo = (task, description) => {
    return {
        id: Date.now(),
        task,
        description,
        complete: false
    }
}