import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, SELECT_DATES} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
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

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}
