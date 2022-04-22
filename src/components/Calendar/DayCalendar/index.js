import style from './DayCalendar.module.scss'

const DayCalendar = (props) => {
  console.log(props.weekDay)
  return (
    <div className={style['calendar-container']}>
      <p>{props.weekDay}</p>
      <p>{props.day}</p>
    </div>
  )
}

export default DayCalendar
