import { Component } from 'react'
import CalendarContainer from './CalendarContainer'
import DayCalendar from './DayCalendar'
import MonthCalendar from './MonthCalendar'
import { DateContext } from '../../context'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: new Date(),
      checkedDate: new Date(),
    }
  }

  handleDate = (newDate) => {
    this.setState(() => ({
      checkedDate: new Date(newDate),
    }))
  }

  render() {
    return (
      <DateContext.Provider value={this.state.checkedDate}>
        <CalendarContainer>
          <DayCalendar date={this.state.checkedDate} />
          <MonthCalendar
            date={this.state.checkedDate}
            handleDate={this.handleDate}
          />
        </CalendarContainer>
      </DateContext.Provider>
    )
  }
}

export default Calendar
