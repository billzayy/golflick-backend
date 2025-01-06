import { faArrowTrendDown, faArrowTrendUp, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IStatistic } from "../../types/statistic-type"

const Statistics: React.FC<{ title: string, logo: IconDefinition, color:string, input: IStatistic }> = ({ title, logo, color, input }) => { 
    return (
        <div className="bg-statisticBg w-10/12 mr-6 my-3 py-2 px-4 text-white rounded-xl border border-gray-600"> 
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm text-gray-400">{title}</div> 
                    <div className="text-2xl pt-2 font-bold">{input.value}</div>
                </div>
                <div className={`${color} pt-3 px-3 pb-2 rounded-2xl`}>
                    <FontAwesomeIcon icon={logo} className="size-7"/>
                </div>
            </div> 
            <div className="flex mt-8 text-sm">
                <div className={`${input.fluctuant == "up"? "text-upGreen": "text-red-500"} flex items-center`}>
                    <FontAwesomeIcon icon={input.fluctuant == "up" ? faArrowTrendUp : faArrowTrendDown} className="mr-1"/>
                    <p className="mx-1">{input.percent}%</p>
                </div>
                <p className="capitalize mr-1">{input.fluctuant}</p> from yesterday
            </div>
        </div>
    )
}

export default Statistics