import DashboardMain from "../Components/DashboardMain"
import Header from "../Components/Header"
import MenuItem from "../Components/MenuItem"
import { menuItems } from "../Constants"
const Dashboard = () => {
  return (
    <>
        <>
            <Header/>
            <div className="absolute inset-0 flex  pt-16">
              <div className="min-w-[250px]  h-full relative bg-blue-100 overflow-y-auto overflow-x-hidden">
                {menuItems.map((item,index) =>(
                  <MenuItem key={index} icon={item.icon} name={item.name} isDropdown={item.isDropdown} dropDownOptions={item.dropDownOptions} />
                ))}
              </div>
              <div className="relative w-full bg-gray-100">
                <DashboardMain/>
              </div>
            </div>
        </>
    </>
  )
}

export default Dashboard
