import { useState, useEffect, useContext} from "react"
import { useNavigate } from "react-router-dom"
import DashboardMain from "../Components/DashboardMain"
import Header from "../Components/Header"
import MenuItem from "../Components/MenuItem"
import { menuItems } from "../Constants"
import DeliveryMan from "../Components/DeliveryMan"
import BranchManage_Branch from "../Components/BranchManage_Branch"
import BranchManage_Payments from "../Components/BranchManage_Payments"
import { jwtDecode } from "jwt-decode"
import CreateOrder from "../Components/CreateOrder"
import Warehouse from "../Components/Warehouse"
import { AuthContext } from "../context/AuthContext"
import UpdateOrder from "../Components/UpdateOrder"
import ServiceCheck from "../Components/ServiceCheck"
const Dashboard = () => {
  const {logout} = useContext(AuthContext)
  const [menuID, setMenuID] = useState([0])
  const navigate = useNavigate()
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()){
        logout();
        return false;
      } // Check if token is expired
      if (!(decoded.verified)){
        navigate('/verify')
        return true;
      }
      return true;
    } catch (error) {
      return false;
    }
  };
  useEffect(() => {
    
    if (!isAuthenticated()) {
      navigate('/')
    }
  }, [])
  return (
    <>
        <>
            <Header/>
            <div className="absolute inset-0 flex  pt-16">
              <div className="min-w-[250px]  md:block hidden  h-full relative bg-blue-100 overflow-y-auto overflow-x-hidden">
                {menuItems.map((item,index) =>(
                  <MenuItem key={index} icon={item.icon} menuID={item.menuID} setMenuID={setMenuID} name={item.name} isDropdown={item.isDropdown} dropDownOptions={item.dropDownOptions} />
                ))}
              </div>
              <div className="relative w-full bg-gray-100 overflow-y-auto overflow-x-hidden">
                {menuID[0] == 0 && <DashboardMain/>}
                {menuID[0] == 1 && <ServiceCheck/>}
                {(menuID[0] == 2 && menuID[1] == 0) && <BranchManage_Branch/>}
                {(menuID[0] == 2 && menuID[1] == 1) && <BranchManage_Payments/>}
                {(menuID[0] == 3 && menuID[1] == 0) && <DashboardMain/>}
                {(menuID[0] == 3 && menuID[1] == 1) && <DashboardMain/>}
                {(menuID[0] == 4) && <CreateOrder/>}
                {(menuID[0] == 5) && <Warehouse/>}
                {(menuID[0] == 6) && <UpdateOrder/>}
                {(menuID[0] == 7) && <ServiceCheck/>}
                {(menuID[0] == 8) && <DashboardMain/>}
                {(menuID[0] == 9) && <DashboardMain/>}
                {(menuID[0] == 10) && <DashboardMain/>}
                {(menuID[0] == 11 && menuID == 0) && <DashboardMain/>}
                {(menuID[0] == 11 && menuID == 1) && <DashboardMain/>}
                {(menuID[0] == 12) && <DashboardMain/>}
                {(menuID[0] == 13) && <DashboardMain/>}
                {(menuID[0] == 14) && <DashboardMain/>}
                {(menuID[0] == 15 && menuID == 0) && <DashboardMain/>}
                {(menuID[0] == 15 && menuID == 1) && <DashboardMain/>}
                {(menuID[0] == 15 && menuID == 2) && <DashboardMain/>}
                {(menuID[0] == 15 && menuID == 3) && <DashboardMain/>}
                {(menuID[0] == 15 && menuID == 4) && <DashboardMain/>}
                {(menuID[0] == 15 && menuID == 5) && <DashboardMain/>}
                {(menuID[0] == 15 && menuID == 6) && <DashboardMain/>}
                {(menuID[0] == 16 && menuID == 0) && <DashboardMain/>}
                {(menuID[0] == 16 && menuID == 1) && <DashboardMain/>}
                {(menuID[0] == 16 && menuID == 2) && <DashboardMain/>}
                {(menuID[0] == 16 && menuID == 3) && <DashboardMain/>}
                {(menuID[0] == 17 && menuID == 0) && <DashboardMain/>}
                {(menuID[0] == 17 && menuID == 1) && <DashboardMain/>}
                {(menuID[0] == 18 && menuID == 0) && <DashboardMain/>}
                {(menuID[0] == 18 && menuID == 1) && <DashboardMain/>}
                {(menuID[0] == 18 && menuID == 2) && <DashboardMain/>}
                {(menuID[0] == 18 && menuID == 3) && <DashboardMain/>}
                {(menuID[0] == 19) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 0 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 1 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 2 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 3 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 4 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 5 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 6 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 7 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 8 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 9 ) && <DashboardMain/>}
                {(menuID[0] == 20 && menuID == 10 ) && <DashboardMain/>}                
              </div>
            </div>
        </>
    </>
  )
}

export default Dashboard
