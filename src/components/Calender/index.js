import React, {useState} from 'react'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function Calender({handleDate}) {
    const [date, setDate] = useState();

  return (
    <div>
        <DateTimePicker onChange={(value)=> {
            handleDate(value)
            setDate(value)
            }} value={date} />
    </div>
  )
}
