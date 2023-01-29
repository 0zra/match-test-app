import FirstIcon from '../../assets/first-icon.svg'
import SecondIcon from '../../assets/second-icon.svg'
import ThirdIcon from '../../assets/third-icon.svg'
import FourthIcon from '../../assets/fourth-icon.svg'
import FifthIcon from '../../assets/fifth-icon.svg'


export const MockSidebar: React.FC<{}> = ({}) => {  
return <aside className="flex flex-col">
 <img src={FirstIcon} className="ml-[35px] mt-[24px]" alt="Inactive icon" />
 <img src={SecondIcon} className="ml-[35px] mt-[24px]" alt="Inactive icon" />
 <img src={ThirdIcon} className="ml-[35px] mt-[24px]" alt="Inactive icon" />
 <img src={FourthIcon} className="ml-[35px] mt-[24px]" alt="Active icon" />
 <img src={FifthIcon} className="ml-[35px] mt-[24px]" alt="Inactive icon" />

</aside>
}