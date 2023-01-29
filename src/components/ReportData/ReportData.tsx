import React from 'react';
import Chart from "react-apexcharts";

interface ReportDataProps {
  // children: React.ReactNode
}

export const ReportData: React.FC<ReportDataProps> = ({

}) => {
	return (
		<div className=' flex flex-col'>
			<div className={`w-full flex flex-col bg-blue-50 ml-10 mt-4 max-w-[1024px] rounded-md p-6`}>
			<div className=''>Ovdi cemo uvali legendu</div>
		</div>
    <Chart
              options={{legend: {show: false}}}
              series={[10056, 4000, 4000, 4000]}
              type="donut"
              width="400"
            />

    <div className='w-full flex flex-col bg-blue-50 ml-10 mt-4 max-w-[1024px] rounded-md p-6'>
			<div className='font-bold'>PROJECT/GATEWAY TOTAL | 14, 065 USD</div>
     
		</div>
		</div>
	);
};