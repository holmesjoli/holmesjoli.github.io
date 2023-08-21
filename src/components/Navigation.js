import { NavLink } from "react-router-dom";

/**
 * Menu Navigation bar to navigate to different parts of the project
 * @returns 
 */
export default function Navigation() {
    return (
        <div className="Navigation">
            <div className="Navigation_branding">
                <h1><NavLink to="/">Joli Holmes</NavLink></h1>
            </div>
            <div className="Navigation_links">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                <NavLink to="/DesignProcess" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Design Process</NavLink>
                <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Portfolio</NavLink>
                <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
            </div>
        </div>
    )
}
