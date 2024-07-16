import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createBlogReducer";
import listArticleReducer from "./listArticleReducer";


const reducer = combineReducers({globalReducer, homeReducer, createBlogReducer, listArticleReducer})

export default reducer;