import { useEffect, useState, useRef} from 'react';

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

    const [currentTime, setCurrentTime] = useState();
    const handleOnGetTime = () =>{
        setCurrentTime(`${hour}:${minute}:${second}`);
    }

    const [count, setCount] = useState(0);

    const counter = useRef(null)
    const handleOnStart = () =>{
        
        counter.current = setInterval(() => {
            setCount((count) => count +1);

        }, 1000);
    }

    const handleOnStop = () =>{
        clearInterval(counter.current)
    }


    const handleOnReset = () =>{
        clearInterval(counter.current);
        setCount(0);
    }
    let clockDate =`${year}/${month}/${day}`;
    let clockTime = (date.getSeconds()%2) 
                    ? `${hour}:${minute}:${second}`
                    : `${hour} ${minute} ${second}`;
    return(
        <div className="clock container bg-light border-top-0 shadow py-2">
            <div className="date text-center  text-dark display-1 font-weight-bold">{clockDate}</div>
            <div className="time text-center text-dark  display-1 font-weight-bold pb-2">{clockTime}</div>
	    
            <div className="container row  no-gutters bg-light border shadow py-2 my-2">
                <button className='btn btn-primary' onClick={()=>handleOnGetTime()}>Get Time</button>

                <h4 className='  mx-3'>{currentTime}</h4>
	        </div>
            <div className="container row  no-gutters bg-light border shadow py-2 my-2">
                
                
                <h4 className='col-1 my-1 mx-3'>{count}</h4>

                <button className='btn btn-success mr-3' onClick={()=>handleOnStart()}>Start</button>
                <button className='btn btn-warning mr-3' onClick={()=>handleOnStop()}>Stop</button>
                <button className='btn btn-danger' onClick={()=>handleOnReset()}>Reset</button>

	        </div>
        </div>
        
    )

}

export default Clock