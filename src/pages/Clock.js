
import { useEffect, useState } from 'react';

function Clock() {

    let date = new Date();
    const [year, setYear] = useState(date.getFullYear().toString().padStart(2, '0'));
    const [month, setMonth] = useState((date.getMonth() + 1).toString().padStart(2, '0'));
    const [day, setDay] = useState(date.getDate().toString().padStart(2, '0'));
    const [hour, setHour] = useState(date.getHours().toString().padStart(2, '0'));
    const [minute, setMinute] = useState(date.getMinutes().toString().padStart(2, '0'));
    const [second, setSecond] = useState(date.getSeconds().toString().padStart(2, '0'));
    useEffect(() => {
        let timer =  setInterval(() => {
            let date = new Date();
            setYear(date.getFullYear().toString().padStart(2, '0'));
            setMonth((date.getMonth() + 1).toString().padStart(2, '0'));
            setDay(date.getDate().toString().padStart(2, '0'));
            setHour(date.getHours().toString().padStart(2, '0'));
            setMinute(date.getMinutes().toString().padStart(2, '0'));
            setSecond(date.getSeconds().toString().padStart(2, '0'));
        }, 1000);

        return () => clearInterval(timer);

    })

    let clockDate =`${year}/${month}/${day}`;
    let clockTime =`${hour}:${minute}:${second}`;
    return(
        <div className="clock container bg-light border-top-0 shadow py-2">
            <div className="date text-center  text-dark display-1 font-weight-bold">{clockDate}</div>
            <div className="time text-center text-dark  display-1 font-weight-bold pb-2">{clockTime}</div>
	    </div>
    )

}

export default Clock