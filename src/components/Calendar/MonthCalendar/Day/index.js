import React from 'react'
import { format } from 'date-fns'
import { DateContext } from '../../../../context'
import styles from './Day.module.scss'
import cx from 'classnames'

const Day = (props) => {
  return (
    <DateContext.Consumer>
      {(checkedDate) => {
        const classnames = cx({
          [styles.day]: true,
          [styles['day-other-month']]:
            format(props.day, 'M') !== format(checkedDate, 'M'),
          [styles['day-checked']]:
            format(props.day, 'd M Y') === format(new Date(), 'd M Y'),
        })
        return (
          <td
            className={classnames}
            name={`${format(props.day, 'y')}-${format(props.day, 'M')}-${format(
              props.day,
              'd'
            )}`}
            onClick={(event) => console.log(event.target)}
          >
            {' '}
            {format(props.day, 'd')}
          </td>
        )
      }}
    </DateContext.Consumer>
  )
}

export default Day
