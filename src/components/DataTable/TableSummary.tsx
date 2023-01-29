import React from 'react';

interface TableSummaryProps {
  totalAmount: string
}

export const TableSummary: React.FC<TableSummaryProps> = ({
  totalAmount
}) => {
	return (
		<div className='w-full flex flex-col bg-blue-50 ml-10 mt-4 max-w-[1024px] rounded-md p-6'>
			<div className='font-bold'>TOTAL | {totalAmount}</div>
     
		</div>
	);
};