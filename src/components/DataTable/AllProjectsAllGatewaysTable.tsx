import { ReportItem } from "../../context/appContext";
import { Gateway, useGetGatewaysDataQuery, useGetProjectsDataQuery } from "../../services";
import { SummaryRow } from "./SummaryRow";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

interface GatewayNames {
  [k : string]: string
}


export const AllProjectsAllGatewaysTable: React.FC<{data: ReportItem[]}> = ({
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
  const { data: gatewaysData } = useGetGatewaysDataQuery(
		{
			enabled: true,
			keepPreviousData: true
		}
	);

function getGatewayNames(gatewaysData: Gateway[]) {
  const gatewayNames:GatewayNames= {}
  gatewaysData.forEach(gw => gatewayNames[gw.gatewayId]= gw.name)
  return gatewayNames
}
if(!gatewaysData) {
  return <></>
}

 const gatewayNames = getGatewayNames(gatewaysData?.data)
 return <>
{projectsData?.data.map(project => <div key={project.projectId}>
  <SummaryRow 
    title={project.name} 
    ammount={data.filter(transaction => transaction.projectId === project.projectId).reduce((sum, transaction )=> sum + transaction.amount, 0 ) + " USD"}/>
    <TableHeader fields={['Date', 'Gateway', 'Transaction ID', 'Amount']} />
    {data.filter(transaction => transaction.projectId === project.projectId).map((dataItem, index) => <TableRow 
      key={dataItem.paymentId}
    /* @ts-ignore */
      data={dataItem && [dataItem.created /*modified? */,gatewayNames[dataItem.gatewayId], dataItem.paymentId, , dataItem.amount+' USD']}
      index={index}
      />)}
</div>)}

  


</>
}