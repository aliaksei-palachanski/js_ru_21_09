import {SELECT_ARTICLE} from '../constants'

export default (selectedArticleState = [], action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_ARTICLE:
            return payload.selectedArticles;
    }
    return selectedArticleState
}