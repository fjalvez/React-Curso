import { todoReducer } from "../08-useReducer/todoReducer";
import { useEffect, useReducer } from "react"

export const useTodo = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'ADD',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'DEL',
            payload: id
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'T0GGLE',
            payload: id
        }

        dispatch(action);
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}