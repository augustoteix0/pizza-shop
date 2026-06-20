import { Outlet } from "react-router-dom";

export function AppLayout () {
    return (
        <div>
            <h1>Layout Home</h1>

            <div> <Outlet/> </div>
        </div>
    )
}