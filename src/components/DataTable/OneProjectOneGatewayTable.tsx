import { ReportItem } from "../../context/appContext";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";


export const OneProjectOneGatewayTable: React.FC<{data: ReportItem[]}> = ({
  data
}) => {
return <>
  <TableHeader fields={['Date',  'Transaction ID', 'Amount']} />

  {data.map((dataItem, index) => <TableRow 
  /* @ts-ignore */
    data={dataItem && [dataItem.created /*modified? */, dataItem.paymentId, , dataItem.amount+' USD']}
    index={index}
    />)}
</>
}