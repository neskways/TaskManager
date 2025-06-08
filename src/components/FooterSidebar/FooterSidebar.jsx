import s from "./FooterSidebar.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { AddTicket } from "../../UI/AddTicket/Add";

export const FooterSidebar = React.memo(() => {

  return (
    <footer className={s.footer}>
      <NavLink className={`${s.footer_block} ${s.profile}`}>
        <img src="/images/default.png" alt="" />
      </NavLink>
      <NavLink className={`${s.footer_block} ${s.create}`} to="/create">
        <AddTicket/>
      </NavLink>
    </footer>
  );
});

