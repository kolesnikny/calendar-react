import React from 'react'
import {
  startOfMonth,
  addWeeks,
  startOfWeek,
  format,
  addMonths,
} from 'date-fns'
import Week from '../Week'
import styles from './Month.module.scss'

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const WeeksHead = () => (
  <thead className={styles['month-container']}>
    <tr>
      {daysOfWeek.map((day, index) => (
        <th key={`week-day-${index}`}>{day}</th>
      ))}
    </tr>
  </thead>
)

const Month = (props) => {
  const { date, handleDate } = props
  const weekStart = startOfWeek(startOfMonth(props.date))
  const weeksArray = new Array(6)
    .fill(null)
    .map((w, index) => (
      <Week
        weekStart={addWeeks(weekStart, index)}
        handleDay={handleDate}
        key={addWeeks(weekStart, index)}
      />
    ))

  const changeMonth = ({ target }) => {
    handleDate(addMonths(date, target.name === 'increment' ? 1 : -1))
  }

  return (
    <>
      <div className={styles['calendare-header']}>
        <button name='decrement' onClick={changeMonth}>
          {'<'}
        </button>
        {format(props.date, 'MMM Y')}
        <button name='increment' onClick={changeMonth}>
          {'>'}
        </button>
      </div>
      <table>
        <WeeksHead />
        <tbody>{weeksArray}</tbody>
      </table>
    </>
  )
}

export default Month
