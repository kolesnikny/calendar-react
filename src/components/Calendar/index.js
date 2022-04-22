import { Component } from 'react'
import { format } from 'date-fns'
import CalendarContainer from './CalendarContainer'
import DayCalendar from './DayCalendar'
import MonthCalendar from './MonthCalendar'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: new Date(),
    }
  }

  render() {
    return (
      <CalendarContainer>
        <DayCalendar
          weekDay={format(this.state.currentDate, 'eeee')}
          day={format(this.state.currentDate, 'dd')}
        />
        <MonthCalendar month={format(this.state.currentDate, 'eeee')} />
      </CalendarContainer>
    )
  }
}

export default Calendar
