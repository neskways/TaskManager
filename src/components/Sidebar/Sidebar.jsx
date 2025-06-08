import s from "./Sidebar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { HeaderSidebar } from "../HeaderSidebar/HeaderSidebar";
import { FooterSidebar } from "../FooterSidebar/FooterSidebar";
import { ListIcon } from "../../UI/ListIcon/ListIcon";
import { StatiscticsIcon } from "../../UI/StatiscticsIcon/StatiscticsIcon";

export const Sidebar = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const isListsActive = currentPath.startsWith("/ticket");
  const isStatsActive = currentPath.startsWith("/statistics");

  return (
    <div className={s.sidebar}>
      <HeaderSidebar />
      <nav className={s.menu}>
        <ul className={s.menu_list}>
          <li className={s.menu_item}>
            <NavLink
              to="/ticket/my_assigned"
              className={`${s.menu_link} ${isListsActive ? s.active : ""}`}
            >
              <ListIcon/>
              Списки
            </NavLink>
          </li>
          <li className={s.menu_item}>
            <NavLink
              to="/statistics"
              className={`${s.menu_link} ${isStatsActive ? s.active : ""}`}
            >
              <StatiscticsIcon/>
              Статистика
            </NavLink>
          </li>
        </ul>
      </nav>
      <FooterSidebar />
    </div>
  );
}
