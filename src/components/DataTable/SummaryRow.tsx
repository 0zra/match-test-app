import React from 'react';

interface SummaryRowProps {
	title: string;
	ammount: string
}

export const SummaryRow: React.FC<SummaryRowProps> = ({
	title, ammount
}) => {
	return (
		<div className='w-full flex justify-between bg-white  mt-4 max-w-[1024px] rounded-md px-6 py-[26px]'>
			<div className='font-bold'>{title}</div> <div className='font-bold'>TOTAL:  {ammount}</div>
		</div>
	);
};