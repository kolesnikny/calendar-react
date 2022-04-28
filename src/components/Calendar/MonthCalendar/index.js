import React from 'react'
import { DateContext } from '../../../context'
import { format } from ''
import style from './MonthCalendar.module.scss'

const MonthCalendar = (props) => {
  return (
    <DateContext.Consumer>
      {(currentDate) => {
        return (
          <div className={style['calendar-container']}>
            {format(this.state.currentDate, 'eeee')}
          </div>
        )
      }}
    </DateContext.Consumer>
  )
}

export default MonthCalendar
