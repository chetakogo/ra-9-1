import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
            <nav className="menu">
                <NavLink to="/" className="menu__item" activeClassName="menu__item-active">Home Page</NavLink>
                <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active">Дрифт-такси</NavLink>
                <NavLink to="/timettack" className="menu__item" activeClassName="menu__item-active">Time Attack</NavLink>
                <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active">Forza Karting</NavLink>
            </nav>
    )
}