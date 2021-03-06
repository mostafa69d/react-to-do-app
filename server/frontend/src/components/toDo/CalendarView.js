import React, { Component } from 'react';
import DayView from './DayView';
import {startOfDay} from '../../utils/helpers';
import '../../stylesheets/calendarView.css'
import CalendarToolBar from '../tools/CalendarToolBar';

class CalendarView extends Component {
    state = {
        date:startOfDay(new Date())
    }

    handleDateChange(date){
        this.setState({date})
    }

    render() {
        return ( 
        <div className="calendarView">
            <CalendarToolBar
            onDateChange={({date})=>{this.handleDateChange(date)}}
            date={this.state.date}
            />
            <DayView
            date={this.state.date}
            />
        </div>
        );
    }
}

export default CalendarView;