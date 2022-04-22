import React from 'react'
import style from './MonthCalendar.module.scss'

const MonthCalendar = (props) => {
  return <div className={style['calendar-container']}>{props.month}</div>
}

export default MonthCalendar
