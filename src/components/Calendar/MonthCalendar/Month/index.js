import React from 'react'
import { startOfMonth, addWeeks, startOfWeek, format } from 'date-fns'
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
  const weekStart = startOfWeek(startOfMonth(props.date))
  const weeksArray = new Array(6)
    .fill(null)
    .map((w, index) => <Week weekStart={addWeeks(weekStart, index)} />)

  return (
    <>
      <div className={styles['calendare-header']}>
        {format(props.date, 'MMM Y')}
      </div>
      <table>
        <WeeksHead />
        <tbody>{weeksArray}</tbody>
      </table>
    </>
  )
}

export default Month
