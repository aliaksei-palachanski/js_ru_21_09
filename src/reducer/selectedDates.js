import {SELECT_DATES} from '../constants'

export default (selectedDates = {from: null, to: null}, action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_DATES:
            return payload.selectedDates;
    }
    return selectedDates;
}