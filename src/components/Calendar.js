import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
    state = {
        selectedDay: null
    }

    handleDayClick = (day) => {
        this.setState({ selectedDay: day })
    }

    getSelectedDayMessage = () => {
        return !!this.state.selectedDay ?
            `Selected day: ${this.state.selectedDay.toDateString()}` :
            `Day is not selected`;
    }

    render() {

        let selectedDayMessage = this.getSelectedDayMessage();

        return (
            <div>
                <h3>{selectedDayMessage}</h3>
                <DayPicker
                    canChangeMonth={true}
                    selectedDays={[this.state.selectedDay]}
                    onDayClick={this.handleDayClick}
                ></DayPicker>
            </div>
        )
    }
}



export default Calendar