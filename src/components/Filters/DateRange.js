import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {selectDates} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    
    handleDayClick = (day) => {
        let range = DateUtils.addDayToRange(day, this.props.selectedDates);
        this.props.selectDates(range);
    }

    render() {
        const { from, to } = this.props.selectedDates
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

export default connect((state) => ({    
    selectedDates: state.selectedDates
}),{ selectDates })(DateRange)