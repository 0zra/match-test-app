
import { SwitcherButton } from './SwitcherButton'
import { useContext, useState } from 'react'
import { DateButton } from './DateButton'
import { useAppContext } from '../../context/appContext'


export const ReportsMenu: React.FC<{}> = ({
	
}) => {
  const {setIsReportShown, selectedProjectName, selectedGatewayName} = useAppContext();

  return <div className="flex justify-between px-10 w-full mt-4">
    <div className="flex flex-col">
      <div className="font-bold  text-2xl">
        Reports
      </div>
      <div className="font-bold  text-base text-stone-400">Easily generate a report of your transactions</div>
    </div>

    <div className='flex justify-around'>
    <SwitcherButton label={"All projects"} buttonFor="projects"/>
    <SwitcherButton label={"Gateway"} className='ml-2' buttonFor='gateway'/>
    <DateButton label='From date'></DateButton>
    <DateButton label='To date'></DateButton>
    <button className="bg-blue-900 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px] ml-2"
     onClick={()=> {
      console.log('da vidmo', selectedGatewayName, selectedProjectName)
      if(selectedProjectName === "All projects" && selectedGatewayName !== "All gateways"
      || selectedProjectName !== "All projects" && selectedGatewayName === "All gateways") {
        setIsReportShown(true)
      }
     }}
    ><div>Generate report</div> </button>
    {/* <input type="date" id="start" name="start"
       value="From date"
       className='bg-teal-400 text-white h-8 rounded-md px-4 mt-2 ml-2'
       min="2021-01-01" max="2021-12-31"></input> */}
    </div>

  </div>
}