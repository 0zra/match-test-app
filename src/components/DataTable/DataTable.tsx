import React from 'react';
import { useAppContext } from '../../context/appContext';
import { OneProjectAllGatewaysTable } from './OneProjectAllGatewaysTable';
import { OneProjectOneGatewayTable } from './OneProjectOneGatewayTable';
import { SummaryRow } from './SummaryRow';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

interface DataTableProps {
  // children: React.ReactNode
}

export const DataTable: React.FC<DataTableProps> = ({
}) => {

  const {
    selectedProjectName, 
    selectedGatewayName,
    reportData
  } = useAppContext();


  console.log("reportData", reportData)

	return (
		<div className='w-full flex flex-col bg-blue-50 ml-10 mt-4 max-w-[1024px] rounded-md p-6'>
			<div className='font-bold'>{selectedProjectName} | {selectedGatewayName}</div>
      {
      selectedProjectName !== 'All projects' && selectedGatewayName !== 'All gateways'? <OneProjectOneGatewayTable data={reportData}/>:
      selectedProjectName !== 'All projects' && selectedGatewayName === 'All gateways'? <OneProjectAllGatewaysTable data={reportData}/>:
      <></>}
      {/* <SummaryRow title='Project 1' ammount='10,065 USD'/>
      <TableHeader fields={['Date', 'Gateway', 'Transaction ID', 'Amount']} />
      <TableRow data={['1/21/2021', 'Gateway 2', 'a732b', '3964 USD']} index={0}/>
      <TableRow data={['1/24/2021', 'Gateway 3', 'a732b', '2554 USD']}  index={1}/>
      <TableRow data={['1/27/2021', 'Gateway 4', 'a732b', '3547 USD']}  index={2}/>
      <SummaryRow title='Project 2' ammount='4,000 USD'/>
      <SummaryRow title='Project 3' ammount='4,000 USD'/>
      <SummaryRow title='Project 4' ammount='4,000 USD'/> */}
		</div>
	);
};