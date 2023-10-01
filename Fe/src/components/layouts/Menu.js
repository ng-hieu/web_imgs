import { Outlet } from "react-router-dom"
import "./Menu.css"
export default function Menu() {
    return (
        <>
            <div className="frame-container">
                <div className="frame-menu">
                    <i class="fas fa-home icon-custom"></i>
                    <i class="fas fa-image icon-custom"></i>
                    <i class="fas fa-images icon-custom"></i>    
                    <i class="fas fa-info-circle icon-custom"></i>
                </div>
            </div>
            <Outlet/>
        </>
    )
}