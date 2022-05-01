import styles from './DayCalendar.module.scss'
import { format } from 'date-fns'
import { DateContext } from '../../../context'

const DayCalendar = (props) => {
  return (
    <DateContext.Consumer>
      {(currentDate) => {
        return (
          <div className={styles['calendar-container']}>
            <p className={styles['calendar-day-weekday']}>
              {format(currentDate, 'eeee')}
            </p>
            <p className={styles['calendar-day-date']}>
              {format(currentDate, 'dd')}
            </p>
          </div>
        )
      }}
    </DateContext.Consumer>
  )
}

export default DayCalendar
