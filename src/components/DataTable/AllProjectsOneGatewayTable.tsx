import { ReportItem } from "../../context/appContext";
import { useGetGatewaysDataQuery, useGetProjectsDataQuery } from "../../services";
import { SummaryRow } from "./SummaryRow";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";


export const AllProjectsOneGatewayTable: React.FC<{data: ReportItem[]}> = ({
  data
}) => {
  const { data: projectsData } = useGetProjectsDataQuery(
		{
			enabled: true,
			keepPreviousData: true
		}
	);
  if(!projectsData?.data) {
    return <></>
  }
  
return <>
{projectsData?.data.map(project => <div key={project.projectId}>
  <SummaryRow 
    title={project.name} 
    ammount={data.filter(transaction => transaction.projectId === project.projectId).reduce((sum, transaction )=> sum + transaction.amount, 0 ) + " USD"}/>
    <TableHeader fields={['Date',  'Transaction ID', 'Amount']} />
    {data.filter(transaction => transaction.projectId === project.projectId).map((dataItem, index) => <TableRow 
      key={dataItem.paymentId}
    /* @ts-ignore */
      data={dataItem && [dataItem.created /*modified? */, dataItem.paymentId, , dataItem.amount+' USD']}
      index={index}
      />)}
</div>)}

  


</>
}