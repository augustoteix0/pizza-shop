import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./months-order-amount-card";
import { MonthCancelledOrdersAmountCard } from "./months-cancelled-orders-amount";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { RevenueChat } from "./revenue-chart";


export function Dashboard () {
    return (
        <>
            <Helmet title="Dashboard" />
            <div className="flex flex-col  gap-4">
                <h1 className="text-3xl font-bold tracking-tight">DashBoard</h1>

                <div className="grid grid-cols-4 gap-4">
                    <MonthRevenueCard />
                    <MonthOrdersAmountCard />
                    <DayOrdersAmountCard/>
                    <MonthCancelledOrdersAmountCard/>
                </div>

                <div className="grid grid-cols-9 gap-4">
                    <RevenueChat />
                </div>
            </div>
        </>
    )
}