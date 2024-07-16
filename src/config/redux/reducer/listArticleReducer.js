const initialStateArticle = {
    dataBlog: [],
    page: {
        currentPage: 1,
        totalPage: 1
    }
}

const listArticleReducer = (state = initialStateArticle, action) => {
    if(action.type === 'GET_DATA_BLOG') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }

    if(action.type === 'UPDATE_PAGE'){
        return {
            ...state, 
            page:action.payload
        }
    }
    
    return state;
}

export default listArticleReducer;