import  { useState, createContext, useContext, useEffect } from 'react';
import { useGetGatewaysDataQuery, useGetProjectsDataQuery, usePostReportRequestMutation } from '../services';

interface ProviderProps {
  children: React.ReactNode
}

export interface ReportItem {
  paymentId: string;
  amount: number;
  projectId: string;
  gatewayId: string;
  userIds: string[];
  modified: string;
  created: string;
}

export interface ReportData {
  code: string;
  data: ReportItem[];
  error?: any;
}

const AppContext = createContext({
  selectedProjectName:'',
  selectedGatewayName:'',
  setSelectedProjectName: (projectName: string) => {},
  setSelectedGatewayName: (gatewayName: string) => {},
  reportData: [] as ReportItem[], 
  setReportData: (reportData: ReportItem[]) => {}
});

export const AppContextProvider: React.FC<ProviderProps> = (props) => {
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const [selectedGatewayName, setSelectedGatewayName] = useState('');
  const [reportData, setReportData] = useState<ReportItem[]>([]);

  const { mutate: createReport, isLoading: isCPLoading } =
  usePostReportRequestMutation(
    responseData => {
      setReportData(responseData.data)
    },
    error => {
     console.log(error);
     return false;
    }
  );

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

  useEffect(()=> {

    const projectId = selectedProjectName === 'All project' && '' ||
    projectsData?.data.find(project => project.name === selectedProjectName)?.projectId
    const gatewayId = selectedGatewayName === 'All gateways' && '' ||
    gatewaysData?.data.find(gateway => gateway.name === selectedGatewayName)?.gatewayId

    createReport({projectId, gatewayId}, )
  }, [selectedProjectName, selectedGatewayName])


  const contextValue={
    selectedProjectName, 
    selectedGatewayName,
    setSelectedProjectName,
    setSelectedGatewayName,
    reportData, 
    setReportData
  }
  
  return (
		<AppContext.Provider value={contextValue}>
			{props.children}
		</AppContext.Provider>
	);
}

export const useAppContext = () => useContext(AppContext);