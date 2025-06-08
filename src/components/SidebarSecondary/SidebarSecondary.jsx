import s from "./SidebarSecondary.module.scss";
import { NavLink } from "react-router-dom";
import {secondaryLinks} from '../../modules/sidebarLinks'

export const SidebarSecondary = () => {
  
  return (
    <div className={s.sidebar}>
      <nav className={s.menu}>
        <ul className={s.menu_list}>
          {secondaryLinks.map((link) => (
            <li className={s.menu_item} key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `${s.menu_link} ${isActive ? s.active : ""}`}
                end={link.exact}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
