import React from 'react'
import { DateContext } from '../../../context'
import style from './MonthCalendar.module.scss'
import Head from './Head'
import Month from './Month'

const MonthCalendar = (props) => {
  return (
    <DateContext.Consumer>
      {(currentDate) => {
        return (
          <div className={style['calendar-container']}>
            <Head date={currentDate}></Head>
            <Month date={currentDate}></Month>
          </div>
        )
      }}
    </DateContext.Consumer>
  )
}

export default MonthCalendar
