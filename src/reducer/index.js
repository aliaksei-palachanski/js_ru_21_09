import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticles from './selectedArticles'
import selectedDates from './selectedDates'

export default combineReducers({
    counter: counterReducer,
    articles,
    selectedArticles,
    selectedDates
})