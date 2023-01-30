import { ReportItem } from "../../context/appContext";
import { useGetGatewaysDataQuery } from "../../services";
import { SummaryRow } from "./SummaryRow";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";


export const OneProjectAllGatewaysTable: React.FC<{data: ReportItem[]}> = ({
  data
}) => {
  const { data: gatewaysData } = useGetGatewaysDataQuery(
		{
			enabled: true,
			keepPreviousData: true
		}
	);
  if(!gatewaysData?.data) {
    return <></>
  }

  
return <>
{gatewaysData?.data.map(gateway => <div key={gateway.gatewayId}>
  <SummaryRow 
    title={gateway.name} 
    ammount={data.filter(transaction => transaction.gatewayId === gateway.gatewayId).reduce((sum, transaction )=> sum + transaction.amount, 0 ) + " USD"}/>
    <TableHeader fields={['Date',  'Transaction ID', 'Amount']} />
    {data.filter(transaction => transaction.gatewayId === gateway.gatewayId).map((dataItem, index) => <TableRow 
      key={dataItem.paymentId}
    /* @ts-ignore */
      data={dataItem && [dataItem.created /*modified? */, dataItem.paymentId, , dataItem.amount+' USD']}
      index={index}
      />)}
</div>)}

  


</>
}