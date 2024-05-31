import { createSlice } from "@reduxjs/toolkit";


const loadTodo = ()=>{
    const serializedTodo = localStorage.getItem("todo")
    if (serializedTodo) {
        return JSON.parse(serializedTodo)
    }
    return []
}

const saveTodo = (todo)=>{
    localStorage.setItem("todo",JSON.stringify(todo))
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: loadTodo(),
    reducers: {
        addTodo: (state, action) => {
            const newState = [...state,{id: Date.now(), text: action.payload, completed: false}]
            saveTodo(newState)
            return newState
        },
        toggleTodo: (state, action) => {
            const newState = state.map(todo => todo.id === action.payload?{...todo,completed: !todo.completed}
                :todo
            )
         saveTodo(newState)   
         return newState   
        },
        deleteTodo: (state,action) => {
            const newState = state.filter(todo => todo.id !== action.payload)
            saveTodo(newState)
            return newState
        }
    }
})


export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer