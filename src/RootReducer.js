const initialState = {
    data:{},
}

export function RootReducer(state=initialState,action){
    switch(action.type)
    {
        case 'ADD_TASK':
            state.data[action.payload[0]]=action.payload[1]
            console.log(state.data)
            return {data: state.data}

        case 'EDIT_TODO_DATA':
            state.data[action.payload[0]]=action.payload[1]
            console.log(state.data)
            return {data: state.data}
    
        case 'DELETE_TODO_DATA':
            delete state.data[action.payload[0]]
            console.log(state.data)
            return {data: state.data}
    

        default:
            return {data:state.data}
    }
}



