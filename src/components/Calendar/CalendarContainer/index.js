import style from './CalendarContainer.module.scss'

const Calendar = (props) => {
  return (
    <section className={style['calendar-container']}>{props.children}</section>
  )
}

export default Calendar
