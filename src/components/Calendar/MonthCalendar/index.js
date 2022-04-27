import React from 'react'
import style from './MonthCalendar.module.scss'

const MonthCalendar = (props) => {
  return <div className={style['calendar-container']}>
    {props.year}
    {props.month}
    {props.week}
    </div>
}

export default MonthCalendar
