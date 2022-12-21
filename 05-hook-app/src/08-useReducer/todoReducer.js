export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ADD':
            return [...initialState, action.payload]

        case 'DEL':
            return initialState.filter(todo => todo.id !== action.payload);

        case 'T0GGLE':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }
}