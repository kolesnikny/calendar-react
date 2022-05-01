import React from 'react'
import style from './MonthCalendar.module.scss'
import Month from './Month'

const MonthCalendar = (props) => {
  const { date, ...res } = props
  return (
    <div className={style['calendar-container']}>
      <Month date={props.date} {...res}></Month>
    </div>
  )
}

export default MonthCalendar
