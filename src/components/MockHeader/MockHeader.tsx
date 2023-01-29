import BLogo from '../../assets/b-logo.svg'
import HamburgerImg from '../../assets/hamburger.svg'
import UserAvatar from '../../assets/user-avatar.svg'

export const Header: React.FC<{}> = ({}) => {  
  return 	<header data-testid="header">
    
    	<div
						className={`bg-white w-full transition-all z-20 absolute border-b-2`}
					>
						<div className=" flex items-center justify-between w-full px-5 py-4 mx-auto">
							<div className="flex items-center justify-between w-full">
                <div className="flex">
                  <a className="pl-[35px]">
                    <img src={BLogo} className="" alt="B logo" />
                  </a>
                  <img src={HamburgerImg} className="ml-[38px]" alt="Hamburger button" />
                </div>
				
        
					
								<div className="flex">
                <div className='w-[28px] h-[28px] text-white bg-yellow-500 items-center font-bold content-center rounded-md pl-1'> <div>JD</div></div>
                <div className='pl-[18px] pr-[100px]'>John Doe</div>
								</div>
							</div>
						</div>
				
					</div>
  </header>}
