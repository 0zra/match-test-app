import React, { useMemo } from 'react';
import Chart from "react-apexcharts";
import { useAppContext } from '../../context/appContext';
import { useGetGatewaysDataQuery, useGetProjectsDataQuery } from '../../services';

interface ReportDataProps {
  // children: React.ReactNode
}
const CHART_COLORS= ['#F44336', '#E91E63', '#9C27B0']
export const ReportData: React.FC<ReportDataProps> = ({

}) => {

	const {
		selectedGatewayName,
		selectedProjectName,
		reportData
	} = useAppContext();
	const { data: projectsData } = useGetProjectsDataQuery(
		{
			enabled: true,
			keepPreviousData: true
		}
	);

	const { data: gatewaysData } = useGetGatewaysDataQuery(
		{
			enabled: true,
			keepPreviousData: true
		}
	);

	let series: number[]= []

	const totalAmount = useMemo(()=> reportData.reduce((acc, item) => acc+item.amount, 0), [reportData])
	if(selectedGatewayName !== 'All gateways') {
	
		const projectSums: {[k: string]: number} ={};
		projectsData?.data.forEach(project => projectSums[project.projectId] = 0)
		reportData.forEach(transaction => projectSums[transaction.projectId]+=transaction.amount)
		series=[...Object.keys(projectSums).map((key)=> projectSums[key])]
		console.log('series', series, 'pr sums', projectSums)
	}

	if(selectedProjectName !== 'All projects') {
		const gatewaySums: {[k: string]: number} ={};
		gatewaysData?.data.forEach(gateway => gatewaySums[gateway.gatewayId] = 0)
		reportData.forEach(transaction => gatewaySums[transaction.gatewayId]+=transaction.amount)
		series=[...Object.keys(gatewaySums).map((key)=> gatewaySums[key])]
	}

	console.log('series prije rendera', series)
	return (
		<div className=' flex flex-col'>
			<div className={`w-full flex flex-col bg-blue-50 ml-10 mt-4 max-w-[1024px] rounded-md p-6`}>
			<div className='flex'>
				{selectedGatewayName !== 'All gateways' && projectsData?.data.map((project, index) => (<div className='flex'>
				<div className={`h-3 w-3 mt-2 mr-2 `} style={{"backgroundColor": CHART_COLORS[index]}}> </div> <div>{project.name}</div>
			</div>))}
			{selectedProjectName !== 'All projects' && gatewaysData?.data.map((gw, index) => (<div className='flex'>
				<div className={`h-3 w-3 mt-2 mr-2 `} style={{"backgroundColor": CHART_COLORS[index]}}> </div> <div>{gw.name}</div>
			</div>))}
			</div>
		</div>
    <Chart
              options={{legend: {show: false}, colors: CHART_COLORS}}
              series={series}
              type="donut"
              width="400"
            />

    <div className='w-full flex flex-col bg-blue-50 ml-10 mt-4 max-w-[1024px] rounded-md p-6'>
			<div className='font-bold'>{selectedProjectName !== 'All projects' && 'PROJECT' || 'GATEWAY'} TOTAL | {totalAmount} USD</div>
     
		</div>
		</div>
	);
};