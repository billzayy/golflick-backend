import { faBox, faChartLine, faClockRotateLeft, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { IStatistic } from "../types/statistic-type";

export const totalUser: IStatistic = { value: "40,689", fluctuant: "up", percent: 8.5 };

export const totalOrder : IStatistic = { value: "10293", fluctuant: "up", percent: 1.3 };

export const totalSales : IStatistic = { value: "$89,000", fluctuant: "down", percent: 4.3 };

export const totalPending: IStatistic = { value: "2040", fluctuant: "up", percent: 1.8 };

export const demo = [
    {title: "Total User", logo: faUserGroup, color: "bg-totalUserBg" , input: totalUser},
    {title: "Total Order", logo: faBox, color: "bg-totalOrderBg" , input: totalOrder},
    {title: "Total Sales", logo: faChartLine, color: "bg-totalSaleBg" , input: totalSales},
    {title: "Total Pending", logo: faClockRotateLeft, color: "bg-totalPendingBg" , input: totalPending},
]