import { useState } from "react";
import s from "./ClientGridCell.module.scss";

export const ClientGridCell = ({ clientData, setSelectedClient }) => {
  const [hovered, setHovered] = useState(false);

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  const cellClass = hovered ? `${s.gridCell} ${s.hovered}` : s.gridCell;

  return (
    <>
      <div className={cellClass} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => setSelectedClient(clientData)}>{clientData.name}</div>
      <div className={cellClass} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => setSelectedClient(clientData)}>{clientData.status}</div>
      <div className={cellClass} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => setSelectedClient(clientData)}>{clientData.phone}</div>
      <div className={cellClass} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => setSelectedClient(clientData)}>{clientData.altPhone}</div>
      <div className={cellClass} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => setSelectedClient(clientData)}>{clientData.balance}</div>
      <div className={cellClass} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={() => setSelectedClient(clientData)}>{clientData.rating}</div>
    </>
  );
};
