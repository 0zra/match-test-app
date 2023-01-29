import React from 'react';

interface TableHeaderProps {
	fields: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({
	fields
}) => {
	return (
		<div className={`w-full flex justify-between   mt-4 max-w-[1024px]  px-6  bg-white ml-2 py-1`}>
			{fields.map((field: string) => (<div className='min-w-[86px]'>{field}</div>))}
		</div>
	);
};