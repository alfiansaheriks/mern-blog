const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlogs: action.payload
        }
    }
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Erik'
        }
    }
    return state;
}

const initialState = {
    dataBlogs: [],
    name: "Alfiansah Erik"
}

export default globalReducer;