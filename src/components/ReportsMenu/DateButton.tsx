import { useState, useRef, useEffect, useCallback } from 'react'
import CalendarIcon from '../../assets/calendar-icon.svg'
import { useAppContext } from '../../context/appContext';


export const DateButton: React.FC<{label: string}> = ({label}) => {
  const [isDateInputShown, setIsDateInpoutShown] = useState(false)
  const dateInputRef = useRef<HTMLInputElement>(null);
  const {to, from, setTo, setFrom} = useAppContext();


  
  return <>
{isDateInputShown && 
<input type="date" id={label} name={label}
       value={label === 'From date' && from || to}
       className='bg-teal-400 text-white h-8 rounded-md px-4 mt-2 ml-2'
       min={label === 'To date'&& from || "2021-01-01"} max={label==="From date" && to ||"2021-12-31"}
       ref={dateInputRef}
       onChange={(e) => label === 'From date' ?setFrom(e.target.value) : setTo(e.target.value)}
       ></input> 
       || 
       <button 
        className="bg-teal-400 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px] ml-2"
        onClick={()=>{
          setIsDateInpoutShown(true)
          // setTimeout(()=>dateInputRef.current?.click(), 200)
        }}
        >
       <div>{label}</div>  <div><img src={CalendarIcon} className="mt-2" alt="Calendar" /></div>
     </button>}

  </>
} 