import React from 'react';

interface TableRowProps {
	data: string[];
  index: number
}

export const TableRow: React.FC<TableRowProps> = ({
	data, index
}) => {
	return (
		<div className={`w-full flex justify-between   mt-2 max-w-[1024px]  px-6  ${index%2 && 'bg-white' } ml-2 `}>
			{data.map((field: string) => (<div>{field}</div>))}
		</div>
	);
};