import React from 'react'
import { format } from 'date-fns'
import { DateContext } from '../../../../context'
import styles from './Day.module.scss'
import cx from 'classnames'

const Day = (props) => {
  const { day, handleDay } = props

  const datePicker = ({ target }) => {
    handleDay(target.attributes.value.textContent)
  }

  return (
    <DateContext.Consumer>
      {(checkedDate) => {
        const classnames = cx({
          [styles.day]: true,
          [styles['day-other-month']]:
            format(day, 'M') !== format(checkedDate, 'M'),
          [styles['day-current']]:
            format(day, 'd M Y') === format(new Date(), 'd M Y'),
        })

        return (
          <td className={classnames} value={props.day} onClick={datePicker}>
            {format(props.day, 'd')}
          </td>
        )
      }}
    </DateContext.Consumer>
  )
}

export default Day
