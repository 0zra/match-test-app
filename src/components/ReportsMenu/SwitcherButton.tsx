import { useState, useMemo, useCallback, useEffect } from 'react';
import DownArrow from '../../assets/down-arrow.svg'
import useOnclickOutside from 'react-cool-onclickoutside';
import { useGetGatewaysDataQuery, useGetProjectsDataQuery } from '../../services';
import { useAppContext } from '../../context/appContext';

export const SwitcherButton: React.FC<{label: string, className?: string, buttonFor: 'projects' | 'gateway'}> = ({
	className, buttonFor
}) => {
	const {
    selectedProjectName, 
    selectedGatewayName,
    setSelectedGatewayName, 
    setSelectedProjectName
  } = useAppContext();
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

  const handleOnClick = useCallback((name: string)=> {
    if(buttonFor == 'projects'){
      setSelectedProjectName(name);
    }
    if(buttonFor == 'gateway'){
      setSelectedGatewayName(name);
    }
    setIsDropdownOpened(false)
  }, [setSelectedGatewayName, setSelectedProjectName, buttonFor])

  useEffect(()=> {
    if(buttonFor == 'projects' ){
      setSelectedProjectName('All projects')
    }
    if(buttonFor == 'gateway' ){
      setSelectedGatewayName('All gateways')
    }
  }, [buttonFor])


  const label = buttonFor == 'projects' ? selectedProjectName || 'All projects': 
  buttonFor=='gateway' ? selectedGatewayName || 'All gateways' : ''
  



  const dropdownRef = useOnclickOutside(() => {
		setIsDropdownOpened(false);
	});

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

  const data=  useMemo(()=>{
    const projectNames = projectsData?.data.map(project => project.name) || []
    const gatewayNames = gatewaysData?.data.map(gateway => gateway.name) || []
  
    return buttonFor === 'projects'? ['All projects',...projectNames ]:  
    buttonFor === 'gateway'?  ['All gateways',...gatewayNames ]:
    []}, 
    
    [buttonFor, projectsData, gatewaysData]) 

    const switcherMargin = buttonFor == 'projects' ? 'mr-[582px]': 
      buttonFor=='gateway' ? 'mr-[296px]' : ''

  return <>
    <button 
      className={`bg-teal-400 pt-1 text-white h-8 rounded-md px-4 mt-2 flex justify-between min-w-[135px] ${className}`}
      onClick={()=> setIsDropdownOpened(!isDropdownOpened)}  
    >
      <div>{label}</div>  <div><img src={DownArrow} className="mt-2" alt="Down arrow" /></div>
    </button>
 {   isDropdownOpened && <div className={`absolute py-2 px-2 pis-8 pie-5 mt-[42px] ${switcherMargin} text-sm bg-teal-400 text-white custom-shadow inline-end-0 z-[1000] rounded-md min-w-[135px]`}>
			<ul className="pis-8 list-none custom-scrollbar-full" ref={dropdownRef}>
				{data.map(name => (
					<li
						key={name}
						className="relative py-2 mis-1 transition-all hover:text-blue-500"
					>
						<button
							className="flex items-center whitespace-nowrap"
							onClick={() => handleOnClick(name)}
							aria-label={name}
						>
						{name}
						</button>
					</li>
				))}
			</ul>
		</div>}
  </>
}