import style from './DayCalendar.module.scss'
import { format } from 'date-fns'
import { DateContext } from '../../../context'

const DayCalendar = (props) => {
  console.log(props.weekDay)
  return (
    <DateContext.Consumer>
      {(currentDate) => {
        return (
          <div className={style['calendar-container']}>
            <p className={style['calendar-day-weekday']}>{format(currentDate, 'eeee')}</p>
            <p>{format(currentDate, 'dd')}</p>
          </div>
        )
      }}
    </DateContext.Consumer>
  )
}

export default DayCalendar
