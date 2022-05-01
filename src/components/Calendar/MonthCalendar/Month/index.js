import React from 'react'
import { startOfMonth, addWeeks, startOfWeek } from 'date-fns'
import Week from '../Week'
import styles from './Month.module.scss'

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const WeeksHead = () => (
  <thead className={styles['month-container']}>
    {daysOfWeek.map((day) => (
      <th>{day}</th>
    ))}
  </thead>
)

const Month = (props) => {
  // const weeksArray = new Array(getWeeksInMonth(new Date(2022, 4, 7))).fill(null).map(( index)=><Day key={`${index}`} day={addDays(startOfWeek, index)} />
  // const startOfWeek = startOfWeek(new Date())

  const weeksArray = []
  const weekStart = startOfWeek(startOfMonth(props.date))

  for (let i = 0; i < 6; i++) {
    weeksArray.push(<Week weekStart={addWeeks(weekStart, i)} />)
  }

  // {getWeekOfMonth(new Date(2022, 4, 7))}
  // {getWeeksInMonth(new Date(2022, 4, 7))}

  return (
    <table>
      <WeeksHead />
      <tbody>{weeksArray}</tbody>
    </table>
  )
}

export default Month
