import { addDays, getWeekOfMonth, addWeeks } from 'date-fns'
import React from 'react'
import Day from '../Day'
import styles from '../Month/Month.module.scss'

const Week = (props) => {
  const { weekStart } = props

  const dayArray = new Array(7)
    .fill(null)
    .map((d, index) => (
      <Day
        key={`${addWeeks(getWeekOfMonth(weekStart), index)}`}
        day={addDays(weekStart, index)}
      />
    ))

  return <tr className={styles['calendar-weeks']}>{dayArray}</tr>
}

export default Week
