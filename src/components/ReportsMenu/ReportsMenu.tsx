import DownArrow from '../../assets/down-arrow.svg'
import CalendarIcon from '../../assets/calendar-icon.svg'


export const ReportsMenu: React.FC<{}> = ({
	
}) => {
  return <div className="flex justify-between px-10 w-full mt-4">
    <div className="flex flex-col">
      <div className="font-bold  text-2xl">
        Reports
      </div>
      <div className="font-bold  text-base text-stone-400">Easily generate a report of your transactions</div>
    </div>

    <div className='flex justify-around'>
    <button className="bg-teal-400 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px]"><div>All projects</div>  <div><img src={DownArrow} className="mt-2" alt="Down arrow" /></div></button>
    <button className="bg-teal-400 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px] ml-2"><div>Gateway</div>  <div><img src={DownArrow} className="mt-2" alt="Down arrow" /></div></button>
    <button className="bg-teal-400 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px] ml-2"><div>From date</div>  <div><img src={CalendarIcon} className="mt-2" alt="Calendar" /></div></button>
    <button className="bg-teal-400 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px] ml-2"><div>To date</div>  <div><img src={CalendarIcon} className="mt-2" alt="Calendar" /></div></button>
    <button className="bg-blue-900 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px] ml-2"><div>Generate report</div> </button>
    {/* <input type="date" id="start" name="start"
       value="From date"
       className='bg-teal-400 text-white h-8 rounded-md px-4 mt-2 ml-2'
       min="2021-01-01" max="2021-12-31"></input> */}
    </div>

  </div>
}