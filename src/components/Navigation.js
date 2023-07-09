import { NavLink, NavLinks } from "react-router-dom";

/**
 * Menu Navigation bar to navigate to different parts of the project
 * @returns 
 */
export default function Navigation() {
    return (
        <div>
            <div className="Navigation_branding">
                <h1><NavLink to="/">Joli Holmes</NavLink></h1>
            </div>
            <div>
            <NavLink to="/pages/Home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/pages/DesignProcess" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Design Process</NavLink>
            <NavLink to="/pages/Portfolio" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Portfolio</NavLink>
            <NavLink to="/pages/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
            </div>
        </div>
    )
}
