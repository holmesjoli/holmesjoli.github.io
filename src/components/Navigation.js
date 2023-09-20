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
                <h3>data visualization designer</h3>
            </div>
            <div className="Navigation_links">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><h3>home</h3></NavLink>
                <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><h3>portfolio</h3></NavLink>
                <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><h3>about</h3></NavLink>
            </div>
        </div>
    )
}
