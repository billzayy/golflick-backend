import { useState } from "react"
import MenuBar from "../../components/Admin/MenuBar"
import SideBar from "../../components/Admin/SideBar"
import { demo} from "../../utils/statistics"
import Statistics from "../../components/Admin/Statistic"
import LineChartComponent from "../../components/Admin/Chart"

const Dashboard: React.FC<{}> = ({}) => { 
    const [isClosedMenu, setIsClosedMenu] = useState(false)

    return (
        <div className="dashboard-admin bg-adminBg w-full flex">
            <SideBar closed={isClosedMenu} tabIndex={0}/>
            <div className="w-full">
                <MenuBar state={isClosedMenu} setState={setIsClosedMenu} />
                <div className="main">
                    <div className="text-white text-2xl mt-6 ml-5 font-bold">Dashboard</div>
                    <div className="flex ml-5">
                        {demo.map((item, index) => (
                            <Statistics key={index} title={item.title} logo={item.logo} color={item.color} input={item.input}/>
                        ))}
                    </div>
                    <div className="mx-5 bg-statisticBg p-6 mt-3 rounded-lg mb-6 text-white border border-gray-600">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold mb-4">Sales Details</h2>
                            <h2 className="mr-10 border border-monthChartBorder bg-monthChartBg py-1 px-4 text-sm rounded-lg">October</h2>
                        </div>
                        <LineChartComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard