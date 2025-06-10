import s from "./Sidebar.module.scss";
import { useState } from "react";
import { ListIcon } from "../../UI/ListIcon/ListIcon";
import { NavLink, useLocation } from "react-router-dom";
import { HeaderSidebar } from "../HeaderSidebar/HeaderSidebar";
import { FooterSidebar } from "../FooterSidebar/FooterSidebar";
import { StatiscticsIcon } from "../../UI/StatiscticsIcon/StatiscticsIcon";

export const Sidebar = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const [isActiveBox, setIsActiveBox] = useState(false);

  const isListsActive = currentPath.startsWith("/ticket");
  const isStatsActive = currentPath.startsWith("/statistics");
  const isClientsActive = currentPath.startsWith("/clients");

  return (
    <div className={s.sidebar}>
      <HeaderSidebar />
      <nav className={s.menu}>
        <ul className={s.menu_list}>
          <li className={s.menu_item}>
            <NavLink
              to="/ticket/my_assigned"
              className={`${s.menu_link} ${isListsActive ? s.active : ""}`}
              onClick={() => setIsActiveBox(false)}
            >
              <ListIcon />
              Списки
            </NavLink>
          </li>
          <li className={s.menu_item}>
            <NavLink
              to="/statistics"
              className={`${s.menu_link} ${isStatsActive ? s.active : ""}`}
              onClick={() => setIsActiveBox(false)}
            >
              <StatiscticsIcon />
              Статистика
            </NavLink>
          </li>
          <li className={s.menu_item}>
            <NavLink
              to="/clients"
              className={`${s.menu_link} ${isClientsActive ? s.active : ""}`}
              onClick={() => setIsActiveBox(false)}
            >
              <StatiscticsIcon />
              Клиенты
            </NavLink>
          </li>
        </ul>
      </nav>
      <FooterSidebar isActiveBox={isActiveBox} setIsActiveBox={setIsActiveBox} />
    </div>
  );
}
