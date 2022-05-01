import { Component } from 'react'
import { format } from 'date-fns'
import CalendarContainer from './CalendarContainer'
import DayCalendar from './DayCalendar'
import MonthCalendar from './MonthCalendar'
import { DateContext } from '../../context'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: new Date(),
    }
  }

  render() {
    return (
      <DateContext.Provider value={new Date()}>
        <CalendarContainer>
          <DayCalendar />
          <MonthCalendar />
        </CalendarContainer>
      </DateContext.Provider>
    )
  }
}

export default Calendar
