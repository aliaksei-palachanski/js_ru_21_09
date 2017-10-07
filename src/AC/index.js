import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, SELECT_DATES} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticles(selectedArticles) {
    return {
        type: SELECT_ARTICLE,
        payload: { selectedArticles }
    }
}

export function selectDates(selectedDates) {
    return {
        type: SELECT_DATES,
        payload: { selectedDates }
    }
}