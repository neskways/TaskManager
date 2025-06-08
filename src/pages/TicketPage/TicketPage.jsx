import s from "./TicketPage.module.scss";
import { SidebarSecondary } from "../../components/SidebarSecondary/SidebarSecondary";
import { Outlet } from 'react-router-dom';

export const TicketPage = () => {
  return (
      <div className={s.wrapper}>
        <SidebarSecondary />
        <div>
          <Outlet />
        </div>
    </div>
  );
}
